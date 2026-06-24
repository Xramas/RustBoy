---
title: Python 语言入门概览
date: 2026-06-24 09:00:00
tags:
  - Python
  - 编程语言
categories:
  - 语言对比
---

Python 是一门以简洁和可读性著称的通用编程语言，广泛应用于 Web 开发、数据科学、自动化脚本和人工智能领域。

<!-- more -->

## 语言特点

Python 的核心设计哲学是"用一种方法，最好是只有一种方法来做一件事"。它的语法简洁，接近自然语言，非常适合初学者。

```python
# 列表推导式 —— Python 的标志性语法
squares = [x ** 2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

## 动态类型

Python 是动态类型语言，变量无需声明类型：

```python
x = 42          # int
x = "hello"     # str，随时可以改变类型
x = [1, 2, 3]   # list
```

这带来了灵活性，但也意味着类型错误只能在运行时发现。Python 3.5+ 引入了类型注解来缓解这个问题：

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```

## 内存管理

Python 使用引用计数 + 循环垃圾回收来管理内存。开发者完全不需要手动管理：

```python
import sys

a = [1, 2, 3]
print(sys.getrefcount(a))  # 查看引用计数

# 当对象不再被引用时，内存自动回收
a = None  # 原列表对象的引用计数减一
```

## GIL 与并发

CPython 的全局解释器锁（GIL）限制了多线程的并行能力。对于 CPU 密集型任务，通常使用多进程：

```python
from concurrent.futures import ProcessPoolExecutor

def compute(n):
    return sum(i * i for i in range(n))

with ProcessPoolExecutor() as executor:
    results = list(executor.map(compute, [10**6, 10**6, 10**6]))
```

## 与 Rust 的对比

| 方面 | Python | Rust |
|------|--------|------|
| 类型系统 | 动态类型 | 静态类型 + 所有权 |
| 内存管理 | GC 自动回收 | 所有权系统，零成本 |
| 运行速度 | 较慢（解释执行） | 接近 C 的性能 |
| 并发 | GIL 限制 | 无限制，编译期保证安全 |
| 学习曲线 | 低 | 较高 |
| 适用场景 | 脚本/数据科学/AI | 系统编程/高性能应用 |

Python 的生态极其丰富，`pip` 上有超过 50 万个包。如果你需要高性能部分，可以用 Rust 编写扩展模块（通过 PyO3），兼顾开发效率和运行效率。
