# GitHub Copilot Instructions

## Project Context
This project uses a **Team Cookbook System** for consistent code generation. All code must follow patterns defined in the cookbook.

## Required Reading
Before generating any code:
1. Check `team-cookbook/_index.yaml` for team context and navigation
2. Review `team-cookbook/constraints/` for rules and boundaries
3. Follow `team-cookbook/patterns/` for implementation templates
4. Reference `team-cookbook/examples/` for working code

## Workflow
See `AGENTS.md` in repository root for complete AI agent workflow.

## Quick Patterns

### New Component
- Pattern: `team-cookbook/patterns/component.yaml`
- Constraints: `team-cookbook/constraints/typescript.yaml`, `team-cookbook/constraints/react.yaml`
- Example: `team-cookbook/examples/Button.tsx`

### New API Endpoint
- Pattern: `team-cookbook/patterns/api.yaml`
- Constraints: `team-cookbook/constraints/security.yaml`
- Example: `team-cookbook/examples/api-endpoint.ts`

### New Custom Hook
- Pattern: `team-cookbook/patterns/hooks.yaml`
- Example: `team-cookbook/examples/useCounter.ts`

### New Utility Function
- Pattern: `team-cookbook/patterns/utilities.yaml`
- Example: `team-cookbook/examples/formatDate.ts`

## Critical Rules

### From `constraints/typescript.yaml`:
- ❌ Never use `any` type
- ✅ All props must have explicit interfaces
- ✅ Use `unknown` and narrow types
- ✅ Handle null/undefined explicitly

### From `constraints/react.yaml`:
- ❌ No class components
- ✅ Use functional components only
- ✅ Named exports only (no default exports)
- ✅ Destructure props in parameters
- ✅ One component per file

## Code Generation Guidelines

1. **Check cookbook first** - Don't rely solely on general knowledge
2. **Follow templates exactly** - Use pattern templates as base
3. **Validate constraints** - Ensure code passes all constraint rules
4. **Reference examples** - Copy structure from working examples
5. **Team patterns > General patterns** - When in conflict, follow team cookbook

## Example Suggestion Format

When suggesting code, structure should match:
```typescript
// From team-cookbook/patterns/component.yaml
interface ComponentNameProps {
  requiredProp: string
  optionalProp?: number
}

export function ComponentName({ requiredProp, optionalProp }: ComponentNameProps) {
  return <div>{requiredProp}</div>
}
```

## Navigation

- **Main Index**: `team-cookbook/_index.yaml`
- **Constraints**: `team-cookbook/constraints/*.yaml`
- **Patterns**: `team-cookbook/patterns/*.yaml`
- **Examples**: `team-cookbook/examples/*`
- **Full Docs**: `team-cookbook/README.md`

## Priority
Team cookbook rules take absolute precedence over general coding practices.
