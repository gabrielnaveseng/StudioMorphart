import { ExternalLink, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-canopy px-5 py-12 text-linen sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-3xl font-semibold">Studio Morphart</p>
          <p className="mt-4 max-w-md leading-7 text-linen/72">{t('footer.copy')}</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fern">{t('footer.visit')}</p>
          <div className="mt-4 grid gap-3 text-sm text-linen/75">
            <Link to="/manifesto">{t('nav.manifesto')}</Link>
            <Link to="/collection">{t('nav.collection')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fern">{t('footer.connect')}</p>
          <div className="mt-4 grid gap-3 text-sm text-linen/75">
            <a className="flex items-center gap-2" href="mailto:hello@studiomorphart.ca">
              <Mail size={16} /> hello@studiomorphart.ca
            </a>
            <a className="flex items-center gap-2" href="https://instagram.com" target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> @studiomorphart
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Canada
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
