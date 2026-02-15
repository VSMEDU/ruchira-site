const menuItems = [
  { id: 'butter-chicken', name: 'Butter Chicken', price: 289, category: 'Curries', spice: 'Mild', veg: false, tags: ['House special'], description: 'Tandoori chicken in creamy tomato gravy finished with fenugreek.' },
  { id: 'chicken-tikka-masala', name: 'Chicken Tikka Masala', price: 299, category: 'Curries', spice: 'Medium', veg: false, tags: ['Smoky'], description: 'Charred tikka tossed in a spiced onion-tomato masala.' },
  { id: 'palak-paneer', name: 'Palak Paneer', price: 269, category: 'Curries', spice: 'Mild', veg: true, tags: ['Iron rich'], description: 'Blanched spinach gravy with soft paneer, garlic tadka.' },
  { id: 'paneer-butter-masala', name: 'Paneer Butter Masala', price: 279, category: 'Curries', spice: 'Mild', veg: true, tags: ['Creamy'], description: 'Buttery tomato-cashew gravy with cottage cheese.' },
  { id: 'dal-tadka', name: 'Dal Tadka', price: 189, category: 'Curries', spice: 'Low', veg: true, tags: ['Vegan-friendly'], description: 'Yellow lentils tempered with cumin, garlic, ghee.' },
  { id: 'hyderabadi-chicken-biryani', name: 'Hyderabadi Chicken Biryani', price: 329, category: 'Biryani', spice: 'Medium', veg: false, tags: ['Best seller'], description: 'Dum-cooked basmati rice, saffron, juicy chicken, fried onions.' },
  { id: 'veg-dum-biryani', name: 'Veg Dum Biryani', price: 279, category: 'Biryani', spice: 'Medium', veg: true, tags: ['Popular'], description: 'Seasonal veggies, mint, saffron, crispy onions.' },
  { id: 'garlic-naan', name: 'Garlic Butter Naan', price: 79, category: 'Breads', spice: 'None', veg: true, tags: ['Add-on'], description: 'Tandoor-baked naan with garlic butter and coriander.' },
  { id: 'tandoori-roti', name: 'Tandoori Roti', price: 49, category: 'Breads', spice: 'None', veg: true, tags: ['Whole wheat'], description: 'Clay-oven roti, brushed with ghee.' },
  { id: 'lachha-paratha', name: 'Lachha Paratha', price: 69, category: 'Breads', spice: 'None', veg: true, tags: ['Layered'], description: 'Flaky, layered paratha cooked on tawa.' },
  { id: 'paneer-wrap', name: 'Paneer Tikka Wrap', price: 219, category: 'Street Food', spice: 'Medium', veg: true, tags: ['Wrap'], description: 'Roomali roti wrap with charred paneer and mint chutney.' },
  { id: 'chicken-roll', name: 'Chicken Kathi Roll', price: 229, category: 'Street Food', spice: 'Medium', veg: false, tags: ['On-the-go'], description: 'Soft paratha, chicken tikka, onions, green chutney.' },
  { id: 'tandoori-chicken', name: 'Tandoori Chicken (Half)', price: 299, category: 'Starters', spice: 'Medium', veg: false, tags: ['Charred'], description: 'Yogurt-marinated chicken cooked in tandoor.' },
  { id: 'hara-bhara-kebab', name: 'Hara Bhara Kebab', price: 219, category: 'Starters', spice: 'Low', veg: true, tags: ['Veg'], description: 'Spinach, peas, potato patties, served with mint chutney.' },
  { id: 'jeera-rice', name: 'Jeera Rice', price: 159, category: 'Add-ons', spice: 'None', veg: true, tags: ['Comfort'], description: 'Basmati tempered with cumin and ghee.' },
  { id: 'gulab-jamun', name: 'Gulab Jamun (2 pc)', price: 99, category: 'Dessert', spice: 'None', veg: true, tags: ['Sweet'], description: 'Fried milk dumplings soaked in cardamom syrup.' },
  { id: 'mango-lassi', name: 'Mango Lassi', price: 129, category: 'Beverages', spice: 'None', veg: true, tags: ['Chilled'], description: 'Alphonso mango yogurt shake with cardamom.' },
  { id: 'masala-chai', name: 'Masala Chai', price: 59, category: 'Beverages', spice: 'None', veg: true, tags: ['Hot'], description: 'Slow-brewed tea with ginger, cardamom, and cloves.' },
  { id: 'family-feast', name: 'Family Feast (for 4)', price: 1399, category: 'Combos', spice: 'Varies', veg: false, tags: ['Value combo'], description: '2 curries, 2 biryanis, 4 naan, gulab jamun.' }
];

