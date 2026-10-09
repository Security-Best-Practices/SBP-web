const showDrafts = process.env.ELEVENTY_DRAFTS === "true";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/img/favicon.ico": "favicon.ico" });

  // Posts marked `draft: true` are only built with `npm run drafts`.
  eleventyConfig.addPreprocessor("drafts", "md", (data) => {
    if (data.draft && !showDrafts) return false;
  });

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/insights/*.md").sort((a, b) => b.date - a.date)
  );

  const fmt = (opts) => (date) =>
    new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...opts }).format(date);
  eleventyConfig.addFilter("readableDate", fmt({ year: "numeric", month: "long", day: "numeric" }));
  eleventyConfig.addFilter("isoDate", (date) => date.toISOString());
  eleventyConfig.addFilter("rfc822Date", (date) => date.toUTCString());
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("readingTime", (content = "") => {
    const words = content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 230))} min read`;
  });
  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).href);

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
