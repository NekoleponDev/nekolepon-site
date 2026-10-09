export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    colors: { paper: "#f6f2e8", ink: "#20231f", klepon: "#a5d65b", "klepon-dark": "#7eae39", citrus: "#ff7048" },
    fontFamily: { sans: ["Space Grotesk", "Arial", "sans-serif"], mono: ["DM Mono", "monospace"] }
  }},
  plugins: []
};