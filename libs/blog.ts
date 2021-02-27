import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "blog");

export type BlogData = {
  id: string;
  content: string;
};

export type BlogSummary = {
  id: string;
};

export const getAllBlogIds = () => {
  const fileNames = fs.readdirSync(BLOG_DIR);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return {
      params: {
        id,
      },
    };
  });
};

export const getBlogSummaries = () => {
  const fileNames = fs.readdirSync(BLOG_DIR);
  const summaries = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return {
      id,
    } as BlogSummary;
  });
  return summaries.sort((a, b) => {
    return a.id < b.id ? 1 : -1;
  });
};

export const getBlogData = async (id: string) => {
  const fullPath = path.join(BLOG_DIR, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const procContent = await remark().use(html).process(fileContent);
  const content = procContent.toString();
  return {
    id,
    content,
  } as BlogData;
};
