import { useI18n } from '../i18n/context'

function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <p className="footer-note">{t('footer.text')}</p>
    </footer>
  )
}

export default Footer
