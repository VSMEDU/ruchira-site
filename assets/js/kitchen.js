const columns = {
  new: document.getElementById('col-new'),
  preparing: document.getElementById('col-preparing'),
  ready: document.getElementById('col-ready'),
  completed: document.getElementById('col-completed'),
  refunded: document.getElementById('col-refunded')
};

const toast = document.getElementById('toast');
const pinGate = document.getElementById('pin-gate');
const pinInput = document.getElementById('pin-input');
const pinSubmit = document.getElementById('pin-submit');
const pinError = document.getElementById('pin-error');
const PIN_STORAGE_KEY = 'kitchen_pin';

let kitchenPin = sessionStorage.getItem(PIN_STORAGE_KEY) || '';
let knownIds = new Set();
let initialized = false;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function formatTime(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatMoney(cents, currency = 'usd') {
  if (typeof cents !== 'number') return '$???';
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(cents / 100);
  } catch (err) {
    return '$???';
  }
}

function orderCard(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  const itemsHtml = items
    .map(
      (item) => `
        <div class="order-item">
          <span>${item.name || 'Item'}</span>
          <span>x${item.quantity || 0}</span>
        </div>
      `
    )
    .join('');

  const customer = order.customer || {};
  const timeLabel = formatTime(order.created_at);
  const total = formatMoney(order.total, order.currency || 'usd');

  const statusActions = {
    new: [{ label: 'Start', next: 'preparing' }],
    preparing: [{ label: 'Ready', next: 'ready' }],
    ready: [{ label: 'Complete', next: 'completed' }],
    completed: [],
    refunded: []
  };

  const actions = (statusActions[order.status] || [])
    .map(
      (action) =>
        `<button class="small-button" data-action="${action.next}" data-id="${order.id}">${action.label}</button>`
    )
    .join('');

  return `
    <article class="order-card" data-id="${order.id}">
      <div class="order-head">
        <div>
          <div class="order-id">${order.id.slice(-8)}</div>
          <div class="order-time">${timeLabel}</div>
        </div>
        <div class="order-total">${total}</div>
      </div>
      <div class="order-meta">
        <span>${customer.name || 'Guest'}</span>
        <span>${customer.phone || ''}</span>
        <span>${customer.orderType || ''}</span>
      </div>
      <div class="order-items">${itemsHtml}</div>
      <div class="kitchen-actions">${actions}</div>
    </article>
  `;
}

async function fetchOrders() {
  const response = await fetch('/api/kitchen', {
    headers: kitchenPin ? { 'x-kitchen-pin': kitchenPin } : {}
  });
  const data = await response.json();
  if (!response.ok) {
    if (response.status === 401) {
      if (pinGate) pinGate.classList.remove('hidden');
      if (pinError) pinError.classList.remove('hidden');
      return;
    }
    showToast(data.error || 'Failed to load orders');
    return;
  }

  const orders = Array.isArray(data.orders) ? data.orders : [];

  if (!initialized) {
    knownIds = new Set(orders.map((o) => o.id));
    initialized = true;
  } else {
    const newOrders = orders.filter((o) => o.status === 'new' && !knownIds.has(o.id));
    if (newOrders.length) {
      showToast(`New order: ${newOrders[0].id.slice(-8)}`);
    }
    orders.forEach((o) => knownIds.add(o.id));
  }

  Object.values(columns).forEach((col) => {
    if (col) col.innerHTML = '';
  });

  orders.forEach((order) => {
    const col = columns[order.status] || columns.new;
    if (col) col.insertAdjacentHTML('beforeend', orderCard(order));
  });
}

async function updateStatus(id, status) {
  const response = await fetch('/api/kitchen', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...(kitchenPin ? { 'x-kitchen-pin': kitchenPin } : {})
    },
    body: JSON.stringify({ id, status })
  });
  const data = await response.json();
  if (!response.ok) {
    showToast(data.error || 'Failed to update');
    return;
  }
  await fetchOrders();
}

function handleClick(event) {
  const btn = event.target.closest('[data-action]');
  if (!btn) return;
  const id = btn.dataset.id;
  const status = btn.dataset.action;
  if (!id || !status) return;
  updateStatus(id, status);
}

function handlePinSubmit() {
  if (!pinInput) return;
  const value = pinInput.value.trim();
  if (!value) return;
  kitchenPin = value;
  sessionStorage.setItem(PIN_STORAGE_KEY, value);
  if (pinGate) pinGate.classList.add('hidden');
  if (pinError) pinError.classList.add('hidden');
  fetchOrders();
}

document.addEventListener('DOMContentLoaded', () => {
  if (pinGate && !kitchenPin) pinGate.classList.remove('hidden');
  fetchOrders();
  setInterval(fetchOrders, 5000);
  document.body.addEventListener('click', handleClick);
  pinSubmit?.addEventListener('click', handlePinSubmit);
  pinInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') handlePinSubmit();
  });
});
