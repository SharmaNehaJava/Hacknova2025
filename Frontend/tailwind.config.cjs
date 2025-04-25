/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          flicker: 'flicker 1.2s infinite alternate',
        },
        keyframes: {
          flicker: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.8', textShadow: '0 0 5px #0ff, 0 0 10px #0ff' },
          },
        },
        fontFamily: {
          bebas: ['"Bebas Neue"', 'cursive'],
        },
      },
    },
    plugins: [],
  }
  