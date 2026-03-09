/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#203e5f',
        'deep-blue-dark': '#1a3350',
        'golden': '#ffc53a',
        'golden-dark': '#e6ad2e',
        'teal': '#248f8f',
        'teal-dark': '#1d7373',
        'warm-white': '#fafaf8',
      },
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
