/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'exeat': {
          DEFAULT: '#2B1E1E',
          white: '#FFFFFF',
          light: '#DC9D93',
          medium: '#D38377',
          dark: '#C86556',
        },
      },
    },
  },
  plugins: [],
}
