import type { LanguageSkill } from '../../domain/resume'
import { SectionCard } from '../ui/SectionCard'

type LanguagesSectionProps = {
  languages: LanguageSkill[]
}

export const LanguagesSection = ({ languages }: LanguagesSectionProps) => (
  <SectionCard title="Languages" subtitle="Proficiency">
    <ul className="language-list">
      {languages.map((language) => (
        <li key={language.name} className="language-list__item">
          <span>{language.name}</span>
          <span className="language-list__level">{language.level}</span>
        </li>
      ))}
    </ul>
  </SectionCard>
)

