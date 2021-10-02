module.exports = function(eleventyConfig) {

    console.dir(eleventyConfig);
    eleventyConfig.addGlobalData("copyrightyear", () => new Date().getFullYear());

    return {
      dir: {
        input: "src",
        output: "_site",
        layouts: "_layouts"
      }
    }
  };