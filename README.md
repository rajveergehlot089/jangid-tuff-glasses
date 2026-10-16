# Jangid Tuff Glasses Private Limited — Official Website

Modern, responsive, conversion-focused website for **Jangid Tuff Glasses Private Limited** (जांगिड़ टफ ग्लासेस प्राइवेट लिमिटेड), based in Jodhpur, Rajasthan, India.

---

## 1. Project Overview & Structure

```
/jgc
  ├── index.html              # Homepage: Hero, categories, services, about, inspiration, quote CTA
  ├── about.html              # Company history, proposed mission/vision, Jodhpur focus
  ├── products.html           # Full 9 product categories with interactive category filtering
  ├── services.html           # Detailed services overview & 4-stage project workflow
  ├── custom-solutions.html   # Dedicated landing page for bespoke architectural glass fabrication
  ├── gallery.html            # Visual portfolio with interactive lightbox & category filters
  ├── faq.html                # Frequently Asked Questions with accessible interactive accordions
  ├── contact.html            # Contact info, Google Maps embed, interactive WhatsApp enquiry builder
  ├── thank-you.html          # Enquiry acknowledgement and follow-up guidance
  ├── privacy.html            # Privacy policy & data communication terms
  ├── terms.html              # Terms & conditions reviewable template
  ├── sitemap.xml             # Search engine XML sitemap
  ├── robots.txt              # Search engine crawling rules
  ├── assets/
  │   ├── css/styles.css      # Core styles, fonts, animations, lightbox, accordions
  │   ├── js/main.js          # Interactive scripts: filters, lightbox, accordions, WhatsApp builder
  │   └── website-concept-mockup.png # Reference concept visual
  └── README.md               # Documentation and operations manual
```

---

## 2. Verified Business Details

- **Company Name:** Jangid Tuff Glasses Private Limited
- **Hindi Name:** जांगिड़ टफ ग्लासेस प्राइवेट लिमिटेड
- **Physical Address:** 21 Narnadi, Boranada, Pal, Jodhpur, Rajasthan 342017, India
- **Primary Telephone:** +91 92510 77483
- **Instagram:** [@jangidglassco](https://www.instagram.com/jangidglassco/)
- **Facebook:** [Jangid Tuff Glasses](https://www.facebook.com/people/Jangid-Tuff-Glasses/61591863797429/)
- **Ozone India Listing:** [Ozone India - Jangid Glass Shilp Gram Pal Road Jodhpur](https://stores.ozone.in/ozone-india-jangid-glass-shilp-gram-pal-road-jodhpur-ozdlr30034)
- **ZaubaCorp Listing:** [Corporate Details U23109RJ2025PTC102882](https://www.zaubacorp.com/JANGID-TUFF-GLASSES-PRIVATE-LIMITED-U23109RJ2025PTC102882)

---

## 3. How to Run Locally

1. Open any HTML file directly in any modern browser (Chrome, Edge, Firefox, Safari), for example double-click `index.html`.
2. Or use any local static HTTP server:
   ```bash
   # Using Python:
   python -m http.server 8000

   # Or using Node:
   npx serve .
   ```
3. Visit `http://localhost:8000` in your web browser.
*(Note: An active internet connection is required to load Tailwind CDN, Google Fonts, Unsplash architectural sample photography, and embedded Google Maps).*

---

## 4. Working Functionality vs. Demo Functionality

| Feature | Type | Details |
| :--- | :--- | :--- |
| **Mobile Drawer Navigation** | ✅ Live Working | Toggles cleanly on mobile and tablet with proper ARIA attributes. |
| **Product Category Filtering** | ✅ Live Working | Instant JavaScript filtering across Architectural, Interior, Mirrors, and Custom. |
| **Gallery Lightbox Viewer** | ✅ Live Working | Clicking inspiration images opens an accessible high-res modal viewer with Esc/Close controls. |
| **Interactive FAQ Accordions** | ✅ Live Working | Expanding/collapsing Q&A with smooth CSS transitions and keyboard accessibility. |
| **WhatsApp Enquiry Generator** | ✅ Live Working | Form fields (Name, Phone, Dimensions, Quantity, Timeline, Details) are validated and converted into an formatted WhatsApp message to `+91 92510 77483`. |
| **Click-to-Call & WhatsApp Pill** | ✅ Live Working | Instant dialer links (`tel:+919251077483`) and floating WhatsApp quick action on every page. |
| **Google Maps Embed & Directions** | ✅ Live Working | Direct iframe and directions link to 21 Narnadi, Boranada, Pal, Jodhpur. |
| **Server-Side Lead Database** | ⚠️ Demo Mode | Form currently prepares WhatsApp messages client-side; no server database or email backend is connected yet. |

---

## 5. Items the Business Owner Must Verify Before Final Launch

1. **Operating Hours:** Confirm standard workshop and office visitation hours for weekdays and weekends.
2. **Proprietary Project Photography:** Replace illustrative architectural sample photos with actual photos of completed client projects, machinery, factory premises, and warehouse stock in Jodhpur.
3. **Exact Thickness & Availability:** Review product catalogue against physical stock (e.g. availability of 4mm, 5mm, 6mm, 8mm, 10mm, 12mm, 15mm, 19mm, fluted textures, tint shades).
4. **Legal & Compliance Review:** Have company legal counsel review `privacy.html` and `terms.html`.
5. **GST & Formal Registration:** Decide whether to display GSTIN, CIN, or official registration credentials on the footer or invoice paperwork.

---

## 6. Hosting & Custom Domain Deployment Guide

### Option A: Static Hosting on Vercel / Netlify / Cloudflare Pages (Recommended)
1. Initialize Git in the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial launch of Jangid Tuff Glasses website"
   ```
2. Push repository to GitHub or GitLab.
3. Connect the repository to Vercel, Netlify, or Cloudflare Pages.
4. Set Build Command: `None` (pure static HTML/CSS/JS). Output Directory: `.`.
5. Under Domain Settings, add custom domain (e.g., `jangidtuffglasses.com` or `jangidtuffglasses.in`).
6. Point DNS records at your domain registrar:
   - For Apex domain (`@`): Set `A` record pointing to the host's IP address.
   - For Subdomain (`www`): Set `CNAME` record pointing to the host domain target.

---

## 7. Testing & Quality Assurance Checklist

- [x] **Desktop Layout:** Verified navigation, hero balance, typography contrast, grid cards, and footer links.
- [x] **Mobile & Tablet Responsiveness:** Checked mobile drawer toggle, responsive touch targets (minimum 44x44px), and sticky action CTA.
- [x] **Interactive Filter Integrity:** Verified button states and item visibility on `products.html` and `gallery.html`.
- [x] **Enquiry Form Validation:** Verified mandatory field constraints (Name, Phone, Product, Details, Consent check) before WhatsApp dispatch.
- [x] **Accessibility & Contrast:** Verified text contrast against dark navy and sky backgrounds; focus outlines on interactive controls.
- [x] **SEO & Metadata:** Implemented unique titles, meta descriptions, OpenGraph tags, JSON-LD LocalBusiness schema, `sitemap.xml`, and `robots.txt`.
