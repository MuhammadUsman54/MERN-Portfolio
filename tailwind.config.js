/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        slate: {
          950: "#020617",
        },
      },
    },
  },
  plugins: [],
};
