# Cody AI Instructions

## Project Overview
This project uses a Team Cookbook System at `team-cookbook/_index.yaml` for consistent code patterns.

## Before Code Generation
Read in order:
1. `team-cookbook/_index.yaml` - Context and navigation
2. `team-cookbook/constraints/` - What NOT to do
3. `team-cookbook/patterns/` - How to implement
4. `team-cookbook/examples/` - Working code

## Workflow
Complete workflow documented in `AGENTS.md` at repository root.

## Quick Reference
Use the `quick_reference` section in `_index.yaml` to find pattern locations:
- `new_component` → Component patterns
- `new_api_endpoint` → API patterns
- `new_hook` → Hook patterns
- `new_utility` → Utility patterns

## Critical Constraints
Always validate against:
- `team-cookbook/constraints/typescript.yaml`
- `team-cookbook/constraints/react.yaml`
- `team-cookbook/constraints/security.yaml`

## Code Generation Rules
1. Cookbook patterns > General knowledge
2. Follow templates exactly
3. Validate all output against constraints
4. Reference working examples
5. Use team naming conventions

## Example Request
When user asks "Create a Button component":
1. Load `team-cookbook/_index.yaml`
2. Find `quick_reference.new_component`
3. Load referenced pattern file
4. Check constraint files
5. Reference example if exists
6. Generate compliant code

## Context Files
Always include in context when relevant:
- `team-cookbook/_index.yaml`
- `AGENTS.md`
- Relevant constraint files
- Relevant pattern files
- Relevant example files

See full documentation in `team-cookbook/README.md`
