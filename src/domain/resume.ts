export type Profile = {
  headline: string
  summary: string
  interests: string[]
}

export type Experience = {
  company: string
  position: string
  period?: string
  highlights: string[]
}

export type EducationEntry = {
  school: string
  degree: string
  program: string
  period: string
  notes?: string
}

export type Project = {
  name: string
  summary: string
  technologies: string[]
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type LanguageSkill = {
  name: string
  level: string
}

export type ContactInfo = {
  name: string
  github: string
  linkedin: string
  phone: string
  email: string
}

export type ResumeData = {
  profile: Profile
  experience: Experience[]
  education: EducationEntry[]
  skills: SkillGroup[]
  languages: LanguageSkill[]
  projects: Project[]
  contact: ContactInfo
}

