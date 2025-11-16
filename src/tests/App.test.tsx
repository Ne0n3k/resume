import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders key sections', () => {
    render(<App />)
    expect(screen.getByText(/Personal Info/i)).toBeInTheDocument()
    expect(screen.getByText(/Profile/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Projects/i).length).toBeGreaterThan(0)
  })
})

