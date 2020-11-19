const CleanCSS = require("clean-css");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setTemplateFormats(["css", "html", "md", "njk"]);
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  return {
    passthroughFileCopy: true,
  };
};
