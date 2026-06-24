---
title: Rust 语言入门概览
date: 2026-06-24 09:01:00
tags:
  - Rust
  - 编程语言
categories:
  - 语言对比
---

Rust 是一门注重安全、并发和性能的系统编程语言，由 Mozilla 研究院开发，2015 年发布 1.0 版本。它在不使用垃圾回收的前提下保证内存安全，被誉为"最受喜爱的编程语言"之一。

<!-- more -->

## 所有权系统

Rust 最独特的特性是所有权系统。每一块内存都有且只有一个所有者，当所有者离开作用域时，内存自动释放：

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;        // s1 的所有权转移给 s2
    // println!("{}", s1); // 编译错误！s1 已失效
    println!("{}", s2);    // 正常输出 "hello"
}
```

## 借用与生命周期

不需要转移所有权时，可以借用（引用）数据：

```rust
fn calculate_length(s: &String) -> usize {
    s.len()  // 借用，不获取所有权
}

fn main() {
    let s = String::from("hello");
    let len = calculate_length(&s);  // 不可变借用
    println!("'{}' 的长度是 {}", s, len);  // s 仍然可用
}
```

可变引用有严格限制：同一时刻只能有一个可变引用，或者多个不可变引用。这在编译期就防止了数据竞争。

## 模式匹配

`match` 表达式比大多数语言的 `switch` 强大得多：

```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(String),
}

fn value_in_cents(coin: &Coin) -> u32 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("来自 {} 的25美分", state);
            25
        }
    }
}
```

编译器会确保你处理了所有可能的情况，遗漏任何一个分支都会报错。

## Trait —— Rust 的多态

Trait 类似于接口，定义了共享行为：

```rust
trait Summary {
    fn summarize(&self) -> String;

    // 可以提供默认实现
    fn preview(&self) -> String {
        format!("{}...", &self.summarize()[..20])
    }
}

struct Article {
    title: String,
    content: String,
}

impl Summary for Article {
    fn summarize(&self) -> String {
        format!("{}: {}", self.title, self.content)
    }
}
```

## 零成本抽象

Rust 的泛型在编译期单态化（monomorphization），不会产生运行时开销：

```rust
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in &list[1..] {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn main() {
    let numbers = vec![34, 50, 25, 100, 65];
    println!("最大值: {}", largest(&numbers));  // 100

    let chars = vec!['y', 'm', 'a', 'q'];
    println!("最大值: {}", largest(&chars));    // y
}
```

## 错误处理

Rust 没有异常，使用 `Result<T, E>` 和 `Option<T>` 进行显式错误处理：

```rust
use std::fs;
use std::io;

fn read_config() -> Result<String, io::Error> {
    let content = fs::read_to_string("config.toml")?;  // ? 运算符自动传播错误
    Ok(content)
}

fn main() {
    match read_config() {
        Ok(config) => println!("配置内容: {}", config),
        Err(e) => eprintln!("读取失败: {}", e),
    }
}
```

## 生态工具链

- **Cargo** — 包管理器和构建工具，`cargo build`、`cargo test`、`cargo clippy`
- **crates.io** — 官方包仓库，超过 15 万个 crate
- **rustfmt** — 代码格式化
- **clippy** — 代码静态分析和 lint

Rust 的编译器错误信息是所有语言中最友好的，通常会告诉你哪里错了、为什么错了、以及怎么修。
