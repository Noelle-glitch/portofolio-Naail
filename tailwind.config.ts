import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F4EF",
        surface: "#EFE9DF",
        surfaceDeep: "#E7E0D2",
        ink: "#1E1E1E",
        muted: "#6D675F",
        brown: "#8B6B4A",
        beige: "#C7A27C",
        olive: "#8A9175",
        line: "#DDD5C6",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        cottage: "18px",
        cottageLg: "24px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(30, 26, 20, 0.04), 0 1px 2px rgba(30,26,20,0.03)",
        softHover: "0 14px 30px rgba(30, 26, 20, 0.08), 0 2px 6px rgba(30,26,20,0.04)",
      },
      letterSpacing: {
        wideish: "0.06em",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
