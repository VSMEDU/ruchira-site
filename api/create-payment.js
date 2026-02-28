const { getSquare } = require('./_square');
const { getSupabase } = require('./_supabase');

const menuItems = {
  'babycorn-manchurian': { name: "Babycorn Manchurian", price: null },
  'chicken-manchurian': { name: "Chicken Manchurian", price: 1099 },
  'gobi-manchurian': { name: "Gobi Manchurian", price: null },
  'kodi-vepudu': { name: "Kodi Vepudu", price: 1099 },
  'paneer-manchurian': { name: "Paneer Manchurian", price: null },
  'karampodi-chkn': { name: "Karampodi Chkn", price: null },
  'veg-manchurian': { name: "Veg Manchurian", price: 1099 },
  'goat-pepper-fry': { name: "Goat pepper Fry", price: 1799 },
  'chili-baby-corn': { name: "Chili Baby Corn", price: 1099 },
  'chili-chicken': { name: "Chili Chicken", price: 1399 },
  'chili-gobi': { name: "Chili Gobi", price: null },
  'goat-sukha-4pcs-goat-chops': { name: "Goat Sukha ( 4pcs) Goat chops", price: 1099 },
  'chili-paneer': { name: "Chili Paneer", price: 1599 },
  'paneer-65': { name: "Paneer 65", price: 1499 },
  'chicken-65': { name: "Chicken 65", price: 1399 },
  'jalapeno-paneer': { name: "Jalapeno Paneer", price: null },
  'jalapeno-chicken': { name: "Jalapeno Chicken", price: 1399 },
  'chicken-tikka-kabab': { name: "Chicken Tikka Kabab", price: 999 },
  'hariyali-kabab': { name: "Hariyali Kabab", price: 999 },
  'chili-garlic-chicken': { name: "Chili Garlic Chicken", price: 1399 },
  'goat-ghee-roast': { name: "Goat Ghee Roast", price: 1799 },
  'tandoori-chicken': { name: "Tandoori chicken", price: null },
  'kodi-vepudu-bone-in': { name: "Kodi vepudu ( Bone In)", price: null },
  'pappu-rasam-sambar': { name: "Pappu/Rasam/Sambar", price: null },
  'pappu-rasam-sambar-2': { name: "Pappu/Rasam/Sambar", price: null },
  'chapati': { name: "Chapati", price: null },
  'chapati-2': { name: "Chapati", price: null },
  'roti-pachidi': { name: "Roti Pachidi", price: null },
  'roti-pachidi-2': { name: "Roti Pachidi", price: null },
  'veg-curry': { name: "Veg Curry", price: null },
  'chicken-curry': { name: "Chicken Curry", price: null },
  'veg-fry': { name: "Veg Fry", price: null },
  'rasam': { name: "Rasam", price: null },
  'rasam-2': { name: "Rasam", price: null },
  'sambar': { name: "Sambar", price: null },
  'sambar-2': { name: "Sambar", price: null },
  'pappu': { name: "Pappu", price: null },
  'pappu-2': { name: "Pappu", price: null },
  'pachidi': { name: "Pachidi", price: null },
  'roti-pachidi-3': { name: "Roti Pachidi", price: null },
  'dessert': { name: "Dessert", price: null },
  'dessert-2': { name: "Dessert", price: null },
  'white-rice': { name: "White Rice", price: null },
  'white-rice-2': { name: "White Rice", price: null },
  'chapati-3': { name: "Chapati", price: null },
  'chapati-4': { name: "Chapati", price: null },
  'fryums': { name: "Fryums", price: null },
  'fryums-2': { name: "Fryums", price: null },
  'chapati-5': { name: "Chapati", price: null },
  'butter-naan': { name: "Butter Naan ?", price: null },
  'garlic-naan': { name: "Garlic Naan ?", price: null },
  'plain-naan': { name: "Plain Naan ?", price: null },
  'perugu-charu': { name: "Perugu Charu", price: 599 },
  'curd-rice-with-pickel': { name: "Curd Rice with pickel", price: 699 },
  'goat-curry-bone-in': { name: "Goat Curry Bone In", price: 1499 },
  'sambar-rasam': { name: "Sambar/Rasam", price: 599 },
  'gongura-goat-curry-bone-in': { name: "Gongura Goat Curry Bone In", price: 399 },
  'malai-kofta': { name: "Malai Kofta", price: 1199 },
  'shrimp-fry': { name: "Shrimp Fry", price: 1299 },
  'paneer-butter-masala': { name: "Paneer Butter Masala", price: 1299 },
  'butter-chicken': { name: "Butter Chicken", price: 1199 },
  'paneer-tikka-masala': { name: "Paneer Tikka Masala", price: 1299 },
  'mutton-keema-fry': { name: "Mutton Keema Fry", price: 1499 },
  'phool-makhani-butter-masala': { name: "Phool Makhani Butter Masala", price: 1099 },
  'chicken-keema-fry': { name: "Chicken Keema Fry", price: 1099 },
  'kadai-paneer': { name: "Kadai paneer", price: null },
  'chicken-tikka-masala': { name: "Chicken Tikka Masala", price: 1299 },
  'gutti-vankaya-biryani': { name: "Gutti Vankaya Biryani", price: 1399 },
  'andhra-chicken-biryani': { name: "Andhra Chicken Biryani", price: 1499 },
  'gongura-paneer-biryani': { name: "Gongura Paneer Biryani", price: 1799 },
  'chicken-fry-piece-biryani': { name: "Chicken Fry Piece Biryani", price: 1499 },
  'paneer-biryani': { name: "Paneer Biryani", price: 1599 },
  'chicken-handi-biryani': { name: "Chicken Handi Biryani", price: 1499 },
  'paneer-pepper-roast-biryani': { name: "Paneer Pepper Roast Biryani", price: 1599 },
  'chicken-keema-biryani': { name: "Chicken Keema Biryani", price: 1499 },
  'jalapeno-paneer-biryani': { name: "Jalapeno Paneer Biryani", price: 1599 },
  'chicken-tikka-boneless-biryani': { name: "Chicken Tikka Boneless Biryani", price: 1499 },
  'veg-keema-biryani-soya': { name: "Veg Keema Biryani (Soya)", price: 1399 },
  'vijayawada-boneless-chicken-biryani': { name: "Vijayawada Boneless Chicken Biryani", price: 1599 },
  'veg-handi-biryani': { name: "Veg Handi Biryani", price: 1299 },
  'mutton-keema-biryani': { name: "Mutton Keema Biryani", price: 1799 },
  'goat-ghee-roast-biryani': { name: "Goat Ghee Roast Biryani", price: 1799 },
  'goat-pepper-roast-biryani': { name: "Goat Pepper Roast Biryani", price: 1799 },
  'masakali-chicken-biryani-boneless': { name: "Masakali chicken biryani ( Boneless)", price: null },
  'shrimp-biryani': { name: "Shrimp Biryani", price: 1799 },
  'egg-biryani': { name: "Egg Biryani", price: 1399 },
  'goat-handi-biryani': { name: "Goat Handi Biryani", price: null },
  'paneer-pulav': { name: "Paneer Pulav", price: 1699 },
  'andhra-chicken-pulav': { name: "Andhra Chicken Pulav", price: 1499 },
  'gutti-vankaya-pulav': { name: "Gutti Vankaya Pulav", price: null },
  'raju-gari-kodi-pulav-bone-in': { name: "Raju Gari Kodi Pulav (Bone in)", price: 1399 },
  'veg-keema-pulav-soya': { name: "Veg Keema Pulav (Soya)", price: 1399 },
  'chicken-keema-pulav': { name: "Chicken Keema Pulav", price: 1499 },
  'bagara-rice': { name: "Bagara Rice", price: 1199 },
  'chicken-tikka-pulav-boneless': { name: "Chicken Tikka Pulav (Boneless)", price: 1499 },
  'bagara-rice-family-pack': { name: "Bagara Rice Family Pack", price: 3499 },
  'goat-ghee-roast-pulav-bone-in': { name: "Goat Ghee Roast Pulav (Bone in)", price: 1799 },
  'paneer-pulav-family-pack': { name: "Paneer Pulav Family Pack", price: 4499 },
  'goat-pepper-roast-pulav': { name: "Goat Pepper Roast Pulav", price: 1799 },
  'gutti-vankaya-pulav-family-pack': { name: "Gutti Vankaya Pulav Family Pack", price: 3999 },
  'mutton-keema-pulav': { name: "Mutton Keema Pulav", price: 1799 },
  'veg-keema-pulav-soya-family-pack': { name: "Veg Keema Pulav (Soya) Family Pack", price: 3999 },
  'raju-gari-shrimp-pulav': { name: "Raju Gari Shrimp Pulav", price: 1699 },
  'andhra-chicken-pulav-family-pack': { name: "Andhra Chicken Pulav Family Pack", price: 4399 },
  'raju-gari-kodi-pulav-bone-in-family-pack': { name: "Raju Gari Kodi Pulav (Bone in) Family Pack", price: null },
  'chicken-keema-pulav-family-pack': { name: "Chicken Keema Pulav Family Pack", price: 4399 },
  'chicken-tikka-pulav-boneless-family-pack': { name: "Chicken Tikka Pulav (Boneless) Family Pack", price: 4199 },
  'goat-ghee-roast-pulav-bone-in-family-pack': { name: "Goat Ghee Roast Pulav (Bone in) Family Pack", price: 4999 },
  'goat-pepper-roast-pulav-family-pack': { name: "Goat Pepper Roast Pulav Family Pack", price: 4999 },
  'mutton-keema-pulav-family-pack': { name: "Mutton Keema Pulav Family Pack", price: 4999 },
  'raju-gari-shrimp-pulav-family-pack': { name: "Raju Gari Shrimp Pulav Family Pack", price: 4599 },
  'vijayawada-boneless-chicken-pulav-family-pack': { name: "Vijayawada Boneless Chicken Pulav Family Pack", price: 4399 },
  'add-jumbo-packs': { name: "Add jumbo packs", price: null },
  '12-ozveg-curry': { name: "12 ozVeg Curry", price: null },
  '12ozchicken-curry': { name: "12ozChicken Curry", price: null },
  '12ozveg-fry': { name: "12ozVeg Fry", price: null },
  '12ozkodi-vepudu': { name: "12ozKodi Vepudu", price: null },
  '12oz-sambar': { name: "12oz Sambar", price: null },
  '12ozsambar': { name: "12ozSambar", price: null },
  'single-biryani-38oz': { name: "Single Biryani ( 38oz)", price: null },
  'family-pack-38-oz-38-oz': { name: "Family pack 38 oz + 38 oz", price: null },
  'jumbo-biryani-3-singles-biryanis': { name: "Jumbo Biryani - 3 Singles biryanis", price: null },
  'veg-fried-rice': { name: "Veg Fried Rice", price: 1299 },
  'chicken-fried-rice': { name: "Chicken Fried Rice", price: 1399 },
  'paneer-fried-rice': { name: "Paneer Fried Rice", price: 1299 },
  'chicken-keema-fried-rice': { name: "Chicken Keema Fried Rice", price: 1399 },
  'egg-fried-rice': { name: "Egg Fried Rice", price: 1299 },
  'mutton-keema-fried-rive': { name: "Mutton Keema Fried Rive", price: 1599 },
  'vijayawada-boneless-chicken-fried-rice': { name: "Vijayawada Boneless Chicken Fried Rice", price: 1499 },
  'jeera-rice': { name: "Jeera Rice", price: null },
  'curd-rice': { name: "Curd Rice", price: null },
  'bagara-rice-with-chicken-curry': { name: "Bagara rice with chicken curry", price: null },
  'bagara': { name: "Bagara", price: null },
  'veg-noodles': { name: "Veg Noodles", price: 999 },
  'chicken-noodles': { name: "Chicken Noodles", price: 1199 },
  'paneer-noodes': { name: "Paneer Noodes", price: 1299 },
  'egg-noodles': { name: "Egg Noodles", price: 1099 },
  'paneer-veg-keema-manchuria-mandis': { name: "Paneer/veg keema/ Manchuria Mandis", price: null },
  'chicken-leg-piece-chkn-tikka-hariyali': { name: "Chicken leg piece / Chkn tikka/ Hariyali", price: null },
  'single-piece': { name: "Single Piece", price: null },
  'single-piece-2': { name: "Single Piece", price: null },
  'double-piece': { name: "Double Piece", price: null },
  'double-piece-2': { name: "Double Piece", price: null },
  'triple-piece': { name: "Triple Piece", price: null },
  'triple-piece-2': { name: "Triple Piece", price: null },
  'gulab-jamun': { name: "Gulab Jamun", price: 499 },
  'rasmalai-regular-mango': { name: "Rasmalai Regular/Mango", price: 599 },
  'carrot-halwa': { name: "Carrot Halwa", price: null },
  'rice-kheer': { name: "Rice Kheer", price: null },
  'pineapple-mango-sira': { name: "Pineapple / Mango Sira", price: null },
  'kadhu-ka-kheer': { name: "Kadhu Ka Kheer", price: null },
  'mango-lassi': { name: "Mango Lassi", price: 399 },
  'badam-milk': { name: "Badam milk", price: 499 },
  'idli': { name: "Idli", price: null },
  'vada': { name: "Vada", price: null },
  'dosa': { name: "Dosa", price: null },
  'masala-dosa': { name: "Masala Dosa", price: null },
  'onion-dosa': { name: "Onion Dosa", price: null },
  'paneer-dosa': { name: "Paneer Dosa", price: null },
  'cheese-dosa': { name: "Cheese Dosa", price: null },
  'ghee-karam-dosa': { name: "Ghee Karam Dosa", price: null },
  'pesarattu': { name: "Pesarattu", price: null },
  'plain-uttapam': { name: "Plain Uttapam", price: null },
  'onion-uttapam': { name: "Onion Uttapam", price: null },
  'mysore-bonda': { name: "Mysore Bonda", price: null },
  'poori-w-aloo-curry': { name: "Poori w/ Aloo Curry", price: null },
  'pongal': { name: "Pongal", price: null },
  'upma': { name: "Upma", price: null },
  'combo-idly-vada': { name: "Combo ( Idly, Vada)", price: 699 },
  'combo-idly-vada-oz-pongal': { name: "Combo ( Idly, Vada, oz Pongal)", price: 999 },
  'combo-idly-vada-oz-upma': { name: "Combo ( Idly, Vada, oz Upma)", price: 999 },
  'combo-idly-vada-mini-dosa': { name: "Combo ( Idly, Vada, Mini Dosa)", price: 949 },
  'combo-idly-vada-poori': { name: "Combo ( Idly, Vada, Poori)", price: 949 },
  'combo-vada-mysore-bonda': { name: "Combo ( Vada, Mysore Bonda)", price: 949 },
  'cut-mirchi': { name: "Cut Mirchi", price: 499 },
  'mirchi-bajji-5pcs': { name: "Mirchi bajji (5pcs)", price: 599 },
  'stuffed-mirchi-bajji-5pcs': { name: "Stuffed mirchi bajji ( 5pcs)", price: 499 },
  'punugulu-10-pcs': { name: "Punugulu (10 Pcs)", price: 499 },
  'onion-pakoda': { name: "Onion Pakoda", price: 449 },
  'masala-vada-4-pcs': { name: "Masala Vada (4 Pcs)", price: 599 },
  'aloo-samosa-2-pcs': { name: "Aloo Samosa (2 Pcs)", price: 299 },
  'onion-samosa-6-pcs': { name: "Onion Samosa (6 Pcs)", price: 399 },
  'aloo-bajji': { name: "Aloo bajji", price: 499 },
  'rava-laddu-4p': { name: "Rava Laddu 4p", price: 499 },
  'sunundulu-4p': { name: "Sunundulu 4p", price: 499 },
  'boondi-laddu': { name: "Boondi Laddu", price: null },
  'karapusa-thin': { name: "Karapusa - Thin", price: null },
  'karapusa-thick': { name: "Karapusa - Thick", price: 499 },
  'fryums-3': { name: "Fryums", price: null },
  'murukulu': { name: "Murukulu", price: 599 },
  'masala-peanuts': { name: "Masala Peanuts", price: null },
  'pali-chekki': { name: "Pali Chekki", price: 699 },
  'pappu-chekkulu': { name: "Pappu Chekkulu", price: null },
  'bellam-gavalu': { name: "Bellam Gavalu?", price: null },
  'ribbon-pakoda': { name: "Ribbon pakoda", price: null },
  'badusha': { name: "Badusha", price: null },
  'madatha-kaja': { name: "Madatha Kaja", price: null },
  'boondi-mixture': { name: "Boondi Mixture", price: 499 },
  'mysore-pak': { name: "Mysore Pak", price: null },
  'jalebi': { name: "Jalebi", price: null },
  'chegodilu': { name: "Chegodilu", price: null },
  'poornalu': { name: "Poornalu", price: null },
  'bobbatlu': { name: "Bobbatlu", price: null },
  'hormone-free-yogurt-braums-milk': { name: "Hormone Free Yogurt (Braums Milk)", price: 599 },
  'dosa-batter-2lb': { name: "Dosa Batter 2lb", price: 649 },
  'idly-batter-2lb': { name: "Idly Batter 2lb", price: 649 },
  'organic-youghart': { name: "Organic Youghart", price: 699 },
};

