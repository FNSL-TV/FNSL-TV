// Vercel Serverless Function
// POST /api/ns-hook  (NeonSportz "Import webhook" target)
// Relays NeonSportz import-completed pings to the Grok Bot routine webhook,
// adding the Authorization header NeonSportz can't send.
//
// Vercel env vars:
//   GROKBOT_WEBHOOK_KEY  (required) routine webhook key
//   GROKBOT_WEBHOOK_URL  (optional) override of the routine webhook URL
//   NS_RELAY_TOKEN       (optional) if set, requests must include ?t=<token>

const DEFAULT_TARGET = 'https://api2.cursor.sh/automations/webhook/5adb19a3-b226-5d96-8160-ff63eeff0762';

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'POST only' });
  }

  const relayToken = process.env.NS_RELAY_TOKEN;
  if (relayToken && (!req.query || req.query.t !== relayToken)) {
    return res.status(403).json({ ok: false, error: 'forbidden' });
  }

  const key = process.env.GROKBOT_WEBHOOK_KEY;
  if (!key) {
    return res.status(500).json({ ok: false, error: 'Set GROKBOT_WEBHOOK_KEY in Vercel env vars, then redeploy.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = null; }
  }
  if (!body || body.event !== 'league_import_completed' || String(body.league || '').toUpperCase() !== 'FNSL') {
    // Not an FNSL import event: acknowledge so NeonSportz doesn't retry, but don't forward.
    return res.status(200).json({ ok: true, forwarded: false });
  }

  const payload = {
    event: body.event,
    eventId: body.eventId || null,
    league: body.league,
    seasonIndex: body.seasonIndex ?? null,
    stageIndex: body.stageIndex ?? null,
    weekIndex: body.weekIndex ?? null,
    importType: body.importType || null,
    completedThrough: body.completedThrough || null,
    status: body.status || null,
    completedAt: body.completedAt || null,
    manual: !!body.manual
  };

  try {
    const r = await fetch(process.env.GROKBOT_WEBHOOK_URL || DEFAULT_TARGET, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key,
        'X-NeonSportz-Delivery': String(req.headers['x-neonsportz-delivery'] || payload.eventId || '')
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000)
    });
    if (!r.ok) {
      const text = (await r.text()).slice(0, 300);
      // 5xx so NeonSportz retries on its schedule.
      return res.status(502).json({ ok: false, forwarded: false, upstream: r.status, error: text });
    }
    return res.status(200).json({ ok: true, forwarded: true });
  } catch (err) {
    return res.status(502).json({ ok: false, forwarded: false, error: (err && err.message) || 'relay error' });
  }
};
