/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      mob: { max: "768px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
    },
    extend: {},
  },
  plugins: [],
};
