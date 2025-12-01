# Integrating Cookbook System with AI Coding Tools

## Overview

The cookbook system works with AI coding assistants through several entry points:

```
Repository Root
├── AGENTS.md              ← Universal entry point (read by most tools)
├── .cursorrules           ← Cursor-specific
├── .continuerc.json       ← Continue.dev config
├── .github/
│   └── copilot-instructions.md  ← GitHub Copilot
└── team-cookbook/
    └── _index.yaml        ← Cookbook navigation hub
```

## How It Works

### Flow Diagram

```
┌─────────────────────────────────────────────────────┐
│          AI Coding Tool (Cursor/Copilot/etc.)      │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│  1. Tool reads AGENTS.md on workspace open          │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│  2. AGENTS.md points to team-cookbook/_index.yaml   │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│  3. Tool loads _index.yaml for context              │
│     • Tech stack                                    │
│     • Quick reference                               │
│     • Critical constraints                          │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│  4. User asks: "Create a Button component"          │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│  5. Tool checks: quick_reference.new_component      │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│  6. Tool loads: patterns/component.yaml             │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│  7. Tool validates: constraints/typescript.yaml     │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│  8. Tool generates: Compliant Button.tsx            │
└─────────────────────────────────────────────────────┘
```

## Tool-Specific Integration

### 1. Cursor

**File**: `.cursorrules` (in repository root)

```
# Read team cookbook before any code generation
Before implementing features, read ./team-cookbook/_index.yaml

Priority reading order:
1. team-cookbook/_index.yaml (context + navigation)
2. team-cookbook/constraints/ (boundaries)
3. team-cookbook/patterns/ (templates)
4. team-cookbook/examples/ (working code)

Critical rules from cookbook must be followed.
See AGENTS.md for complete instructions.
```

**How it works:**
- Cursor reads `.cursorrules` automatically on workspace open
- Include a reference to `AGENTS.md` for full instructions
- Keep `.cursorrules` short, point to cookbook

### 2. Continue.dev

**File**: `.continuerc.json` (in repository root)

```json
{
  "systemMessage": "Before generating code, read ./team-cookbook/_index.yaml for team patterns and constraints. See AGENTS.md for workflow.",
  "contextProviders": [
    {
      "name": "cookbook",
      "params": {
        "indexPath": "./team-cookbook/_index.yaml"
      }
    }
  ],
  "docs": [
    {
      "title": "Team Cookbook",
      "startUrl": "./team-cookbook/_index.yaml"
    }
  ]
}
```

**How it works:**
- Configure Continue to include cookbook as context
- System message reminds to check cookbook
- Custom context provider can load specific patterns

### 3. GitHub Copilot

**File**: `.github/copilot-instructions.md`

```markdown
# GitHub Copilot Instructions

This project uses a team cookbook system. Before generating code:

1. Check: `team-cookbook/_index.yaml` for patterns
2. Follow: `team-cookbook/constraints/` for rules
3. Reference: `team-cookbook/examples/` for working code

See root `AGENTS.md` for complete workflow.

Quick reference:
- New component: See `team-cookbook/patterns/component.yaml`
- New API: See `team-cookbook/patterns/api.yaml`
- Type patterns: See `team-cookbook/constraints/typescript.yaml`
```

**How it works:**
- GitHub Copilot reads instructions from `.github/copilot-instructions.md`
- Include cookbook references in prompts
- Copilot applies these as context for suggestions

### 4. Cody (Sourcegraph)

**File**: `.cody/instructions.md`

```markdown
# Cody Instructions

Read `AGENTS.md` for complete AI agent instructions.

Team Cookbook: `./team-cookbook/_index.yaml`

Always check cookbook before code generation:
1. Context from _index.yaml
2. Constraints from constraints/
3. Patterns from patterns/
4. Examples from examples/

Validate all generated code against cookbook constraints.
```

