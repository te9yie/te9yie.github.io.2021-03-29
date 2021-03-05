const fs = require("fs");
const path = require("path");

const WIKI_DIR = path.join(process.cwd(), "wiki");
const OUTPUT_DIR = path.join(process.cwd(), "gen");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "links.json");

let pages = {};
const fileNames = fs.readdirSync(WIKI_DIR);
fileNames.forEach((fileName) => {
  const id = fileName.replace(/\.md$/, "");
  const fullPath = path.join(WIKI_DIR, fileName);
  const content = fs.readFileSync(fullPath, "utf8");
  const links = [...content.matchAll(/\[\[(.+?)\]\]/g)]
    .map((m) => m[1])
    .filter((link, i, self) => self.indexOf(link) === i)
    .filter((link) => link !== id);
  if (!(id in pages)) {
    pages[id] = {};
  }
  if (links.length > 0) {
    pages[id].links = links;
    links.forEach((link) => {
      const refPage = link in pages ? pages[link] : (pages[link] = {});
      const refLinks =
        "refLinks" in refPage
          ? refPage["refLinks"]
          : (refPage["refLinks"] = []);
      refLinks.push(id);
    });
  }
});
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(pages));
