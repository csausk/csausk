
# WSL 清理支援

注: 本文的 WSL 特指 WSL2. 

### 准备工作 

Step 1. 通过以下两种方式之一关闭目标 WSL. 
  - `wsl --shutdown`, 立即终止所有正在运行的分发版和 WSL 2 轻型实用工具虚拟机. 
  - `wsl --terminate, -t <Distro>`, 终止指定的分发版. 

Step 2. 找到该 WSL 的硬盘映像文件 `ext4.vhdx`. 

Step 3. 在终端打开 Windows 的磁盘管理工具 `diskpart`. 并通过 
```
SELECT VDISK file="\path\to\ext4.vhdx"
``` 
选择该虚拟磁盘文件. 

### 压缩

在 `diskpart` 中继续操作, 此步骤可能会耗费一定的时间
```
compact vdisk
```

注: 
  1. 在部分设备上, `compact` 前后有时还需要 `attach vdisk readonly`, `detach vdisk`.  
  1. 对于非 Windows 家庭版, 也可以直接使用 
     ```
     optimize-vhd -Path path\to\ext4.vhdx -Mode full
     ```
  3. 压缩磁盘主要解决的是 "Linux 清理后 vhdx 尺寸不会主动减小" 的问题, 
     而对于具体的 Linux 发行版以及各路包管理器如何清理则不在本文的讨论范围内.



### WSL 迁移

有时 WSL 本身就很大, 无法通过 `compact vdisk` 腾出可用空间. 此时更有效的方法是移动 `vhdx` 文件至其他空间充裕的分区或磁盘. 这个方法实施起来更加复杂, 但所幸已有封装好的工具: [Move WSL](https://github.com/pxlrbt/move-wsl). 

---

微软商店能安装的 WSL 虽然包括了主流的 Linux 发行版, 但如果是奔着 Arch 来的又不想在安装和基础配置上折腾, 那这个仓库可能是一个好选择: <https://github.com/yuk7/ArchWSL>. 

### Linux 内部清理

Windows 上有一些优秀的磁盘扫描工具, 通常能够为用户找到大文件所在的位置. 
但可以预见的是, 这些工具并不能直接扫描 WSL 内部的文件系统, 
此时用户可以使用完全 Linux 的方法来处理这个问题. 以下仅举一例

```
sudo du -xh --max-depth=1 /
```

这会输出形如下面的内容

```
12G     /root
24K     /snap
2.0G    /usr
12K     /mnt
1.7G    /var
177M    /home
481M    /nix
72K     /tmp
16G     /
```