// Vercel Serverless Function
// GET /api/live  → returns which of your configured Twitch channels are currently live

export default async function handler(req, res) {
  // Allow the frontend to call this
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate'); // cache 30s

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientId = process.env.TWITCH_CLIENT_ID;
  if (!clientId) {
    return res.status(200).json({
      ok: false,
      error: 'TWITCH_CLIENT_ID not set on Vercel. Using manual isLive flags only.',
      live: []
    });
  }

  // Get the list of channels from the query string or use a default
  // Frontend will send ?channels=user1,user2,user3
  const channelsParam = req.query.channels || '';
  const channels = channelsParam
    .split(',')
    .map(c => c.trim().toLowerCase())
    .filter(Boolean);

  if (channels.length === 0) {
    return res.status(200).json({ ok: true, live: [] });
  }

  try {
    // Twitch Helix - Get Streams
    // https://dev.twitch.tv/docs/api/reference#get-streams
    const url = new URL('https://api.twitch.tv/helix/streams');
    channels.forEach(c => url.searchParams.append('user_login', c));

    const response = await fetch(url.toString(), {
      headers: {
        'Client-ID': clientId,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Twitch API error:', response.status, text);
      return res.status(200).json({
        ok: false,
        error: `Twitch API returned ${response.status}`,
        live: []
      });
    }

    const data = await response.json();
    const live = (data.data || []).map(stream => ({
      login: stream.user_login,
      displayName: stream.user_name,
      title: stream.title,
      viewerCount: stream.viewer_count,
      startedAt: stream.started_at,
      gameName: stream.game_name,
      thumbnail: stream.thumbnail_url
        ? stream.thumbnail_url.replace('{width}', '440').replace('{height}', '248')
        : null
    }));

    return res.status(200).json({
      ok: true,
      live,
      checked: channels.length,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Live check failed:', err);
    return res.status(200).json({
      ok: false,
      error: err.message || 'Unknown error',
      live: []
    });
  }
}
