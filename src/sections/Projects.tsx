import ProjectCard from '../components/ProjectCard'
import { useReveal } from '../hooks/useReveal'
import { useI18n } from '../i18n/context'
import { projects } from '../utils/constants'

function Projects() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="projects" ref={ref} className={`section reveal ${visible ? 'visible' : ''}`}>
      <h2>{t('projects.title')}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
