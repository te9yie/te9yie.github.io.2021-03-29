import { GetStaticPaths, GetStaticProps } from "next";
import Body from "../../components/Body";
import Markdown from "../../components/Markdown";
import WikiFooter from "../../components/WikiFooter";
import { WikiData, getAllWikiIds, getWikiData } from "../../libs/wiki";

type Props = {
  data: WikiData;
};

const WikiPage: React.FC<Props> = ({ data }) => {
  return (
    <Body title={data.id}>
      <article>
        <Markdown content={data.content} />
      </article>
      <WikiFooter data={data} />
    </Body>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWikiIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.id === "string") {
    const data = await getWikiData(params?.id);
    return { props: { data } };
  } else {
    return { props: {} };
  }
};

export default WikiPage;
