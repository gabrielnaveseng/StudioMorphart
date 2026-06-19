import { ExternalLink, Mail, MapPin, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Section } from '../components/ui/Section'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <Section eyebrow={t('contact.eyebrow')} title={t('contact.title')} intro={t('contact.intro')}>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
        <form className="rounded-[2rem] border border-canopy/10 bg-mist p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.18em] text-canopy">
              {t('contact.name')}
              <input className="rounded-2xl border border-canopy/15 bg-linen px-4 py-3 text-base font-normal normal-case tracking-normal outline-none transition focus:border-clay" />
            </label>
            <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.18em] text-canopy">
              {t('contact.email')}
              <input type="email" className="rounded-2xl border border-canopy/15 bg-linen px-4 py-3 text-base font-normal normal-case tracking-normal outline-none transition focus:border-clay" />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold uppercase tracking-[0.18em] text-canopy">
            {t('contact.message')}
            <textarea rows={7} className="resize-none rounded-2xl border border-canopy/15 bg-linen px-4 py-3 text-base font-normal normal-case tracking-normal outline-none transition focus:border-clay" />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-canopy px-6 text-sm font-bold uppercase tracking-[0.16em] text-linen shadow-soft transition hover:-translate-y-0.5 hover:bg-bark"
          >
            {t('contact.submit')}
            <Send size={17} aria-hidden="true" />
          </button>
        </form>

        <aside className="rounded-[2rem] bg-canopy p-8 text-linen shadow-soft">
          <p className="font-display text-4xl font-semibold">{t('contact.asideTitle')}</p>
          <p className="mt-4 leading-7 text-linen/75">{t('contact.asideText')}</p>
          <div className="mt-8 grid gap-4 text-sm text-linen/80">
            <a className="flex items-center gap-3" href="mailto:hello@studiomorphart.ca">
              <Mail size={18} /> hello@studiomorphart.ca
            </a>
            <a className="flex items-center gap-3" href="https://instagram.com" target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> @studiomorphart
            </a>
            <span className="flex items-center gap-3">
              <MapPin size={18} /> {t('contact.location')}
            </span>
          </div>
        </aside>
      </div>
    </Section>
  )
}
