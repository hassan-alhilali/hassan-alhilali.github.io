# Hassan Al-Hilali — Professional Personal Website Design Specification

**Date:** 2026-08-25
**Status:** Draft — Pending User Review
**Version:** 1.0

---

## 1. Project Overview

### 1.1 Purpose
Design and build a professional personal brand website for Hassan Mohammed Laziz Al-Hilali, a Planning & Project Controls Consultant. The website serves two purposes:

1. **Professional portfolio** — present expertise, services, and selected projects
2. **Business/consulting presence** — generate trust, provide contact channels, support professional engagement

### 1.2 Target Audience
- Oil & gas companies operating in Iraq
- Construction companies and contractors
- Engineering companies
- Project owners
- Project management organizations
- Recruiters
- Potential consulting clients

### 1.3 Professional Positioning
**Hassan Al-Hilali — Planning & Project Controls Consultant**

> Integrating planning, project controls, risk, and performance analytics to provide clearer project visibility and better decisions.

**Differentiator:** Integrated project controls — not isolated tools. Hassan connects planning, scheduling, cost control, risk, EVM, and reporting into one coherent methodology. This is not a Primavera P6 operator website; it is a strategic consulting presence.

---

## 2. Architecture

### 2.1 Approach
**Approach C: Hybrid** — Single-page homepage at launch, component-based architecture supporting future routes.

### 2.2 Rationale
- Launch fast with a complete, credible single-page experience
- Architecture supports adding `/projects`, `/services`, `/blog` routes later
- Component-based design ensures new pages reuse existing pieces
- No rebuild required for future expansion

### 2.3 Future Expansion Points
The architecture is designed to support these future routes. They are NOT built in the initial release — only the structural foundation is prepared:
- `/projects` — detailed project case studies
- `/services` — dedicated service pages with deeper content
- `/blog` — articles, insights, project learnings
- `/about` — expanded professional biography

**Note:** Initial release builds only the single-page homepage. Route support is architectural readiness only.

---

## 3. Technology Stack

### 3.1 Framework
- **Astro** — static site generator, island architecture
- **TypeScript** — type safety, better developer experience
- Optimal for content-heavy, performance-focused websites
- Built-in routing for future page expansion
- No React, Vue, or other UI frameworks in the initial release. Add only if a concrete requirement proves it necessary.

### 3.2 Styling
- **Tailwind CSS** — utility-first, consistent design system
- Custom color palette defined as Tailwind theme tokens

### 3.3 Deployment
- **GitHub Pages** — primary deployment target for initial release
- Static output — no server-side rendering required
- CI/CD via GitHub Actions for automated deployment
- Architecture supports migration to other static hosts (Vercel, Netlify) if needed later

---

## 4. Design System

### 4.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `charcoal` | #1A1A2E | Primary text, dark backgrounds, headers |
| `slate-gray` | #4A5568 | Secondary text, subtle UI elements |
| `off-white` | #F7F8FA | Page background, breathing space |
| `deep-blue` | #2563EB | Primary accent: CTAs, links, interactive highlights |
| `steel-blue` | #64748B | Borders, dividers, subtle structural UI |
| `success-green` | #16A34A | Success states only (form submission, confirmations) |
| `warm-gray` | #9CA3AF | Placeholders, inactive states, disabled elements |

### 4.2 Visual Language Rules
- No gradients
- No excessive decorative colors
- No generic "tech startup" aesthetics
- High contrast for accessibility
- Restrained, technical, professional
- Clean typography, generous whitespace

### 4.3 Typography
- Primary: System font stack or a professional sans-serif (e.g., Inter, IBM Plex Sans)
- Headings: Bold, charcoal
- Body: Regular weight, slate-gray for body text
- Monospace for technical emphasis if needed

### 4.4 Spacing & Layout
- Generous padding between sections
- Max content width: 1200px (responsive)
- Mobile-first responsive design
- Sections separated by clear visual boundaries (whitespace, subtle dividers)

---

## 5. Homepage Sections

The homepage is a single scrolling page with the following sections in order:

### 5.1 Hero

**Purpose:** First impression. Establish identity and value proposition immediately.

**Content:**
- Full name: "Hassan Mohammed Laziz Al-Hilali"
- Title: "Planning & Project Controls Consultant"
- Value proposition: "Integrating planning, project controls, risk, and performance analytics to provide clearer project visibility and better decisions."
- Primary CTA button: "Discuss a Project" → links to contact section
- Optional: headshot area (reserved for future, no placeholder image)

**Design:**
- Dark background (charcoal) or light background (off-white) — TBD during implementation
- Name in large, confident typography
- Title and value proposition in clear hierarchy
- CTA button in deep-blue accent
- Clean, uncluttered, confident

### 5.2 Services

**Purpose:** Clearly present the six core service offerings.

