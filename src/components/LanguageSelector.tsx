import { useI18n } from '../i18n/context'
import type { Language } from '../i18n/context'

type LanguageSelectorProps = {
  language: Language
  onChange: (language: Language) => void
}

function LanguageSelector({ language, onChange }: LanguageSelectorProps) {
  const { t } = useI18n()

  return (
    <div className="language-selector" role="group" aria-label="Language selector">
      <button className={language === 'en' ? 'active' : ''} onClick={() => onChange('en')}>
        {t('language.en')}
      </button>
      <button className={language === 'fr' ? 'active' : ''} onClick={() => onChange('fr')}>
        {t('language.fr')}
      </button>
    </div>
  )
}

export default LanguageSelector
