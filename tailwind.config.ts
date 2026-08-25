import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1A1A2E',
        'slate-gray': '#4A5568',
        'off-white': '#F7F8FA',
        'deep-blue': '#2563EB',
        'steel-blue': '#64748B',
        'success-green': '#16A34A',
        'warm-gray': '#9CA3AF',
      },
      spacing: {
        '18': '4.5rem',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
