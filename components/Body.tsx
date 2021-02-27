import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";
import { AUTHOR, SITE_NAME } from "../libs/const";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Body: React.FC<Props> = ({ children, title }) => {
  const date = new Date();
  const year = date.getFullYear();
  const is_index = title ? false : true;
  const title_in_head = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const IndexTitle: React.FC = () => (title ? null : <h1>{SITE_NAME}</h1>);
  const PageTitle: React.FC = () => (title ? <h1>{title}</h1> : null);
  return (
    <>
      <Head>
        <title>{title_in_head}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <IndexTitle />
        <Nav is_index={is_index} />
        <PageTitle />
      </header>
      {children}
      <footer>
        &copy; {year} {AUTHOR}
      </footer>
    </>
  );
};

export default Body;
