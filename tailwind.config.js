const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
