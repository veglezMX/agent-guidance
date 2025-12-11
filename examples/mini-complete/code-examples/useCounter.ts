// useCounter.ts - Custom hook example

import { useState } from 'react'

interface UseCounterOptions {
  initialValue?: number
  step?: number
  min?: number
  max?: number
}

export function useCounter(options: UseCounterOptions = {}) {
  const {
    initialValue = 0,
    step = 1,
    min = -Infinity,
    max = Infinity
  } = options

  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount(current => Math.min(current + step, max))
  }

  const decrement = () => {
    setCount(current => Math.max(current - step, min))
  }

  const reset = () => {
    setCount(initialValue)
  }

  const set = (value: number) => {
    setCount(Math.min(Math.max(value, min), max))
  }

  return {
    count,
    increment,
    decrement,
    reset,
    set
  }
}
