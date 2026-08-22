// Vercel Serverless Function (CommonJS for max compatibility)
// GET /api/live?channels=user1,user2

let cachedToken = null;
let tokenExpiresAt = 0;

async function getAppAccessToken(clientId, clientSecret) {
  const now = Date.now();
  if (cachedToken && now < tokenExpiresAt - 60000) {
    return cachedToken;
  }

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials'
  });

  const res = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error('Twitch token error ' + res.status + ': ' + text);
  }

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiresAt = now + (data.expires_in || 3600) * 1000;
  return cachedToken;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientId = process.env.TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(200).json({
      ok: false,
      error: 'Set TWITCH_CLIENT_ID and TWITCH_CLIENT_SECRET in Vercel env vars, then redeploy.',
      live: []
    });
  }

  const channelsParam = (req.query && req.query.channels) || '';
  const channels = String(channelsParam)
    .split(',')
    .map(function (c) { return c.trim().toLowerCase(); })
    .filter(Boolean);

  if (channels.length === 0) {
    return res.status(200).json({ ok: true, live: [], checked: 0 });
  }

  try {
    const token = await getAppAccessToken(clientId, clientSecret);

    const url = new URL('https://api.twitch.tv/helix/streams');
    channels.slice(0, 100).forEach(function (c) {
      url.searchParams.append('user_login', c);
    });

    const response = await fetch(url.toString(), {
      headers: {
        'Client-ID': clientId,
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Twitch streams error:', response.status, text);
      return res.status(200).json({
        ok: false,
        error: 'Twitch API returned ' + response.status + ' ' + text,
        live: []
      });
    }

    const data = await response.json();
    const live = (data.data || []).map(function (stream) {
      return {
        login: stream.user_login,
        displayName: stream.user_name,
        title: stream.title,
        viewerCount: stream.viewer_count,
        startedAt: stream.started_at,
        gameName: stream.game_name,
        thumbnail: stream.thumbnail_url
          ? stream.thumbnail_url.replace('{width}', '440').replace('{height}', '248')
          : null
      };
    });

    return res.status(200).json({
      ok: true,
      live: live,
      checked: channels.length,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Live check failed:', err);
    return res.status(200).json({
      ok: false,
      error: (err && err.message) || 'Unknown error',
      live: []
    });
  }
};
