/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4338CA",
          hover: "#3730A3",
        },
        accent: "#D97706",
        surface: {
          bg: "#F8F9FC",
          card: "#FFFFFF",
        },
        ink: {
          primary: "#1A1D29",
          secondary: "#5B5F73",
        },
        border: {
          subtle: "#E4E6EE",
        },
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
        kannada: "#059669",
        hindi: "#DB2777",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        kannada: ["'Noto Sans Kannada'", "sans-serif"],
        devanagari: ["'Noto Sans Devanagari'", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        chip: "4px",
      },
    },
  },
  plugins: [],
}
