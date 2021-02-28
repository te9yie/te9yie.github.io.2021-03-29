import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";
import { AUTHOR, SITE_NAME } from "../libs/const";

type Props = {
  children?: ReactNode;
  title?: string;
  show_title?: boolean;
};

const Body: React.FC<Props> = ({ children, title, show_title = true }) => {
  const date = new Date();
  const year = date.getFullYear();
  const title_in_head = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const PageTitle: React.FC = () =>
    title && show_title ? <h2>{title}</h2> : null;
  return (
    <>
      <Head>
        <title>{title_in_head}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav />
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
