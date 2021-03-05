import Link from "next/link";
import { WikiData } from "../libs/wiki";

type Props = {
  data: WikiData;
};

const RefLinks: React.FC<Props> = ({ data }) => {
  if (data.refLinks.length === 0) return null;
  return (
    <div className="reflinks">
      <h4>ref links:</h4>
      <ul>
        {data.refLinks.map((link) => (
          <li key={link}>
            <Link href={`/w/${link}`}>
              <a>{link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const RefBlogs: React.FC<Props> = ({ data }) => {
  if (data.refBlogs.length === 0) return null;
  return (
    <div className="refblogs">
      <h4>ref blogs:</h4>
      <ul>
        {data.refBlogs.map((link) => (
          <li key={link}>
            <Link href={`/b/${link}`}>
              <a>{link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Links: React.FC<Props> = ({ data }) => {
  if (data.links.length === 0) return null;
  return (
    <div className="links">
      <h4>links:</h4>
      <ul>
        {data.links.map((link) => (
          <li key={link}>
            <Link href={`/w/${link}`}>
              <a>{link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const WikiFooter: React.FC<Props> = ({ data }) => {
  return (
    <div className="wiki-footer">
      <RefLinks data={data} />
      <RefBlogs data={data} />
      <Links data={data} />
    </div>
  );
};

export default WikiFooter;
