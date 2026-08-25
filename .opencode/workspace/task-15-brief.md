# Task 15: Final Assembly and Section Order Verification

## Description
Verify all components are assembled correctly in the correct section order.

## Files to Create/Modify
- `src/pages/index.astro`

## Requirements
- Verify all components are imported and rendered in correct order:
  1. Hero
  2. Services
  3. HowIWork
  4. WhyWorkWithMe
  5. SelectedProjects
  6. Expertise
  7. About
  8. Contact
- Verify Header and Footer are present
- Run `npm run dev` — verify all sections render in correct order
- Run `npm run build` — verify build succeeds

## Acceptance Criteria
- All 8 sections render in correct order
- Header and Footer present
- No build errors
- Section order matches plan specification

## Context
This task depends on Tasks 1-14 being complete. All components have been created. This task verifies correct assembly.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 15

## Global Constraints
- Section order: Hero → Services → HowIWork → WhyWorkWithMe → SelectedProjects → Expertise → About → Contact
- All sections must be present
