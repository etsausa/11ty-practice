module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addWatchTarget("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addPassthroughCopy("src/admin");

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'public'
        },
        templateFormats: [ 'md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    };
}