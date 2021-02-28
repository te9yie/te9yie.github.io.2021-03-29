import { GetStaticProps } from "next";
import Body from "../../components/Body";
import Markdown from "../../components/Markdown";
import { getWikiData, WikiData } from "../../libs/wiki";

const INDEX_MD: string = "@index";

type Props = {
  data: WikiData;
};

const IndexPage: React.FC<Props> = ({ data }) => (
  <Body title="Wiki" show_title={false}>
    <article>
      <Markdown content={data.content} />
    </article>
  </Body>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getWikiData(INDEX_MD);
  return { props: { data } };
};

export default IndexPage;
