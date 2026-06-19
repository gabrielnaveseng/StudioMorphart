import { motion } from 'framer-motion'

type OrganicThreadProps = {
  className?: string
}

export function OrganicThread({ className }: OrganicThreadProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 620 320"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M22 207C96 62 195 59 260 149C322 235 400 304 590 82"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="thread-line"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
      />
      <motion.path
        d="M44 248C143 150 204 194 282 208C371 224 449 197 563 125"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ duration: 2.8, delay: 0.3, ease: 'easeOut' }}
      />
    </svg>
  )
}
