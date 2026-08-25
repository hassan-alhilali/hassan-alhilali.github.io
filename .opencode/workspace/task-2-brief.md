# Task 2: Install Dependencies and Configure Tailwind

## Description
Install Tailwind CSS and configure it with the custom color palette, fonts, and global styles.

## Files to Create/Modify
- `package.json`
- `tailwind.config.ts`
- `src/styles/global.css`
- `astro.config.mjs`

## Requirements
- Install @astrojs/tailwind and tailwindcss
- Configure astro.config.mjs with site URL and tailwind integration
- Create tailwind.config.ts with custom color palette:
  - charcoal: #1A1A2E
  - slate-gray: #4A5568
  - off-white: #F7F8FA
  - deep-blue: #2563EB
  - steel-blue: #64748B
  - success-green: #16A34A
  - warm-gray: #9CA3AF
- Configure Inter font family
- Set max-width content: 1200px
- Create src/styles/global.css with Tailwind directives and base styles:
  - Smooth scroll
  - Body bg/text
  - Heading colors
  - Link transitions
- Import global.css in Layout component (if exists, otherwise skip)
- Run `npm run build` — verify no errors

## Acceptance Criteria
- Tailwind CSS installed and configured
- Custom color palette available in Tailwind classes
- Inter font family configured
- Global styles applied correctly
- Build succeeds with no errors

## Context
This task depends on Task 1 (Project Initialization) being complete. The project now has a basic Astro setup. This task adds styling infrastructure.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 2

## Global Constraints
- Tech Stack: Astro 5.x, TypeScript, Tailwind CSS 4.x only
- No React, Vue, or other UI frameworks
- Color palette: charcoal #1A1A2E, slate-gray #4A5568, off-white #F7F8FA, deep-blue #2563EB, steel-blue #64748B, success-green #16A34A, warm-gray #9CA3AF
- No gradients, no excessive decorative colors
