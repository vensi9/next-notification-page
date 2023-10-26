/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'Red': ' hsl(1, 90%, 64%)',
        'Blue': ' hsl(219, 85%, 26%)',
      },
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
        'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
        'light-grayish-blue-2': 'hsl(205, 33%, 90%)',
        'grayish-blue': 'hsl(219, 14%, 63%)',
        'dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'very-dark-blue': 'hsl(224, 21%, 14%)',
      },
      fontFamily: {
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'ui-sans'],
      },
      fontWeight: {
        '500': 500,
        '800': 800,
      },
    },
  },
  plugins: [],
}
