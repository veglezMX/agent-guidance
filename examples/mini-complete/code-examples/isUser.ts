// isUser.ts - Type guard example

interface User {
  id: string
  name: string
  email: string
  age?: number
}

export function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'email' in value &&
    typeof (value as User).id === 'string' &&
    typeof (value as User).name === 'string' &&
    typeof (value as User).email === 'string' &&
    ((value as User).age === undefined || typeof (value as User).age === 'number')
  )
}

export function isUserArray(value: unknown): value is User[] {
  return Array.isArray(value) && value.every(isUser)
}

// Usage example
export function processUser(data: unknown): string {
  if (!isUser(data)) {
    throw new Error('Invalid user data')
  }
  
  // TypeScript now knows 'data' is a User
  return `${data.name} (${data.email})`
}
