# AI Agent Instructions

## Overview
This project uses a **Cookbook System** for consistent code generation. Before implementing any features, you MUST read the team cookbook to understand patterns, constraints, and conventions.

## Quick Start for AI Agents

### 1. Load the Cookbook Index
```yaml
# Primary navigation file
Location: ./team-cookbook/_index.yaml
Purpose: Main entry point for all patterns, constraints, and examples
```

**Action**: Read `./team-cookbook/_index.yaml` first before any code generation.

### 2. Check Constraints First
```yaml
# From _index.yaml -> critical_constraints section
Priority: HIGHEST - Check before any code generation
```

**Action**: Load and validate against all referenced constraint files.

### 3. Find Relevant Patterns
```yaml
# From _index.yaml -> quick_reference section
Format: task_name: "path/to/pattern.yaml#section-id"
```

**Action**: Use `quick_reference` to find exact pattern locations.

### 4. Reference Working Examples
```yaml
# From _index.yaml -> sections.examples
Location: ./team-cookbook/examples/
```

**Action**: Copy structure from working code examples.

## Cookbook System Flow

```
User Request
    ↓
Read: team-cookbook/_index.yaml
    ↓
Load: critical_constraints (check rules)
    ↓
Find: quick_reference[task]
    ↓
Load: pattern file (get template)
    ↓
Load: example file (see working code)
    ↓
Generate: compliant code
    ↓
Validate: against constraints
```

## Critical Rules

### ALWAYS Check These Before Coding:
1. **Read `_index.yaml`** - Get context and navigation
2. **Check `constraints/`** - Know what's forbidden
3. **Follow `patterns/`** - Use team templates
4. **Reference `examples/`** - Copy working code

### NEVER Do This:
- Generate code without reading cookbook first
- Ignore constraint files
- Invent patterns not in the cookbook
- Skip validation against constraints

## How to Use the Cookbook

### For New Components:
```
1. Read: team-cookbook/_index.yaml
2. Find: quick_reference.new_component
3. Load: Referenced pattern file
4. Check: constraints/[relevant].yaml
5. Copy: From examples/[relevant].tsx
6. Generate: Following template + rules
```

### For API Endpoints:
```
1. Read: team-cookbook/_index.yaml
2. Find: quick_reference.new_api_endpoint
3. Load: Referenced pattern file
4. Check: constraints/security.yaml
5. Copy: From examples/[relevant].ts
6. Generate: Following template + rules
```

### For Any Task:
```
1. Load _index.yaml
2. Search quick_reference for task
3. If not found: search sections by category
4. Load pattern + constraints + examples
5. Generate code
6. Validate against constraints
```

## Cookbook Location

```
Primary cookbook location: ./team-cookbook/
Alternative locations:
  - ./cookbook/
  - ./docs/cookbook/
  - ./.cookbook/

If not found: Ask user for cookbook location
```

## Code Generation Rules

### TypeScript/React Projects:
```yaml
- Read: constraints/typescript.yaml
- Read: constraints/react.yaml
- Follow: patterns/component.yaml
- Reference: examples/*.tsx
```

### Python Projects:
```yaml
- Read: constraints/typing.yaml
- Read: constraints/async.yaml
- Follow: patterns/service.yaml
- Reference: examples/*.py
```

### General Rules:
1. **Constraints > Patterns > Examples > Generation**
2. **Validate output against constraints before returning**
3. **Use exact naming conventions from patterns**
4. **Copy structure from examples when available**

## Integration with IDE

### VSCode Extensions:
- **Cursor**: Reads this file automatically
- **Continue.dev**: Include in context via `.continuerc.json`
- **GitHub Copilot**: Reference via workspace instructions
- **Cody**: Add to `.cody/instructions.md`

### Workspace Settings:
```json
{
  "ai.cookbook.path": "./team-cookbook",
  "ai.cookbook.index": "./team-cookbook/_index.yaml",
  "ai.cookbook.enforceConstraints": true
}
```

## Documentation Structure

```
team-cookbook/
├── _index.yaml              ← START HERE (navigation hub)
├── constraints/             ← CHECK SECOND (boundaries)
├── patterns/                ← READ THIRD (templates)
├── schemas/                 ← Data structures
├── workflows/               ← Processes
├── integrations/            ← External services
├── testing/                 ← Test patterns
├── examples/                ← Working code
└── troubleshooting/         ← Common issues
```

## Example: Creating a Button Component

```yaml
# Agent reads this file (AGENTS.md)
# Agent loads: ./team-cookbook/_index.yaml

# From _index.yaml:
quick_reference:
  new_component: "patterns/component.yaml#functional-component"

# Agent loads: ./team-cookbook/patterns/component.yaml
# Agent reads: template, rules, naming conventions

# Agent checks: ./team-cookbook/constraints/typescript.yaml
# Agent checks: ./team-cookbook/constraints/react.yaml

# Agent references: ./team-cookbook/examples/Button.tsx

# Agent generates: Compliant Button component
```

## Quick Reference Lookup

Common tasks mapping (load from _index.yaml for full list):

```yaml
new_component: "patterns/component.yaml#functional-component"
new_api_endpoint: "patterns/api.yaml#endpoint-template"
new_hook: "patterns/hooks.yaml#custom-hook"
new_test: "testing/unit.yaml#test-template"
new_utility: "patterns/utilities.yaml#pure-function"
```

## Additional Resources

- **System Overview**: `./team-cookbook/README.md`
- **Quick Start**: `./team-cookbook/QUICKSTART.md`
- **Visual Guide**: `./team-cookbook/VISUAL-OVERVIEW.md`
- **Templates**: `./team-cookbook/templates/`
- **Complete Example**: `./team-cookbook/examples/mini-complete/`

## Workflow Summary

```
1. User: "Create a login form component"
2. Agent: Read ./team-cookbook/_index.yaml
3. Agent: Find quick_reference.new_component
4. Agent: Load patterns/component.yaml
5. Agent: Check constraints/typescript.yaml
6. Agent: Check constraints/react.yaml
7. Agent: Reference examples/Form.tsx
8. Agent: Generate LoginForm.tsx
9. Agent: Validate against constraints
10. Agent: Return compliant code
```

## Important Notes

### For AI Coding Assistants:
- **Context Window Management**: Load only relevant sections, not entire cookbook
- **Validation**: Always validate generated code against constraints
- **Updates**: Check `last_updated` field in _index.yaml
- **Version**: Check `cookbook_version` for breaking changes

### For Teams:
- Keep this file in repository root
- Update when cookbook location changes
- Point to correct _index.yaml path
- Maintain quick_reference mappings

## Philosophy

> "If you can't explain it simply, you don't understand it well enough." - Einstein

This cookbook system provides:
- **YAML** over verbose docs
- **Templates** over explanations  
- **Examples** over theory
- **Rules** over reasoning

Agents should prefer structured data from the cookbook over general knowledge when they conflict.

---

**Last Updated**: 2024-12-01  
**Cookbook Version**: 1.0.0  
**Maintainer**: Team Lead
