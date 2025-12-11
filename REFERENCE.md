# Team Cookbook System - Reference

> 📦 **Looking for what's in this repo?** See [README.md](./README.md)  
> 🚀 **Want to start quickly?** See [QUICKSTART.md](./QUICKSTART.md)

This document describes the **expected output** - what your team's cookbook should look like after implementation.

---

## What is This?

The **Team Cookbook System** is a structured documentation framework designed specifically for **AI agents** to quickly understand and apply team patterns, conventions, and best practices. Unlike traditional documentation written for humans, this system prioritizes:

- **Machine-parseable formats** (YAML over prose)
- **Minimal explanations** (rules over reasoning)
- **Direct references** (links over descriptions)
- **Actionable templates** (copy-paste ready code)
- **Structured navigation** (prioritized sections)

## Why This Exists

### The Problem
When AI agents join a codebase or need to implement features, they must:
1. Understand the tech stack and architecture
2. Follow established patterns and conventions
3. Know what NOT to do (constraints)
4. Find working examples to adapt
5. Apply team-specific decisions

Traditional documentation is verbose, scattered, and written for human learning patterns. AI agents need:
- **Quick context loading** without narrative
- **Clear boundaries** (constraints before implementation)
- **Fast navigation** to relevant patterns
- **Executable examples** over explanations

### The Solution
A hierarchical, YAML-based cookbook that provides:
- High-level navigation via `_index.yaml`
- Structured pattern files with templates
- Critical constraints upfront
- Quick reference for common tasks
- Domain-specific glossaries

## System Structure

```
team-cookbook/
├── _index.yaml                  # Navigation hub (START HERE)
├── constraints/                 # Hard boundaries (read FIRST)
│   ├── security.yaml
│   ├── performance.yaml
│   └── ...
├── schemas/                     # Data structures & contracts
│   ├── api-contracts.yaml
│   ├── domain-models.yaml
│   └── ...
├── patterns/                    # Implementation patterns
│   ├── architecture.yaml
│   ├── code-style.yaml
│   └── ...
├── workflows/                   # Step-by-step processes
│   ├── deployment.yaml
│   ├── ci-cd.yaml
│   └── ...
├── integrations/                # External services
│   ├── auth.yaml
│   ├── payments.yaml
│   └── ...
├── decisions/                   # Architectural rationale
│   ├── tech-stack.yaml
│   └── ...
├── testing/                     # Test strategies
│   └── ...
├── tools/                       # Scripts & automation
│   └── ...
├── examples/                    # Reference implementations
│   └── ...
└── troubleshooting/             # Common errors
    └── ...
```

## How AI Agents Use This

### Entry Flow
1. **Start with `_index.yaml`**
   - Load context (stack, architecture, patterns)
   - Identify relevant sections
   - Check quick_reference for the task

2. **Check Constraints FIRST**
   - Read critical_constraints
   - Understand boundaries before coding
   - Avoid forbidden patterns

3. **Navigate to Relevant Section**
   - Use section IDs from _index.yaml
   - Follow priority order
   - Read glossary for domain terms

4. **Apply Patterns**
   - Copy templates
   - Follow rules
   - Reference examples

5. **Validate Against Constraints**
   - Double-check security rules
   - Verify performance requirements
   - Ensure compliance

### Example: Creating a New API Endpoint

```yaml
# Agent reads _index.yaml
quick_reference:
  new_api_endpoint: "patterns/architecture.yaml#api-endpoint"

# Agent loads patterns/architecture.yaml
# Finds template with:
# - Route structure
# - Response format
# - Required middleware
# - Validation rules

# Agent checks constraints/security.yaml
# Verifies:
# - Input validation required
# - Auth middleware needed
# - No SQL injection patterns

# Agent copies from examples/
# Adapts working code

# Result: Compliant endpoint in minutes
```

## Key Design Principles

### 1. **Constraints Before Freedom**
AI agents can generate infinite variations. Constraints define the "safe space" to operate within.

### 2. **Templates Over Explanations**
Show the code structure, not why it works. Agents need the "what", not the "why" (unless making architectural decisions).

### 3. **References Over Duplication**
Link to authoritative sources rather than repeating information. Keep single source of truth.

