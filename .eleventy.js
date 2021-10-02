const pluginSass = require("@taxes/eleventy-plugin-dart-sass");

module.exports = function (eleventyConfig) {

    eleventyConfig.addGlobalData("copyrightyear", () => new Date().getFullYear());
    
    eleventyConfig.addPlugin(pluginSass, {
        output_dir: 'css'
    });

    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy("src/**/*.eot");
    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/**/*.svg");
    eleventyConfig.addPassthroughCopy("src/**/*.ttf");
    eleventyConfig.addPassthroughCopy("src/**/*.woff");
    eleventyConfig.addPassthroughCopy("src/**/*.woff2");

    return {
        dir: {
            input: "src",
            output: "_site",
            layouts: "_layouts"
        }
    }
};