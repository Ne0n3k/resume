import './App.css'
import { PageShell } from './components/layout/PageShell'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { LanguagesSection } from './components/sections/LanguagesSection'
import { ProfileSection } from './components/sections/ProfileSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { resumeData } from './data/resume'

const App = () => (
  <PageShell
    sidebar={
      <div className="sidebar-stack">
        <ContactSection contact={resumeData.contact} />
        <ProfileSection profile={resumeData.profile} />
        <EducationSection education={resumeData.education} />
        <SkillsSection skills={resumeData.skills} />
        <LanguagesSection languages={resumeData.languages} />
      </div>
    }
  >
    <ExperienceSection experience={resumeData.experience} />
    <ProjectsSection projects={resumeData.projects} />
  </PageShell>
)

export default App
