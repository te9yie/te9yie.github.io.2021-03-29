import React from "react";
import Link from "next/link";
import { SITE_NAME } from "../libs/const";

type Props = {
  is_index?: boolean;
};

const Nav: React.FC<Props> = ({ is_index }) => {
  const IndexNav: React.FC = () =>
    is_index ? null : (
      <li>
        <Link href="/">
          <a id="site-name">{SITE_NAME}</a>
        </Link>
      </li>
    );
  return (
    <nav>
      <ul>
        <IndexNav />
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
