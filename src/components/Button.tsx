import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const base =
    'px-5 py-2.5 rounded-btn font-medium transition-colors duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2'
  const styles =
    variant === 'primary'
      ? 'bg-brand text-white hover:bg-brand-hover'
      : 'bg-white text-ink-primary border border-border-subtle hover:bg-surface-bg'

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  )
}
