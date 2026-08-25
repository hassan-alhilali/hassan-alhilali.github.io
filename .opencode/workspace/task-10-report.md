# Task 10 Report: SelectedProjects Component

## What I Implemented

Created `src/components/SelectedProjects.astro` and added it to `src/pages/index.astro`.

**Component features:**
- Section with `id="projects"` and `aria-labelledby="projects-heading"` for accessibility
- Heading ("Selected Projects") and descriptive subtitle
- Imports `projects.json` (empty array) and `sectors.json` (for sector name resolution)
- Conditional rendering: when `projects.length === 0`, displays centered empty state text "Project details coming soon." in `steel-blue`
- When projects exist: renders a responsive grid (1/2/3 columns) of cards, each showing:
  - Sector badge (deep-blue pill with sector name)
  - Project name (h3)
  - Role
  - Scope
- Semantic HTML (`section`, `article`, `h2`, `h3`)
- Follows existing component patterns (same spacing, color tokens, layout as WhyWorkWithMe)

## Files Changed

| File | Change |
|------|--------|
| `src/components/SelectedProjects.astro` | Created |
| `src/pages/index.astro` | Added import and `<SelectedProjects />` after WhyWorkWithMe |

## Test Results

- `npm run build` — **succeeds** with no errors
- Rendered HTML confirms:
  - Empty state `<p>Project details coming soon.</p>` is present in the output
  - Section has proper `id="projects"` and `aria-labelledby` attributes
  - No stray warnings or build noise

## Self-Review

**Completeness:** All acceptance criteria met — empty state renders, project cards structure is correct, proper conditional logic, semantic HTML throughout.

**Quality:** Matches existing component conventions (WhyWorkWithMe pattern). Clean, focused single-responsibility file.

**Discipline:** No overbuilding. Only built what was requested — no extra features, no premature abstractions.
