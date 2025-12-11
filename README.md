# 🎯 Cookbook System

> A structured documentation framework for AI agents to follow your team's patterns automatically.

## What You Get

The **complete Cookbook System** for AI agents with full VSCode/AI tool integration!

## 📊 Repository Structure

```
cookbook-system/
│
├── 📖 README.md                           This file - repo overview
├── 🚀 QUICKSTART.md                       5-minute getting started
├── 👁️ VISUAL-OVERVIEW.md                  Visual diagrams & comparisons
├── 📚 REFERENCE.md                        Full specification & design principles
│
├── 📁 templates/                          Copy-paste starters
│   ├── AGENTS.md                          ⭐ Entry point for AI tools (copy to your repo root)
│   ├── _index.yaml                        Navigation template
│   ├── constraints-template.yaml          Constraint template
│   └── patterns-template.yaml             Pattern template
│
├── 💡 examples/                           Reference implementations
│   ├── python-backend_index.yaml          FastAPI ecosystem
│   ├── flutter_index.yaml                 Flutter ecosystem
│   ├── ai-ml-python_index.yaml            PyTorch ML ecosystem
│   └── mini-complete/                     🌟 Complete React+TS example
│       ├── _index.yaml                    Navigation
│       ├── README.md                      Example docs
│       ├── constraints/                   Rules (2 files)
│       ├── patterns/                      Templates (3 files)
│       └── code-examples/                 Working code (8 files)
│
└── 🔌 integrations/                       AI tool configs
    ├── README.md                          Integration guide
    ├── AI-TOOLS-INTEGRATION.md            Complete integration docs
    ├── .cursorrules                       Cursor config
    ├── .continuerc.json                   Continue.dev config
    ├── .github/
    │   └── copilot-instructions.md        GitHub Copilot config
    ├── .cody/
    │   └── instructions.md                Sourcegraph Cody config
    └── .vscode/
        └── settings.json                  VSCode workspace settings
```

## 🎯 How It Works

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User's Repository (after setup)                          │
│    ├── AGENTS.md              ← Universal entry point       │
│    ├── .cursorrules           ← Tool-specific configs       │
│    ├── .continuerc.json                                     │
│    └── team-cookbook/                                       │
│        └── _index.yaml        ← Cookbook navigation         │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. AI Tool (Cursor/Copilot/Continue/Cody)                  │
│    Reads AGENTS.md automatically on workspace open          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. AGENTS.md says:                                          │
│    "Before coding, read team-cookbook/_index.yaml"          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Tool loads _index.yaml                                   │
│    • Gets context (tech stack)                              │
│    • Finds quick_reference map                              │
│    • Loads critical_constraints                             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. User: "Create a Button component"                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. Tool uses quick_reference                                │
│    new_component → "patterns/component.yaml"                │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 7. Tool loads pattern + constraints + examples              │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 8. Tool generates compliant Button.tsx ✅                   │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start Paths

### For Team Leads Setting Up

1. **Read**: `REFERENCE.md` (understand the system design)
2. **Skim**: `VISUAL-OVERVIEW.md` (see diagrams)
3. **Copy**: `examples/mini-complete/` → `your-repo/team-cookbook/`
4. **Customize**: Edit `_index.yaml` with your stack
5. **Copy**: `integrations/.cursorrules` → `your-repo/` (for your AI tool)
6. **Copy**: `templates/AGENTS.md` → `your-repo/` (universal entry)
7. **Test**: Open in VSCode, ask AI to create component
8. **Verify**: Generated code follows your patterns

### For Developers Using the System

1. **Read**: `QUICKSTART.md` (5 minutes)
2. **Look**: `examples/mini-complete/` (see working example)
3. **Use**: Just work normally - AI tools read cookbook automatically!
4. **Reference**: Check `team-cookbook/_index.yaml` when confused

### For AI Tools

1. **Read**: `AGENTS.md` (automatic on workspace open)
2. **Load**: `team-cookbook/_index.yaml` (as directed)
3. **Follow**: Patterns, constraints, examples
4. **Generate**: Compliant code

## 🎨 Key Features

### 1. Universal Entry Point (AGENTS.md)
- Read by Cursor, Copilot, Continue, Cody, etc.
- Points to cookbook location
- Explains workflow
- **Location**: Copy from `templates/AGENTS.md` to your repository root

### 2. Cookbook Hub (_index.yaml)
- Navigation for all patterns
- Tech stack context
- Quick reference map
- Critical constraints list
- **Location**: team-cookbook/_index.yaml

