# Task 4: Create Layout Component

## Description
Create the base Layout component with SEO meta tags, font imports, and skip-to-content link.

## Files to Create/Modify
- `src/layouts/Layout.astro`
- `src/pages/index.astro`

## Requirements
- Create Layout.astro with:
  - lang="en"
  - meta charset/viewport
  - description meta tag
  - canonical URL
  - Open Graph tags (og:title, og:description, og:type, og:url)
  - Twitter Card tags (twitter:card, twitter:title, twitter:description)
  - favicon
  - Inter font import (Google Fonts)
  - skip-to-content link (accessibility)
  - slot for content
- Update index.astro to use Layout with test content
- Run `npm run dev` — verify page loads with correct meta tags

## Acceptance Criteria
- Layout component created with all required meta tags
- SEO tags properly configured
- Skip-to-content link present for accessibility
- Inter font imported
- Build succeeds

## Context
This task depends on Tasks 1-3 being complete. The project has types and data. This task creates the base layout that all pages will use.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 4

## Global Constraints
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- Lighthouse performance score 90+
- English only for initial launch
