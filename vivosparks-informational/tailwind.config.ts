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
        customBlue: '#50acea',
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

     
      },
     
      
    },
  },
  plugins: [],
};

export default config;
