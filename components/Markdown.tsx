import Link from "next/link";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import breaks from "remark-breaks";
import { wikiLinkPlugin } from "remark-wiki-link";

const renderers = {
  link: (data: any) => (
    <Link href={data.href}>
      <a>{data.children}</a>
    </Link>
  ),
  wikiLink: (data: any) => (
    <Link href={`/w/${data.value}`}>
      <a className="wiki-link">{data.value}</a>
    </Link>
  ),
};

type Props = {
  content: string;
};

const Markdown: React.FC<Props> = ({ content }) => (
  <ReactMarkdown
    plugins={[gfm, breaks, wikiLinkPlugin]}
    renderers={renderers}
    children={content}
    allowDangerousHtml={true}
  />
);

export default Markdown;
