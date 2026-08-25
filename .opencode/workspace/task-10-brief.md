# Task 10: Create SelectedProjects Component

## Description
Create the Selected Projects component with empty state handling.

## Files to Create/Modify
- `src/components/SelectedProjects.astro`

## Requirements
- Create SelectedProjects with:
  - Section heading
  - Subtitle
  - Conditional rendering:
    - Empty state if projects.length === 0: "Project details coming soon."
    - Project cards otherwise: sector badge, name, role, scope
- Import projects data from data/projects.json
- Add to index.astro
- Run `npm run dev` — verify empty state renders

## Acceptance Criteria
- Empty state renders when no projects
- Project cards render when projects exist
- Proper conditional logic
- Semantic HTML with proper structure

## Context
This task depends on Task 9 (WhyWorkWithMe) being complete. The project has a why work with me section. This task creates the Selected Projects section.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 10

## Global Constraints
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- No gradients, no excessive decorative colors
- Projects data is currently empty array — graceful empty state required
