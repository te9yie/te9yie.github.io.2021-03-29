import fs from "fs";
import path from "path";
import { processor } from "./md_processor";

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
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const procContent = await processor.process(fileContent);
  const content = procContent.toString();
  return {
    id,
    content,
  } as WikiData;
};
