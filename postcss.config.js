module.exports = {
    plugins: [
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ] ,
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus'],
      width: ['responsive', 'hover', 'focus'],

    },
  }