import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '410px',
      },
      fontFamily: {
        airbnb_cereal: ['Airbnb Cereal'],
      },
      colors: {
        brightOrange: '#FF971C',
        majesticBlue: '#5054D9',
      },
    },
  },
  plugins: [],
} satisfies Config;
