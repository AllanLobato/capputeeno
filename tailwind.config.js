/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "secondary": '#f3f5f6',
        "text-dark": "#737380",
        "delete-color": "#DE3838",
        "orange-low": "#FFA585"
      },
    },
    fontFamily: {
      sans: ['Saira', 'sans-serif'],
    },
  },
  plugins: [],
}
