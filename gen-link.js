const fs = require("fs");
const path = require("path");

const WIKI_DIR = path.join(process.cwd(), "wiki");
const BLOG_DIR = path.join(process.cwd(), "blog");
const OUTPUT_DIR = path.join(process.cwd(), "gen");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "links.json");

const getWikiLinks = (text) => {
  return [...text.matchAll(/\[\[(.+?)\]\]/g)]
    .map((m) => m[1])
    .filter((link, i, self) => self.indexOf(link) === i);
};

let pages = new Map();

fs.readdirSync(BLOG_DIR).forEach((fileName) => {
  const fullPath = path.join(BLOG_DIR, fileName);
  const content = fs.readFileSync(fullPath, "utf8");
  const links = getWikiLinks(content);
  links.forEach((link) => {
    if (!pages.has(link)) {
      pages.set(link, new Map());
    }
  });
});
fs.readdirSync(WIKI_DIR).forEach((fileName) => {
  const id = fileName.replace(/\.md$/, "");
  const fullPath = path.join(WIKI_DIR, fileName);
  const content = fs.readFileSync(fullPath, "utf8");
  const links = getWikiLinks(content).filter((link) => link !== id);
  if (!pages.has(id)) {
    pages.set(id, new Map());
  }
  if (links.length > 0) {
    pages.get(id).set("links", links);
    links.forEach((link) => {
      if (!pages.has(link)) {
        pages.set(link, new Map());
      }
      const refPage = pages.get(link);
      if (!refPage.has("refLinks")) {
        refPage.set("refLinks", new Array());
      }
      const refLinks = refPage.get("refLinks");
      refLinks.push(id);
    });
  }
});

let jsonPages = new Array();
pages.forEach((value, key) => {
  const pageLinks = value.has("links") ? value.get("links") : [];
  const pageRefLinks = value.has("refLinks") ? value.get("refLinks") : [];
  let links = new Array();
  pageLinks.concat(pageRefLinks).forEach((link) => {
    links.push(link);
    const next = pages.get(link);
    if (next.has("links")) {
      links.push(...next.get("links"));
    }
    if (next.has("refLinks")) {
      links.push(...next.get("refLinks"));
    }
  });
  links =
    links.length > 0
      ? links
          .filter((link, i, self) => self.indexOf(link) === i)
          .filter((link) => link != key)
          .filter((link) => !pageLinks.includes(link))
          .filter((link) => !pageRefLinks.includes(link))
      : undefined;
  jsonPages.push({
    id: key,
    refLinks: value.get("refLinks"),
    links,
  });
});
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}
fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ pages: jsonPages }));
