/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#f5f5f5', // Latar belakang terang
          dark: '#25150d',  // Latar belakang gelap
          textLight: '#3b1f1c', // Teks gelap untuk mode terang
          textDark: '#f5f5f5', // Teks terang untuk mode gelap
          accentLight: '#a89f91', // Warna aksen terang
          accentDark: '#7b5e57', // Warna aksen gelap
        },
      },
    },
  },
  plugins: [],
};
