import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        text: '#000000',
        background: '#FFFFFF',
        primary: '#0D7ADF',
        secondary: '#fafbff',
        accent: '#ff0000',
        dtext: '#FFFFFF',
        dbackground: '#080808',
        dprimary: '#8FB3FF',
        dsecondary: '#001361',
        daccent: '#ff9999',
        discord: '#7289da',
        youtube: '#ff0000',
        twitter: '#1DA1F2',
        linkedin: '#0077B5',
        github: '#181717',
      },
    },
  },
  plugins: [],
};
export default config;
