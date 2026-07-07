import { useI18n } from '../i18n/context'
import Modal from './Modal'
import type { Skill } from '../utils/constants'

type SkillModalProps = {
  skill: Skill | null
  onClose: () => void
}

function SkillModal({ skill, onClose }: SkillModalProps) {
  const { t } = useI18n()

  return (
    <Modal isOpen={Boolean(skill)} onClose={onClose}>
      {skill ? (
        <div className="modal-body">
          <h3>{t('skills.detailsTitle')}</h3>
          <h2>{t(`${skill.key}.name`)}</h2>
          <p>
            <strong>{t('skills.labels.description')}:</strong> {t(`${skill.key}.description`)}
          </p>
          <p>
            <strong>{t('skills.labels.useFor')}:</strong> {t(`${skill.key}.useFor`)}
          </p>
          <p>
            <strong>{t('skills.labels.experience')}:</strong> {t(`${skill.key}.experience`)}
          </p>
          <div>
            <strong>{t('skills.labels.useCases')}:</strong>
            <ul>
              {(t(`${skill.key}.useCases`) as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <button className="action-btn" onClick={onClose}>
            {t('skills.close')}
          </button>
        </div>
      ) : null}
    </Modal>
  )
}

export default SkillModal
