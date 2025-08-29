/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: "#1a73e8",
        "primary-light": "#4285f4",
        secondary: "#34a853",
        accent: "#fbbc04",
        warning: "#ea4335",
        success: "#137333",
        "text-primary": "#202124",
        "text-secondary": "#5f6368",
        border: "#dadce0",
        background: "#ffffff",
        surface: "#f8f9fa",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1200px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
