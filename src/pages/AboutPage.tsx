import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { OrganicThread } from '../components/ui/OrganicThread'
import { Section } from '../components/ui/Section'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <Section className="relative overflow-hidden" eyebrow={t('about.eyebrow')} title={t('about.title')} intro={t('about.intro')}>
        <OrganicThread className="absolute inset-x-0 top-20 -z-10 h-72 w-full text-river/28" />
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.img
            src={`${import.meta.env.BASE_URL}images/manifesto-portrait.svg`}
            alt={t('about.imageAlt')}
            className="aspect-[4/5] w-full rounded-[38%_62%_46%_54%] object-cover shadow-soft"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
          <div className="grid gap-5 text-lg leading-8 text-bark/76">
            <p>{t('about.storyOne')}</p>
            <p>{t('about.storyTwo')}</p>
            <p>{t('about.storyThree')}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-mist" eyebrow={t('about.manifestoEyebrow')} title={t('about.manifestoTitle')}>
        <div className="grid gap-6">
          {['wild', 'wander', 'weaver'].map((word) => (
            <motion.article
              key={word}
              className="grid gap-6 rounded-[2rem] border border-canopy/10 bg-linen p-7 shadow-soft md:grid-cols-[14rem_1fr]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
                  {t(`manifesto.${word}.label`)}
                </p>
                <h2 className="mt-3 font-display text-5xl font-semibold text-canopy">
                  {t(`manifesto.${word}.title`)}
                </h2>
              </div>
              <p className="text-lg leading-9 text-bark/76">{t(`manifesto.${word}.full`)}</p>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  )
}
