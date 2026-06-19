import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import { languages, type LanguageCode } from '../../i18n/config'

const navItems = [
  { to: '/', key: 'nav.home' },
  { to: '/manifesto', key: 'nav.manifesto' },
  { to: '/collection', key: 'nav.collection' },
  { to: '/contact', key: 'nav.contact' },
]

export function Header() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const changeLanguage = (language: LanguageCode) => {
    void i18n.changeLanguage(language)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-canopy/10 bg-linen/88 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center rounded-full bg-canopy text-lg font-bold text-linen shadow-glow">
            M
          </span>
          <span>
            <span className="block font-display text-2xl font-bold leading-none text-canopy">
              Studio Morphart
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
              {t('brand.tagline')}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={t('nav.aria')}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  isActive ? 'text-clay' : 'text-canopy hover:text-clay'
                }`
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex" aria-label={t('language.aria')}>
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => changeLanguage(language.code)}
              className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                i18n.resolvedLanguage === language.code
                  ? 'bg-canopy text-linen'
                  : 'text-canopy hover:bg-canopy/10'
              }`}
              aria-label={language.name}
            >
              {language.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-canopy/20 text-canopy lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? t('nav.close') : t('nav.open')}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-4 max-w-7xl rounded-3xl border border-canopy/10 bg-linen p-4 shadow-soft lg:hidden">
          <nav className="grid gap-2" aria-label={t('nav.aria')}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] ${
                    isActive ? 'bg-canopy text-linen' : 'text-canopy hover:bg-canopy/10'
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex gap-2 border-t border-canopy/10 pt-4">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => changeLanguage(language.code)}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-bold ${
                  i18n.resolvedLanguage === language.code
                    ? 'bg-canopy text-linen'
                    : 'bg-canopy/[0.08] text-canopy'
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
