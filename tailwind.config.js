/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        xl: { max: '1279px' }, // Max width of 1279px for xl
        lg: { max: '1025px' }, // Max width of 1025px for lg
        md: { max: '626px' }, // Max width of 626px for md
        sm: { max: '530px' }, // Max width of 530px for sm
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        title: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        title: '600',
      },
      keyframes: {
        'up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'up-down': 'up-down 3s ease-in-out infinite',
      },
    },
  },
  plugins: [nextui()],
}