import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
  children: ReactNode
  className?: string
  tone?: 'light' | 'dark'
}

export function Section({ id, eyebrow, title, intro, children, className, tone = 'light' }: SectionProps) {
  const isDark = tone === 'dark'

  return (
    <section id={id} className={clsx('px-5 py-20 sm:px-8 lg:px-12 lg:py-28', className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p
                className={clsx(
                  'mb-3 text-xs font-bold uppercase tracking-[0.32em]',
                  isDark ? 'text-fern' : 'text-clay',
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={clsx(
                  'font-display text-4xl font-semibold leading-tight sm:text-5xl',
                  isDark ? 'text-linen' : 'text-canopy',
                )}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p className={clsx('mt-5 text-lg leading-8', isDark ? 'text-linen/72' : 'text-bark/75')}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
