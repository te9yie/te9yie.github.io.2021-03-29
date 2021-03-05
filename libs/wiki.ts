import fs from "fs";
import path from "path";

const WIKI_DIR = path.join(process.cwd(), "wiki");
const GEN_DIR = path.join(process.cwd(), "gen");
const LINK_FILE = path.join(GEN_DIR, "links.json");

type PageLink = {
  id: string;
  refLinks?: string[];
  links?: string[];
};
type PageLinkJson = {
  pages: PageLink[];
};

export type WikiSummary = {
  id: string;
};

export type WikiData = {
  id: string;
  content: string;
  refLinks: string[];
  links: string[];
};

export const getAllWikiIds = () => {
  const linksJson: PageLinkJson = JSON.parse(
    fs.readFileSync(LINK_FILE, "utf8")
  );
  return linksJson.pages.map((pageLink) => {
    return {
      params: {
        id: pageLink.id,
      },
    };
  });
};

export const getWikiSummaries = () => {
  const fileNames = fs.readdirSync(WIKI_DIR);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return {
      id,
    } as WikiSummary;
  });
};

export const getWikiData = async (id: string) => {
  const linksJson: PageLinkJson = JSON.parse(
    fs.readFileSync(LINK_FILE, "utf8")
  );
  const page = linksJson.pages.find((page) => page.id === id);
  const fullPath = path.join(WIKI_DIR, `${id}.md`);
  const content = fs.existsSync(fullPath)
    ? fs.readFileSync(fullPath, "utf8")
    : "";
  const refLinks = page && page.refLinks ? page.refLinks : [];
  const links = page && page.links ? page.links : [];
  return {
    id,
    content,
    refLinks,
    links,
  } as WikiData;
};
