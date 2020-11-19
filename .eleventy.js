const CleanCSS = require("clean-css");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setTemplateFormats(["css", "html", "md"]);
  return {
    passthroughFileCopy: true,
  };
};
