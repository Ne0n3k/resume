import type { SkillGroup } from '../../domain/resume'
import { SectionCard } from '../ui/SectionCard'
import { BadgeList } from '../ui/BadgeList'

type SkillsSectionProps = {
  skills: SkillGroup[]
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <SectionCard title="Skills" subtitle="Languages, frameworks, tools">
    <div className="skills-grid">
      {skills.map((group) => (
        <div key={group.label}>
          <p className="skills-grid__label">{group.label}</p>
          <BadgeList items={group.items} />
        </div>
      ))}
    </div>
  </SectionCard>
)