### 3. Tool Integration Files
- Config for each AI tool
- Auto-loads cookbook
- No manual setup needed
- **Location**: integrations/ folder

### 4. Complete Working Example
- Mini React+TypeScript cookbook
- All sections implemented
- Working code examples
- Copy and adapt
- **Location**: examples/mini-complete/

## 📚 Documentation Guide

| Document | Purpose | Audience |
|----------|---------|----------|
| `README.md` | Repository overview & quick start paths | Everyone |
| `QUICKSTART.md` | 5-minute hands-on guide | Developers |
| `VISUAL-OVERVIEW.md` | Diagrams and visual explanations | Visual learners |
| `REFERENCE.md` | Full specification & design principles | Team leads, architects |
| `integrations/AI-TOOLS-INTEGRATION.md` | Detailed tool setup | DevOps, tool configurators |

## 🔧 Setup Instructions

### Step 1: Choose Your Starting Point

**Option A - Start from Complete Example (Recommended)**
```bash
# Copy the mini-complete example as your starting point
cp -r examples/mini-complete your-repo/team-cookbook
# Customize for your needs
```

**Option B - Start from Individual Templates**
```bash
# Create cookbook folder
mkdir your-repo/team-cookbook

# Copy individual templates
cp templates/_index.yaml your-repo/team-cookbook/
cp templates/constraints-template.yaml your-repo/team-cookbook/constraints/security.yaml
cp templates/patterns-template.yaml your-repo/team-cookbook/patterns/component.yaml

# Edit each file with your stack
```

### Step 2: Add AI Tool Integration
```bash
# Copy config for your AI tool
cp integrations/.cursorrules your-repo/
# OR
cp integrations/.continuerc.json your-repo/
# OR
cp -r integrations/.github your-repo/
```

### Step 3: Add Universal Entry
```bash
# Copy AGENTS.md to your repo root
cp templates/AGENTS.md your-repo/
# Update paths if needed
```

### Step 4: Test Integration
1. Open project in VSCode
2. Ask AI: "What patterns does this project follow?"
3. Expected: AI references cookbook
4. Ask AI: "Create a Button component"
5. Expected: Code follows your patterns

## 📊 Before vs After

### Before Cookbook System

```
User: "Create a button component"
↓
AI: Uses general React knowledge
↓
Generated code:
- ❌ Might use class components
- ❌ Might use default exports
- ❌ Might have any types
- ❌ Inconsistent with team style
```

### After Cookbook System

```
User: "Create a button component"
↓
AI: Reads AGENTS.md → _index.yaml → patterns
↓
Generated code:
- ✅ Functional component
- ✅ Named export
- ✅ Typed props interface
- ✅ Matches team patterns exactly
```

## 💡 Best Practices

### For Teams
1. ✅ Start small (core patterns first)
2. ✅ Add examples for each pattern
3. ✅ Keep constraints clear and minimal
4. ✅ Version your cookbook
5. ✅ Test with your AI tool before team rollout

### For Individuals
1. ✅ Create personal cookbook for side projects
2. ✅ Document patterns as you discover them
3. ✅ Share useful patterns with team
4. ✅ Keep it simple - don't over-document

## 🐛 Troubleshooting

### Issue: AI not following patterns
**Solution**: Check that AGENTS.md exists in your repo root and points to correct _index.yaml

### Issue: Paths not working
**Solution**: Use relative paths from repo root (e.g., `./team-cookbook/`)

### Issue: Tool not reading cookbook
**Solution**: Restart VSCode, verify config file in correct location

### Issue: Generated code still wrong
**Solution**: Make constraints more explicit, add better examples

## 🎓 Philosophy

> "If you can't explain it simply, you don't understand it well enough." - Einstein

This system embodies simplicity:
- **YAML** over verbose docs
- **Templates** over explanations
- **Examples** over theory
- **Rules** over reasoning
- **Structure** over prose

## ✨ Summary

You get:
- ✅ Complete cookbook system
- ✅ AI tool integration for Cursor, Copilot, Continue, Cody
- ✅ Working examples (React, Python, Flutter, ML)
- ✅ Templates to start your own
- ✅ Comprehensive documentation
- ✅ Visual guides and diagrams

**Setup Time**: 15 minutes  
**Value**: Consistent AI-generated code that follows YOUR team's patterns

---

**Ready to use!** Start with `QUICKSTART.md` or dive into `examples/mini-complete/` 🚀

## License

Adapt this system for your team's needs. No attribution required.
