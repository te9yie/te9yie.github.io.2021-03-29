このまま貼り付けても表示されなかった。

```html
<script async src="https://cse.google.com/cse.js?cx=c961937a8b4f96e3d"></script>
<div class="gcse-search"></div>
```

関数コンポーネントを作って対応した。

```typescript
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
      <div ref={searchBoxRef} className="gcse-search"></div>
    </div>
  );
};
```

via [2021-03-03](/b/2021-03-03)
