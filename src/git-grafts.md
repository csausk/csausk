
# Git 毀滅術

```
hint: Support for <GIT_DIR>/info/grafts is deprecated
hint: and will be removed in a future Git version.
hint:
hint: Please use "git replace --convert-graft-file"
hint: to convert the grafts into replace refs.
hint:
hint: Turn this message off by running
hint: "git config advice.graftFileDeprecated false"
```

版本管理工具 Git 以 “绝不丢失用户的提交” 的理念 [^git-philosophy] 而著称. 但在 Git 中也存在着「确实地」将 commit 与 log 中的记录 “毁尸灭迹” 的办法. 并且操作起来非常简单, 实际步骤只有两步. 

> 警告: 本文作者对本文提供的方法不负任何责任, 读者通过本文的方法所造成的任何超出读者预期的行为, 均由读者自行负责. 

> 特别声明: 本文的方法可以用于删除已经提交至 Github 仓库托管平台的 commit 历史. 

--- 

```
⋯ → A → B → C (目标 commit) → D → E → ⋯
```

本文提供的方法将会删除目标 commit “C” 之前的所有 commit 信息.



### 准备工作

阅读「警告」与「特别声明」.

`git log` 查看 commit 历史及对应的 SHA1 值, 复制目标 commit 的 SHA1.

### Step 1

新建 `.git/info/grafts`, 写入 SHA1. 

### 检查

> 这一步显然不是必要的, 只是为了确定前面的操作是否正常. 

此时 `git log` 会发现只能看到目标 commit 之后的历史了. 

### Step 2

执行 `git filter-branch` 后, 如果只有当前分支, 则直接强推 (`git push --force`), 如果有新的 detached 的分支, 为当前分支新建临时分支, 然后临时分支推送到远程仓库. 结束. 


[^git-philosophy]: 也有人称之为 Git 哲学. 
