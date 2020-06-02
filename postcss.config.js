const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./public/**/*.html", "./src/**/*.js"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss,
    // Since we are applying 'sleep 5' this shouldn't be necessary anymore
    //...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
    require("cssnano"),
  ],
};
