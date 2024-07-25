/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#7D00FF',
        gradientStart: '#4216E4', // Replace with your start color
        gradientMiddle: '#6F34DB', // Replace with your middle color
        gradientEnd: '#20C68E',
        customDark: '#0E0B2B',
      },
    },
  },
  plugins: [],
}

