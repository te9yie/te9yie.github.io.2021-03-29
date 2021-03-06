https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

[[Docker]]のコンテナ内で[[VS Code]]を動かす拡張。

とりあえず`Ctrl+Shift+P`を押して`Remote-Containers: Open Folder in Container`を選べば大体いい感じに動く。

### [[Rust]]の開発環境を作ってみる

1. コマンドパレットを開く。(Ctrl+Shift+P)
2. `Remote-Containers: Add Development Container Configuration Files`を選んで、`Rust`を選ぶ。
3. `.devcontainer`ディレクトリが作られる。
4. `.devcontainer/devcontainer.json`の拡張設定の`rust-lang.rust`を`matklad.rust-analyzer`に置換する。
5. コマンドパレットを開く。(Ctrl+Shift+P)
6. `Remote-Containers: Open Folder in Container`を選ぶ。

#[[Remote Container]]
