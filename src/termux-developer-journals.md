
# Termux 开发者日志

Termux 可以直接安装 mdBook 及 Typst, 但 Lean4 Prover 的 arm64 版因为链接依赖问题不能直接运行, 依惯例可用 `proot-distro`. 

### Code Server

Termux 添加 tur 仓库后

```sh
pkg install tur-repo
```

可以直接安装 code-server
  
```sh
pkg install code-server
```
  
随后在 `~/.config/code-server/config.yaml` 修改 `password`. 

注意: 

- vscode 插件市场的插件无法直接安装, 但可以在 [open-vsx.org](https://open-vsx.org) 下载 vsix 并使用 `--install-extension` 安装至 `~/.local/share/code-server/extensions`.
  ```
  code-server --install-extension vsix-path
  ``` 

- 因为 elf 执行权限和 Linux 某些基础库的问题, 多数插件 (涉及二进制可执行文件的) 不能直接在 Termux code-server 上工作, 此时需要 `proot-distro` 将 code-server 安装至某个 Linux 发行版. 

- 建议使用带有独立 Chromium 内核的浏览器 (如 Kiwi Browser) 访问 Code Server, 安卓系统的 Chromium Webview 版本对于 VSCode 而言可能过低. 

参考:

- [Termux User Repository (TUR)](https://github.com/termux-user-repository/tur)




### 符号链接权限问题

如 `npm i` 时可能会出现的 

```sh
npm ERR! code EACCES
npm ERR! syscall symlink
npm ERR! path ...
npm ERR! dest .../node_modules/.bin/...
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, symlink
```

除 “用 proot-distro 换成某个 Linux 发行版” 从而将此问题绕过外, 原地进行的方案是使用 `npm i` 本身支持的一个参数 `--no-bin-links`. 

参考:

> The --no-bin-links argument will prevent npm from creating symlinks for any binaries the package might contain.

- [npm install: when to use --no-bin-links?](https://stackoverflow.com/questions/39098812/npm-install-when-to-use-no-bin-links)

- [how can i use "npm install ts-node-dev -D" in termux?](https://stackoverflow.com/questions/72407250/how-can-i-use-npm-install-ts-node-dev-d-in-termux)


