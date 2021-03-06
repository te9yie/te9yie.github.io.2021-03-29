https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

[[Docker]]のコンテナ内で[[VS Code]]を動かす拡張。


### [[Rust]]の開発環境を作ってみる

1. プロジェクトを作って、[[VS Code]]で開く。

```shell
$ cargo new hello
$ code hello
```

2. コマンドパレットを開く。(Ctrl+Shift+P)
3. `Remote-Containers: Add Development Container Configuration Files`を選んで、`Rust`を選ぶ。
4. `.devcontainer`ディレクトリが作られる。
5. `.devcontainer/devcontainer.json`の拡張設定の`rust-lang.rust`を`matklad.rust-analyzer`に置換する。
6. コマンドパレットを開く。(Ctrl+Shift+P)
7. `Remote-Containers: Reopen in Container`を選ぶ。

### [[Node.js]]の開発環境を作ってみる

```shell
$ mkdir hello; cd $_
$ npm init -y
```

して同上。`Rust`のところを`Node.js`を選ぶ。

#[[Remote Container]]
