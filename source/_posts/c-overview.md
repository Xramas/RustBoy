---
title: C 语言入门概览
date: 2026-06-24 09:02:00
description: C 语言是现代操作系统的基石，本文介绍指针、内存布局、预处理器和常见陷阱，以及与 Rust 的对比。
tags:
  - C
  - 编程语言
categories:
  - 语言对比
---

C 语言诞生于 1972 年，由 Dennis Ritchie 在贝尔实验室开发。它是现代操作系统、编译器和嵌入式系统的基石，至今仍是世界上使用最广泛的编程语言之一。

<!-- more -->

## 接近硬件

C 语言最大的特点是直接操作内存，没有抽象层的阻隔：

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // 手动分配内存
    int *arr = (int *)malloc(5 * sizeof(int));
    if (arr == NULL) {
        return 1;
    }

    for (int i = 0; i < 5; i++) {
        arr[i] = i * i;
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    // 必须手动释放内存
    free(arr);
    return 0;
}
```

## 指针

指针是 C 语言的核心概念，也是最容易出错的地方：

```c
#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;  // 解引用获取值
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("交换前: x=%d, y=%d\n", x, y);

    swap(&x, &y);  // 传递地址
    printf("交换后: x=%d, y=%d\n", x, y);
    return 0;
}
```

## 内存布局

理解 C 程序的内存布局对写出正确程序至关重要：

```
┌─────────────── 高地址
│   命令行参数和环境变量
├───────────────
│   栈（Stack）     ← 局部变量、函数调用帧
│   ↓ 向低地址增长
│
│   ↑ 向高地址增长
│   堆（Heap）      ← malloc/free 管理
├───────────────
│   BSS 段          ← 未初始化的全局变量
├───────────────
│   数据段          ← 已初始化的全局变量
├───────────────
│   代码段          ← 程序指令
└─────────────── 低地址
```

## 预处理器

C 的预处理器在编译前进行文本替换，功能强大但容易滥用：

```c
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof((arr)[0]))

#ifdef DEBUG
    #define LOG(fmt, ...) fprintf(stderr, fmt "\n", ##__VA_ARGS__)
#else
    #define LOG(fmt, ...)  // 空宏，Release 模式下不输出
#endif

int main() {
    int nums[] = {3, 1, 4, 1, 5, 9};
    int count = ARRAY_SIZE(nums);
    LOG("数组大小: %d", count);

    int max = MAX(nums[0], nums[1]);
    printf("最大值: %d\n", max);
    return 0;
}
```

## 常见陷阱

C 语言没有数组越界检查、没有垃圾回收、没有空指针保护。以下是一些经典 bug：

```c
// 1. 缓冲区溢出
char buf[10];
strcpy(buf, "This string is way too long!");  // 未定义行为

// 2. Use after free
int *p = malloc(sizeof(int));
*p = 42;
free(p);
printf("%d\n", *p);  // 未定义行为，可能崩溃

// 3. 内存泄漏
void leak() {
    int *p = malloc(100 * sizeof(int));
    // 忘记 free(p)
}

// 4. 悬空指针
int *dangling() {
    int x = 42;
    return &x;  // 返回局部变量地址，函数返回后 x 已失效
}
```

## 与 Rust 的对比

Rust 的设计初衷之一就是解决 C 语言的内存安全问题：

| 方面 | C | Rust |
|------|---|------|
| 内存安全 | 程序员自己负责 | 编译器保证 |
| 空指针 | 到处都是 | 没有 null，用 Option |
| 缓冲区溢出 | 运行时崩溃 | 编译期检查 |
| 数据竞争 | 难以发现 | 编译期阻止 |
| ABI 稳定性 | 稳定 | 不稳定（目前） |
| 编译速度 | 快 | 较慢 |

C 语言的遗产无可替代——Linux 内核、SQLite、Nginx 都是 C 的杰作。但新项目如果对安全性有要求，Rust 是更现代的选择。
