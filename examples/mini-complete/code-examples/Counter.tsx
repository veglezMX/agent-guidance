// Counter.tsx - Component with state example

import { useState } from 'react'

interface CounterProps {
  initialValue: number
  step?: number
}

export function Counter({ initialValue, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialValue)

  const handleIncrement = () => {
    setCount(count + step)
  }

  const handleDecrement = () => {
    setCount(count - step)
  }

  const handleReset = () => {
    setCount(initialValue)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-4xl font-bold">{count}</div>
      <div className="flex gap-2">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  )
}
