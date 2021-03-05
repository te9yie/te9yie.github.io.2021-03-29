https://www.typescriptlang.org/

[[JavaScript]]は型がなくてつらいので[[TypeScript]]を使ってみている。

[[altJS]]な言語を使うと、コンパイルが必要になって面倒だなあと思うが、[[JavaScript]]を書いていても[[webpack]]などでコンパイルすることになるので面倒臭さは変わらなかった。

### とりあえず動かしてみる

```
$ sudo apt install nodejs npm   # Node.js と npm のインストール
$ touch main.ts                 # TypeScript ファイルの生成
$ npx tsc main.ts               # JavaScript にコンパイル
$ node main.js                  # JavaScript の実行
```

### 参考になりそうなもの

- [TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/)
- [仕事ですぐに使えるTypeScript](https://future-architect.github.io/typescript-guide/index.html)
