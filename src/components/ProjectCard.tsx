import { useI18n } from '../i18n/context'
import type { Project } from '../utils/constants'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n()

  return (
    <article className="project-card">
      <img src={project.image} alt={String(t(`${project.key}.title`))} />
      <div className="project-card-content">
        <h3>{t(`${project.key}.title`)}</h3>
        <p>{t(`${project.key}.short`)}</p>
        <div className="project-tech-list" aria-label="Project technologies">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <a className="action-btn" href={project.repository} target="_blank" rel="noreferrer">
            {t('projects.repo')}
          </a>
          <a className="action-btn outline" href={project.demo} target="_blank" rel="noreferrer">
            {t('projects.demo')}
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
