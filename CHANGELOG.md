# Changelog — KORA

All notable changes to the KORA static site. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/). Dates are ISO (YYYY-MM-DD).

## [0.4.0] — 2026-06-25 — "V3: brand canon merge"

Merged the official KORA brand canon into the site. The narrative now leads with the
fabric-origin story — the white space no competitor owns — instead of a generic
heritage/minimalist framing. All copy is drawn from the supplied canon (positioning,
manifesto, four pillars, voice). No founder names, years, prices, press, testimonials,
or stats were invented; no fake photography was added.

### Changed — palette (exact canon hex)
- Base raw-cotton/bone `#EDE7DB`, new section paper `#F7F3EC`, near-black ink `#1A1815`,
  clay/terracotta `#B4552D`, and a new muted-sage support `#7C7A66` (`--sage`).
- Added `.art--sage` art block, `.section--paper` background utility, and updated each
  page's `theme-color` to `#EDE7DB`.

### Changed — narrative & content
- **`index.html`** — new hero ("The world's best cotton, kept home."), prominent
  origin-story section, a quiet "Everyone owns performance / we own the fibre" claim
  (reflects the competitor white-space without naming rivals on-site), the four canon
  pillars, and a dedicated hero-product feature for **The Everyday Training Tee**
  (100% long-staple Bangladeshi cotton, ~240gsm, garment-dyed, trained-fit). Facts strip
  and footer rewritten to the new voice; subtle roadmap line ("It won't end there").
- **`about.html`** — rebuilt around the manifesto verbatim as its spine, a "কোরা means
  raw" name-rationale section, the four pillars, and a four-swatch palette strip.
- **`shop.html`** — restructured to lead with The Everyday Training Tee as a full hero
  product (fabric spec list + planned sizes), a short supporting Drop 01 set, and a
  subtle "apparel now, more from the source later" roadmap note. Pricing stays
  "Pricing at launch".

### Changed — assets & voice
- `assets/og-cover.svg` recoloured to the canon palette with the new tagline.
- Meta titles/descriptions, OG/Twitter tags, and JSON-LD rewritten to the positioning.
- Voice aligned to canon: short, plain, first-person plural, specific over superlative;
  avoided the banned vocabulary (luxury, hustle, revolutionary, wellness, etc.).

### Kept
- Static site, relative paths, double-click to open. Same `styles.css` + `app.js` system.
- Art-directed CSS/SVG blocks stand in for all imagery — no fake photos.
- Honest limitations from 0.3.0 still apply (PNG OG export, real photography, waitlist
  backend, placeholder `kora.example` domain/email).

## [0.3.0] — 2026-06-25 — "V3"

First built version of the site. The original `index.html` and the two research
documents (`01_competitor_research.md`, `02_brand_identity_draft.md`) referenced in
the brief were never present in the project folder, so this version was built directly
from the written brand brief. No facts were invented beyond what the brief stated
(Bangladesh-born, heritage + minimalist, gym apparel, fit people in Vancouver,
bone/clay/ink palette, Space Grotesk + Inter + Noto Sans Bengali).

### Added
- **`index.html`** — V3 homepage: hero, ethos marquee, philosophy split, three brand
  pillars, Drop 01 featured preview, facts strip, and waitlist call-to-action.
- **`about.html`** — brand story (two homes: Dhaka → Vancouver), values, palette strip.
- **`shop.html`** — Drop 01 collection preview (6 concept pieces) with planned size runs
  and a launch waitlist. Pricing intentionally shown as "Pricing at launch" — no prices
  were fabricated.
- **`styles.css`** — shared design system: bone/clay/ink tokens, fluid `clamp()` type
  scale, Space Grotesk / Inter / Noto Sans Bengali, components (header, hero, marquee,
  pillars, product grid, callout, footer).
- **`app.js`** — progressive enhancement only: mobile nav toggle, sticky-header border,
  `IntersectionObserver` scroll reveals, current-year stamp, and honest no-backend
  handling for the waitlist forms.
- **`assets/og-cover.svg`** — social share / Open Graph cover.

### SEO & metadata
- Unique `<title>` and meta description per page.
- Open Graph + Twitter Card tags on all pages; `og:locale` set to `en_CA`.
- Canonical URLs (placeholder domain `kora.example` — replace before launch).
- JSON-LD: `Organization` on home, `CollectionPage` on shop.

### Accessibility
- Semantic landmarks (`header`/`main`/`footer`/`nav`), skip-to-content link.
- Visible `:focus-visible` styles, `aria-current` on active nav, `aria-expanded` on
  the menu toggle, labelled forms, `aria-label`/`role="img"` on all decorative panels.
- `prefers-reduced-motion` disables marquee, reveals, and smooth scroll.
- Palette chosen so body text uses ink on bone for contrast; clay reserved for accents.

### Mobile
- Fluid type and spacing via `clamp()`; responsive grids collapse to single column.
- Off-canvas nav menu under 720px with accessible toggle.

### Notes / honest limitations
- **No product photography** exists, so all product/visual blocks are art-directed
  CSS/SVG panels in the brand palette — clearly abstract, not fake photos. Swap in real
  imagery when available (the `.art--*` blocks mark each slot).
- **`og:image` is an SVG.** Some social scrapers don't render SVG OG images — export a
  1200×630 PNG from `assets/og-cover.svg` and point `og:image`/`twitter:image` to it
  before launch.
- **Fonts load from Google Fonts** (needs internet on first open). System fallbacks are
  defined so the site still reads fine offline.
- Replace the `kora.example` placeholder domain and `hello@kora.example` email before
  going live.
- Static by design: open `index.html` directly in a browser (double-click). The waitlist
  forms have no backend yet — they confirm in-page and send nothing.

### Next
- Real product photography + copy from a verified brand source.
- Wire the waitlist to an email provider.
- Generate the PNG OG image and per-page OG covers.
