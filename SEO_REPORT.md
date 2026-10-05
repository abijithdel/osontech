# SEO Optimisation Report — OsonTech
**Date:** October 2026  
**Business:** OsonTech — Digital Marketing & Web Development Agency  
**Location:** Calicut (Kozhikode), Kerala, India  
**Website:** https://www.osontech.in

---

## Summary of Changes

### 1. SEO Titles & Meta Descriptions

| Page | Before | After |
|------|--------|-------|
| **Homepage** | `OsonTech \| Digital Solutions That Move Your Business Forward` | `Digital Marketing & Web Development Agency in Calicut \| OsonTech` |
| **About** | `About Us \| OsonTech` | `About OsonTech – Digital Marketing & Web Development Agency in Calicut` |
| **Root layout default** | Generic tagline | `OsonTech – Digital Marketing & Web Development Agency in Calicut` |

**Changes made:**
- `app/layout.js` — Added `title.template` (`%s | OsonTech`) so all child pages get consistent branding
- `app/page.js` — Full page-specific title and meta description with Calicut keyword
- `app/about/page.js` — Full page-specific title and meta description with Calicut keyword

---

### 2. H1, H2 & H3 Headings Optimised

| Component | Before | After |
|-----------|--------|-------|
| `Hero.js` H1 | `Digital Solutions That Move Your Business Forward` | `Digital Marketing & Web Development Agency in Calicut` |
| `about/page.js` H1 | `Two Friends. One Vision.` | `Digital Agency in Calicut, Built With Purpose.` |
| `Services.js` H2 subtitle | Generic | Added Calicut + Kerala reference |
| `WhyChooseUs.js` H2 subtitle | Generic | Added "digital partner in Calicut, Kerala" |
| `Contact.js` eyebrow | `Let's Work Together` | `Get in Touch with OsonTech, Calicut` |

> All H3 headings (service card titles, reason titles, founder names) were already keyword-relevant and did not need changes to avoid keyword stuffing.

---

### 3. Canonical URLs

- `app/layout.js` — `metadataBase: new URL("https://www.osontech.in")` sets the base for all relative canonical URLs
- `app/page.js` — `alternates.canonical: BASE_URL` → `https://www.osontech.in`
- `app/about/page.js` — `alternates.canonical` → `https://www.osontech.in/about`

---

### 4. Open Graph & Twitter Metadata

**Added to all pages:**
- `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:locale` (`en_IN`), `og:site_name`
- `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`
- Files changed: `app/layout.js`, `app/page.js`, `app/about/page.js`

> **Note:** Replace the OG image `/logo.png` with a dedicated 1200×630px OG image (e.g. `og-image.jpg`) for best social previews.

---

### 5. Sitemap & Robots — Created

| File | Notes |
|------|-------|
| `app/sitemap.js` | **Created** — Generates `/sitemap.xml` listing `/` (priority 1.0) and `/about` (priority 0.8) |
| `app/robots.js` | **Created** — Generates `/robots.txt` allowing all crawlers, pointing to sitemap |

**Verified generated output (from build):**
```
○ /robots.txt
○ /sitemap.xml
```
Both statically generated at build time.

---

### 6. JSON-LD Structured Data

#### Homepage (`app/page.js`)
Two JSON-LD scripts injected:

1. **`LocalBusiness` + `WebSite` + `WebPage` schema:**
   - Business name, URL, logo, description
   - Address: Calicut, Kerala, IN
   - `areaServed`: Calicut, Kozhikode, Kerala
   - Two contact points (WhatsApp numbers)
   - Email: hello@osontech.in
   - `sameAs` links (Instagram, Facebook, LinkedIn, YouTube)
   - `hasOfferCatalog` with 10 services

2. **`FAQPage` schema** — enables Google FAQ rich results for all 6 FAQ questions

#### About Page (`app/about/page.js`)
- **`AboutPage` schema** — linked to the organisation entity
- **`BreadcrumbList` schema** — Home → About Us trail

---

### 7. Image Alt Text & Performance

| Image | Before | After |
|-------|--------|-------|
| Hero background | "Developer working on laptop in cafe..." | "Digital marketing and web development team working at OsonTech agency in Calicut, Kerala" |
| Header logo (desktop) | "OsonTech Logo" | "OsonTech logo – Digital Marketing & Web Development Agency in Calicut, Kerala" |
| Header logo (mobile) | "OsonTech Logo" | "OsonTech logo" |

**Performance improvements (`Header.js`):**
- Replaced bare `<img>` tags with Next.js `<Image>` component — automatic WebP/AVIF and lazy loading
- Added explicit `width={140} height={40}` to prevent CLS

**`next.config.mjs`:**
- Added `images.formats: ["image/avif", "image/webp"]`
- Added `images.minimumCacheTTL: 86400` (24h cache)

---

### 8. Internal Linking Improvements (`components/Footer.js`)

