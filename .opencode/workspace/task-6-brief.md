# Task 6: Create Hero Component

## Description
Create the Hero component with name, title, value proposition, and CTA.

## Files to Create/Modify
- `src/components/Hero.astro`

## Requirements
- Create Hero with:
  - Full name (h1): "Hassan Mohammed Laziz Al-Hilali"
  - Title: "Planning & Project Controls Consultant"
  - Value proposition text
  - "Discuss a Project" CTA linking to #contact
  - Dark charcoal background (#1A1A2E)
- Import siteData from data/site.json
- Use semantic section element with id="hero"
- Add Hero to index.astro
- Run `npm run dev` — verify hero renders with correct content

## Acceptance Criteria
- Hero section renders with correct name, title, and value proposition
- CTA button links to #contact
- Dark charcoal background applied
- Semantic HTML with proper heading hierarchy (h1 for name)
- Accessible with proper structure

## Context
This task depends on Task 5 (Header) being complete. The project has a header component. This task creates the Hero section.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 6

## Global Constraints
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- No gradients, no excessive decorative colors
- Color palette: charcoal #1A1A2E for hero background
