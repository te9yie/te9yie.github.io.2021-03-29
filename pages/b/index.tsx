import { GetStaticProps } from "next";
import Link from "next/link";
import Body from "../../components/Body";
import { BlogSummary, getBlogSummaries } from "../../libs/blog";

type Props = {
  summaries: BlogSummary[];
};

const IndexPage: React.FC<Props> = ({ summaries }) => (
  <Body title="Blog" show_title={false}>
    <ul>
      {summaries.map((data) => (
        <li key={data.id}>
          <Link href={`/b/${data.id}`}>
            <a>{data.id}</a>
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
