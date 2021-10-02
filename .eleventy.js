const pluginSass = require("@taxes/eleventy-plugin-dart-sass");
const hbs = require('handlebars');

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
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    eleventyConfig.setLibrary("hbs", hbs);
    eleventyConfig.addHandlebarsHelper("every2", function (idx) {
        return (idx + 1) % 2 == 0;
    });
    eleventyConfig.addHandlebarsHelper("portfolioLink", function (url, urlText) {
        if (!!urlText === false) {
            if (url.indexOf('web.archive.org') > -1) {
                urlText = '<span class="icon-text"><span class="icon"><i class="fas fa-cloud"></i></span><span>Courtesy of the Wayback Machine</span></span>';
            } else if (url.indexOf('github.com') > -1 || url.indexOf('git.taxes.dev') > -1) {
                urlText = '<span class="icon-text"><span class="icon"><i class="fab fa-git"></i></span><span>See the code.</span></span>';
            } else {
                urlText = `<span class="icon-text"><span class="icon"><i class="fas fa-globe-americas"></i></span><span>${url}</span></span>`;
            }
        }
        let target = url.startsWith('http') ? 'target="_blank"' : '';
        return new hbs.SafeString(`<a href="${url}" ${target}>${urlText}</a>`);
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            layouts: "_layouts"
        },
        htmlTemplateEngine: "hbs"
    }
};