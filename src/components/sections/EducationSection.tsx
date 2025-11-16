import type { EducationEntry } from '../../domain/resume'
import { SectionCard } from '../ui/SectionCard'

type EducationSectionProps = {
  education: EducationEntry[]
}

export const EducationSection = ({ education }: EducationSectionProps) => (
  <SectionCard title="Education" subtitle="Formal background">
    <ul className="education-list">
      {education.map((entry) => (
        <li key={`${entry.school}-${entry.period}`} className="education-list__item">
          <div className="education-list__period">{entry.period}</div>
          <div>
            <p className="education-list__school">{entry.school}</p>
            <p className="education-list__degree">{entry.degree}</p>
            <p className="education-list__program">{entry.program}</p>
            {entry.notes && <p className="education-list__notes">{entry.notes}</p>}
          </div>
        </li>
      ))}
    </ul>
  </SectionCard>
)

