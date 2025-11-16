import { render, screen } from '@testing-library/react'
import type { ContactInfo } from '../../../domain/resume'
import { ContactSection } from '../ContactSection'

const contact: ContactInfo = {
  name: 'Jakub Błażowski',
  github: 'https://github.com/Ne0n3k',
  linkedin: 'https://www.linkedin.com/in/jakub',
  phone: '+48 697 461 603',
  email: 'jak.blazowski@gmail.com',
}

describe('ContactSection', () => {
  it('renders labels and values with proper links', () => {
    render(<ContactSection contact={contact} />)

    expect(screen.getByText(contact.name)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contact.github })).toHaveAttribute(
      'href',
      contact.github,
    )
    expect(screen.getByRole('link', { name: contact.linkedin })).toHaveAttribute(
      'href',
      contact.linkedin,
    )
    expect(screen.getByRole('link', { name: contact.phone })).toHaveAttribute(
      'href',
      `tel:${contact.phone}`,
    )
    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    )
  })
})

