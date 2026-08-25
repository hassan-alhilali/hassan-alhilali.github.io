# Task 3: Create TypeScript Types and Content Data

## Description
Create TypeScript types and JSON data files with approved content.

## Files to Create/Modify
- `src/types/index.ts`
- `src/data/site.json`
- `src/data/services.json`
- `src/data/projects.json`
- `src/data/tools.json`
- `src/data/sectors.json`

## Requirements
- Create types: Service, Project, Tool, Sector, SiteData
- Create site.json with approved content:
  - full name: "Hassan Mohammed Laziz Al-Hilali"
  - compact name: "Hassan Al-Hilali"
  - title: "Planning & Project Controls Consultant"
  - value proposition: "Bridging technical detail and strategic oversight..."
  - summary: "Planning and Project Controls professional..."
  - email: "hassan268@gmail.com"
  - linkedin: "" (empty)
  - location: "Available Worldwide"
  - availability: "Available for consulting engagements"
- Create services.json with 6 confirmed services (descriptions marked as content requirements)
- Create projects.json as empty array (pending verified info)
- Create tools.json with 7 tools (4 core, 3 data)
- Create sectors.json with Oil & Gas, Construction
- Run `npx tsc --noEmit` — verify no errors

## Acceptance Criteria
- All TypeScript types created with proper interfaces
- All JSON data files created with correct structure
- TypeScript compilation passes with no errors
- Content matches approved specifications

## Context
This task depends on Tasks 1-2 being complete. The project has Astro and Tailwind configured. This task adds the data layer.

## Plan Reference
See: `docs/superpowers/plans/2026-08-25-implementation-plan.md` Task 3

## Global Constraints
- No invented certifications, employers, achievements, metrics, or professional history
- Pending content treated as explicit content requirements — graceful empty states
- English only for initial launch
