import type { Profile } from '../../domain/resume'
import { SectionCard } from '../ui/SectionCard'

type ProfileSectionProps = {
  profile: Profile
}

export const ProfileSection = ({ profile }: ProfileSectionProps) => (
  <SectionCard title="Profile" subtitle={profile.headline} accent="secondary">
    <p className="profile-section__summary">{profile.summary}</p>
    <div className="profile-section__chips">
      {profile.interests.map((interest) => (
        <span key={interest} className="chip">
          {interest}
        </span>
      ))}
    </div>
  </SectionCard>
)

