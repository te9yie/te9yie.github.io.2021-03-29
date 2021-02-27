import { GetStaticProps } from "next";
import Link from "next/link";
import Body from "../../components/Body";
import { BlogSummary, getBlogSummaries } from "../../libs/blog";

type Props = {
  summaries: BlogSummary[];
};

const IndexPage: React.FC<Props> = ({ summaries }) => (
  <Body title="Blog">
    <ul>
      {summaries.map(({ id }) => (
        <li key={id}>
          <Link href={`/blog/${id}`}>
            <a>{id}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Body>
);

export const getStaticProps: GetStaticProps = async () => {
  const summaries = getBlogSummaries();
  return {
    props: {
      summaries: summaries.slice(0, 5),
    },
  };
};

export default IndexPage;
