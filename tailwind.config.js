/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
      },
    },
    extend: {
      maxWidth: {
        250: '100px', // Define largura máxima personalizada
        960: '960px',
      },
      maxHeight: {
        250: '100px', // Define largura máxima personalizada
        800: '800px',
      },
      colors: {
        azul: {
          200: '#4C648C',
          300: '#405880',
          400: '#354C73',
          500: '#2B4166',
          600: '#223759',
          700: '#1B2E4D',
        },
        rosa: {
          200: '#EDC2C7',
          300: '#E5B5BA',
          400: '#DEA9AE',
          500: '#D69DA3',
          600: '#CC8990',
          700: '#BF777E',
        },
        cinza: {
          200: '#D9D9D9',
          300: '#CCCCCC',
          400: '#B3B3B3',
          500: '#8C8C8C',
          600: '#666666',
          700: '#4D4D4D',
        },
        cinzaClaro: '#F2F2F2',
        cinzaEscuro: '#2B2B2B',
        amarelo: '#ECC601',
      },
    },
  },

  plugins: [],
};
