/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bark: '#2f261f',
        canopy: '#173f35',
        moss: '#7d8c54',
        fern: '#c7d29a',
        clay: '#b75f3d',
        ember: '#d89262',
        river: '#457b83',
        mist: '#f3efe6',
        linen: '#fbf7ec',
        ink: '#191614',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(25, 22, 20, 0.14)',
        glow: '0 0 50px rgba(216, 146, 98, 0.35)',
      },
      backgroundImage: {
        weave:
          'linear-gradient(120deg, rgba(23, 63, 53, 0.08) 1px, transparent 1px), linear-gradient(30deg, rgba(183, 95, 61, 0.08) 1px, transparent 1px)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(18px, -14px, 0) rotate(4deg)' },
        },
        thread: {
          '0%': { strokeDashoffset: '560' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        drift: 'drift 8s ease-in-out infinite',
        thread: 'thread 2.8s ease-out both',
      },
    },
  },
  plugins: [],
}
