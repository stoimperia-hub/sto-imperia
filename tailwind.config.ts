import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          yellow: "#FDCD00", // RGB(253,205,0)
          gray: "#D4D4D4", // RGB(212,212,212)
          black: "#000000",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
