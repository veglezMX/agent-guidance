# Mini Complete Cookbook Example

A **minimal but complete** React + TypeScript cookbook demonstrating the cookbook system in action.

## What This Shows

This is a fully functional cookbook with:

✅ **Navigation** - `_index.yaml` ties everything together  
✅ **Constraints** - Rules agents must follow  
✅ **Patterns** - Templates for common code  
✅ **Examples** - Working code to copy from  

## Structure

```
mini-complete/
├── _index.yaml                      # START HERE - navigation hub
│
├── constraints/                     # What NOT to do
│   ├── typescript.yaml              # Type safety rules
│   └── react.yaml                   # React patterns rules
│
├── patterns/                        # How to implement
│   ├── component.yaml               # Component templates
│   ├── hooks.yaml                   # Custom hook templates
│   └── utilities.yaml               # Utility function templates
│
└── code-examples/                   # Working code
    ├── Button.tsx                   # Simple component
    ├── Counter.tsx                  # Component with state
    ├── Card.tsx                     # Wrapper component
    ├── useCounter.ts                # Custom hook
    ├── useFetch.ts                  # Data fetching hook
    ├── formatDate.ts                # Pure functions
    ├── isUser.ts                    # Type guards
    └── constants.ts                 # Constants with types
```

## How an Agent Uses This

### Example Task: Create a Toggle Component

**1. Agent loads `_index.yaml`**
```yaml
quick_reference:
  new_component: "patterns/component.yaml#component-with-state"
```

**2. Agent checks constraints**
```yaml
# constraints/typescript.yaml
- "Props must have explicit interface"
- "No 'any' type"

# constraints/react.yaml
- "Use functional components only"
- "Destructure props"
```

**3. Agent loads pattern**
```yaml
# patterns/component.yaml
template: |
  interface {ComponentName}Props {
    requiredProp: string
  }
  
  export function {ComponentName}({ requiredProp }: {ComponentName}Props) {
    const [state, setState] = useState(initialValue)
    return <div>{requiredProp}</div>
  }
```

**4. Agent references example**
```typescript
// code-examples/Counter.tsx
// Working example with state management
```

**5. Agent generates code**
```typescript
// Toggle.tsx
interface ToggleProps {
  label: string
  initialValue: boolean
}

export function Toggle({ label, initialValue }: ToggleProps) {
  const [isOn, setIsOn] = useState(initialValue)
  
  const handleToggle = () => {
    setIsOn(!isOn)
  }
  
  return (
    <button onClick={handleToggle}>
      {label}: {isOn ? 'ON' : 'OFF'}
    </button>
  )
}
```

## What Makes This "Mini"?

- **3 constraint files** (not dozens)
- **3 pattern files** (core patterns only)
- **8 code examples** (covering main use cases)
- **Vanilla React** (no complex state management)
- **Simple TypeScript** (no advanced types)

## What's Intentionally Missing

This cookbook is **deliberately minimal**. Not included:

❌ State management (Redux, Zustand, etc.)  
❌ Styling systems (CSS-in-JS, Tailwind config)  
❌ Testing patterns  
❌ API integration details  
❌ Build configuration  
❌ Deployment workflows  

**Why?** To show the system structure without overwhelming detail. Real cookbooks can add these as separate sections.

## Key Patterns Demonstrated

### 1. Functional Components
See: `patterns/component.yaml` + `code-examples/Button.tsx`

### 2. Components with State
See: `patterns/component.yaml` + `code-examples/Counter.tsx`

### 3. Wrapper Components
See: `patterns/component.yaml` + `code-examples/Card.tsx`

### 4. Custom Hooks
See: `patterns/hooks.yaml` + `code-examples/useCounter.ts`

### 5. Data Fetching
See: `patterns/hooks.yaml` + `code-examples/useFetch.ts`

### 6. Pure Utilities
See: `patterns/utilities.yaml` + `code-examples/formatDate.ts`

### 7. Type Guards
See: `patterns/utilities.yaml` + `code-examples/isUser.ts`

### 8. Constants
See: `patterns/utilities.yaml` + `code-examples/constants.ts`

## How to Use This as a Starting Point

### Option 1: Copy Entire Structure
```bash
cp -r mini-complete my-team-cookbook
```

Then customize:
1. Update stack in `_index.yaml`
2. Add your constraints
3. Add your patterns
4. Replace examples with your code

### Option 2: Use as Reference
Study the structure and create your own from scratch using the templates in `../templates/`

## Visual Flow

```
Agent Task
    ↓
_index.yaml (navigation)
    ↓
constraints/ (check rules)
    ↓
patterns/ (get template)
    ↓
code-examples/ (see working code)
    ↓
Generated Code ✅
```

## Einstein's Principle Applied

> "If you can't explain it simply, you don't understand it well enough."

This cookbook proves you can document patterns simply:

- **YAML** over prose
- **Templates** over explanations
- **Examples** over descriptions
- **Rules** over reasoning

## Next Steps

1. **See how it works**: Read `_index.yaml` → constraints → patterns → examples
2. **Try generating code**: Ask an agent to create a component using this cookbook
3. **Adapt for your team**: Copy and customize for your needs

## Questions This Answers

**Q: Do I need to document everything?**  
A: No. This shows 8 examples covering core patterns. That's enough to start.

**Q: How detailed should patterns be?**  
A: See `patterns/component.yaml` - template + rules + example reference. That's it.

**Q: What if my code is more complex?**  
A: Add more patterns files. Keep each pattern simple. Complex systems = many simple patterns.

**Q: How do I keep this updated?**  
A: Update when patterns change. Version the cookbook. Treat it like code.

---

**Remember**: This is a **reference implementation**. Your cookbook should match your team's needs, not copy this exactly.
