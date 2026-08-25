# Hassan Al-Hilali Professional Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional single-page personal brand website for Hassan Al-Hilali using Astro + TypeScript + Tailwind CSS, deployed to GitHub Pages.

**Architecture:** Static single-page site with component-based Astro architecture. Component structure supports future route expansion (/projects, /services, /blog, /about) without rebuild. Content stored in JSON data files for easy updates.

**Tech Stack:** Astro 5.x, TypeScript, Tailwind CSS 4.x, GitHub Actions for CI/CD

**Spec:** `docs/superpowers/specs/2026-08-25-hassan-website-design.md`

## Global Constraints

- No React, Vue, or other UI frameworks — Astro + TypeScript + Tailwind only
- No contact form — email via `mailto:` is the primary contact mechanism
- No future routes built — only architectural readiness
- English only for initial launch — architecture ready for future Arabic/i18n
- GitHub Pages as primary deployment target
- No invented certifications, employers, achievements, metrics, or professional history
- Pending content treated as explicit content requirements — graceful empty states
- Color palette: charcoal #1A1A2E, slate-gray #4A5568, off-white #F7F8FA, deep-blue #2563EB, steel-blue #64748B, success-green #16A34A, warm-gray #9CA3AF
- No gradients, no excessive decorative colors, no generic tech startup aesthetics
- WCAG 2.1 AA compliance
- Lighthouse performance score 90+
- Semantic HTML throughout

---

## File Structure

```
hassan-website/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── HowIWork.astro
│   │   ├── WhyWorkWithMe.astro
│   │   ├── SelectedProjects.astro
│   │   ├── Expertise.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── data/
│   │   ├── services.json
│   │   ├── projects.json
│   │   ├── tools.json
│   │   ├── sectors.json
│   │   └── site.json
│   └── types/
│       └── index.ts
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── astro.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .github/workflows/deploy.yml
```

---

## Task 1: Project Initialization

**Files:** `package.json`, `tsconfig.json`, `astro.config.mjs`, `.gitignore`

- [ ] Initialize Astro project with minimal template
- [ ] Verify package.json has astro dependency and dev/build/preview scripts
- [ ] Create .gitignore (dist/, node_modules/, .env, IDE files)
- [ ] Verify project structure
- [ ] `git init && git add . && git commit -m "chore: initialize Astro project"`

## Task 2: Install Dependencies and Configure Tailwind

**Files:** `package.json`, `tailwind.config.ts`, `src/styles/global.css`, `astro.config.mjs`

- [ ] Install @astrojs/tailwind and tailwindcss
- [ ] Configure astro.config.mjs with site URL and tailwind integration
- [ ] Create tailwind.config.ts with custom color palette (charcoal, slate-gray, off-white, deep-blue, steel-blue, success-green, warm-gray), Inter font family, and max-width content: 1200px
- [ ] Create src/styles/global.css with Tailwind directives and base styles (smooth scroll, body bg/text, heading colors, link transitions)
- [ ] Import global.css in Layout component
- [ ] Run `npm run build` — verify no errors
- [ ] `git commit -m "feat: configure Tailwind CSS with custom color palette"`

## Task 3: Create TypeScript Types and Content Data

**Files:** `src/types/index.ts`, `src/data/site.json`, `src/data/services.json`, `src/data/projects.json`, `src/data/tools.json`, `src/data/sectors.json`

- [ ] Create types: Service, Project, Tool, Sector, SiteData
- [ ] Create site.json with approved content (full name, compact name, title, value proposition, summary, email, linkedin empty, location, availability)
- [ ] Create services.json with 6 confirmed services (descriptions marked as content requirements)
- [ ] Create projects.json as empty array (pending verified info)
- [ ] Create tools.json with 7 tools (4 core, 3 data)
- [ ] Create sectors.json with Oil & Gas, Construction
- [ ] Run `npx tsc --noEmit` — verify no errors
- [ ] `git commit -m "feat: add TypeScript types and content data files"`

## Task 4: Create Layout Component

**Files:** `src/layouts/Layout.astro`, `src/pages/index.astro`

- [ ] Create Layout.astro with: lang="en", meta charset/viewport, description, canonical URL, Open Graph tags, Twitter Card tags, favicon, Inter font import, skip-to-content link, slot
- [ ] Update index.astro to use Layout with test content
- [ ] Run `npm run dev` — verify page loads with correct meta tags
- [ ] `git commit -m "feat: create base layout with SEO meta tags"`

