/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables toggling dark mode via the .dark class
  content: ['./src/**/*.{html,svelte,ts,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          100: '#dbeafe'
        },
        accent: '#06b6d4'
      },
      boxShadow: {
        'glass-md': '0 6px 18px rgba(2,6,23,0.35)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
