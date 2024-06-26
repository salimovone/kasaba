/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background-color)",
        "foreground": "var(--foreground-color)",
        "header": "var(--header-bg)",
        "primary": "var(--primary-text)",
        "secondary": "var(--secondary-text)"
      }
    },
  },
  plugins: [],
}