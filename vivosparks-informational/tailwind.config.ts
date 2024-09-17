import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customYellow: '#F8BD00',
        customBlue: '#50ACEA',
        customDarkBlue: '#003566',
        customTextBlue: '#1573B2',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        custom: '20px',
      },
      screens: {
        'md': '913px',
        'nest-hub': { 'raw': '(min-width: 1024px) and (max-width: 1024px) and (min-height: 600px) and (max-height: 600px)' },
        'nest-hub-max': { 'raw': '(min-width: 1280px) and (max-width: 1280px) and (min-height: 800px) and (max-height: 800px)' },
    'surface-pro': '1366px', 'surface-pro-7': '912px',
      },
    },
  },
  plugins: [],
};
export default config;