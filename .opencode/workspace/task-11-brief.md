# Task 11: Create Expertise Component

## Description
Create the Expertise component with tools, sectors, and certifications placeholder.

## Files to Create/Modify
- `src/components/Expertise.astro`

## Requirements
- Create Expertise with:
  - Section heading
  - Certifications placeholder: "Certifications coming soon."
  - Tools grid with two categories:
    - Core Project Controls (4 tools)
    - Data & Analytics (3 tools)
  - Industry sectors tags (Oil & Gas, Construction)
- Import tools.json and sectors.json
- Add to index.astro
- Run `npm run dev` — verify tools, sectors, certifications placeholder render

## Acceptance Criteria
- Tools render in two categories
- Sectors render as tags
- Certifications placeholder displays
- Semantic HTML with proper structure

## Context
This task depends on Task 10 (SelectedProjects) being complete. The project has a selected projects section. This task creates the Expertise section.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 11

## Global Constraints
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- No gradients, no excessive decorative colors
- Certifications are pending content — graceful placeholder required
