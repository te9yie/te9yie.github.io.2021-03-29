import { GetStaticProps } from "next";
import Link from "next/link";
import Body from "../components/Body";
import Markdown from "../components/Markdown";
import { BlogData, getBlogData, getBlogSummaries } from "../libs/blog";
import styles from "./index.module.css";

type Props = {
  data: BlogData[];
};

const IndexPage: React.FC<Props> = ({ data }) => (
  <Body>
    {data.map((data) => (
      <article key={data.id}>
        <h2>
          <Link href={`/b/${data.id}`}>
            <a className={styles.permalink}>{data.id}</a>
          </Link>
        </h2>
        <Markdown content={data.content} />
      </article>
    ))}
  </Body>
);

export const getStaticProps: GetStaticProps = async () => {
  const summaries = getBlogSummaries().slice(0, 3);
  const data = await Promise.all(
    summaries.map(async (summary) => await getBlogData(summary.id))
  );
  return {
    props: {
      data,
    },
  };
};

export default IndexPage;
