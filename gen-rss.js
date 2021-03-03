const fs = require("fs");
const path = require("path");
const remark = require("remark");
const gfm = require("remark-gfm");
const html = require("remark-html");
const { wikiLinkPlugin } = require("remark-wiki-link");
const { Feed } = require("feed");

const SITE_URL = "https://te9yie.github.io";
const BLOG_DIR = path.join(process.cwd(), "blog");
const OUT_DIR = path.join(process.cwd(), "out");

const getSortedBlogData = () => {
  const fileNames = fs.readdirSync(BLOG_DIR);
  const data = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(BLOG_DIR, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const parsedContent = remark()
      .use(gfm)
      .use(html)
      .use(wikiLinkPlugin, {
        pageResolver: (name) => [name],
        hrefTemplate: (link) => `/w/${link}`,
      })
      .processSync(fileContent);
    const content = parsedContent.toString();
    return {
      date: id,
      content: content,
    };
  });
  data.sort((a, b) => (a.date < b.date ? 1 : -1));
  return data;
};

const genRSS = () => {
  const sorted_data = getSortedBlogData().slice(0, 5);
  const feed = new Feed({
    title: "te9yie",
    description: "te9yie.github.io",
    link: SITE_URL,
  });
  sorted_data.forEach((data) => {
    feed.addItem({
      title: data.date,
      description: data.date,
      link: `${SITE_URL}/b/${data.date}`,
      content: data.content,
    });
  });
  fs.writeFileSync(path.join(OUT_DIR, "rss.xml"), feed.rss2());
};

genRSS();
