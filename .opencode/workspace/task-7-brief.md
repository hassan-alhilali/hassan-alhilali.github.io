# Task 7: Create Services Component

## Description
Create the Services component with 6 service cards in responsive grid.

## Files to Create/Modify
- `src/components/Services.astro`

## Requirements
- Create Services with:
  - Section heading
  - Subtitle
  - 6 service cards in responsive grid (1/2/3 columns)
  - Each card with title and description from services.json
- Import services data from data/services.json
- Use semantic section with id="services"
- Add Services to index.astro
- Run `npm run dev` — verify 6 cards render, responsive layout works

## Acceptance Criteria
- 6 service cards render with correct titles and descriptions
- Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Semantic HTML with proper structure
- Accessible with proper headings and structure

## Context
This task depends on Task 6 (Hero) being complete. The project has a hero section. This task creates the Services section.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 7

## Global Constraints
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- No gradients, no excessive decorative colors
