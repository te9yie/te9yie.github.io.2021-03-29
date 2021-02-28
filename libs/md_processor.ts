import remark from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import breaks from "remark-breaks";
import { wikiLinkPlugin } from "remark-wiki-link";

export const processor = remark()
  .use(gfm)
  .use(breaks)
  .use(html)
  .use(wikiLinkPlugin, {
    pageResolver: (name: string) => [name],
    hrefTemplate: (permalink: string) => `/w/${permalink}`,
  });