### 4. **Prioritized Sections**
Not all documentation is equally important. Priority guides agents on what to read first.

### 5. **Glossary for Context**
Domain terms need definition. Prevents misunderstanding of business concepts.

### 6. **Quick Reference for Speed**
Most common tasks should be one lookup away. No hunting through nested docs.

## File Format: Why YAML?

YAML was chosen because:
- **Structured data**: Easy for agents to parse programmatically
- **Human-readable**: Can be reviewed/edited by team
- **Comments**: Can add notes without breaking structure
- **Lists & maps**: Natural for representing relationships
- **References**: Can link between files with IDs

## Ecosystem Examples

This repository includes three reference implementations:

### 1. **Python Backend** (`examples/python-backend_index.yaml`)
Covers: FastAPI, async patterns, database migrations, Celery, testing with pytest

Key sections:
- Async/await patterns
- Repository pattern
- Background jobs with Celery
- Database migrations with Alembic

### 2. **Flutter Mobile** (`examples/flutter_index.yaml`)
Covers: Widget composition, Riverpod, platform channels, build flavors

Key sections:
- State management (Riverpod)
- Platform-specific code
- Build flavors for environments
- Golden tests

### 3. **AI/ML Python** (`examples/ai-ml-python_index.yaml`)
Covers: PyTorch, MLflow, model serving, experiment tracking, GPU optimization

Key sections:
- Experiment tracking
- Model lifecycle management
- Data versioning
- Deployment optimization

## Creating Your Team's Cookbook

### Step 1: Create `_index.yaml`
Define your:
- Tech stack
- Architecture
- Sections (adapted to your needs)
- Quick reference map
- Critical constraints
- Glossary

### Step 2: Document Constraints First
What should agents NEVER do?
- Security violations
- Performance anti-patterns
- Forbidden libraries/patterns

### Step 3: Create Pattern Files
For each pattern:
```yaml
patterns:
  - id: "pattern-name"
    category: "..."
    template: |
      # Code template here
    rules:
      - "Rule 1"
      - "Rule 2"
    example_ref: "examples/working-code.ts"
```

### Step 4: Add Working Examples
Real, working code that agents can copy and adapt.

### Step 5: Create Quick References
Map common tasks to exact file locations.

## Maintenance

### When to Update
- New pattern adopted
- Constraint added/changed
- Tech stack upgrade
- New integration added
- Architecture decision made

### Version Control
- Bump `cookbook_version` on breaking changes
- Update `last_updated` on any change
- Use semantic versioning for cookbook itself

### Team Review
- Cookbooks should be reviewed like code
- Validate templates actually work
- Ensure constraints are enforced

## Benefits

### For AI Agents
- Fast context loading (seconds vs minutes)
- Reduced errors (constraints upfront)
- Consistent output (templates)
- No hallucination on team-specific patterns

### For Teams
- Self-documenting patterns
- Onboarding new members (human or AI)
- Enforced standards
- Single source of truth
- Version-controlled knowledge

### For Code Quality
- Consistency across codebase
- Security by default (constraint-driven)
- Performance patterns baked in
- Testability enforced

## Future Extensions

Potential additions:
- **Automated validation**: Lint code against cookbook rules
- **Generation tools**: CLI to generate from templates
- **Metrics tracking**: Which patterns are most used
- **Auto-updates**: Keep in sync with codebase changes
- **Multi-repo support**: Shared cookbooks across services

## Getting Started

1. Choose an example closest to your stack
2. Copy to your repository
3. Adapt sections to your needs
4. Add your team's patterns
5. Document constraints
6. Create examples from your codebase
7. Point your AI agents to `_index.yaml`

## Philosophy

> "If you can't explain it simply, you don't understand it well enough." - Einstein

Cookbooks force teams to:
- **Clarify** their patterns
- **Standardize** their approaches
- **Document** their decisions
- **Share** their knowledge

The AI-first approach is actually better for humans too - clarity for machines is clarity for everyone.

---

## Contributing

When adding to this system:
1. Keep it minimal (agents don't need prose)
2. Structure over narrative
3. Templates over explanations
4. Constraints before freedom
5. Examples that actually work

## License

Adapt this system for your team's needs. No attribution required.
