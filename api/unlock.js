module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const requiredPin = process.env.SITE_PIN;
  if (!requiredPin) {
    res.status(500).json({ error: 'SITE_PIN not configured' });
    return;
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch (err) {
      res.status(400).json({ error: 'Invalid JSON' });
      return;
    }
  }

  const pin = String(body.pin || '').trim();
  if (!pin || pin !== requiredPin) {
    res.status(401).json({ error: 'Invalid PIN' });
    return;
  }

  res.setHeader('Set-Cookie', 'site_pin_ok=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400');
  res.status(200).json({ ok: true });
};