**Content — 6 service cards:**

1. **Planning & Scheduling**
   - Brief description of planning and scheduling services

2. **Cost Control & Earned Value Management (EVM)**
   - Brief description of cost control and EVM services

3. **Project Risk Management**
   - Brief description of risk management services

4. **Project Reporting & Power BI Dashboards**
   - Brief description of reporting and dashboard services

5. **Schedule Analysis & Recovery Planning**
   - Brief description of schedule analysis and recovery services

6. **Project Controls Systems & Setup**
   - Brief description of project controls setup services

**Design:**
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each card: icon/visual element + title + 1-2 sentence description
- Cards use off-white background with subtle border or shadow
- Consistent card heights

**Note:** Service descriptions require content writing. Marked as content requirement.

### 5.3 How I Work

**Purpose:** Show the integrated methodology — the core differentiator.

**Content:**
- Visual or structured representation of how planning, scheduling, cost control, risk, EVM, and reporting connect
- Show the flow: Planning → Execution → Monitoring → Reporting → Decision
- Emphasize that these are not isolated activities but an integrated system

**Design:**
- Option A: Horizontal flow diagram (text-based, not image)
- Option B: Connected cards/nodes showing relationships
- Option C: Structured text with visual connectors
- Keep it clear and technical, not marketing-heavy

**Note:** This section requires content writing about the methodology. Marked as content requirement.

### 5.4 Why Work With Me

**Purpose:** Genuine differentiators, not marketing fluff.

**Content — 3-4 key points:**

1. **Integrated approach** — not a P6 operator, but a controls strategist who connects all disciplines
2. **Breadth of skills** — planning, cost, risk, reporting in one consultant
3. **Data-driven decisions** — turning project data into actionable information
4. **Industry focus** — oil & gas and construction domain knowledge

**Design:**
- Clean layout with icon + heading + brief explanation for each point
- No exaggerated claims, no invented metrics
- Honest, confident tone

### 5.5 Selected Projects

**Purpose:** Demonstrate credibility through real project experience.

**Content:**
- 3-6 project cards (number depends on content provided)
- Each card: project name, sector, role, 1-2 sentence scope/outcome
- "View more projects" link for future expansion to dedicated /projects page

**Content status:** PENDING — awaiting verified project information from Hassan. Do not invent project names, employers, roles, or outcomes.

**Design:**
- Card layout with clear hierarchy
- Sector tags/badges
- Consistent card structure
- Placeholder state for when no projects are provided (graceful empty state)

### 5.6 Expertise

**Purpose:** Present certifications, tools, and sector experience.

**Content:**

**Certifications:**
- PENDING — awaiting verified certifications from Hassan
- Display as badge/card layout when provided

**Tools & Software:**
- Core Project Controls: Primavera P6, Microsoft Project, Microsoft Excel, Power BI
- Data, Analytics & Automation: Python, SQL/SQLite, PowerShell
- Display as supporting capabilities, not primary services

**Industry Sectors:**
- Oil & Gas
- Construction

**Design:**
- Tool badges or icon grid
- Sector tags
- Certifications section (reserved, shown when content is provided)
- Clean, scannable layout

### 5.7 About

**Purpose:** Brief professional summary, human tone.

**Content:**
- Professional summary (approved text)
- Optional: headshot area (reserved for future)
- Keep it concise, not a full biography

**Approved text:**
> I help project teams improve planning, project controls, and project performance through an integrated approach that connects scheduling, cost control, risk, EVM, and reporting. My focus is on turning project data into clear, actionable information that supports better decisions throughout the project lifecycle.

**Design:**
- Split layout: text on one side, optional headshot area on the other
- Text-first, image optional
- Warm but professional tone

### 5.8 Contact

**Purpose:** Provide clear contact channels and primary CTA.

**Content:**
- Primary CTA: "Discuss a Project" → `mailto:` link to professional email
- Email: hassan268@gmail.com (primary contact mechanism)
- LinkedIn: Reserved — link to be added when profile is created
- Location: Nasiriyah, Dhi Qar, Iraq
- Availability note: Available for international projects and remote consulting

**Design:**
- Email as primary contact mechanism via `mailto:` link
- Clean layout with contact details
- LinkedIn icon (reserved, inactive until URL provided)
- Location with optional map context (subtle)
- **No contact form in initial release** — architecture ready for future form addition
- Contact section uses a clear "Email me" or "Discuss a Project" CTA linking to email

---

## 6. Navigation

### 6.1 Sticky Header
- Site name/logo: "Hassan Al-Hilali"
- Navigation links: Services | Expertise | Projects | About | Contact
- CTA button: "Discuss a Project"
- Sticky on scroll, subtle background on scroll

### 6.2 Mobile Navigation
- Hamburger menu
- Same links as desktop
- CTA button visible in mobile nav

