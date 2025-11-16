import { describe, expect, it } from 'vitest'
import { resumeData } from '../data/resume'

describe('resumeData integrity', () => {
  it('contains all major sections', () => {
    expect(resumeData).toMatchObject({
      contact: expect.any(Object),
      profile: expect.any(Object),
      education: expect.any(Array),
      skills: expect.any(Array),
      languages: expect.any(Array),
      projects: expect.any(Array),
      experience: expect.any(Array),
    })
  })

  it('keeps external links prefixed with http(s)', () => {
    const { github, linkedin } = resumeData.contact
    expect(github.startsWith('http')).toBe(true)
    expect(linkedin.startsWith('http')).toBe(true)
  })
})

