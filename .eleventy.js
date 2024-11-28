module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addWatchTarget("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addPassthroughCopy("src/admin");

    eleventyConfig.addCollection("nav", function (collectionApi) {
        return collectionApi
          .getFilteredByTag("nav-item") // Filter by the 'page' tag
          .sort((a, b) => (a.data.navOrder || 0) - (b.data.navOrder || 0)); // Sort by `navOrder`
    });


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