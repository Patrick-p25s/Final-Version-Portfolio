import { useState } from 'react'
import type { FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useI18n } from '../i18n/context'
import { profile } from '../utils/profile'

type FormState = {
  name: string
  email: string
  message: string
}

function Contact() {
  const { t } = useI18n()
  const { ref, visible } = useReveal<HTMLElement>()
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const validate = () => {
    if (!form.name.trim()) return t('contact.validation.name')
    if (!/\S+@\S+\.\S+/.test(form.email)) return t('contact.validation.email')
    if (form.message.trim().length < 10) return t('contact.validation.message')
    return null
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const validationError = validate()
    if (validationError) {
      setFeedback({ type: 'error', text: String(validationError) })
      return
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS environment configuration')
      }

      // This sends directly from the browser to EmailJS API using your public key.
      // Configure service/template/public key in `.env` to route form data to your email.
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
        }),
      })

      setFeedback({ type: 'success', text: String(t('contact.success')) })
      setForm({ name: '', email: '', message: '' })
    } catch {
      setFeedback({ type: 'error', text: String(t('contact.error')) })
    }
  }

  return (
    <section id="contact" ref={ref} className={`section reveal ${visible ? 'visible' : ''}`}>
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.subtitle')}</p>

      <div className="contact-layout">
        <section className="contact-panel contact-form-panel">
          <h3>{t('footer.formTitle')}</h3>
          <p>{t('footer.formText')}</p>
          <form className="contact-form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder={String(t('contact.name'))}
              value={form.name}
              onChange={(event) => setForm((state) => ({ ...state, name: event.target.value }))}
            />
            <input
              type="email"
              placeholder={String(t('contact.email'))}
              value={form.email}
              onChange={(event) => setForm((state) => ({ ...state, email: event.target.value }))}
            />
            <textarea
              placeholder={String(t('contact.message'))}
              rows={5}
              value={form.message}
              onChange={(event) => setForm((state) => ({ ...state, message: event.target.value }))}
            />
            <button className="action-btn" type="submit">
              {t('contact.submit')}
            </button>
          </form>
        </section>

        <section className="contact-panel contact-info-panel">
          <h3>{t('footer.contactTitle')}</h3>
          <p>{t('footer.contactText')}</p>
          <div className="contact-list">
            <a className="contact-item" href={`mailto:${profile.email}`}>
              <span>{t('footer.email')}</span>
              <strong>{profile.email}</strong>
            </a>
            <a className="contact-item" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              <span>{t('footer.phone')}</span>
              <strong>{profile.phone}</strong>
            </a>
            <div className="contact-item">
              <span>{t('footer.location')}</span>
              <strong>{profile.location}</strong>
            </div>
          </div>
          <div className="social-links">
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </section>
      </div>
      {feedback ? <p className={`feedback ${feedback.type}`}>{feedback.text}</p> : null}
    </section>
  )
}

export default Contact
