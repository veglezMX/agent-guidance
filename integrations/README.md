# AI Tool Integration Files

This folder contains configuration files for integrating the Cookbook System with various AI coding assistants.

## 📁 Files Overview

```
integrations/
├── .cursorrules                    # Cursor AI configuration
├── .continuerc.json               # Continue.dev configuration
├── .github/
│   └── copilot-instructions.md    # GitHub Copilot instructions
├── .cody/
│   └── instructions.md            # Sourcegraph Cody instructions
├── .vscode/
│   └── settings.json              # VSCode workspace settings
├── AI-TOOLS-INTEGRATION.md        # Complete integration guide
└── README.md                      # This file
```

## 🚀 Quick Setup

### Step 1: Copy Files to Your Repository Root

Copy the relevant config files from this folder to your repository root:

```bash
# For Cursor users
cp integrations/.cursorrules ./

# For Continue.dev users
cp integrations/.continuerc.json ./

# For GitHub Copilot users
cp -r integrations/.github ./

# For Cody users
cp -r integrations/.cody ./

# For VSCode settings
cp integrations/.vscode/settings.json ./.vscode/
```

### Step 2: Update Paths

If your cookbook is not at `./team-cookbook/`, update the paths in copied files:

```bash
# Example: If cookbook is at ./docs/cookbook/
# Update all references from:
#   team-cookbook/_index.yaml
# To:
#   docs/cookbook/_index.yaml
```

### Step 3: Copy AGENTS.md to Root

The `AGENTS.md` file should already be in your repository root from the main setup.

### Step 4: Test Integration

1. Open your project in VSCode with your AI tool
2. Ask: "What patterns does this project follow?"
3. The tool should reference your cookbook
4. Try: "Create a Button component"
5. Verify: Generated code follows your team patterns

## 🔧 File Details

### `.cursorrules`
- **For**: Cursor AI editor
- **Location**: Repository root
- **Purpose**: Tell Cursor to read cookbook before generation
- **Size**: Small (~15 lines)

### `.continuerc.json`
- **For**: Continue.dev extension
- **Location**: Repository root
- **Purpose**: Configure Continue to use cookbook as context
- **Features**: System message, context providers, docs reference

### `.github/copilot-instructions.md`
- **For**: GitHub Copilot
- **Location**: `.github/` folder in root
- **Purpose**: Provide Copilot with team patterns
- **Note**: GitHub Copilot reads this automatically

### `.cody/instructions.md`
- **For**: Sourcegraph Cody
- **Location**: `.cody/` folder in root
- **Purpose**: Configure Cody with project context

### `.vscode/settings.json`
- **For**: All VSCode-based AI tools
- **Location**: `.vscode/` folder in root
- **Purpose**: Workspace-level AI tool configuration
- **Note**: Merge with existing settings.json if you have one

## 📊 Tool Comparison

| Tool | Config File | Auto-reads? | Cookbook Support |
|------|-------------|-------------|------------------|
| **Cursor** | `.cursorrules` | ✅ Yes | Excellent |
| **Continue.dev** | `.continuerc.json` | ✅ Yes | Excellent |
| **GitHub Copilot** | `.github/copilot-instructions.md` | ✅ Yes | Good |
| **Cody** | `.cody/instructions.md` | ✅ Yes | Good |
| **Aider** | `.aider.conf.yml` | ✅ Yes | Good |

## 🎯 Integration Workflow

```
1. User opens project in VSCode
   ↓
2. AI tool reads its config file
   (.cursorrules, .continuerc.json, etc.)
   ↓
3. Config points to AGENTS.md
   ↓
4. AGENTS.md points to team-cookbook/_index.yaml
   ↓
5. Tool loads cookbook context
   ↓
6. User asks to create code
   ↓
7. Tool checks cookbook patterns
   ↓
8. Tool generates compliant code ✅
```

## 🔍 Customization

### Minimal Setup (Choose One)
Pick the config for your preferred AI tool and copy just that file.

### Standard Setup (Recommended)
Copy configs for all tools you or your team might use.

### Full Setup
Copy all files + create JSON schemas for YAML validation.

## 🧪 Testing

### Test 1: Context Loading
```
Ask: "What coding patterns does this project follow?"
Expected: Tool mentions cookbook
```

### Test 2: Pattern Following
```
Ask: "Create a Button component"
Expected: Code follows patterns/component.yaml
```

### Test 3: Constraint Validation
```
Ask: "Create a component with props using any type"
Expected: Tool refuses or warns about 'any' type constraint
```

## 📚 Documentation

- **Complete Guide**: See `AI-TOOLS-INTEGRATION.md` in this folder
- **Universal Entry Point**: See `../AGENTS.md` at repository root
- **Quick Start**: See `../QUICKSTART.md`
- **System Overview**: See `../README.md`

## 🐛 Troubleshooting

### Tool Not Reading Cookbook

**Problem**: AI tool generates code without following patterns

**Solutions**:
1. Check config file is in correct location
2. Verify paths in config point to cookbook
3. Restart VSCode/tool
4. Check tool's output/logs for errors

### Paths Not Working

**Problem**: Tool can't find cookbook files

**Solutions**:
1. Use relative paths from repository root
2. Verify _index.yaml exists at specified path
3. Check file permissions
4. Use forward slashes even on Windows

### Tool Too Slow

**Problem**: Tool takes long time to respond

**Solutions**:
1. Use lazy loading (don't pre-load everything)
2. Keep constraint files small
3. Use quick_reference for fast lookup
4. Increase tool's context window if possible

## 💡 Tips

1. **Start Small**: Begin with just your main AI tool's config
2. **Test Early**: Verify integration works before team adoption
3. **Document Tool-Specific Issues**: Note quirks in your project's docs
4. **Keep Configs Simple**: Point to AGENTS.md, don't duplicate instructions
5. **Version Control Everything**: Commit all config files

## 🔄 Maintenance

### When to Update Configs

- ✅ Cookbook location changes
- ✅ New critical patterns added
- ✅ Tool updates change config format
- ✅ Team switches AI tools

### How to Update

1. Update config file with new paths/patterns
2. Test with team members
3. Commit and push changes
4. Notify team of updates

## 🤝 Contributing

If you create configs for additional AI tools, consider:
1. Adding config file to this folder
2. Documenting in AI-TOOLS-INTEGRATION.md
3. Updating this README
4. Sharing with the community

## 📞 Support

- **Integration Issues**: See `AI-TOOLS-INTEGRATION.md`
- **Cookbook Issues**: See `../README.md`
- **Tool-Specific Issues**: Check tool's documentation

---

**Remember**: The goal is to make AI tools automatically follow your team's patterns. These config files are the bridge between the tools and your cookbook.
