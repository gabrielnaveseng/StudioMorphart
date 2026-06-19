import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { Product } from '../../data/products'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation()

  return (
    <motion.article
      className="group overflow-hidden rounded-[2rem] border border-canopy/10 bg-mist shadow-soft"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-weave">
        <img
          src={product.image}
          alt={t(`${product.translationKey}.name`)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-linen/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-canopy backdrop-blur"
            >
              {t(`tags.${tag}`)}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-3xl font-semibold text-canopy">
          {t(`${product.translationKey}.name`)}
        </h3>
        <p className="mt-3 leading-7 text-bark/72">{t(`${product.translationKey}.description`)}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-canopy/14 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-bark/70"
            >
              {t(`tags.${tag}`)}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
