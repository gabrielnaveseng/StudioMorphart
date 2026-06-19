import { useTranslation } from 'react-i18next'
import { Section } from '../components/ui/Section'
import { products } from '../data/products'
import { ProductCard } from '../features/products/ProductCard'

export function CollectionPage() {
  const { t } = useTranslation()

  return (
    <Section eyebrow={t('collection.eyebrow')} title={t('collection.title')} intro={t('collection.intro')}>
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  )
}
