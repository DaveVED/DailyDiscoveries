import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
      keyframes: {},
      animation: {},
      width: {
        "navbar-icon": "4.50rem",
      },
      height: {
        "navbar-icon": "4.50rem",
      },
    },
  },
  prefix: "ui-",
  plugins: [],
} satisfies Config;

export default config;