async function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Parse body
  let payload = req.body;
  if (!payload || typeof payload === 'string') {
    const raw = (payload && typeof payload === 'string') ? payload : await readBody(req);
    try {
      payload = raw ? JSON.parse(raw) : {};
    } catch (_) {
      res.status(400).json({ error: 'Invalid JSON body' });
      return;
    }
  }

  // Validate required fields
  const { nonce, idempotencyKey, items, orderType, customer } = payload;
  if (!nonce) {
    res.status(400).json({ error: 'Missing nonce' });
    return;
  }
  if (!idempotencyKey) {
    res.status(400).json({ error: 'Missing idempotencyKey' });
    return;
  }
  if (!Array.isArray(items) || items.length === 0) {
    res.status(400).json({ error: 'Cart is empty' });
    return;
  }
  if (!orderType) {
    res.status(400).json({ error: 'Missing orderType' });
    return;
  }
  if (!customer || !customer.name || !customer.phone) {
    res.status(400).json({ error: 'Missing customer name or phone' });
    return;
  }

  // Resolve prices
  let subtotal = 0;
  const resolvedItems = [];
  for (const item of items) {
    const menuItem = menuItems[item.id];
    const quantity = Math.max(0, Number(item.qty || 0));
    if (!menuItem || !quantity) continue;
    if (typeof menuItem.price !== 'number') {
      res.status(400).json({ error: `Price not set for item: ${menuItem.name}` });
      return;
    }
    subtotal += menuItem.price * quantity;
    resolvedItems.push({ name: menuItem.name, quantity, unit_amount: menuItem.price, amount_total: menuItem.price * quantity });
  }

  if (resolvedItems.length === 0) {
    res.status(400).json({ error: 'Cart is empty or no priced items' });
    return;
  }

  const tax = Math.round(subtotal * 0.05);
  const totalCents = subtotal + tax;

  // Initialize Square client
  const { client, error: squareError } = getSquare();
  if (!client) {
    res.status(500).json({ error: squareError || 'Square not configured' });
    return;
  }

  const locationId = process.env.SQUARE_LOCATION_ID;

  // Create Square payment
  let payment;
  try {
    const response = await client.payments.create({
      sourceId: nonce,
      idempotencyKey,
      amountMoney: {
        amount: BigInt(totalCents),
        currency: 'USD'
      },
      locationId,
      note: JSON.stringify({ orderType, ...customer }).slice(0, 500),
      referenceId: idempotencyKey
    });
    payment = response.payment;
  } catch (err) {
    // Square payment declined or card error
    const statusCode = err?.statusCode || err?.status || 500;
    const message = err?.errors?.[0]?.detail || err?.message || 'Payment failed';
    res.status(statusCode === 402 || message.toLowerCase().includes('card') ? 402 : 500).json({ error: message });
    return;
  }

  if (!payment || payment.status !== 'COMPLETED') {
    const status = payment?.status || 'UNKNOWN';
    res.status(402).json({ error: `Payment not completed (status: ${status})` });
    return;
  }

  // Write order to Supabase
  const { client: supabase, error: supabaseError } = getSupabase();
  if (!supabase) {
    res.status(500).json({ error: supabaseError || 'Supabase not configured' });
    return;
  }

  const order = {
    id: payment.id,
    status: 'new',
    source: 'square',
    customer: {
      name: customer.name,
      phone: customer.phone,
      address: customer.address || '',
      timePref: customer.timePref || '',
      notes: customer.notes || '',
      orderType
    },
    items: resolvedItems,
    subtotal,
    tax,
    total: totalCents,
    currency: 'usd',
    payment_intent: payment.id,
    raw: payment
  };

  const { error: dbError } = await supabase.from('orders').upsert(order, { onConflict: 'id' });
  if (dbError) {
    // Payment succeeded but DB write failed — log and still return success
    console.error('Supabase upsert error:', dbError.message);
  }

  res.status(200).json({ orderId: payment.id, total: totalCents });
};
