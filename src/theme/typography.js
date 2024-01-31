import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Maven Pro",
      styles: ["400, 700"],
    }
  ],
  headerFontFamily: ["Maven Pro", "sans-serif"],
  bodyFontFamily: ["Maven Pro", "sans-serif"],
  headerWeight: "bold",
  bodyWeight: "normal"
})

export default typography;