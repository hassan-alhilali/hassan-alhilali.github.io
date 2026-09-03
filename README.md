# Hassan Al-Hilali — Primavera P6 & Project Controls

A bilingual (English / Arabic) marketing site for Primavera P6 and project controls consulting services.
Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static output, no backend,
no runtime dependencies — it deploys straight to GitHub Pages.

| | |
|---|---|
| English | `/` |
| Arabic (RTL) | `/ar/` |

---

## Quick start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build into ./dist
npm run preview  # preview the production build
```

Requires Node.js 20 or newer.

---

## Project structure

```
src/
  i18n/content.ts          ← ALL page copy, English + Arabic
  data/
    site.json              ← name, title, email, location, summary (both languages)
    tools.json             ← toolset chips in the Expertise section
    sectors.json           ← industry sectors
  components/
    Header.astro           ← nav + language switch
    Hero.astro             ← headline + Gantt chart
    Metrics.astro          ← dark capability strip
    Services.astro         ← six service cards
    ScheduleQuality.astro  ← quality checklist + health check + S-curve
    Approach.astro         ← five-step method
    Deliverables.astro     ← deliverables list + dashboard
    WhyWorkWithMe.astro    ← differentiators (dark section)
    Expertise.astro        ← tools, sectors, certifications
    About.astro            ← photo + bio
    FAQ.astro              ← accordion
    Contact.astro          ← email CTA + details
    Footer.astro
    visuals/               ← hand-built SVG graphics (see below)
  layouts/Layout.astro     ← <head>, SEO, JSON-LD, scroll reveal
  pages/index.astro        ← English page
  pages/ar/index.astro     ← Arabic page
public/
  images/                  ← photos, OG image, touch icon
  favicon.svg  robots.txt  sitemap.xml
```

---

## Editing content

**All visible text lives in one file:** `src/i18n/content.ts`. It exports an object with an `en` and an `ar`
branch that mirror each other exactly. Change a string in both branches and both pages update.

**Personal details** (name, job title, email, location, availability, bio) live in `src/data/site.json`,
each field carrying an `en` and an `ar` value.

Optional fields in `site.json` that are empty are simply not rendered — fill in `linkedin` with a full URL
and a LinkedIn button appears in the contact section and footer automatically.

### Adding a new language

1. Add the locale to `languages` and `content` in `src/i18n/content.ts`.
2. Add it to `locales` in `astro.config.mjs`.
3. Copy `src/pages/ar/index.astro` to `src/pages/<code>/index.astro` and change the `lang` constant.

---

## Images

All images live in `public/images/`. Replace a file with one of the same name and the site picks it up —
no code change needed.

| File | Used for | Recommended size |
|---|---|---|
| `hero-bg.jpg` | Hero background texture (rendered at ~9% opacity) | 1920 × 1080, landscape |
| `contact-bg.jpg` | Contact section background texture | 1600 × 900, landscape |
| `about.jpg` | Portrait in the About section | **800 × 1000, portrait (4:5)** — replace with a headshot |
| `og-image.png` | Link preview card for LinkedIn / WhatsApp / X | 1200 × 630 (keep exact) |
| `apple-touch-icon.png` | Home-screen icon on iOS | 180 × 180 |
| `favicon.svg` *(in `public/`)* | Browser tab icon | vector |

Good free sources for replacement photography: [Unsplash](https://unsplash.com),
[Pexels](https://pexels.com), [Pixabay](https://pixabay.com). Useful searches: *construction site*,
*oil refinery*, *engineering drawings*, *project meeting*, *hard hat inspection*.
Compress before committing — [squoosh.app](https://squoosh.app) — and keep each photo under ~400 KB.

### The SVG graphics

The four charts are hand-built SVG in `src/components/visuals/` — no image files, no chart library,
crisp at any zoom and fast to load:

- `GanttChart.astro` — Primavera-style bar chart with WBS summary bars, a critical path, relationship
  arrows, baseline shadows, milestones and a data date line. Edit the `rows` array to change activities.
- `HealthCheck.astro` — DCMA 14-point scorecard with a score ring. Edit the `metrics` array.
- `SCurve.astro` — cumulative PV / EV / AC curves with a variance band. Edit the `logistic` parameters.
- `Dashboard.astro` — Power BI-style KPI tiles, discipline progress, area donut and manpower histogram.

> **These charts show illustrative data**, labelled as such on the page. If you replace them with figures
> from a real project, make sure you have the client's permission and remove anything identifying.

---

## Deploying to GitHub Pages

A workflow is already included at `.github/workflows/deploy.yml`. It builds on every push to `main`
and publishes `dist/`.

**One-time setup**

1. Push this repository to GitHub.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the site deploys automatically. Check progress under the **Actions** tab.

**Pick the right URL shape before the first deploy** — this decides one line in `astro.config.mjs`:

| You want | Name the repo | `astro.config.mjs` |
|---|---|---|
| `https://<user>.github.io/` | `<user>.github.io` | keep `site`, leave `base` commented out |
| `https://<user>.github.io/<repo>/` | anything | keep `site` **and** uncomment `base: '/<repo>'` |

If you later attach a custom domain, update `site` in `astro.config.mjs`, the URLs in
`public/sitemap.xml` and `public/robots.txt`, and add a `public/CNAME` file containing the domain.

---

## SEO and sharing

- Per-language `<title>`, description, canonical URL and `hreflang` alternates.
- Open Graph and Twitter card tags pointing at `og-image.png`.
- `ProfessionalService` JSON-LD structured data generated from the content file.
- `sitemap.xml` and `robots.txt` — update the URLs in both if the domain changes.

## Accessibility

Skip link, semantic landmarks, ARIA labels on every icon-only control, visible focus rings,
48px minimum touch targets, `prefers-reduced-motion` support, and full RTL mirroring for Arabic.

---

<div dir="rtl">

## نبذة بالعربية

موقع تعريفي ثنائي اللغة (إنجليزي/عربي) لخدمات بريمافيرا P6 وضبط المشاريع، مبني بـ Astro و Tailwind CSS،
ومُخرَج كملفات ثابتة تُرفع مباشرة على GitHub Pages.

**التشغيل محليًا**

```bash
npm install
npm run dev
```

**تعديل المحتوى**

- كل النصوص الظاهرة في ملف واحد: `src/i18n/content.ts` — فرع `en` وفرع `ar` متطابقان في البنية.
- البيانات الشخصية (الاسم، المسمّى، البريد، الموقع، النبذة) في `src/data/site.json`.
- الأدوات والقطاعات في `src/data/tools.json` و `src/data/sectors.json`.

**تبديل الصور**

استبدل أي ملف داخل `public/images/` بملف يحمل الاسم نفسه. الأهم: ضع صورتك الشخصية مكان
`about.jpg` بمقاس 800 × 1000 بكسل (نسبة 4:5).

**النشر**

ارفع المستودع على GitHub، ثم من **Settings → Pages** اختر **GitHub Actions** كمصدر. كل دفعة إلى الفرع
`main` تنشر الموقع تلقائيًا.

**ملاحظة مهمة:** الأرقام الظاهرة في المخططات (جانت، فحص DCMA، منحنى القيمة المكتسبة، لوحة Power BI)
بيانات توضيحية ومكتوب ذلك عليها. إن استبدلتها ببيانات مشروع حقيقي فتأكد من موافقة العميل وإزالة أي
معلومة تكشف هويته.

</div>

---

## Licence

Source code: [MIT](LICENSE). Site content, copy and personal details are © Hassan Al-Hilali —
please don't reuse them for another consultant's site.
