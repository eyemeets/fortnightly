/* eslint-disable @typescript-eslint/no-var-requires */

const colors = require('./css/theme-colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/*.tsx',
    './app/**/*.tsx',
    './components/*/*.tsx',
    './components/**/*.tsx',
    './components/**/**/*.tsx'
  ],
  theme:  {
    colors,
    text: {
      'header-1': 'text-4xl font-manrope-bold', // example of a large header, equivalent to h1
      'header-2': 'text-3xl font-manrope-bold' // example of a medium header, equivalent to h2
      // ... more custom text styles
    },
    fontFamily: {
      sora: {
        '100': ['100-v1', '100-v2'],
        '200': ['200'],
        '300': ['300-v1', '300-v2'],
        '400': ['400-v1', '400-v2'],
        '500': ['500-v1', '500-v2'],
        '600': ['600-v1'],
        '700': ['700-v1', '700-v2'],
        '800': ['800-v1', '800-v2']
      },
      'manrope': {
        'bold': ['Manrope-Bold'],
        'extra-bold': ['Manrope-ExtraBold'],
        'extra-light': ['Manrope-ExtraLight'],
        'light': ['Manrope-Light'],
        'medium': ['Manrope-Medium'],
        'regular': ['Manrope-Regular'],
        'semi-bold': ['Manrope-SemiBold']
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('nativewind/postcss')
  ]
}

