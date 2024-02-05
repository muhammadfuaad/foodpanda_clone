/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {pattern: /p-(2|4|8|)/},
  ],
  // safelist: [
  //   /^bg-/,   // Classes starting with "bg-"
  //   /^text-/, // Classes starting with "text-"
  //   /^border-/, // Classes starting with "border-"
  //   /^p-/,    // Classes starting with "p-"
  // ],
  theme: {
    extend: {
      colors: {
        primary: '#e21b70',
      },
    },
  },
  plugins: [],
}

