import { GetStaticProps } from "next";
import Link from "next/link";
import Body from "../../components/Body";
import { getWikiSummaries, WikiSummary } from "../../libs/wiki";

type Props = {
  summaries: WikiSummary[];
};

const IndexPage: React.FC<Props> = ({ summaries }) => (
  <Body title="Wiki" show_title={false}>
    <ul>
      {summaries.map((summary) => (
        <li key={summary.id}>
          <Link href={`/w/${summary.id}`}>
            <a>{summary.id}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Body>
);

export const getStaticProps: GetStaticProps = async () => {
  const summaries = getWikiSummaries();
  return {
    props: {
      summaries,
    },
  };
};

export default IndexPage;
