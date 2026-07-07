import { useReveal } from '../hooks/useReveal'
import { useI18n } from '../i18n/context'
import { education } from '../utils/constants'

function Education() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="education" ref={ref} className={`section reveal ${visible ? 'visible' : ''}`}>
      <h2>{t('education.title')}</h2>
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.id} className="education-card">
            <span>{item.period}</span>
            <h3>{t(`${item.key}.name`)}</h3>
            <h4>{t(`${item.key}.school`)}</h4>
            <p>{t(`${item.key}.description`)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
