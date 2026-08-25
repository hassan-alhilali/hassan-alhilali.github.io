# Task 1: Project Initialization

## Description
Initialize the Astro project with minimal template, TypeScript, and basic configuration.

## Files to Create/Modify
- `package.json`
- `tsconfig.json`
- `astro.config.mjs`
- `.gitignore`

## Requirements
- Initialize Astro project with minimal template
- Verify package.json has astro dependency and dev/build/preview scripts
- Create .gitignore (dist/, node_modules/, .env, IDE files)
- Verify project structure matches plan file structure
- Initial git commit

## Acceptance Criteria
- Astro project initialized and builds successfully
- package.json contains astro dependency and all required scripts (dev, build, preview)
- .gitignore covers dist/, node_modules/, .env, IDE files
- Project structure matches plan:
  ```
  src/
    components/
    layouts/
    pages/
    data/
    types/
  public/
  astro.config.mjs
  tsconfig.json
  package.json
  ```
- Git initialized with clean initial commit

## Context
This is the first task of the implementation plan. All subsequent tasks depend on this being done correctly. This is a greenfield project - no existing code exists.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 1

## Global Constraints
- Tech Stack: Astro 5.x, TypeScript, Tailwind CSS 4.x only
- No React, Vue, or other UI frameworks
- GitHub Pages deployment target
- No invented content
