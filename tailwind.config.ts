import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#070B14',
        navy: '#0B1220',
        panel: '#111C33',
        charcoal: '#141A2E',
        'slate-gray': '#4A5568',
        'off-white': '#F7F8FA',
        line: '#E4E8EF',
        'deep-blue': '#2563EB',
        'bright-blue': '#3B82F6',
        sky: '#93C5FD',
        critical: '#DC2626',
        'critical-soft': '#FCA5A5',
        amber: '#F59E0B',
        'success-green': '#16A34A',
        'warm-gray': '#9CA3AF',
        'steel-blue': '#64748B',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      fontFamily: {
        sans: [
          'Inter',
          'IBM Plex Sans Arabic',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['IBM Plex Mono', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
        prose: '680px',
      },
      fontSize: {
        hero: ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-sm': ['2.6rem', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        section: ['2.5rem', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        'section-sm': ['1.9rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};

export default config;
