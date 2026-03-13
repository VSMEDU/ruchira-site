# Ruchira Indian Cuisine — Website

Restaurant website for **Ruchira Indian Cuisine**, Frisco TX.  
Static frontend with Vercel serverless API backend, Supabase database, Toast Tab ordering, and Stripe payments.

---

## 🌐 Live Site

**[https://www.ruchiraindiancuisine.com](https://www.ruchiraindiancuisine.com)**

---

## 📁 Project Structure

```
ruchira-site/
├── index.html          # Homepage
├── menu.html           # Menu page (links to Toast Tab)
├── about.html          # About the restaurant
├── contact.html        # Contact info & address
├── order.html          # Order redirect → Toast Tab
├── kitchen.html        # Kitchen display (PIN protected, not indexed)
├── lock.html           # PIN entry screen (site gate)
├── privacy.html        # Privacy policy (TDPSA / analytics disclosure)
│
├── assets/
│   ├── css/styles.css  # Site stylesheet
│   ├── js/
│   │   ├── app.js      # Frontend JS
│   │   └── kitchen.js  # Kitchen display polling logic
│   └── images/
│
├── api/
│   ├── _supabase.js        # Supabase client helper
│   ├── _toast.js           # Toast API request helper
│   ├── create-order.js     # Toast order creation endpoint
│   ├── create-checkout.js  # Stripe checkout session endpoint
│   ├── webhook.js          # Stripe webhook handler
│   ├── kitchen.js          # Kitchen orders API (GET / PATCH)
│   ├── unlock.js           # PIN validation → sets site_pin_ok cookie
│   └── menu-map.json       # Menu item ID mapping
│
├── vercel.json         # Deployment config + security headers
├── middleware.js       # Site PIN gate (Vercel Edge)
├── supabase.sql        # Database schema
├── robots.txt          # Crawler rules
├── sitemap.xml         # Public page index for search engines
└── package.json
```

---

## 🏗️ Architecture

```
Browser
  │
  ├── Static pages (HTML/CSS/JS) ──────── Vercel CDN
  │
  ├── /order.html ─────────────────────── Redirects → Toast Tab (hosted ordering)
  │
  ├── /api/create-checkout ────────────── Stripe Checkout Session
  ├── /api/webhook ────────────────────── Stripe Webhook → Supabase orders
  ├── /api/create-order ───────────────── Toast order API → Supabase
  ├── /api/kitchen ────────────────────── Kitchen display data (PIN guarded)
  └── /api/unlock ─────────────────────── PIN auth → sets cookie
```

---

## 🔐 Access Control

### Site PIN Gate
All pages are behind a PIN gate enforced at two layers:

| Layer | File | Mechanism |
|-------|------|-----------|
| Vercel routing | `vercel.json` | Cookie check — redirects to `/lock.html` if `site_pin_ok=1` absent |
| Edge middleware | `middleware.js` | Next.js middleware (PIN cookie validation) |

- The PIN is set via the `SITE_PIN` environment variable
- On success, `/api/unlock` sets `site_pin_ok=1` as an `HttpOnly` cookie (24hr expiry)
- `/lock.html` and `/kitchen.html` are excluded from search engine indexing via `robots.txt`

### Kitchen PIN
The `/api/kitchen` endpoint requires an additional `x-kitchen-pin` request header matching `KITCHEN_PIN` env var.

---

## 📦 Integrations

### Toast Tab — Online Ordering
All customer ordering is handled by Toast's hosted ordering page. No payment data touches this site.

- Order URL: `https://order.toasttab.com/online/ruchira-2650-king-road-400`
- `/order.html` auto-redirects to Toast via `window.location.replace()`
- Order data flows back via `/api/create-order` → Supabase

### Stripe — Payments
Stripe Checkout is used for any direct payment flows.

- `/api/create-checkout` creates a Stripe Checkout Session
- `/api/webhook` verifies Stripe signature and upserts completed orders to Supabase

### Supabase — Database
Orders are stored in a single `orders` table.

**Schema** (`supabase.sql`):
```sql
create table public.orders (
  id            text primary key,         -- Stripe session ID or Toast order ID
  created_at    timestamptz,
  status        text default 'new',       -- new | preparing | ready | done
  source        text default 'stripe',    -- stripe | toast
  customer      jsonb,                    -- name, email, phone
  items         jsonb,                    -- array of line items
  subtotal      integer,                  -- cents
  tax           integer,                  -- cents (8.25% TX sales tax)
  total         integer,                  -- cents
  currency      text,
  payment_intent text,
  raw           jsonb                     -- full provider payload
);
```

### Google Tag Manager
Analytics via GTM with **Consent Mode v2** properly implemented.

- Container ID: `GTM-KMR2SXTS`
- Consent defaults to `analytics_storage: denied` before GTM loads
- Upgrades to `granted` when user dismisses the cookie notice
- No ad tracking (`ad_storage`, `ad_user_data`, `ad_personalization` permanently denied)

---

## 🍪 Cookie Notice

A notice banner appears on first visit on all public pages. Clicking **"Got it"** :
1. Sets `localStorage.cookie_consent = 'granted'`
2. Calls `gtag('consent', 'update', { analytics_storage: 'granted' })`
3. GA4 (via GTM) begins tracking from that point forward

Returning visitors who already dismissed see no banner — their preference persists via `localStorage`.

---

## 🔒 Security

All responses include these HTTP headers (configured in `vercel.json`):

| Header | Value |
|--------|-------|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `Content-Security-Policy` | Restricts scripts/frames to GTM, GA, Toast Tab only |

### PCI DSS
This site is **SAQ-A eligible** — all payment processing is handled exclusively by Toast Tab (PCI DSS Level 1) and Stripe (PCI DSS Level 1). No cardholder data is entered, stored, or transmitted on this site.

---

## 🌍 SEO

| File | Purpose |
|------|---------|
| `robots.txt` | Blocks `/kitchen.html`, `/lock.html`, `/api/` from crawlers |
| `sitemap.xml` | Lists all 6 public pages with priorities |

**Submit sitemap** to Google Search Console:
```
https://www.ruchiraindiancuisine.com/sitemap.xml
```

---

## ⚙️ Environment Variables

Set these in the Vercel project dashboard under **Settings → Environment Variables**:

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | ✅ | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ | Supabase service role key (server-side only) |
| `STRIPE_SECRET_KEY` | ✅ | Stripe secret key (`sk_live_...`) |
| `STRIPE_WEBHOOK_SECRET` | ✅ | Stripe webhook signing secret (`whsec_...`) |
| `SITE_PIN` | ✅ | Numeric PIN to unlock the site |
| `KITCHEN_PIN` | ✅ | Numeric PIN for kitchen display API access |

> ⚠️ Never commit these values to git. All are server-side only and never exposed to the browser.

---

## 🚀 Deployment

The site deploys automatically to Vercel on every `git push` to the main branch.

```bash
# Install dependencies
npm install

# Deploy manually (if needed)
vercel --prod
```

**Vercel project settings:**
- Framework: Other (static + serverless)
- Node.js version: 18.x
- Build command: _(none — static HTML)_
- Output directory: _(root)_

---

## 📍 Restaurant Info

**Ruchira Indian Cuisine**  
2650 King Road, Suite 400  
Frisco, TX 75036  
📞 +1 469-956-4545  
📧 order.ruchirafrisco@gmail.com