**How it works:**
- Cody reads `.cody/instructions.md` for project-specific context
- Reference main `AGENTS.md` for detailed workflow
- Cookbook becomes part of Cody's context

### 5. Aider

**File**: `.aider.conf.yml` (in repository root)

```yaml
# Aider configuration
system-message: |
  This project uses a cookbook system at team-cookbook/_index.yaml
  
  Before any code generation:
  1. Read team-cookbook/_index.yaml
  2. Check constraints in team-cookbook/constraints/
  3. Follow patterns in team-cookbook/patterns/
  4. Reference examples in team-cookbook/examples/
  
  See AGENTS.md for complete workflow.

read-files:
  - team-cookbook/_index.yaml
  - AGENTS.md
```

**How it works:**
- Aider loads cookbook files into context automatically
- System message guides behavior
- Pre-loads critical files

## VSCode Workspace Settings

**File**: `.vscode/settings.json`

```json
{
  "ai.cookbook.enabled": true,
  "ai.cookbook.path": "./team-cookbook",
  "ai.cookbook.indexFile": "_index.yaml",
  "ai.cookbook.enforceConstraints": true,
  
  "cursor.systemPrompt": "Read AGENTS.md and team-cookbook/_index.yaml before generating code.",
  
  "github.copilot.advanced": {
    "inlineSuggestCount": 3,
    "contextFiles": [
      "team-cookbook/_index.yaml",
      "AGENTS.md"
    ]
  }
}
```

## Integration Patterns

### Pattern 1: Lazy Loading (Recommended)

```
1. Tool reads AGENTS.md (small, always loaded)
2. AGENTS.md points to _index.yaml
3. Tool loads _index.yaml when needed
4. Tool loads specific sections on-demand
```

**Benefits:**
- ✅ Small initial context
- ✅ Fast startup
- ✅ Load only what's needed

### Pattern 2: Pre-loading

```
1. Tool reads AGENTS.md
2. Tool immediately loads _index.yaml
3. Tool pre-loads all constraint files
4. Tool has full context ready
```

**Benefits:**
- ✅ Immediate access to all rules
- ✅ No delay during generation
- ⚠️ Higher memory usage

### Pattern 3: Hybrid (Best for Most Teams)

```
1. Tool reads AGENTS.md (always)
2. Tool loads _index.yaml (always)
3. Tool pre-loads constraints/ (small, critical)
4. Tool loads patterns/ on-demand
5. Tool loads examples/ on-demand
```

**Benefits:**
- ✅ Fast startup
- ✅ Critical rules always available
- ✅ Manageable memory usage

## User Workflow in VSCode

### Example: User Creates a Component

```
1. User: Opens VSCode with AI assistant (Cursor/Copilot)
   └─ Tool auto-reads: AGENTS.md
   
2. User: Types "Create a Button component"
   └─ Tool: Loads team-cookbook/_index.yaml
   
3. Tool: Finds quick_reference.new_component
   └─ Points to: "patterns/component.yaml#functional-component"
   
4. Tool: Loads patterns/component.yaml
   └─ Reads: template, rules, naming
   
5. Tool: Checks constraints/typescript.yaml
   └─ Validates: No 'any' type, explicit props
   
6. Tool: Checks constraints/react.yaml
   └─ Validates: Functional component, named export
   
7. Tool: References examples/Button.tsx
   └─ Copies: Working code structure
   
8. Tool: Generates Button.tsx
   └─ Follows: All templates, rules, constraints
   
9. User: Reviews generated code
   └─ Code follows team patterns automatically ✅
```

### Example: User Creates API Endpoint

```
1. User: "Create a POST /users endpoint"
   
2. Tool: Checks team-cookbook/_index.yaml
   └─ Finds: quick_reference.new_api_endpoint
   
3. Tool: Loads patterns/api.yaml
   └─ Gets: Endpoint template, route structure
   
4. Tool: Loads schemas/api-contracts.yaml
   └─ Gets: Request/response format
   
5. Tool: Checks constraints/security.yaml
   └─ Validates: Input validation, auth required
   
6. Tool: References examples/api-endpoint.ts
   └─ Copies: Working implementation
   
7. Tool: Generates compliant endpoint ✅
```

