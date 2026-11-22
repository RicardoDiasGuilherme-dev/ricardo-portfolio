// Add only verified information and exact profile/repository URLs.
export const profile = {
  name: 'Ricardo Guilherme',
  fullName: 'Ricardo Dias Guilherme',
  title: 'Computer Science Student',
  focus: 'Software Engineering',
  introduction:
    'I’m in my third year of Computer Science at the University Polytechnic of Beja in Portugal. I’m developing both my technical skills and my interpersonal skills and hoping to learn more about software development, explore new technologies, and work with a team to build reliable software.',
  email: 'r.d.guilherme@icloud.com',
  location: 'Portugal',
  education: {
    degree: 'Bachelor’s Degree in Computer Science',
    institution: 'University Polytechnic of Beja',
    location: 'Portugal, Beja',
    start: '2024',
    end: '2027',
  },
  about: [
    'I’m Ricardo, a third-year Computer Science student at the University Polytechnic of Beja. I’m interested in understanding how cybersecurity works and how software can be developed to address today’s security challenges. I’m eager to learn how to build secure, well-designed software that can withstand today’s cyber threats.',
    'My main interests are backend development, cybersecurity, and software engineering, but I’d love to learn more about other areas. Through academic projects and personal projects, I’m putting what I’ve learned into practice, exploring new technologies and improving my software development skills.',
    'I value open communication, teamwork, and learning from different perspectives. I’m looking for a curricular internship where I can contribute to a development team, gain practical experience, and keep growing as a software engineer.',
  ],
  languages: [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'C1 · Advanced' },
  ],
  links: {
    github: 'https://github.com/RicardoDiasGuilherme-dev',
    linkedin: 'https://www.linkedin.com/in/ricardoguilherme-dev/',
  },
}

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'video-pitch', label: 'Video Pitch' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  {
    title: 'Backend Development',
    icon: 'server',
    note: 'The logic behind the experience.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PHP'],
  },
  {
    title: 'Frontend Development',
    icon: 'layers',
    note: 'Bringing interfaces to life.',
    technologies: ['JavaScript', 'React', 'Angular', 'HTML', 'CSS'],
  },
  {
    title: 'Databases & Data',
    icon: 'database',
    note: 'Working with structured information.',
    technologies: ['PostgreSQL', 'SQL', 'XML'],
  },
  {
    title: 'Tools & Other Languages',
    icon: 'terminal',
    note: 'Supporting a better workflow.',
    technologies: ['Git', 'GitHub', 'Maven', 'Python'],
  },
]

export const softSkills = [
  'Communication',
  'Teamwork',
  'Problem-solving',
  'Adaptability',
]

export const projects = [
  {
    id: 'task-management-api',
    title: 'Task Management REST API',
    category: 'Personal project',
    description:
      'A RESTful backend for managing tasks, built with Java and Spring Boot. A practical exploration of API development, application testing, and version control.',
    technologies: ['Java', 'Spring Boot', 'Maven', 'Git', 'GitHub'],
    features: [
      'Create, retrieve, update, and delete tasks',
      'RESTful API for task management',
      'Tests to validate application functionality',
      'Version control with Git and GitHub',
    ],
    demonstrates:
      'Java backend development · REST API design · Testing · Version control',
    repositoryUrl: 'https://github.com/RicardoDiasGuilherme-dev/task-management-api',
  },
]

export const assets = import.meta.env.PORTFOLIO_ASSETS

export function verifiedWebUrl(value) {
  if (!value) return null
  try {
    const url = new URL(value)
    return url.protocol === 'https:' ? url.href : null
  } catch {
    return null
  }
}
