import React from "react";
import Link from "next/link";
import { SITE_NAME } from "../libs/const";

const Nav: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a id="site-name">
            <h1>{SITE_NAME}</h1>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/b">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/w">
          <a>Wiki</a>
        </Link>
      </li>
      <li>
        <Link href="/search">
          <a>Search</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