## Task 5: Create Header Component

**Files:** `src/components/Header.astro`

- [ ] Create Header with: site name link, desktop nav (Services, Expertise, Projects, About, Contact), "Discuss a Project" mailto CTA, mobile hamburger menu, sticky positioning, aria-labels
- [ ] Add scroll shadow effect via script
- [ ] Add mobile menu toggle via script
- [ ] Add Header to index.astro
- [ ] Run `npm run dev` — verify sticky nav, mobile menu, CTA link
- [ ] `git commit -m "feat: create Header with sticky nav and mobile menu"`

## Task 6: Create Hero Component

**Files:** `src/components/Hero.astro`

- [ ] Create Hero with: full name (h1), title, value proposition, "Discuss a Project" CTA linking to #contact, dark charcoal background
- [ ] Import siteData, use semantic section element with id="hero"
- [ ] Add Hero to index.astro
- [ ] Run `npm run dev` — verify hero renders with correct content
- [ ] `git commit -m "feat: create Hero section"`

## Task 7: Create Services Component

**Files:** `src/components/Services.astro`

- [ ] Create Services with: section heading, subtitle, 6 service cards in responsive grid (1/2/3 columns), each card with title and description from services.json
- [ ] Import services data, use semantic section with id="services"
- [ ] Add Services to index.astro
- [ ] Run `npm run dev` — verify 6 cards render, responsive layout works
- [ ] `git commit -m "feat: create Services section"`

## Task 8: Create HowIWork Component

**Files:** `src/components/HowIWork.astro`

- [ ] Create HowIWork with: section heading, subtitle, 5-step flow (Planning, Execution, Monitoring, Reporting, Decision) with numbered circles
- [ ] Responsive: horizontal on desktop, vertical on mobile
- [ ] Add to index.astro
- [ ] Run `npm run dev` — verify flow renders correctly
- [ ] `git commit -m "feat: create How I Work methodology section"`

## Task 9: Create WhyWorkWithMe Component

**Files:** `src/components/WhyWorkWithMe.astro`

- [ ] Create WhyWorkWithMe with: section heading, 4 differentiator points (Integrated Approach, Breadth of Skills, Data-Driven Decisions, Industry Focus), each with checkmark icon, title, description
- [ ] 2-column grid on desktop, 1-column on mobile
- [ ] Add to index.astro
- [ ] Run `npm run dev` — verify 4 points render
- [ ] `git commit -m "feat: create Why Work With Me section"`

## Task 10: Create SelectedProjects Component

**Files:** `src/components/SelectedProjects.astro`

- [ ] Create SelectedProjects with: section heading, subtitle, conditional rendering (empty state if projects.length === 0, project cards otherwise)
- [ ] Empty state: "Project details coming soon."
- [ ] Project cards: sector badge, name, role, scope
- [ ] Add to index.astro
- [ ] Run `npm run dev` — verify empty state renders
- [ ] `git commit -m "feat: create Selected Projects section with empty state"`

## Task 11: Create Expertise Component

**Files:** `src/components/Expertise.astro`

- [ ] Create Expertise with: section heading, certifications placeholder ("Certifications coming soon."), tools grid (Core Project Controls + Data & Analytics categories), industry sectors tags
- [ ] Import tools.json and sectors.json
- [ ] Add to index.astro
- [ ] Run `npm run dev` — verify tools, sectors, certifications placeholder render
- [ ] `git commit -m "feat: create Expertise section"`

## Task 12: Create About Component

**Files:** `src/components/About.astro`

- [ ] Create About with: section heading, professional summary text, reserved headshot area (empty div with appropriate styling, no placeholder image)
- [ ] Split layout: text on one side, headshot area on the other (desktop), stacked on mobile
- [ ] Import siteData for summary text
- [ ] Add to index.astro
- [ ] Run `npm run dev` — verify about section renders
- [ ] `git commit -m "feat: create About section"`

## Task 13: Create Contact Component

**Files:** `src/components/Contact.astro`

- [ ] Create Contact with: section heading, "Discuss a Project" mailto CTA, email link, LinkedIn placeholder (reserved, inactive), location, availability note
- [ ] No contact form — email is primary mechanism
- [ ] LinkedIn icon/link reserved but inactive until URL provided
- [ ] Add to index.astro
- [ ] Run `npm run dev` — verify contact renders, email link works
- [ ] `git commit -m "feat: create Contact section with email CTA"`

