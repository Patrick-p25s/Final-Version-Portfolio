export type ThemeKey = 'blue' | 'green' | 'dark'

export type Skill = {
  id: string
  key: string
}

export type Project = {
  id: string
  key: string
  image: string
  tech: string[]
  repository: string
  demo: string
}

export type EducationItem = {
  id: string
  key: string
  period: string
}

export const themes: { key: ThemeKey; label: string }[] = [
  { key: 'blue', label: 'Blue' },
  { key: 'green', label: 'Green' },
  { key: 'dark', label: 'Dark' },
]

export const skills: Skill[] = [
  { id: 'html', key: 'skills.items.html' },
  { id: 'css', key: 'skills.items.css' },
  { id: 'javascript', key: 'skills.items.javascript' },
  { id: 'react', key: 'skills.items.react' },
  { id: 'express', key: 'skills.items.express' },
  { id: 'fastapi', key: 'skills.items.fastapi' },
  { id: 'python', key: 'skills.items.python' },
  { id: 'tailwind', key: 'skills.items.tailwind' },
  { id: 'node', key: 'skills.items.node' },
  { id: 'postgresql', key: 'skills.items.postgresql' },
  { id: 'typescript', key: 'skills.items.typescript' },
  { id: 'docker', key: 'skills.items.docker' },
  { id: 'aws', key: 'skills.items.aws' },
]

export const projects: Project[] = [
  {
    id: 'NextGen Games',
    key: 'projects.items.games',
    image: './Portfolio.png',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    repository: 'https://github.com/your-username/saas-analytics-dashboard',
    demo: 'https://github.com/your-username/saas-analytics-dashboard',
  },
  {
    id: 'E-commerce API Plateform',
    key: 'projects.items.ecommerce',
    image: 'nextGen.png',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    repository: 'https://github.com/your-username/ecommerce-api',
    demo: 'https://github.com/your-username/ecommerce-api',
  },
  {
    id: 'Blueware Messages',
    key: 'projects.items.blueware',
    image: 'nextGen.png',
    tech: ['React', 'WebSocket', 'Node.js', 'Redis'],
    repository: 'https://github.com/your-username/dev-collab-platform',
    demo: 'https://github.com/your-username/dev-collab-platform',
  },
  {
    id: 'Portfolio',
    key: 'projects.items.portfolio',
    image: 'nextGen.png',
    tech: ['React', 'TypeScript', 'CSS', 'Responsive UI'],
    repository: 'https://github.com/your-username/dev-collab-platform',
    demo: 'https://github.com/your-username/dev-collab-platform',
  },
  {
    id: 'Projet EMIT',
    key: 'projects.items.emit',
    image: 'nextGen.png',
    tech: ['React', 'Node.js', 'Express', 'Education Platform'],
    repository: 'https://github.com/your-username/dev-collab-platform',
    demo: 'https://github.com/your-username/dev-collab-platform',
  },
]

export const education: EducationItem[] = [
  { id: 'baccalaureat', key: 'education.items.baccalaureat', period: '2023' },
  { id: 'sesame', key: 'education.items.sesame', period: '2025' },
  { id: 'internship', key: 'education.items.internship', period: 'Juillet 2025' },
  { id: 'gdg', key: 'education.items.gdg', period: 'Novembre 2025' },
  { id: 'emit', key: 'education.items.emit', period: 'En cours' },
]
