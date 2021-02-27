import React from "react";
import Link from "next/link";
import { SITE_NAME } from "../libs/const";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a id="site-name">{SITE_NAME}</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
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
