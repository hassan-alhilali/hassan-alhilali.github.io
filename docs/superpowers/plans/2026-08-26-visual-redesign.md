# Hassan Al-Hilali Website — Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the visual experience of the existing Hassan Al-Hilali professional website to achieve Apple-level premium visual quality — minimal, typography-driven, spacious, editorial, and calm — without changing content, architecture, or technology stack.

**Architecture:** Visual-only overhaul of 13 Astro/Tailwind files. Add a lightweight CSS animation system and a single IntersectionObserver script. All content and data files remain untouched.

**Tech Stack:** Astro 5, Tailwind CSS 3, vanilla JavaScript, Inter font (Google Fonts)

**Spec:** N/A — design direction approved in conversation

## Global Constraints

- **Content:** Zero content changes. All text, data, and professional positioning preserved exactly.
- **Stack:** Astro + TypeScript + Tailwind only. No React, Vue, or UI frameworks.
- **Colors:** Use only: Charcoal #1A1A2E, Slate Gray #4A5568, Off-White #F7F8FA, Deep Blue #2563EB, Steel Blue #64748B, Success Green #16A34A, Warm Gray #9CA3AF. No gradients.
- **Font:** Inter via Google Fonts. Weights: 400, 500, 600. Weight 700 permitted only for Hero name.
- **Animation:** CSS transitions/keyframes + IntersectionObserver only. No animation libraries.
- **Accessibility:** WCAG 2.1 AA. Respect `prefers-reduced-motion: reduce`.
- **Performance:** Lighthouse 90+. No render-blocking resources added.
- **Deployment:** GitHub Pages compatible. No server-side features.
- **Responsive:** Mobile-first. Must work on mobile, tablet, and desktop.

---

## File Map

| # | File | Action | Purpose |
|---|------|--------|---------|
| 1 | `tailwind.config.ts` | Modify | Refined spacing, font weights, max-width, animation utilities |
| 2 | `src/styles/global.css` | Modify | Base typography, animation keyframes, scroll-reveal system, reduced-motion |
| 3 | `src/layouts/Layout.astro` | Modify | IntersectionObserver script, enhanced font loading |
| 4 | `src/components/Header.astro` | Modify | Thinner nav, blur refinement, outline CTA, smoother scroll |
| 5 | `src/components/Hero.astro` | Modify | Large typography, staggered fade-up animation, stronger hierarchy |
| 6 | `src/components/Services.astro` | Modify | Editorial list layout replacing card grid |
| 7 | `src/components/HowIWork.astro` | Modify | Horizontal methodology flow with scroll reveal |
| 8 | `src/components/WhyWorkWithMe.astro` | Modify | Large numbered editorial points replacing feature cards |
| 9 | `src/components/SelectedProjects.astro` | Modify | Minor layout refinement, preserve empty state |
| 10 | `src/components/Expertise.astro` | Modify | Clean typography lists replacing badges/checkmarks |
| 11 | `src/components/About.astro` | Modify | Editorial two-column composition, refined photo area |
| 12 | `src/components/Contact.astro` | Modify | Strong closing statement with large typography |
| 13 | `src/components/Footer.astro` | Modify | Simplified, restrained layout |

**Not modified:** `src/pages/index.astro`, `src/types/index.ts`, `src/data/*.json`, `astro.config.mjs`, `tsconfig.json`, `package.json`

---

## Task 1: Tailwind Configuration

**Files:**
- Modify: `tailwind.config.ts`

**Purpose:** Establish design tokens — refined spacing scale, font weights, tighter max-width, and transition utilities all components will reference.

### Step 1: Update tailwind.config.ts

Replace the entire file with:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A2E',
        'slate-gray': '#4A5568',
        'off-white': '#F7F8FA',
        'deep-blue': '#2563EB',
        'steel-blue': '#64748B',
        'success-green': '#16A34A',
        'warm-gray': '#9CA3AF',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1100px',
        prose: '680px',
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'hero-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'section-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};

export default config;
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build completes without errors.

### Step 3: Commit

```bash
git add tailwind.config.ts
git commit -m "refactor: update Tailwind config with premium typography and spacing tokens"
```

---

## Task 2: Global CSS

**Files:**
- Modify: `src/styles/global.css`

**Purpose:** Define the base typographic layer, scroll-reveal animation keyframes, stagger delay utilities, hero entrance animations, and the `prefers-reduced-motion` override.

