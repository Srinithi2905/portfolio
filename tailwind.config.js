/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Ensure this correctly includes all files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e66c8e', // Custom color
      },
    },
  },
  plugins: [],
};


