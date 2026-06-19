export type Product = {
  id: string
  image: string
  translationKey: string
  tags: string[]
}

export const products: Product[] = [
  {
    id: 'arc-of-sara',
    image: `${import.meta.env.BASE_URL}images/earring-arc-sara.svg`,
    translationKey: 'products.arcSara',
    tags: ['flexible', 'moldable', 'handcrafted', 'macrame'],
  },
  {
    id: 'forest-current',
    image: `${import.meta.env.BASE_URL}images/earring-forest-current.svg`,
    translationKey: 'products.forestCurrent',
    tags: ['flexible', 'moldable', 'handcrafted', 'macrame'],
  },
  {
    id: 'tropical-thread',
    image: `${import.meta.env.BASE_URL}images/earring-tropical-thread.svg`,
    translationKey: 'products.tropicalThread',
    tags: ['flexible', 'moldable', 'handcrafted', 'macrame'],
  },
  {
    id: 'river-ritual',
    image: `${import.meta.env.BASE_URL}images/earring-river-ritual.svg`,
    translationKey: 'products.riverRitual',
    tags: ['flexible', 'moldable', 'handcrafted', 'macrame'],
  },
]
