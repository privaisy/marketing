/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        pine: '#113224',
        lime: '#88E54C',
        'lime-50': '#F3F5F4',
        ink: '#181B1A',
      },
      fontFamily: {
        heading: ['Geist', 'sans-serif'],
        body: ['Geist', 'sans-serif'],
        logo: ['Manrope', 'sans-serif'],
      },
      maxWidth: {
        page: '1392px',
      },
      fontSize: {
        'display': ['44px', { lineHeight: '110%', letterSpacing: '-0.03em', fontWeight: '300' }],
        'h1': ['36px', { lineHeight: '110%', letterSpacing: '-0.03em', fontWeight: '500' }],
        'h2': ['32px', { lineHeight: '110%', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h3': ['28px', { lineHeight: '110%', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h4': ['24px', { lineHeight: '130%', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h5': ['18px', { lineHeight: '140%', fontWeight: '500' }],
        'h6': ['16px', { lineHeight: '140%', fontWeight: '500' }],
        'sub': ['18px', { lineHeight: '140%', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '150%', fontWeight: '400' }],
        'body-medium': ['16px', { lineHeight: '150%', fontWeight: '500' }],
        'small': ['12px', { lineHeight: '150%', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '140%', fontWeight: '400', letterSpacing: '0.08em' }],
        'link': ['14px', { lineHeight: '150%', fontWeight: '500' }],
      },
      borderRadius: {
        'pill': '99px',
      },
    },
  },
  plugins: [],
};