| Before | After |
|--------|-------|
| `href="#services"` | `href="/#services"` |
| `href="#about"` | `href="/about"` (real page link) |
| `href="#why-us"` | `href="/#why-us"` |
| `href="#privacy"`, `#terms`, `#cookies` | Removed (pages don't exist) |
| Footer meta bar linked to `#sitemap` | Now links to `/sitemap.xml` |

---

### 9. Local SEO (Calicut / Kozhikode)

- **H1 homepage** contains "Calicut" as the primary keyword
- **H1 About page** contains "Calicut"
- **`LocalBusiness` schema** with `addressLocality: "Calicut"` and `areaServed`
- **Meta descriptions** on all pages mention Calicut and Kerala
- **Contact section** displays `"Calicut (Kozhikode), Kerala, India"` as location
- **FAQPage schema** answers mention "Calicut and Kerala" naturally
- **Keywords array** in root layout covers all target location variants

---

### 10. Technical SEO & Security Headers (`next.config.mjs`)

| Header | Value |
|--------|-------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Camera/mic/geo disabled |
| `X-Powered-By` | Removed (`poweredByHeader: false`) |
| `trailingSlash` | `false` (enforced canonical consistency) |

**Bug fixes:**
- Duplicate `id="whatsapp"` keys in `Contact.js` — fixed to `whatsapp-1` / `whatsapp-2`
- `formatDetection` metadata added to prevent iOS auto-linking numbers

---

### 11. Core Web Vitals

| Metric | Change |
|--------|--------|
| **LCP** | Logo images now use `<Image>` with `width`/`height`. Hero already had `priority`. |
| **CLS** | Explicit `width={140} height={40}` on logo prevents layout shift |
| **Caching** | `minimumCacheTTL: 86400` improves image CDN hit rate |

---

## Verified Build Output

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /robots.txt
└ ○ /sitemap.xml

○  (Static)  prerendered as static content
```

✅ All pages compile and generate successfully with no errors.

---

## Remaining SEO Issues & Recommendations

### 🔴 High Priority

1. **No dedicated OG image** — Create `public/og-image.jpg` (1200×630px) and update metadata. Significantly improves CTR from social sharing.

2. **Confirm live domain** — All canonical URLs use `https://www.osontech.in`. If the actual live domain differs, update `BASE_URL` in: `app/layout.js`, `app/page.js`, `app/about/page.js`, `app/sitemap.js`, `app/robots.js`.

3. **Submit sitemap to Google Search Console** — Verify the domain at [search.google.com/search-console](https://search.google.com/search-console) and submit `https://www.osontech.in/sitemap.xml`.

4. **Claim Google Business Profile** — This is the single most impactful action for local SEO visibility in Calicut/Kozhikode.

### 🟡 Medium Priority

5. **No dedicated service pages** — Create individual pages per service (e.g. `/services/seo-agency-calicut`) to rank for specific keywords. Currently all services are on the homepage.

6. **Contact form is non-functional** — The form uses a fake `setTimeout` mock. Connect to a real backend (Formspree, Resend, custom API route) for lead capture.

7. **No blog/content** — Adding locally-relevant blog posts builds topical authority and drives organic traffic.

8. **Favicon/apple-touch-icon metadata** — Add explicit `icons` metadata in `app/layout.js`:
   ```js
   icons: {
     icon: '/favicon.ico',
     apple: '/apple-icon.png',
   }
   ```

### 🟢 Low Priority

9. **Verify logo dimensions** — The Header logo `<Image>` was given `width={140} height={40}` as an estimate. Verify actual `public/logo.png` dimensions and update to exact values.

10. **Inconsistent email** — Footer brand column shows `hello@osontech.com` but Contact section shows `hello@osontech.in`. Standardise across the site.

11. **Privacy Policy & Terms of Service pages missing** — Removing these links (dead links) was correct, but creating these pages would improve E-E-A-T trust signals.

12. **`robots.txt` — no Google Ads verification yet** — Once a Google Ads or Search Console account is set up, add `verification` metadata to `layout.js`.

---

## Files Changed

| File | Change Type |
|------|-------------|
| `app/layout.js` | Enhanced metadata: title template, OG, Twitter, robots, keywords, canonical, metadataBase |
| `app/page.js` | Page-specific metadata, LocalBusiness + WebSite + FAQPage JSON-LD |
| `app/about/page.js` | Page-specific metadata, AboutPage + BreadcrumbList JSON-LD, H1 updated |
| `app/sitemap.js` | **Created** — generates `/sitemap.xml` |
| `app/robots.js` | **Created** — generates `/robots.txt` |
| `next.config.mjs` | Security headers, image formats, `poweredByHeader: false`, `trailingSlash: false` |
| `components/Hero.js` | H1 updated with Calicut keyword, hero image alt text improved |
| `components/Services.js` | Section subtitle updated with Calicut/Kerala reference |
| `components/WhyChooseUs.js` | Section subtitle updated with Calicut reference |
| `components/Contact.js` | Location → "Calicut (Kozhikode), Kerala", duplicate IDs fixed, eyebrow updated |
| `components/Header.js` | `<img>` → `<Image>` (Next.js), logo alt text improved, aria-label added |
| `components/Footer.js` | Internal links fixed, dead links removed, About page properly linked |
