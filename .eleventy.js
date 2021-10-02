const pluginSass = require("@taxes/eleventy-plugin-dart-sass");

module.exports = function (eleventyConfig) {

    eleventyConfig.addGlobalData("copyrightyear", () => new Date().getFullYear());
    
    eleventyConfig.addPlugin(pluginSass, {
        output_dir: 'css'
    });

    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");

    return {
        dir: {
            input: "src",
            output: "_site",
            layouts: "_layouts"
        }
    }
};