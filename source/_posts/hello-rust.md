---
title: Hello, Rust!
date: 2026-06-24 10:00:00
description: RustBoy 博客首篇文章，介绍为什么选择 Rust、博客计划内容以及环境准备和一个简单的 match 示例。
tags:
  - Rust
  - 入门
categories:
  - 随笔
---

你好，欢迎来到 RustBoy —— 一个记录 Rust 学习旅程的个人博客。

<!-- more -->

## 为什么选择 Rust？

在接触 Rust 之前，我主要使用 C/C++ 和 Python。选择 Rust 的理由很直接：

1. **内存安全** — 编译期就消灭了大部分内存问题，不需要 GC 也能安全地管理资源。
2. **零成本抽象** — 高级语法特性不带来运行时开销，和 C 一样快。
3. **现代工具链** — Cargo 是用过最好用的包管理器之一，`cargo build`、`cargo test`、`cargo clippy` 开箱即用。
4. **社区氛围** — Rust 社区以友好著称，文档质量极高。

## 这个博客会写什么？

计划覆盖的内容：

- **语言基础** — 所有权、生命周期、trait、泛型、模式匹配
- **异步编程** — async/await、tokio、Pin 与 Future
- **实战项目** — 用 Rust 写一些有意思的东西（比如 Game Boy 模拟器）
- **踩坑记录** — 编译器报错解读、常见陷阱与解决方案
- **生态观察** — 值得关注的 crate 和工具

## 环境准备

如果你也想开始学 Rust，最简单的方式：

```bash
# 安装 Rust 工具链
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 验证安装
rustc --version
cargo --version

# 创建第一个项目
cargo new hello_rust
cd hello_rust
cargo run
```

输出应该类似：

```
   Compiling hello_rust v0.1.0
    Finished dev [unoptimized + debuginfo] target(s)
     Running `target/debug/hello_rust`
Hello, world!
```

## 一个简单的例子

Rust 的 `match` 表达式比大多数语言的 `switch` 强大得多：

```rust
fn describe_number(n: i32) -> &'static str {
    match n {
        0 => "零",
        1..=9 => "个位数",
        10..=99 => "两位数",
        _ if n < 0 => "负数",
        _ => "很大的数",
    }
}

fn main() {
    let numbers = [0, 5, 42, -7, 100];
    for n in numbers {
        println!("{} -> {}", n, describe_number(n));
    }
}
```

这段代码展示了 Rust 的几个特性：模式匹配、范围匹配、守卫条件（`_ if n < 0`），以及 `&'static str` 的生命周期标注。

---

接下来会从所有权系统开始，逐步深入 Rust 的核心概念。如果你有任何问题或建议，欢迎在 GitHub 上提 issue。
