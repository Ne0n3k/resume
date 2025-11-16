import type { ReactNode } from 'react'
import { Reveal } from '../animations/Reveal'

type SectionCardProps = {
  title: string
  subtitle?: string
  children: ReactNode
  accent?: 'primary' | 'secondary'
  headline?: string
}

export const SectionCard = ({
  title,
  subtitle,
  children,
  accent = 'primary',
  headline,
}: SectionCardProps) => (
  <Reveal className={`section-card section-card--${accent}`}>
    <div className="section-card__header">
      {subtitle && <p className="section-card__eyebrow">{subtitle}</p>}
      <h2 className="section-card__title">{title}</h2>
      {headline && <p className="section-card__headline">{headline}</p>}
    </div>
    <div className="section-card__body">{children}</div>
  </Reveal>
)

