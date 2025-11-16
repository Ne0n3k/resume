import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const { ref, isVisible } = useReveal()

  return (
    <div
      ref={ref}
      className={['reveal', isVisible && 'reveal--visible', className].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

