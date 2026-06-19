import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'
import pt from './locales/pt.json'

export const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Portuguese' },
  { code: 'fr', label: 'FR', name: 'French' },
] as const

export type LanguageCode = (typeof languages)[number]['code']

const storedLanguage = window.localStorage.getItem('studio-morphart-language')
const fallbackLanguage: LanguageCode = 'en'
const initialLanguage = languages.some((language) => language.code === storedLanguage)
  ? (storedLanguage as LanguageCode)
  : fallbackLanguage

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
    fr: { translation: fr },
  },
  lng: initialLanguage,
  fallbackLng: fallbackLanguage,
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  window.localStorage.setItem('studio-morphart-language', language)
  document.documentElement.lang = language
})

document.documentElement.lang = initialLanguage

export { i18n }
