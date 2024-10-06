/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const primeui = require('tailwindcss-primeui')
const breaker = require('tailwind-container-break-out')

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/presets/**/*.{js,vue,ts}'],
  theme: {
    extend: {}
  },
  plugins: [primeui, breaker]
}
