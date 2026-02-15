const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const menuItems = {
  'butter-chicken': { name: 'Butter Chicken', price: 289 },
  'chicken-tikka-masala': { name: 'Chicken Tikka Masala', price: 299 },
  'palak-paneer': { name: 'Palak Paneer', price: 269 },
  'paneer-butter-masala': { name: 'Paneer Butter Masala', price: 279 },
  'dal-tadka': { name: 'Dal Tadka', price: 189 },
  'hyderabadi-chicken-biryani': { name: 'Hyderabadi Chicken Biryani', price: 329 },
  'veg-dum-biryani': { name: 'Veg Dum Biryani', price: 279 },
  'garlic-naan': { name: 'Garlic Butter Naan', price: 79 },
  'tandoori-roti': { name: 'Tandoori Roti', price: 49 },
  'lachha-paratha': { name: 'Lachha Paratha', price: 69 },
  'paneer-wrap': { name: 'Paneer Tikka Wrap', price: 219 },
  'chicken-roll': { name: 'Chicken Kathi Roll', price: 229 },
  'tandoori-chicken': { name: 'Tandoori Chicken (Half)', price: 299 },
  'hara-bhara-kebab': { name: 'Hara Bhara Kebab', price: 219 },
  'jeera-rice': { name: 'Jeera Rice', price: 159 },
  'gulab-jamun': { name: 'Gulab Jamun (2 pc)', price: 99 },
  'mango-lassi': { name: 'Mango Lassi', price: 129 },
  'masala-chai': { name: 'Masala Chai', price: 59 },
  'family-feast': { name: 'Family Feast (for 4)', price: 1399 }
};

function getBaseUrl(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${proto}://${host}`;
}

async function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    res.status(500).json({ error: 'Stripe secret key not configured' });
    return;
  }

  let payload = req.body;
  if (!payload || typeof payload === 'string') {
    const raw = payload && typeof payload === 'string' ? payload : await readBody(req);
    payload = raw ? JSON.parse(raw) : {};
  }

  const items = Array.isArray(payload.items) ? payload.items : [];
  const lineItems = [];
  let subtotal = 0;

  items.forEach((item) => {
    const menuItem = menuItems[item.id];
    const quantity = Math.max(0, Number(item.qty || 0));
    if (!menuItem || !quantity) return;
    subtotal += menuItem.price * quantity;
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: { name: menuItem.name },
        unit_amount: menuItem.price
      },
      quantity
    });
  });

  if (!lineItems.length) {
    res.status(400).json({ error: 'Cart is empty' });
    return;
  }

  const tax = Math.round(subtotal * 0.05);
  if (tax > 0) {
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: { name: 'Tax (5%)' },
        unit_amount: tax
      },
      quantity: 1
    });
  }

  const baseUrl = getBaseUrl(req);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: lineItems,
    success_url: `${baseUrl}/order.html?success=1`,
    cancel_url: `${baseUrl}/order.html?canceled=1`,
    metadata: {
      orderType: payload.orderType || '',
      name: payload.customer?.name || '',
      phone: payload.customer?.phone || '',
      address: payload.customer?.address || '',
      timePref: payload.customer?.timePref || '',
      notes: payload.customer?.notes || ''
    }
  });

  res.status(200).json({ url: session.url });
};
