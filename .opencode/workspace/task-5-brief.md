# Task 5: Create Header Component

## Description
Create the Header component with sticky navigation, mobile menu, and CTA.

## Files to Create/Modify
- `src/components/Header.astro`

## Requirements
- Create Header with:
  - Site name link (Hassan Al-Hilali)
  - Desktop nav: Services, Expertise, Projects, About, Contact
  - "Discuss a Project" mailto CTA button (mailto:hassan268@gmail.com)
  - Mobile hamburger menu
  - Sticky positioning
  - aria-labels for accessibility
- Add scroll shadow effect via script
- Add mobile menu toggle via script
- Add Header to index.astro
- Run `npm run dev` — verify sticky nav, mobile menu, CTA link

## Acceptance Criteria
- Header renders with navigation links
- "Discuss a Project" CTA links to mailto:hassan268@gmail.com
- Mobile hamburger menu toggles nav visibility
- Sticky positioning works on scroll
- Scroll shadow effect appears on scroll
- Accessible with proper aria-labels

## Context
This task depends on Task 4 (Layout) being complete. The project has a base layout. This task creates the first component.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 5

## Global Constraints
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- Navigation CTA: "Discuss a Project" (mailto link), not "Hire Me"
- No React, Vue, or other UI frameworks — Astro + TypeScript + Tailwind only