## Task 14: Create Footer Component

**Files:** `src/components/Footer.astro`

- [ ] Create Footer with: name and title, quick section links, email link, LinkedIn placeholder, copyright notice, availability note
- [ ] Add to index.astro
- [ ] Run `npm run dev` — verify footer renders
- [ ] `git commit -m "feat: create Footer component"`

## Task 15: Final Assembly and Section Order Verification

**Files:** `src/pages/index.astro`

- [ ] Verify index.astro imports all components in correct order: Header, Hero, Services, HowIWork, WhyWorkWithMe, SelectedProjects, Expertise, About, Contact, Footer
- [ ] Run `npm run dev` — scroll through entire page, verify all 8 sections render in correct order
- [ ] Verify smooth scroll navigation works (click nav links, verify correct section)
- [ ] `git commit -m "feat: complete homepage assembly"`

## Task 16: Responsive Design Verification

**Files:** No file changes — verification only

- [ ] Run `npm run dev`
- [ ] Test mobile viewport (< 640px): single column layouts, hamburger menu works, text readable, CTAs touch-friendly
- [ ] Test tablet viewport (640-1024px): 2-column grids, navigation accessible
- [ ] Test desktop viewport (> 1024px): 3-column service grid, full navigation, proper spacing
- [ ] Verify no horizontal scroll on any viewport
- [ ] Fix any responsive issues found

## Task 17: Accessibility Verification

**Files:** No file changes — verification only

- [ ] Run `npm run build && npm run preview`
- [ ] Verify skip-to-content link appears on tab
- [ ] Verify all images (when added) would have alt text
- [ ] Verify heading hierarchy (one h1, h2 per section, proper nesting)
- [ ] Verify all interactive elements are keyboard accessible
- [ ] Verify color contrast ratios meet WCAG 2.1 AA
- [ ] Run axe-core or Lighthouse accessibility audit
- [ ] Fix any issues found

## Task 18: SEO Verification

**Files:** `public/robots.txt`, `public/favicon.svg`

- [ ] Create robots.txt allowing all crawlers, referencing sitemap
- [ ] Create simple favicon.svg (text-based "H" or professional mark)
- [ ] Run `npm run build`
- [ ] Verify in dist/ output: meta tags present, canonical URL, Open Graph tags, Twitter Card tags, sitemap.xml generated, robots.txt present
- [ ] Verify Person structured data in HTML
- [ ] `git commit -m "feat: add robots.txt and favicon"`

## Task 19: Performance Verification

**Files:** No file changes — verification only

- [ ] Run `npm run build`
- [ ] Check dist/ output size — should be minimal (static HTML + small CSS)
- [ ] Run Lighthouse audit on built output
- [ ] Verify performance score 90+
- [ ] Verify no unnecessary JavaScript bundles
- [ ] Fix any performance issues

## Task 20: GitHub Pages Deployment Setup

**Files:** `.github/workflows/deploy.yml`, `astro.config.mjs`

- [ ] Update astro.config.mjs with correct site URL for GitHub Pages
- [ ] Create .github/workflows/deploy.yml for GitHub Actions deployment
- [ ] Verify build succeeds with `npm run build`
- [ ] Verify dist/ output is correct for GitHub Pages
- [ ] `git commit -m "feat: add GitHub Actions deployment workflow"`

## Task 21: Final Verification and Cleanup

**Files:** Various — cleanup only

- [ ] Run full build: `npm run build`
- [ ] Verify zero build errors
- [ ] Verify all sections render correctly
- [ ] Verify responsive design works
- [ ] Verify accessibility standards met
- [ ] Verify SEO meta tags present
- [ ] Verify no invented professional content
- [ ] Verify all pending content gracefully handled (empty states)
- [ ] Clean up any temporary files
- [ ] Final commit: `git commit -m "chore: final verification and cleanup"`

---

## Content Requirements (Not Implemented)

The following content items are required but not yet provided. They are marked in the data files as content requirements:

| Item | Location | Status |
|------|----------|--------|
| Service descriptions (6) | `src/data/services.json` | Required |
| Certifications | `src/components/Expertise.astro` | Pending |
| Project highlights (3-6) | `src/data/projects.json` | Pending |
| Professional headshot | `src/components/About.astro` | Pending |
| LinkedIn URL | `src/data/site.json` | Pending |

**Rule:** Do not invent, assume, or fabricate any professional information. All content comes from Hassan.