const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

const TAX_RATE = 0.05;
const cart = {};
const menuMap = new Map(menuItems.map((item) => [item.id, item]));

const els = {
  menuGrid: document.getElementById('menu-grid'),
  categoryTabs: document.getElementById('category-tabs'),
  cartItems: document.getElementById('cart-items'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartTax: document.getElementById('cart-tax'),
  cartTotal: document.getElementById('cart-total'),
  cartCount: document.getElementById('cart-count'),
  addressField: document.getElementById('address-field'),
  toast: document.getElementById('toast')
};

function formatMoney(value) {
  return '$???';
}

function applyCurryDistrictTheme() {
  const style = document.createElement('style');
  style.setAttribute('data-theme', 'curry-district');
  style.textContent = `
    :root{
      --cd-bg:#0f0f0f;
      --cd-surface:#161616;
      --cd-surface-2:#1f1f1f;
      --cd-border:#2a2a2a;
      --cd-text:#f5f1e6;
      --cd-muted:#c9c1b3;
      --cd-gold:#d6a332;
      --cd-gold-2:#b8860b;
      --cd-danger:#d24b3a;
    }

    html, body{ background:var(--cd-bg) !important; color:var(--cd-text) !important; }

    .container, .page, main{ color:var(--cd-text); }

    .menu-card{
      background:var(--cd-surface) !important;
      border:1px solid var(--cd-border) !important;
      box-shadow:none !important;
    }
    .menu-card h3{ color:var(--cd-text) !important; }
    .lede, .small, .cart-meta{ color:var(--cd-muted) !important; }

    .price{ color:var(--cd-gold) !important; font-weight:700; }

    button, .small-button{
      border:1px solid var(--cd-border) !important;
      background:var(--cd-surface-2) !important;
      color:var(--cd-text) !important;
    }
    button:hover, .small-button:hover{
      border-color:var(--cd-gold) !important;
      color:var(--cd-gold) !important;
    }

    .primary, .primary-button, #place-whatsapp{
      background:var(--cd-gold) !important;
      border-color:var(--cd-gold) !important;
      color:#121212 !important;
      font-weight:700;
    }
    .primary:hover, .primary-button:hover, #place-whatsapp:hover{
      background:var(--cd-gold-2) !important;
      border-color:var(--cd-gold-2) !important;
    }

    .category-button{
      background:transparent !important;
      color:var(--cd-muted) !important;
      border:1px solid var(--cd-border) !important;
    }
    .category-button.active{
      background:var(--cd-surface-2) !important;
      border-color:var(--cd-gold) !important;
      color:var(--cd-gold) !important;
    }

    .tag{
      background:rgba(214,163,50,.12) !important;
      border:1px solid rgba(214,163,50,.25) !important;
      color:var(--cd-gold) !important;
    }
    .tag.veg{
      background:rgba(102,187,106,.12) !important;
      border-color:rgba(102,187,106,.25) !important;
      color:#66bb6a !important;
    }

    .cart-row{
      border-bottom:1px solid var(--cd-border) !important;
    }

    #toast{
      background:var(--cd-surface-2) !important;
      border:1px solid var(--cd-border) !important;
      color:var(--cd-text) !important;
    }

    input, textarea, select{
      background:var(--cd-surface) !important;
      border:1px solid var(--cd-border) !important;
      color:var(--cd-text) !important;
    }
    input::placeholder, textarea::placeholder{ color:rgba(201,193,179,.7) !important; }
    input:focus, textarea:focus, select:focus{
      outline:none !important;
      border-color:var(--cd-gold) !important;
      box-shadow:0 0 0 3px rgba(214,163,50,.12) !important;
    }

    a{ color:var(--cd-gold) !important; }
    a:hover{ color:var(--cd-gold-2) !important; }
  `;

  document.head.querySelector('style[data-theme="curry-district"]')?.remove();
  document.head.appendChild(style);
}

function renderCategories() {
  if (!els.categoryTabs) return;
  const categories = ['All', ...new Set(menuItems.map((m) => m.category))];
  els.categoryTabs.innerHTML = categories
    .map(
      (c, idx) =>
        `<button class="category-button${idx === 0 ? ' active' : ''}" data-category="${c}">${c}</button>`
    )
    .join('');
}

function renderMenu(category = 'All') {
  if (!els.menuGrid) return;
  const filtered =
    category === 'All' ? menuItems : menuItems.filter((item) => item.category === category);

  els.menuGrid.innerHTML = filtered
    .map(
      (item) => `
      <article class="menu-card">
        <div class="tag-row">
          <span class="tag ${item.veg ? 'veg' : ''}">${item.veg ? 'Veg' : 'Non-veg'}</span>
          <span class="tag">${item.spice} spice</span>
          <span class="tag">${item.category}</span>
        </div>
        <h3>${item.name}</h3>
        <p class="lede small">${item.description}</p>
        <div class="price-row">
          <span class="price">${formatMoney(item.price)}</span>
          <button class="small-button" data-add="${item.id}">Add</button>
        </div>
        <div class="tag-row">
          ${item.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
      </article>
    `
    )
    .join('');
}

function addToCart(id) {
  if (!menuMap.has(id)) return;
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  showToast('Added to cart');
}

function updateQuantity(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  renderCart();
}

function clearCart() {
  Object.keys(cart).forEach((key) => delete cart[key]);
  renderCart();
  showToast('Cart cleared');
}

function calculateTotals() {
  const items = Object.entries(cart);
  const subtotal = items.reduce((sum, [id, qty]) => {
    const item = menuMap.get(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
  const tax = subtotal * TAX_RATE;
  return {
    subtotal,
    tax,
    total: subtotal + tax,
    count: items.reduce((acc, [, qty]) => acc + qty, 0)
  };
}

function renderCart() {
  if (
    !els.cartItems ||
    !els.cartSubtotal ||
    !els.cartTax ||
    !els.cartTotal ||
    !els.cartCount
  ) {
    return;
  }
  const entries = Object.entries(cart);
  if (!entries.length) {
    els.cartItems.innerHTML = `<p class="lede small">Your cart is empty. Add some curries or biryani!</p>`;
    els.cartSubtotal.textContent = formatMoney(0);
    els.cartTax.textContent = formatMoney(0);
    els.cartTotal.textContent = formatMoney(0);
    els.cartCount.textContent = '0';
    return;
  }

  els.cartItems.innerHTML = entries
    .map(([id, qty]) => {
      const item = menuMap.get(id);
      if (!item) return '';
      return `
        <div class="cart-row">
          <div>
            <strong>${item.name}</strong>
            <div class="cart-meta">
              <span>${item.veg ? 'Veg' : 'Non-veg'}</span>
              <span>·</span>
              <span>${item.spice}</span>
            </div>
          </div>
          <div class="qty">
            <button data-qty-delta="-1" data-id="${id}">−</button>
            <span>${qty}</span>
            <button data-qty-delta="1" data-id="${id}">+</button>
            <span>${formatMoney(item.price * qty)}</span>
          </div>
        </div>
      `;
    })
    .join('');

  const totals = calculateTotals();
  els.cartSubtotal.textContent = formatMoney(totals.subtotal);
  els.cartTax.textContent = formatMoney(totals.tax);
  els.cartTotal.textContent = formatMoney(totals.total);
  els.cartCount.textContent = totals.count.toString();
}

function showToast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.remove('hidden');
  requestAnimationFrame(() => {
    els.toast.classList.add('show');
  });
  setTimeout(() => {
    els.toast.classList.remove('show');
  }, 2000);
}

function setActiveCategory(category) {
  document
    .querySelectorAll('.category-button')
    .forEach((btn) => btn.classList.toggle('active', btn.dataset.category === category));
  renderMenu(category);
}

function toggleAddressField(type) {
  if (!els.addressField) return;
  els.addressField.classList.toggle('hidden', type !== 'delivery');
}

function buildOrderSummary() {
  const name = document.getElementById('customer-name')?.value.trim() || '';
  const phone = document.getElementById('customer-phone')?.value.trim() || '';
  const address = document.getElementById('customer-address')?.value.trim() || '';
  const timePref = document.getElementById('customer-time')?.value.trim() || '';
  const notes = document.getElementById('customer-notes')?.value.trim() || '';
  const type = document.querySelector('input[name="orderType"]:checked')?.value || 'pickup';

  const totals = calculateTotals();

  if (!Object.keys(cart).length) {
    showToast('Add at least one item to cart');
    return null;
  }
  if (!name || !phone) {
    showToast('Please add your name and phone');
    return null;
  }

  const lines = [
    'Ruchira Indian Curry Point order',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Order type: ${type}`,
    type === 'delivery' ? `Address: ${address || 'Share address on call'}` : 'Pickup/ dine-in',
    timePref ? `Preferred time: ${timePref}` : '',
    '',
    'Items:'
  ].filter(Boolean);

  Object.entries(cart).forEach(([id, qty], idx) => {
    const item = menuMap.get(id);
    if (!item) return;
    lines.push(`${idx + 1}. ${item.name} x${qty} — ${formatMoney(item.price * qty)}`);
  });

  lines.push(
    '',
    `Subtotal: ${formatMoney(totals.subtotal)}`,
    `GST (5%): ${formatMoney(totals.tax)}`,
    `Total: ${formatMoney(totals.total)}`,
    notes ? `Notes: ${notes}` : 'Notes: -',
    '',
    'Thank you! Team Ruchira.'
  );

  return lines.join('\n');
}

function buildCheckoutPayload() {
  const name = document.getElementById('customer-name')?.value.trim() || '';
  const phone = document.getElementById('customer-phone')?.value.trim() || '';
  const address = document.getElementById('customer-address')?.value.trim() || '';
  const timePref = document.getElementById('customer-time')?.value.trim() || '';
  const notes = document.getElementById('customer-notes')?.value.trim() || '';
  const type = document.querySelector('input[name="orderType"]:checked')?.value || 'pickup';

  if (!Object.keys(cart).length) {
    showToast('Add at least one item to cart');
    return null;
  }
  if (!name || !phone) {
    showToast('Please add your name and phone');
    return null;
  }

  const items = Object.entries(cart).map(([id, qty]) => ({ id, qty }));

  return {
    items,
    orderType: type,
    customer: {
      name,
      phone,
      address,
      timePref,
      notes
    }
  };
}

async function payNow() {
  const payload = buildCheckoutPayload();
  if (!payload) return;

  const button = document.getElementById('pay-now');
  if (button) {
    button.disabled = true;
    button.textContent = 'Redirecting...';
  }

  try {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch (parseError) {
      throw new Error(text || 'Payment failed');
    }
    if (!response.ok || !data?.url) {
      throw new Error(data?.error || 'Payment failed');
    }
    window.location.href = data.url;
  } catch (error) {
    showToast(error.message || 'Payment failed');
    if (button) {
      button.disabled = false;
      button.textContent = 'Pay now';
    }
  }
}

function showCheckoutStatus() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('success')) {
    showToast('Payment successful. We will confirm your order.');
  } else if (params.has('canceled')) {
    showToast('Payment canceled.');
  }
}

function placeOrder() {
  const summary = buildOrderSummary();
  if (!summary) return;
  const encoded = encodeURIComponent(summary);
  const url = `https://wa.me/?text=${encoded}`;
  window.open(url, '_blank');
}

function copyOrder() {
  const summary = buildOrderSummary();
  if (!summary) return;
  if (!navigator.clipboard) {
    showToast('Copy not supported here');
    return;
  }
  navigator.clipboard
    .writeText(summary)
    .then(() => showToast('Order summary copied'))
    .catch(() => showToast('Copy failed'));
}

function handleClicks(event) {
  const addBtn = event.target.closest('[data-add]');
  if (addBtn) {
    const id = addBtn.dataset.add;
    addToCart(id);
    return;
  }

  const catBtn = event.target.closest('[data-category]');
  if (catBtn) {
    setActiveCategory(catBtn.dataset.category);
    return;
  }

  const qtyBtn = event.target.closest('[data-qty-delta]');
  if (qtyBtn) {
    const delta = Number(qtyBtn.dataset.qtyDelta);
    const id = qtyBtn.dataset.id;
    updateQuantity(id, delta);
  }
}

function init() {
  applyCurryDistrictTheme();
  const hasMenu = !!(els.menuGrid && els.categoryTabs);
  const hasCart = !!(els.cartItems && els.cartSubtotal && els.cartTax && els.cartTotal && els.cartCount);

  if (hasMenu) {
    renderCategories();
    renderMenu();
  }

  if (hasCart) {
    renderCart();
  }

  showCheckoutStatus();

  document.body.addEventListener('click', handleClicks);

  document.querySelectorAll('input[name="orderType"]').forEach((input) => {
    input.addEventListener('change', () => toggleAddressField(input.value));
  });

  document.getElementById('place-whatsapp')?.addEventListener('click', placeOrder);
  document.getElementById('pay-now')?.addEventListener('click', payNow);
  document.getElementById('copy-order')?.addEventListener('click', copyOrder);
  document.getElementById('clear-cart')?.addEventListener('click', clearCart);
}

document.addEventListener('DOMContentLoaded', init);
