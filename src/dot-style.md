
# Graphviz Dot 风味指南

本文主要记录 Graphviz 样式的命令行用法, 即 `dot`. 并给出相关例子, 以备笔者不时之需. 动机是官方文档 [Command Line - Graphviz](https://graphviz.org/doc/info/command.html) 稍显简略, 而常用例子则分散于各大论坛不便查阅. 

### TLDR

```sh
dot -Tsvg \
    -Nfontname="Jetbrains Mono" \
    -Earrowsize="0.5" \ 
    -Nshape=square \
    -Nmargin="0.2" \
    -Nfontsize="20pt" \
    -Gsplines=ortho \
  input.dot -o output.svg
```

- 结点字体 `-Nfontname="Jetbrains Mono"` (resp. `-G`, `-E`) [stackoverflow: graphviz-change-font-for-the-whole-graph](https://stackoverflow.com/questions/10879115/graphviz-change-font-for-the-whole-graph). 

- 箭头尺寸 `-Earrowsize="0.5"`.

- 路径 / 边的风格 `` (splines - Controls how, and if, edges are represented) [stackoverflow: how-can-i-direct-dot-to-use-a-shorter-edge-path](https://stackoverflow.com/questions/24107451/how-can-i-direct-dot-to-use-a-shorter-edge-path).

- 布局引擎 (e.g. `-Kcirco`) [graphviz.org/docs/layouts](https://graphviz.org/docs/layouts/). 

---

### 进一步的阅读

- 输出格式. 见 [graphviz.org/docs/outputs](https://graphviz.org/docs/outputs/)

- Attributes. [graphviz.org/doc/info/attrs.html](https://graphviz.org/doc/info/attrs.html)
  - [graphviz.org/docs/nodes](https://graphviz.org/docs/nodes/)
  - [graphviz.org/docs/edges](https://graphviz.org/docs/edges/)
  - [graphviz.org/docs/graph](https://graphviz.org/docs/graph/)
  - [graphviz.org/doc/info/arrows.html](https://graphviz.org/doc/info/arrows.html)
  - [graphviz.org/doc/info/shapes.html](https://graphviz.org/doc/info/shapes.html)

- Theory / Publications. [graphviz.org/theory](https://graphviz.org/theory)

### 相关

- [stackoverflow.com: graphviz-changing-the-size-of-edge](https://stackoverflow.com/questions/2333025/graphviz-changing-the-size-of-edge)

- [unix.stackexchange: how-to-set-default-font-or-default-style-in-graphvizs-dot-language](https://unix.stackexchange.com/questions/670533/how-to-set-default-font-or-default-style-in-graphvizs-dot-language)