### Step 1: Replace global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-off-white text-charcoal font-sans;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply text-charcoal font-semibold;
  }

  a {
    @apply transition-colors duration-200;
  }

  ::selection {
    background: rgba(37, 99, 235, 0.15);
  }
}

@layer components {
  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1),
                transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  .stagger-1 { transition-delay: 0ms; }
  .stagger-2 { transition-delay: 100ms; }
  .stagger-3 { transition-delay: 200ms; }
  .stagger-4 { transition-delay: 300ms; }
  .stagger-5 { transition-delay: 400ms; }
  .stagger-6 { transition-delay: 500ms; }

  .hero-animate {
    opacity: 0;
    transform: translateY(24px);
    animation: heroFadeUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  }

  .hero-animate-delay-1 { animation-delay: 150ms; }
  .hero-animate-delay-2 { animation-delay: 300ms; }
  .hero-animate-delay-3 { animation-delay: 450ms; }
  .hero-animate-delay-4 { animation-delay: 600ms; }

  @keyframes heroFadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .line-reveal {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .line-reveal.revealed {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  .hero-animate {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }

  .line-reveal {
    transform: none !important;
    transition: none !important;
  }

  html {
    scroll-behavior: auto;
  }
}
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds, no CSS errors.

### Step 3: Commit

```bash
git add src/styles/global.css
git commit -m "feat: add premium typography base and scroll-reveal animation system"
```

---

## Task 3: Layout Script

**Files:**
- Modify: `src/layouts/Layout.astro`

**Purpose:** Add the IntersectionObserver that powers all scroll-reveal animations site-wide. Add `font-display: swap` link for Inter. Keep all existing meta/SEO tags unchanged.

### Step 1: Replace Layout.astro

```astro
---
export interface Props {
  title?: string;
  description?: string;
  canonicalURL?: string;
  ogImage?: string;
}

const {
  title = "Hassan Al-Hilali | Planning & Project Controls Consultant",
  description = "Integrating planning, project controls, risk, and performance analytics to provide clearer project visibility and better decisions.",
  canonicalURL = "https://hassanalhilali.com",
  ogImage = "/og-image.png"
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />

    <link rel="canonical" href={canonicalURL} />

    <title>{title}</title>

    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:image" content={ogImage} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- Google Fonts - Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <a href="#main-content" class="skip-link">Skip to content</a>
    <main id="main-content">
      <slot />
    </main>
  </body>
</html>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #1A1A2E;
    color: white;
    padding: 8px 16px;
    z-index: 100;
    font-size: 0.875rem;
    text-decoration: none;
    border-radius: 0 0 4px 0;
  }

  .skip-link:focus {
    top: 0;
  }
</style>

<script>
  // IntersectionObserver for scroll-reveal animations
  function initScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = document.querySelectorAll('.scroll-reveal');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // Line reveal for How I Work connectors
  function initLineReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lines = document.querySelectorAll('.line-reveal');
    if (lines.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    lines.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initLineReveal();
  });
</script>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add IntersectionObserver for scroll-reveal animations"
```

---

## Task 4: Header Navigation

**Files:**
- Modify: `src/components/Header.astro`

**Purpose:** Create a refined Apple-like minimal header — thinner height, backdrop-blur, outline CTA, smoother scroll shadow behavior, and a polished mobile menu.

### Step 1: Replace Header.astro

```astro
---
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const ctaLabel = 'Discuss a Project';
const ctaEmail = 'hassan268@gmail.com';
const siteName = 'Hassan Al-Hilali';
---

<header id="site-header" class="fixed top-0 left-0 right-0 z-50 bg-off-white/80 backdrop-blur-md border-b border-transparent transition-all duration-300" aria-label="Site header">
  <nav class="max-w-content mx-auto flex items-center justify-between px-6 lg:px-8 h-14 lg:h-16" aria-label="Main navigation">
    <a href="/" class="text-base font-semibold text-charcoal tracking-tight hover:text-deep-blue transition-colors" aria-label={`${siteName} - Home`}>
      {siteName}
    </a>

    <ul class="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <li>
          <a href={link.href} class="text-sm font-medium text-slate-gray hover:text-charcoal transition-colors duration-200">
            {link.label}
          </a>
        </li>
      ))}
    </ul>

    <a
      href={`mailto:${ctaEmail}`}
      class="hidden lg:inline-flex items-center px-5 py-2 text-sm font-medium text-charcoal border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2"
      aria-label={`${ctaLabel} via email`}
    >
      {ctaLabel}
    </a>

    <button
      id="mobile-menu-toggle"
      type="button"
      class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-gray hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-charcoal"
      aria-expanded="false"
      aria-controls="mobile-menu"
      aria-label="Toggle navigation menu"
    >
      <svg id="menu-icon-open" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <svg id="menu-icon-close" class="h-5 w-5 hidden" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </nav>

  <div id="mobile-menu" class="lg:hidden hidden border-t border-gray-100 bg-off-white/95 backdrop-blur-md" aria-label="Mobile navigation">
    <div class="px-6 pt-4 pb-6 space-y-1">
      {navLinks.map((link) => (
        <a
          href={link.href}
          class="flex items-center px-3 py-3 min-h-[44px] text-base font-medium text-slate-gray hover:text-charcoal transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
      <a
        href={`mailto:${ctaEmail}`}
        class="flex items-center justify-center mt-4 px-4 py-3 min-h-[44px] text-sm font-medium text-charcoal border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-white transition-all duration-200"
        aria-label={`${ctaLabel} via email`}
      >
        {ctaLabel}
      </a>
    </div>
  </div>
</header>

<script>
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    if (mobileMenu && toggle && iconOpen && iconClose) {
      mobileMenu.classList.toggle('hidden', !menuOpen);
      iconOpen.classList.toggle('hidden', menuOpen);
      iconClose.classList.toggle('hidden', !menuOpen);
      toggle.setAttribute('aria-expanded', String(menuOpen));
    }
  }

  if (toggle) {
    toggle.addEventListener('click', toggleMenu);
  }

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('shadow-sm');
      header.style.borderBottomColor = 'rgba(0,0,0,0.06)';
    } else {
      header.classList.remove('shadow-sm');
      header.style.borderBottomColor = 'transparent';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
</script>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/Header.astro
git commit -m "refactor: redesign header with minimal Apple-like navigation"
```

---

## Task 5: Hero Section

**Files:**
- Modify: `src/components/Hero.astro`

**Purpose:** Make the hero the strongest visual moment — significantly larger typography, generous whitespace, staggered CSS entrance animations, minimal composition.

### Step 1: Replace Hero.astro

```astro
---
import siteData from '../data/site.json';
---

<section id="hero" class="bg-charcoal text-white pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-48 lg:py-40" aria-label="Hero section">
  <div class="max-w-content mx-auto px-6 lg:px-8">
    <h1 class="text-hero-sm sm:text-hero font-bold tracking-tight mb-5 hero-animate">
      {siteData.fullName}
    </h1>

    <p class="text-lg sm:text-xl text-warm-gray font-medium mb-6 max-w-xl hero-animate hero-animate-delay-1">
      {siteData.title}
    </p>

    <p class="text-base sm:text-lg text-slate-gray max-w-prose mb-10 leading-relaxed hero-animate hero-animate-delay-2">
      {siteData.valueProposition}
    </p>

    <a
      href="#contact"
      class="inline-flex items-center px-7 py-3.5 text-base font-medium text-white bg-deep-blue rounded-full hover:bg-deep-blue/85 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 focus:ring-offset-charcoal hero-animate hero-animate-delay-3"
    >
      Discuss a Project
    </a>
  </div>
</section>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/Hero.astro
git commit -m "refactor: redesign hero with large typography and staggered animation"
```

---

## Task 6: Services Section

**Files:**
- Modify: `src/components/Services.astro`

**Purpose:** Replace the card grid with an editorial single-column layout — large titles, short descriptions, subtle dividers, generous spacing. No cards, no shadows, no icons.

### Step 1: Replace Services.astro

```astro
---
import type { Service } from '../types/index';
import servicesData from '../data/services.json';

const services: Service[] = servicesData;
---

<section id="services" class="bg-off-white pt-24 pb-24 lg:pt-40 lg:pb-40" aria-labelledby="services-heading">
  <div class="max-w-content mx-auto px-6 lg:px-8">
    <div class="mb-16 lg:mb-20">
      <h2 id="services-heading" class="text-section-sm sm:text-section font-semibold tracking-tight mb-4 scroll-reveal">
        Services
      </h2>
      <p class="text-lg text-slate-gray max-w-prose scroll-reveal stagger-1">
        Specialized project controls solutions tailored to your needs.
      </p>
    </div>

    <div class="space-y-0">
      {services.map((service, index) => (
        <article class={`py-8 lg:py-10 ${index > 0 ? 'border-t border-charcoal/10' : ''} scroll-reveal stagger-${Math.min(index + 1, 6)}`}>
          <h3 class="text-xl sm:text-2xl font-semibold text-charcoal mb-3 tracking-tight">
            {service.title}
          </h3>
          <p class="text-slate-gray leading-relaxed max-w-prose">
            {service.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/Services.astro
git commit -m "refactor: redesign services as editorial list replacing card grid"
```

---

## Task 7: How I Work Section

**Files:**
- Modify: `src/components/HowIWork.astro`

**Purpose:** Create a clean horizontal methodology sequence on desktop with subtle connecting lines, large step numbers, and scroll-triggered sequential reveal. Vertical stack on mobile.

### Step 1: Replace HowIWork.astro

```astro
---
const steps = [
  { number: 1, title: 'Planning', description: 'Define scope, objectives, and project controls framework tailored to your needs.' },
  { number: 2, title: 'Execution', description: 'Implement scheduling, cost management, and risk systems with precision.' },
  { number: 3, title: 'Monitoring', description: 'Track performance against baselines with real-time data and earned value metrics.' },
  { number: 4, title: 'Reporting', description: 'Deliver clear, actionable reports that give stakeholders confidence and visibility.' },
  { number: 5, title: 'Decision', description: 'Enable data-driven decisions that keep projects on time and on budget.' },
];
---

<section id="how-i-work" class="bg-white pt-24 pb-24 lg:pt-40 lg:pb-40" aria-labelledby="how-i-work-heading">
  <div class="max-w-content mx-auto px-6 lg:px-8">
    <div class="mb-16 lg:mb-20">
      <h2 id="how-i-work-heading" class="text-section-sm sm:text-section font-semibold tracking-tight mb-4 scroll-reveal">
        How I Work
      </h2>
      <p class="text-lg text-slate-gray max-w-prose scroll-reveal stagger-1">
        A structured methodology that delivers clarity and control at every stage of your project.
      </p>
    </div>

    <!-- Desktop: Horizontal layout -->
    <ol class="hidden md:flex items-start gap-0 relative" aria-label="Methodology steps">
      {steps.map((step, index) => (
        <li class={`flex-1 flex flex-col text-left relative scroll-reveal stagger-${index + 1}`}>
          <span class="text-sm font-medium text-deep-blue mb-3 tracking-wide uppercase" aria-hidden="true">
            0{step.number}
          </span>

          {index < steps.length - 1 && (
            <div class="hidden md:block absolute top-3 left-[calc(100%-1rem)] w-[calc(100%-0rem)] h-px bg-charcoal/10 line-reveal" aria-hidden="true"></div>
          )}

          <h3 class="text-xl font-semibold text-charcoal mb-2 tracking-tight">
            {step.title}
          </h3>
          <p class="text-sm text-slate-gray leading-relaxed pr-6">
            {step.description}
          </p>
        </li>
      ))}
    </ol>

    <!-- Mobile: Vertical layout -->
    <ol class="md:hidden space-y-10" aria-label="Methodology steps">
      {steps.map((step, index) => (
        <li class={`flex gap-5 scroll-reveal stagger-${index + 1}`}>
          <span class="text-sm font-medium text-deep-blue tracking-wide uppercase flex-shrink-0 mt-0.5" aria-hidden="true">
            0{step.number}
          </span>
          <div>
            <h3 class="text-lg font-semibold text-charcoal mb-1.5 tracking-tight">
              {step.title}
            </h3>
            <p class="text-sm text-slate-gray leading-relaxed">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </div>
</section>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/HowIWork.astro
git commit -m "refactor: redesign methodology as horizontal sequence with scroll reveal"
```

---

## Task 8: Why Work With Me Section

**Files:**
- Modify: `src/components/WhyWorkWithMe.astro`

**Purpose:** Replace the 2x2 feature card grid with large numbered editorial points — large number, strong heading, short supporting text. No cards, no checkmark icons, generous vertical spacing.

### Step 1: Replace WhyWorkWithMe.astro

```astro
---
const differentiators = [
  {
    number: '01',
    title: 'Integrated Approach',
    description: 'Connecting planning, cost, risk, and reporting into a unified controls framework that eliminates silos and drives alignment across your project team.',
  },
  {
    number: '02',
    title: 'Breadth of Skills',
    description: 'Deep expertise across scheduling, cost management, earned value, and risk analysis — providing end-to-end project controls under one point of accountability.',
  },
  {
    number: '03',
    title: 'Data-Driven Decisions',
    description: 'Every recommendation grounded in quantitative analysis, earned value metrics, and trend data — not assumptions or intuition.',
  },
  {
    number: '04',
    title: 'Industry Focus',
    description: 'Specialized experience in Oil & Gas and Construction, understanding the unique regulatory, safety, and operational demands of capital-intensive industries.',
  },
];
---

<section id="why-work-with-me" class="bg-white pt-24 pb-24 lg:pt-40 lg:pb-40" aria-labelledby="why-work-with-me-heading">
  <div class="max-w-content mx-auto px-6 lg:px-8">
    <div class="mb-16 lg:mb-20">
      <h2 id="why-work-with-me-heading" class="text-section-sm sm:text-section font-semibold tracking-tight mb-4 scroll-reveal">
        Why Work With Me
      </h2>
      <p class="text-lg text-slate-gray max-w-prose scroll-reveal stagger-1">
        What sets my approach apart and why clients trust me with their most complex projects.
      </p>
    </div>

    <div class="space-y-12 lg:space-y-16">
      {differentiators.map((item, index) => (
        <article class={`scroll-reveal stagger-${index + 1}`}>
          <span class="text-deep-blue font-semibold text-sm tracking-wider" aria-hidden="true">
            {item.number}
          </span>
          <h3 class="text-xl sm:text-2xl font-semibold text-charcoal mt-2 mb-3 tracking-tight">
            {item.title}
          </h3>
          <p class="text-slate-gray leading-relaxed max-w-prose">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/WhyWorkWithMe.astro
git commit -m "refactor: redesign differentiators as large numbered editorial points"
```

---

## Task 9: Selected Projects Section

**Files:**
- Modify: `src/components/SelectedProjects.astro`

**Purpose:** Minor layout refinement to match the new section spacing and typography. Preserve the existing empty state exactly. Design for future projects to appear as large editorial entries rather than cards.

### Step 1: Replace SelectedProjects.astro

```astro
---
import projects from '../data/projects.json';
import sectors from '../data/sectors.json';

function getSectorName(sectorId: string): string {
  const sector = sectors.find((s) => s.id === sectorId);
  return sector ? sector.name : sectorId;
}
---

<section id="projects" class="bg-off-white pt-24 pb-24 lg:pt-40 lg:pb-40" aria-labelledby="projects-heading">
  <div class="max-w-content mx-auto px-6 lg:px-8">
    <div class="mb-16 lg:mb-20">
      <h2 id="projects-heading" class="text-section-sm sm:text-section font-semibold tracking-tight mb-4 scroll-reveal">
        Selected Projects
      </h2>
      <p class="text-lg text-slate-gray max-w-prose scroll-reveal stagger-1">
        A selection of projects showcasing my expertise across various sectors and project scales.
      </p>
    </div>

    {projects.length === 0 ? (
      <div class="py-12 scroll-reveal stagger-2">
        <p class="text-steel-blue text-lg">Project details coming soon.</p>
      </div>
    ) : (
      <div class="space-y-0">
        {projects.map((project, index) => (
          <article class={`py-8 lg:py-10 ${index > 0 ? 'border-t border-charcoal/10' : ''} scroll-reveal stagger-${Math.min(index + 1, 6)}`}>
            <span class="text-deep-blue text-sm font-medium" aria-hidden="true">
              {getSectorName(project.sector)}
            </span>
            <h3 class="text-xl sm:text-2xl font-semibold text-charcoal mt-2 mb-3 tracking-tight">
              {project.name}
            </h3>
            <p class="text-slate-gray mb-1">
              <span class="font-medium text-charcoal">Role:</span> {project.role}
            </p>
            <p class="text-slate-gray leading-relaxed max-w-prose">
              <span class="font-medium text-charcoal">Scope:</span> {project.scope}
            </p>
          </article>
        ))}
      </div>
    )}
  </div>
</section>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds. Empty state preserved.

### Step 3: Commit

```bash
git add src/components/SelectedProjects.astro
git commit -m "refactor: refine projects section layout and typography"
```

---

## Task 10: Expertise Section

**Files:**
- Modify: `src/components/Expertise.astro`

**Purpose:** Replace badge/tag styling with clean typography and grouped lists. Remove checkmark icons. No visual badges for sectors. Minimal and clean.

### Step 1: Replace Expertise.astro

```astro
---
import tools from '../data/tools.json';
import sectors from '../data/sectors.json';

const coreTools = tools.filter(tool => tool.category === 'core');
const dataTools = tools.filter(tool => tool.category === 'data');
---

<section id="expertise" class="bg-white pt-24 pb-24 lg:pt-40 lg:pb-40" aria-labelledby="expertise-heading">
  <div class="max-w-content mx-auto px-6 lg:px-8">
    <div class="mb-16 lg:mb-20">
      <h2 id="expertise-heading" class="text-section-sm sm:text-section font-semibold tracking-tight mb-4 scroll-reveal">
        Expertise
      </h2>
      <p class="text-lg text-slate-gray max-w-prose scroll-reveal stagger-1">
        Tools, certifications, and industry experience I bring to every engagement.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
      <article class="scroll-reveal stagger-2">
        <h3 class="text-xl font-semibold text-charcoal mb-4 tracking-tight">Core Project Controls</h3>
        <ul class="space-y-2">
          {coreTools.map(tool => (
            <li class="text-slate-gray text-base">
              {tool.name}
            </li>
          ))}
        </ul>
      </article>

      <article class="scroll-reveal stagger-3">
        <h3 class="text-xl font-semibold text-charcoal mb-4 tracking-tight">Data &amp; Analytics</h3>
        <ul class="space-y-2">
          {dataTools.map(tool => (
            <li class="text-slate-gray text-base">
              {tool.name}
            </li>
          ))}
        </ul>
      </article>
    </div>

    <article class="mb-16 scroll-reveal stagger-4">
      <h3 class="text-xl font-semibold text-charcoal mb-4 tracking-tight">Industry Sectors</h3>
      <p class="text-slate-gray text-base">
        {sectors.map(sector => sector.name).join(' / ')}
      </p>
    </article>

    <article class="scroll-reveal stagger-5">
      <h3 class="text-xl font-semibold text-charcoal mb-2 tracking-tight">Certifications</h3>
      <p class="text-slate-gray">Certifications coming soon.</p>
    </article>
  </div>
</section>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/Expertise.astro
git commit -m "refactor: redesign expertise as clean typography lists"
```

---

## Task 11: About Section

**Files:**
- Modify: `src/components/About.astro`

**Purpose:** Refine the two-column editorial composition — large heading on one side, professional summary on the other. Make the photo placeholder area visually elegant with a subtle border instead of a gray fill.

### Step 1: Replace About.astro

```astro
---
import siteData from '../data/site.json';
---

<section id="about" class="bg-off-white pt-24 pb-24 lg:pt-40 lg:pb-40" aria-labelledby="about-heading">
  <div class="max-w-content mx-auto px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
      <article class="scroll-reveal">
        <h2 id="about-heading" class="text-section-sm sm:text-section font-semibold tracking-tight mb-6">
          About Me
        </h2>
        <p class="text-base sm:text-lg text-slate-gray leading-relaxed">
          {siteData.summary}
        </p>
      </article>

      <div class="flex justify-start md:justify-end scroll-reveal stagger-1">
        <div
          class="w-56 h-56 lg:w-64 lg:h-64 border border-charcoal/10 rounded-sm flex items-center justify-center"
          role="img"
          aria-label="Professional headshot placeholder"
        >
          <span class="text-warm-gray text-sm">Photo</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/About.astro
git commit -m "refactor: refine about section editorial composition"
```

---

## Task 12: Contact Section

**Files:**
- Modify: `src/components/Contact.astro`

**Purpose:** Transform the contact section into a strong closing statement — large typography for the heading, prominent email CTA, minimal composition.

### Step 1: Replace Contact.astro

```astro
---
import siteData from '../data/site.json';
---

<section id="contact" class="bg-white pt-24 pb-24 lg:pt-40 lg:pb-40" aria-labelledby="contact-heading">
  <div class="max-w-content mx-auto px-6 lg:px-8">
    <div class="max-w-prose">
      <h2 id="contact-heading" class="text-section-sm sm:text-section font-semibold tracking-tight mb-8 scroll-reveal">
        Discuss a Project
      </h2>

      <div class="space-y-6 scroll-reveal stagger-1">
        <a
          href={`mailto:${siteData.email}`}
          class="inline-block text-deep-blue text-lg sm:text-xl font-medium border-b border-deep-blue/30 pb-1 hover:border-deep-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2"
        >
          {siteData.email}
        </a>

        <div class="text-slate-gray space-y-1">
          <p>{siteData.location}</p>
          <p>{siteData.availability}</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/Contact.astro
git commit -m "refactor: redesign contact as strong closing statement"
```

---

## Task 13: Footer

**Files:**
- Modify: `src/components/Footer.astro`

**Purpose:** Simplify the footer — restrained layout, clean horizontal arrangement on desktop, minimal visual elements.

### Step 1: Replace Footer.astro

```astro
---
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const ctaLabel = 'Discuss a Project';
const ctaEmail = 'hassan268@gmail.com';
const siteName = 'Hassan Al-Hilali';
const currentYear = new Date().getFullYear();
---

<footer class="bg-charcoal text-white" role="contentinfo">
  <div class="max-w-content mx-auto px-6 lg:px-8 py-12 lg:py-16">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div>
        <a href="/" class="text-base font-semibold tracking-tight hover:text-gray-300 transition-colors">
          {siteName}
        </a>
        <p class="mt-2 text-sm text-gray-400">
          &copy; {currentYear} {siteName}. All rights reserved.
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <ul class="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li>
              <a
                href={link.href}
                class="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href={`mailto:${ctaEmail}`}
          class="inline-flex items-center px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white hover:text-charcoal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-charcoal"
          aria-label={`${ctaLabel} via email`}
        >
          {ctaLabel}
        </a>
        <a
          href="#"
          class="text-sm text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-charcoal"
          aria-label="Back to top"
        >
          Back to top &uarr;
        </a>
      </div>
    </div>
  </div>
</footer>
```

### Step 2: Verify build

Run: `npm run build`
Expected: Build succeeds.

### Step 3: Commit

```bash
git add src/components/Footer.astro
git commit -m "refactor: simplify footer with restrained minimal layout"
```

---

## Task 14: Final Build and Verification

**Purpose:** Run the full build, verify there are no errors, and confirm the site is ready for visual inspection.

### Step 1: Clean build

```bash
npm run build
```

Expected: Build completes with no errors, no warnings related to our changes.

### Step 2: Verify no content changes

Run a diff check to confirm no data files or text content were modified:

```bash
git diff --name-only HEAD~13
```

Expected: Only the 13 files listed in the File Map appear. No JSON files, no `index.astro`, no `types/index.ts`, no config files beyond `tailwind.config.ts`.

### Step 3: Start preview server

```bash
npm run preview
```

Manual verification checklist:
- [ ] Hero: Large typography, staggered animation fires on page load
- [ ] Header: Thinner, backdrop-blur, outline CTA, shadow on scroll
- [ ] Services: Editorial list, no cards, subtle dividers
- [ ] How I Work: Horizontal flow on desktop, vertical on mobile, sequential reveal
- [ ] Why Work With Me: Large numbered points, no cards
- [ ] Projects: Empty state preserved, layout matches new style
- [ ] Expertise: Clean lists, no badges, no checkmark icons
- [ ] About: Two-column editorial, photo area has subtle border
- [ ] Contact: Large heading, email as underlined link
- [ ] Footer: Simplified horizontal layout
- [ ] Scroll animations: Sections fade in as they enter viewport
- [ ] Reduced motion: Disable animations in OS settings, reload — all content visible
- [ ] Mobile: All sections readable, stacked layout, no horizontal overflow
- [ ] Tablet: Intermediate layout works correctly

### Step 4: Final commit

```bash
git add -A
git commit -m "chore: final verification build"
```

---

## Self-Review Checklist

After writing this plan, verify:

1. **Spec coverage:** Every section from the design direction is addressed in a task
2. **No content changes:** All JSON data files, professional text, and content are untouched
3. **No new dependencies:** Zero new packages added
4. **No architecture changes:** Astro + Tailwind only, no React/Vue
5. **Accessibility:** All interactive elements have aria labels, reduced-motion overrides present
6. **Performance:** No animation libraries, CSS-only transitions, IntersectionObserver only
7. **Responsive:** Every component has mobile/tablet/desktop considerations
8. **Color palette:** Only approved colors used, no gradients introduced
9. **Font weights:** 400/500/600 primary, 700 only in Hero name
10. **GitHub Pages:** No server features, static build preserved
