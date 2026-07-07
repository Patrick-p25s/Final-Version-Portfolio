import { useReveal } from '../hooks/useReveal'
import { useI18n } from '../i18n/context'

function About() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className={`section reveal ${visible ? 'visible' : ''}`}>
      <h2>{t('about.title')}</h2>
      <p>{t('about.text')}</p>
    </section>
  )
}

export default About
