import fs from "fs";
import path from "path";

const WIKI_DIR = path.join(process.cwd(), "wiki");

export type WikiData = {
  id: string;
  content: string;
};

export const getAllWikiIds = () => {
  const fileNames = fs.readdirSync(WIKI_DIR);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return {
      params: {
        id,
      },
    };
  });
};

export const getWikiData = async (id: string) => {
  const fullPath = path.join(WIKI_DIR, `${id}.md`);
  const content = fs.readFileSync(fullPath, "utf8");
  return {
    id,
    content,
  } as WikiData;
};