## Prompting Best Practices

### For Users (How to Ask)

**❌ Bad Prompt:**
```
"Create a button"
```

**✅ Good Prompt:**
```
"Create a button component following our team cookbook"
```

**✅ Even Better:**
```
"Create a button component. Check team-cookbook/_index.yaml 
for our component patterns and constraints."
```

### For AI Tools (What to Include)

**Tool should automatically prepend:**
```
[SYSTEM] Before generating code:
1. Read team-cookbook/_index.yaml
2. Check constraints for {language/framework}
3. Follow patterns for {task_type}
4. Reference examples if available

User request: {user_prompt}
```

## Testing the Integration

### Quick Test Checklist

```
✅ AGENTS.md exists in repo root
✅ team-cookbook/_index.yaml exists and is valid YAML
✅ Tool-specific config file exists (.cursorrules, etc.)
✅ VSCode settings reference cookbook
✅ Test prompt: "Create a component following our patterns"
✅ Verify: Generated code follows constraints
✅ Verify: Generated code matches pattern template
```

### Manual Test

1. Open project in VSCode with AI tool
2. Ask: "What patterns does this project follow?"
3. Expected: Tool references cookbook
4. Ask: "Create a Button component"
5. Expected: Tool checks patterns/component.yaml
6. Verify: Generated code follows team patterns

### Automated Test

```bash
# Script to verify integration
#!/bin/bash

echo "Checking cookbook integration..."

# Check files exist
test -f AGENTS.md || echo "❌ Missing AGENTS.md"
test -f team-cookbook/_index.yaml || echo "❌ Missing _index.yaml"
test -f .cursorrules || echo "⚠️  Missing .cursorrules (optional)"

# Validate YAML
yamllint team-cookbook/_index.yaml || echo "❌ Invalid YAML"

echo "✅ Integration files present"
```

## Troubleshooting

### Issue: AI tool not reading cookbook

**Check:**
1. Is `AGENTS.md` in repository root?
2. Does it point to correct `_index.yaml` path?
3. Is the YAML file valid?
4. Does tool support reading instruction files?

### Issue: Generated code doesn't follow patterns

**Check:**
1. Are constraints clearly defined?
2. Are patterns using templates, not just descriptions?
3. Are examples actually working code?
4. Is tool's context window large enough?

### Issue: Tool is too slow

**Solution:**
- Use lazy loading (Pattern 1)
- Load only relevant sections
- Keep constraint files small
- Use quick_reference for fast lookup

## Best Practices

### 1. Keep AGENTS.md Updated
```
Update when:
- Cookbook location changes
- New critical patterns added
- Tool integration changes
```

### 2. Version Your Cookbook
```yaml
# In _index.yaml
cookbook_version: "1.2.0"
last_updated: "2024-12-01"
```

### 3. Test with Each Tool
```
Test: Cursor, Copilot, Continue, Cody
Verify: All follow patterns correctly
Update: Tool-specific configs as needed
```

### 4. Document Tool-Specific Quirks
```markdown
# Known Issues
- Cursor: Prefers .cursorrules over AGENTS.md
- Copilot: Limited YAML parsing
- Continue: Requires explicit context providers
```

## Summary

The integration works through **layered references**:

```
1. Tool → AGENTS.md (universal entry)
2. AGENTS.md → _index.yaml (cookbook hub)
3. _index.yaml → specific files (patterns, constraints)
4. Tool generates code following cookbook
```

**Result**: AI tools automatically follow team patterns without manual intervention.

See `AGENTS.md` for the universal entry point and `QUICKSTART.md` for getting started.
