import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ButtonLink } from '../components/ui/ButtonLink'
import { OrganicThread } from '../components/ui/OrganicThread'
import { Section } from '../components/ui/Section'
import { products } from '../data/products'
import { ProductCard } from '../features/products/ProductCard'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-81px)] overflow-hidden px-5 py-14 sm:px-8 lg:px-12">
        <OrganicThread className="absolute inset-x-0 top-10 -z-10 h-80 w-full text-clay/35" />
        <div className="absolute right-[-7rem] top-32 -z-10 size-[24rem] rounded-full bg-river/15 blur-3xl" />
        <div className="absolute bottom-10 left-[-8rem] -z-10 size-[25rem] rounded-full bg-ember/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-clay/20 bg-linen/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-clay backdrop-blur">
              <Sparkles size={15} aria-hidden="true" />
              {t('home.eyebrow')}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-canopy text-balance sm:text-7xl lg:text-8xl">
              {t('home.title')}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-bark/76 sm:text-xl">
              {t('home.subtitle')}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink to="/collection">{t('home.ctaPrimary')}</ButtonLink>
              <ButtonLink to="/manifesto" variant="ghost">
                {t('home.ctaSecondary')}
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-md"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 rotate-3 rounded-[45%_55%_48%_52%] bg-canopy shadow-soft" />
            <div className="absolute inset-5 -rotate-2 overflow-hidden rounded-[42%_58%_52%_48%] bg-mist">
              <img
                src={`${import.meta.env.BASE_URL}images/earring-hero.svg`}
                alt={t('home.heroImageAlt')}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 max-w-[15rem] rounded-3xl bg-linen/92 p-5 shadow-soft backdrop-blur">
              <p className="font-display text-2xl font-semibold text-canopy">{t('home.productCalloutTitle')}</p>
              <p className="mt-2 text-sm leading-6 text-bark/70">{t('home.productCalloutText')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Section eyebrow="Wild / Wander / Weaver" title={t('home.manifestoTitle')} intro={t('home.manifestoIntro')}>
        <div className="grid gap-4 md:grid-cols-3">
          {['wild', 'wander', 'weaver'].map((word) => (
            <motion.div
              key={word}
              className="rounded-[2rem] border border-canopy/10 bg-mist p-7 shadow-soft"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="font-display text-4xl font-semibold text-clay">{t(`manifesto.${word}.title`)}</p>
              <p className="mt-4 leading-7 text-bark/75">{t(`manifesto.${word}.short`)}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        id="featured"
        className="bg-canopy text-linen"
        tone="dark"
        eyebrow={t('home.collectionEyebrow')}
        title={t('home.collectionTitle')}
        intro={t('home.collectionIntro')}
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </>
  )
}
