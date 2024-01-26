import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: ['1.0625rem', {
        fontWeight: '200',
      }],
      base: ['1.25rem', {
        lineHeight: '1.5rem',
        fontWeight: '200',
      }],
      xl: ['1.875rem', {
        fontWeight: '600',
      }],
      '2xl': ['3.125rem', {
        lineHeight: '3.8125rem',
        fontWeight: '600',
      }],
      '3xl': ['4.375rem', {
        lineHeight: '4.8rem',
        fontWeight: '600',
      }],
    },
    extend: {
      colors: {
        'primary': 'rgba(var(--primary-color), <alpha-value>)',
        'secondary': 'rgba(var(--secondary-color), <alpha-value>)',
        'background': 'rgba(var(--secondary-background-color), <alpha-value>)',
        'primary-background': 'rgba(var(--primary-background-color), <alpha-value>)',
      },
      opacity: {
        '3': '.03',
        '15': '.15',
      },
      backgroundImage: {
        'introduction-image': "url('/background.png')",
      },
      width: {
        'content': '75rem',
      },
      zIndex: {
        1: '1',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        xl: '0.625rem',
        '3xl': '1.25rem',
      },
      padding: {
        2: '0.45rem',
        '3xl': '1.8rem',
      },
    },
  },
  plugins: [],
}
export default config
