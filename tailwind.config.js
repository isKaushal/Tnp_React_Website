/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        clrpink: "#7D0084",
        // clrpink: "rgba(254, 54, 113)",
        clrgray: "rgba(75, 76, 118)",
        clrgreen: "#1D880D",
        // clrgreen: "rgba(9, 210, 160)",
        clryellow: "rgba(255, 192, 0)",
        clrbglite: "rgba(240, 248, 255)",
        clrbgcircle: "rgba(222, 238, 252)",
      },
    },
  },
  plugins: [],
};
