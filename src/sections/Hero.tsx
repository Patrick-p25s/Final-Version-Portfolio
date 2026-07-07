import TypingText from '../components/TypingText'
import { useReveal } from '../hooks/useReveal'
import { useI18n } from '../i18n/context'

function Hero() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section id="home" ref={ref} className={`section hero reveal ${visible ? 'visible' : ''}`}>
      <div className="hero-content">
        <p className="hero-greeting">{t('hero.greeting')}</p>
        <h1>
          Nomentsoa Patrick,
          <TypingText words={t('hero.typing') as string[]} className="hero-typing" />
        </h1>
        <p>{t('hero.intro')}</p>
        <div className="hero-actions">
          <a className="action-btn" href="#projects">
            {t('hero.ctaPrimary')}
          </a>
          <a className="action-btn outline" href="#contact">
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img
          src="/patrick.png"
          alt="Developer profile"
          className="hero-image"
        />
      </div>
    </section>
  )
}

export default Hero
