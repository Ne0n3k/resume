import type { Experience } from '../../domain/resume'
import { SectionCard } from '../ui/SectionCard'

type ExperienceSectionProps = {
  experience: Experience[]
}

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => (
  <SectionCard title="Experience" subtitle="Programming Internship">
    <ul className="experience-timeline">
      {experience.map((role) => (
        <li key={role.company} className="experience-timeline__item">
          <div>
            <p className="experience-timeline__company">{role.company}</p>
            <p className="experience-timeline__position">{role.position}</p>
            {role.period && <p className="experience-timeline__period">{role.period}</p>}
          </div>
          <ul className="experience-timeline__highlights">
            {role.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </SectionCard>
)

