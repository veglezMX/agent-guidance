// Card.tsx - Wrapper component with children example

interface CardProps {
  title?: string
  className?: string
  children: React.ReactNode
}

export function Card({ title, className = '', children }: CardProps) {
  return (
    <div className={`border rounded-lg shadow-md p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div>{children}</div>
    </div>
  )
}
