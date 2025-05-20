/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}" // ensures it scans your components
    ],
    theme: {
      extend: {
        colors: {
          rrblue: "#1e40af",  // Add custom brand color
        },
      },
    },
    plugins: [],
  }
  