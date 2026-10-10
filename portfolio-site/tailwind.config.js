/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./projects/**/*.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#121212",
        "surface-dim": "#1D1D1D",
        "surface-card": "#1D1D1D",
        "ink": "#FFFFFF",
        "ink-muted": "rgba(255,255,255,0.60)",
        "ink-subtle": "rgba(255,255,255,0.55)",
        "line-subtle": "rgba(255,255,255,0.08)",
        "line-strong": "rgba(255,255,255,0.12)",
        "brand-accent": "#CEFD54",
        "brand-violet": "#C084FC"
      },
      fontFamily: {
        display: ['"Hanken Grotesk"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
}
