---
title: Shell 脚本入门概览
date: 2026-06-24 09:03:00
description: Shell 是 Linux 系统的命令行解释器和脚本语言，本文介绍基础语法、变量、条件判断、循环、函数和实用脚本示例。
tags:
  - Shell
  - Linux
  - 脚本
categories:
  - 语言对比
---

Shell 是 Unix/Linux 系统的命令行解释器，既是交互式终端，也是一门脚本语言。Bash（Bourne Again Shell）是目前最广泛使用的 Shell 实现。

<!-- more -->

## 基础语法

Shell 脚本以 shebang 开头，声明解释器：

```bash
#!/bin/bash
# 第一个 Shell 脚本

echo "Hello, $(whoami)!"
echo "当前时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "系统内核: $(uname -r)"
```

## 变量与字符串

```bash
#!/bin/bash

# 变量赋值（等号两边不能有空格）
name="RustBoy"
version=1

# 使用变量
echo "欢迎 ${name} v${version}"

# 字符串操作
str="Hello, World!"
echo "长度: ${#str}"          # 13
echo "切片: ${str:0:5}"       # Hello
echo "替换: ${str/World/Rust}" # Hello, Rust!

# 命令替换
files=$(ls -la | wc -l)
echo "当前目录有 ${files} 个条目"
```

## 条件判断

```bash
#!/bin/bash

file="/etc/passwd"

if [ -f "$file" ]; then
    echo "$file 存在"
elif [ -d "$file" ]; then
    echo "$file 是目录"
else
    echo "$file 不存在"
fi

# 字符串比较
name="root"
if [ "$name" = "root" ]; then
    echo "当前是 root 用户"
fi

# 数值比较
count=10
if [ "$count" -gt 5 ]; then
    echo "大于 5"
fi

# 更现代的写法 (双括号)
if (( count > 5 )); then
    echo "大于 5"
fi
```

## 循环

```bash
#!/bin/bash

# for 循环 —— 遍历列表
for file in *.md; do
    echo "处理: $file"
    wc -l "$file"
done

# for 循环 —— C 风格
for ((i = 0; i < 5; i++)); do
    echo "第 $i 次"
done

# while 循环
counter=0
while [ $counter -lt 5 ]; do
    echo "计数: $counter"
    ((counter++))
done

# 管道 + while —— 逐行读取
cat /etc/passwd | while IFS=: read -r user _ uid gid _ home shell; do
    echo "用户: $user, UID: $uid, Shell: $shell"
done
```

## 函数

```bash
#!/bin/bash

# 定义函数
backup() {
    local src="$1"      # local 声明局部变量
    local dest="$2"
    local timestamp=$(date '+%Y%m%d_%H%M%S')

    if [ ! -d "$src" ]; then
        echo "错误: $src 不存在" >&2  # 输出到 stderr
        return 1
    fi

    tar -czf "${dest}/backup_${timestamp}.tar.gz" "$src"
    echo "备份完成: ${dest}/backup_${timestamp}.tar.gz"
    return 0
}

# 调用函数
backup "/home/user/documents" "/tmp/backups"
if [ $? -eq 0 ]; then
    echo "备份成功"
fi
```

## 实用脚本示例

批量重命名文件的脚本：

```bash
#!/bin/bash
# 将目录下所有 .jpeg 重命名为 .jpg

dir="${1:-.}"  # 参数1，默认当前目录
count=0

for file in "$dir"/*.jpeg; do
    [ -f "$file" ] || continue
    new_name="${file%.jpeg}.jpg"
    mv "$file" "$new_name"
    echo "重命名: $file -> $new_name"
    ((count++))
done

echo "共处理 $count 个文件"
```

系统监控脚本：

```bash
#!/bin/bash

echo "========== 系统状态 =========="
echo "主机名: $(hostname)"
echo "运行时间: $(uptime -p)"
echo ""
echo "--- CPU 使用率 ---"
top -bn1 | grep "Cpu(s)" | awk '{print "使用率: " 100 - $8 "%"}'
echo ""
echo "--- 内存使用 ---"
free -h | awk '/^Mem:/ {printf "已用: %s / 总计: %s (%.1f%%)\n", $3, $2, $3/$2*100}'
echo ""
echo "--- 磁盘使用 ---"
df -h / | awk 'NR==2 {printf "已用: %s / 总计: %s (%s)\n", $3, $2, $5}'
```

## Shell 的局限

Shell 适合做胶水语言——把各种命令行工具串联起来。但面对复杂逻辑、大量数据处理、跨平台需求时，应该选择 Python 或其他通用语言。

与 Rust 的典型配合：用 Shell 编写构建脚本和 CI 流程，用 Rust 编写实际的工具和应用程序。
