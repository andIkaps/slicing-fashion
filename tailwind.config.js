/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E6C744',
        secondary: {
          100: '#C2C8DA',
          200: '#F4F6F5',
          300: '#EBD96B',
        },
      },
    },
  },
  plugins: [],
}
