import { GetStaticPaths, GetStaticProps } from "next";
import Body from "../../components/Body";
import { WikiData, getAllWikiIds, getWikiData } from "../../libs/wiki";

type Props = {
  data: WikiData;
};

const WikiPage: React.FC<Props> = ({ data }) => (
  <Body title={data.id}>
    <div dangerouslySetInnerHTML={{ __html: data.content }} />
  </Body>
);

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
