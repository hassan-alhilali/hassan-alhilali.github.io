# Task 12: Create About Component

## Description
Create the About component with professional summary and headshot area.

## Files to Create/Modify
- `src/components/About.astro`

## Requirements
- Create About with:
  - Section heading
  - Professional summary text (from siteData)
  - Reserved headshot area (empty div with appropriate styling, no placeholder image)
- Split layout: text on one side, headshot area on the other (desktop), stacked on mobile
- Import siteData for summary text
- Add to index.astro
- Run `npm run dev` — verify about section renders

## Acceptance Criteria
- About section renders with professional summary
- Headshot area reserved (empty div with styling)
- Split layout on desktop, stacked on mobile
- Semantic HTML with proper structure

## Context
This task depends on Task 11 (Expertise) being complete. The project has an expertise section. This task creates the About section.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 12

## Global Constraints
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- No gradients, no excessive decorative colors
- No placeholder image for headshot — empty div with appropriate styling
