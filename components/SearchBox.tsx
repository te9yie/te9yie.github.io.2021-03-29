import React, { useEffect } from "react";

const SearchBox: React.FC = () => {
  const searchBoxRef = React.createRef<HTMLDivElement>();
  useEffect(() => {
    if (searchBoxRef && searchBoxRef.current) {
      const searchBox = searchBoxRef.current;
      const parent = searchBox.parentNode;
      const gcse = document.createElement("script");
      gcse.async = true;
      gcse.src = "https://cse.google.com/cse.js?cx=c961937a8b4f96e3d";
      parent?.insertBefore(gcse, searchBox);
    }
  });
  return (
    <div className="search-box">
      <div ref={searchBoxRef} className="gcse-searchbox-only"></div>
    </div>
  );
};

export default SearchBox;
