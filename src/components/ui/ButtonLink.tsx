import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

export function ButtonLink({ to, children, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold uppercase tracking-[0.16em] transition duration-300 focus:outline-none focus:ring-4 focus:ring-ember/30',
        variant === 'primary'
          ? 'bg-canopy text-linen shadow-soft hover:-translate-y-0.5 hover:bg-bark'
          : 'border border-canopy/30 text-canopy hover:border-clay hover:text-clay',
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  )
}
