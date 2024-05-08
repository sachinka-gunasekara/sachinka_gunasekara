/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'port-yellow': '#F6CF05',
        'port-hover': '#faab02',
      },

      screens: {
        'xs': {'min': '300px', 'max': '640px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'sm': {'min': '300px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
    },
  },
  plugins: [],
}

