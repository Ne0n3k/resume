import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useReveal } from '../useReveal'

describe('useReveal', () => {
  it('returns ref and visibility flag', () => {
    const { result } = renderHook(() => useReveal())
    expect(result.current).toHaveProperty('ref')
    expect(result.current).toHaveProperty('isVisible')
    expect(result.current.isVisible).toBe(false)
  })
})

