module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      Height: { '128': '34rem'}
    },
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/forms',
    '@flowbite/plugin',
  ],
}