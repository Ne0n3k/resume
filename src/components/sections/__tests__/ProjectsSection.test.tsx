import { render, screen } from '@testing-library/react'
import type { Project } from '../../../domain/resume'
import { ProjectsSection } from '../ProjectsSection'

const projects: Project[] = [
  {
    name: 'Art Trend Classifier',
    summary: 'Vision model',
    technologies: ['PyTorch', 'FastAPI'],
  },
  {
    name: 'Light Categories',
    summary: 'Drools expert system',
    technologies: ['Drools', 'Java'],
  },
]

describe('ProjectsSection', () => {
  it('lists every project and its stack', () => {
    render(<ProjectsSection projects={projects} />)

    projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument()
      expect(screen.getByText(project.summary)).toBeInTheDocument()
      project.technologies.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument()
      })
    })
  })
})

