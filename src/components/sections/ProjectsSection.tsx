import type { Project } from '../../domain/resume'
import { SectionCard } from '../ui/SectionCard'

type ProjectsSectionProps = {
  projects: Project[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <SectionCard title="Projects" subtitle="Selected work">
    <div className="projects-grid">
      {projects.map((project) => (
        <article key={project.name} className="project-card">
          <div className="project-card__header">
            <h3>{project.name}</h3>
          </div>
          <p className="project-card__summary">{project.summary}</p>
          <ul className="project-card__stack">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </SectionCard>
)