### 6.3 Footer
- Name and title
- Quick links to sections
- Email link
- LinkedIn placeholder
- Copyright notice
- "Available for international projects and remote consulting"

---

## 7. Responsive Design

### 7.1 Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 7.2 Mobile-First
- Design starts at mobile, scales up
- Touch-friendly CTAs
- Readable without zooming
- Single-column layout on mobile

### 7.3 Performance
- Static output — inherently fast load times
- Target excellent Lighthouse performance score (90+)
- Fast initial rendering — content visible without waiting for JavaScript
- Optimized images (when added) — proper sizing, compression, lazy loading
- Minimal JavaScript — Astro island architecture keeps JS bundle small
- No heavy frameworks or unnecessary dependencies

---

## 8. SEO & Meta

### 8.1 Meta Tags
- Title: "Hassan Al-Hilali — Planning & Project Controls Consultant"
- Description: Based on value proposition
- Canonical URL: set to deployed URL
- Open Graph tags for social sharing (og:title, og:description, og:image, og:url)
- Twitter Card tags (twitter:card, twitter:title, twitter:description)

### 8.2 Structured Data
- **Person schema** — primary structured data for professional identity
- ProfessionalService schema (optional, future)

### 8.3 Sitemap & Crawlability
- Auto-generated `sitemap.xml` via Astro
- `robots.txt` allowing crawling of all public pages
- Canonical URLs on all pages to prevent duplicate content

### 8.4 Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ARIA landmarks where appropriate
- Meaningful link text (no "click here")

### 8.5 Internationalization Readiness
- Initial launch language: **English**
- Architecture must support adding Arabic version later
- Use semantic HTML and content separation to enable future `lang` attribute switching
- URL structure ready for potential `/en/` and `/ar/` prefixes
- Text content in component templates, not hardcoded in styles or scripts

---

## 9. Accessibility

### 9.1 Requirements
- WCAG 2.1 AA compliance
- Sufficient color contrast (charcoal on off-white = high contrast)
- Semantic HTML structure
- Keyboard navigation support
- Alt text for images (when added)
- Skip-to-content link

---

## 10. Content Requirements (Pending)

The following content items are required but not yet provided. The website will be built with graceful placeholder states for these sections.

| Item | Status | Notes |
|------|--------|-------|
| Certifications | Pending | Awaiting verified list from Hassan |
| Project highlights (3-6) | Pending | Awaiting verified project information |
| Service descriptions | Required | Brief 1-2 sentence descriptions for each of the 6 services |
| How I Work methodology content | Required | Description of the integrated approach |
| Why Work With Me content | Required | 3-4 genuine differentiator points |
| Professional headshot | Pending | Reserve location, no placeholder image |
| LinkedIn URL | Pending | Reserve location, inactive until profile created |

**Rule:** Do not invent, assume, or fabricate any professional information. All content comes from Hassan. Pending items are explicitly marked and will be filled in a later update.

---

## 11. File Structure (Proposed)

```
hassan-website/
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-08-25-hassan-website-design.md
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── HowIWork.astro
│   │   ├── WhyWorkWithMe.astro
│   │   ├── SelectedProjects.astro
│   │   ├── Expertise.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── data/
│       ├── services.json
│       ├── projects.json
│       └── tools.json
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

---

## 12. Success Criteria

1. Website launches with all 8 homepage sections complete
2. All approved content is accurately represented
3. No invented professional information
4. Responsive across mobile, tablet, desktop
5. Excellent Lighthouse performance score (90+)
6. Accessible (WCAG 2.1 AA)
7. Clean, professional, modern design matching approved palette
8. Architecture supports future route expansion without rebuild
9. Architecture supports future Arabic version without restructuring
10. Contact CTA is prominent and functional (email-based)
11. Pending content sections degrade gracefully (no broken layouts)
12. Deployed successfully to GitHub Pages

---

## 13. Constraints

- Do not invent certifications, employers, achievements, metrics, or professional history
- Treat pending content as explicit content requirements for a later update
- Keep LinkedIn as a reserved placeholder until the profile is created
- Keep the headshot area optional and ready for future addition
- Maintain the approved color palette and restrained visual language
- No gradients, no excessive decorative colors, no generic tech startup aesthetics
- Six services only — do not add services not explicitly confirmed by Hassan
- Two sectors only: Oil & Gas, Construction
- **No React or UI frameworks** in the initial release — Astro + TypeScript + Tailwind only
- **No contact form** in the initial release — email is the primary contact mechanism
- **No future routes** built in the initial release — only architectural readiness
- **English only** for initial launch — architecture ready for future Arabic version
- **GitHub Pages** as the primary deployment target

---

## 14. Approval

- [ ] Design specification reviewed and approved by Hassan
- [ ] Content requirements acknowledged
- [ ] Ready to proceed to implementation planning
