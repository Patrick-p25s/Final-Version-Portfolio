import { useI18n } from '../i18n/context'
import Modal from './Modal'
import type { Project } from '../utils/constants'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useI18n()

  return (
    <Modal isOpen={Boolean(project)} onClose={onClose}>
      {project ? (
        <div className="modal-body">
          <img className="modal-image" src={project.image} alt={String(t(`${project.key}.title`))} />
          <h2>{t(`${project.key}.title`)}</h2>
          <p>{t(`${project.key}.full`)}</p>
          <p>
            <strong>{t('projects.labels.technologies')}:</strong> {project.tech.join(', ')}
          </p>
          <div>
            <strong>{t('projects.labels.challenges')}:</strong>
            <ul>
              {(t(`${project.key}.challenges`) as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>{t('projects.labels.features')}:</strong>
            <ul>
              {(t(`${project.key}.features`) as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <a className="action-btn" href={project.repository} target="_blank" rel="noreferrer">
            {t('projects.labels.repository')}
          </a>
          <button className="action-btn outline" onClick={onClose}>
            {t('projects.close')}
          </button>
        </div>
      ) : null}
    </Modal>
  )
}

export default ProjectModal
