/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1A1A1A"
      }
    },
    screens: {
      'mobile': {
        'max': '390px'
      },
      'laptop': {
        'max': '1440px'
      },
      'desktop': {
        'max': '1920px'
      },
    },
  },
  plugins: [],
}