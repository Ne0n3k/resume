import type { ContactInfo } from '../../domain/resume'
import { SectionCard } from '../ui/SectionCard'

type ContactSectionProps = {
  contact: ContactInfo
}

const CONTACT_FIELDS = [
  { label: 'Name', key: 'name' as const },
  { label: 'GitHub', key: 'github' as const },
  { label: 'LinkedIn', key: 'linkedin' as const },
  { label: 'Phone', key: 'phone' as const },
  { label: 'Email', key: 'email' as const },
]

const ensureProtocol = (url: string) =>
  url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`

export const ContactSection = ({ contact }: ContactSectionProps) => (
  <SectionCard title="Personal Info" subtitle="Let’s connect" accent="secondary">
    <ul className="contact-list">
      {CONTACT_FIELDS.map((field) => {
        const value = contact[field.key]
        const isLink = field.key === 'github' || field.key === 'linkedin' || field.key === 'email'
        const href =
          field.key === 'email'
            ? `mailto:${value}`
            : field.key === 'phone'
              ? `tel:${value}`
              : ensureProtocol(value)

        return (
          <li key={field.key} className="contact-list__item">
            <span className="contact-list__label">{field.label}</span>
            <span className="contact-list__value">
              {isLink || field.key === 'phone' ? (
                <a href={href} target="_blank" rel="noreferrer" className="contact-link">
                  {value}
                </a>
              ) : (
                value
              )}
            </span>
          </li>
        )
      })}
    </ul>
  </SectionCard>
)

