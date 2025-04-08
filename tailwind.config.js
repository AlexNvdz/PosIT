/** @type {import('tailwindcss').Config} */
module.exports = {
  // Incluye las rutas a todos los archivos donde usas clases de Tailwind
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Archivos en el directorio app
    "./components/**/*.{js,jsx,ts,tsx}", // Archivos en el directorio components
    "./constants/**/*.{js,jsx,ts,tsx}", // Archivos en el directorio constants
    "./hooks/**/*.{js,jsx,ts,tsx}", // Archivos en el directorio hooks
    "./scripts/**/*.{js,jsx,ts,tsx}", // Archivos en el directorio scripts
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
