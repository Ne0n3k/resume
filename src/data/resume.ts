import type {
  ContactInfo,
  EducationEntry,
  Experience,
  LanguageSkill,
  Profile,
  Project,
  ResumeData,
  SkillGroup,
} from '../domain/resume'

const contact: ContactInfo = {
  name: 'Jakub Błażowski',
  github: 'https://github.com/Ne0n3k',
  linkedin: 'https://www.linkedin.com/in/jakub-blazowski-828b43300',
  phone: '+48 697 461 603',
  email: 'jak.blazowski@gmail.com',
}

const profile: Profile = {
  headline: 'Computer Science and Intelligent Systems Student',
  summary:
    'Fourth-year Computer Science and Intelligent Systems student at AGH University of Science and Technology. Can be described as a motivated person, always ready for new challenges. As a charismatic, helpful and able to work in group person, I will always find myself in a given environment. Interested in machine learning, data mining and cloud. I am actively developing my skills in these areas through various projects.',
  interests: ['Machine Learning', 'Data Mining', 'Cloud'],
}

const experience: Experience[] = [
  {
    company: 'Comarch',
    position: 'Programming Internship',
    highlights: [
      'Developed internal system for automated software deployment and code quality checks using Java, Spring Boot, and Angular.',
      'Implemented web frontend and integrated with internal CI/CD pipeline.',
      'Participated in code reviews and Agile development process.',
    ],
  },
]

const education: EducationEntry[] = [
  {
    school: 'AGH University of Science and Technology',
    degree: "Master's degree",
    program: 'Computer Science and Intelligent Systems',
    period: '2025 - now',
  },
  {
    school: 'AGH University of Science and Technology',
    degree: 'Bachelor of Science (BSc)',
    program: 'Computer Science and Intelligent Systems',
    period: '2021 - 2025',
    notes: 'Graduation: 2025',
  },
]

const skills: SkillGroup[] = [
  {
    label: 'Languages & Tools',
    items: ['Python', 'Java', 'C#', 'Swift', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['Spring Boot', 'Angular', 'SwiftUI', 'Drools', 'Maven', 'FastAPI', 'PyTorch'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Docker', 'Linux'],
  },
]

const languages: LanguageSkill[] = [
  { name: 'Polish', level: 'native' },
  { name: 'English', level: 'C1' },
  { name: 'German', level: 'A2' },
]

const projects: Project[] = [
  {
    name: 'Shapley Mining',
    summary:
      'Notebook pipeline that converts process trees into logical specifications, runs optional Vampire proofs, and performs Shapley-value analysis with CSV, graph, and importance-map exports.',
    technologies: ['Python', 'Jupyter', 'pm4py', 'Graphviz'],
  },
  {
    name: 'Art Trend Classifier',
    summary:
      'Based on the uploaded image, the system determines the appropriate artistic style and generates a short review. Achieved over 75% accuracy across 18 styles using Albumentations, Mixup, and Early Stopping.',
    technologies: ['PyTorch', 'ResNet50', 'FastAPI', 'Docker'],
  },
  {
    name: 'Process mining',
    summary:
      'Application created to explore processes such as activity logs. The system generates multiple process trees and logic specifications that can be input into an automated theorem prover.',
    technologies: ['Python', 'pandas', 'pm4py'],
  },
  {
    name: 'Light Categories',
    summary:
      'Drools-based expert system that assigns optimal road-lighting classes using rules over speed, intensity, connection density, parked vehicles, and ambient brightness data.',
    technologies: ['Java', 'Drools', 'Maven'],
  },
  {
    name: 'ToDo App',
    summary:
      'iOS application designed to store and prioritize tasks with name, description, date, and priority metadata.',
    technologies: ['Swift', 'SwiftUI'],
  },
]

export const resumeData: ResumeData = {
  contact,
  profile,
  experience,
  education,
  skills,
  languages,
  projects,
}

