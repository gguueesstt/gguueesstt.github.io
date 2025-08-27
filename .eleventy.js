const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) { 
  eleventyConfig.addFilter("date", function(dateObj, format = "yyyy") {
  let date = dateObj;
  if (dateObj === "now") {
    date = new Date();
  }
  return DateTime.fromJSDate(date, { zone: "utc" }).toFormat(format);
});
    eleventyConfig.addCollection("projects", function(collectionApi) {
  return collectionApi.getAll().filter(item => item.data.tags && item.data.tags.includes("projects"));
});
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./imgs/");
    eleventyConfig.addWatchTarget("./src/css/");
  return { 
    dir: { 
      input: 'src',
      output: 'docs' 
    },
   };
};