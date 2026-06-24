---
title: PowerShell 入门概览
date: 2026-06-24 09:04:00
description: PowerShell 是基于 .NET 的任务自动化框架，本文介绍对象管道、Cmdlet 命名、流程控制和远程管理，以及跨平台 PowerShell 7+。
tags:
  - PowerShell
  - Windows
  - 脚本
categories:
  - 语言对比
---

PowerShell 是微软开发的任务自动化和配置管理框架，内置命令行 Shell 和脚本语言。它基于 .NET 构建，是 Windows 系统管理和自动化的首选工具，现已跨平台支持 Linux 和 macOS。

<!-- more -->

## 一切皆对象

与 Shell 的纯文本管道不同，PowerShell 管道传递的是 .NET 对象：

```powershell
# 获取进程并直接访问属性（不是文本解析）
Get-Process | Where-Object { $_.CPU -gt 100 } |
    Select-Object Name, CPU, WorkingSet64 |
    Sort-Object CPU -Descending

# 对比 Shell 中需要 awk/sed 文本处理
# PowerShell 直接操作对象属性
Get-Service | Where-Object Status -eq "Running" |
    Select-Object Name, DisplayName, StartType
```

## Cmdlet 命名规范

PowerShell 使用"动词-名词"的统一命名模式：

```powershell
# 动词-名词 结构
Get-Process          # 获取进程
Set-Location         # 设置当前位置
New-Item             # 创建项目
Remove-Item          # 删除项目
Invoke-WebRequest    # 发起 HTTP 请求

# 查看所有可用动词
Get-Verb | Sort-Object Verb

# 别名 —— 兼容其他 Shell
ls    # 等同于 Get-ChildItem
cd    # 等同于 Set-Location
cat   # 等同于 Get-Content
rm    # 等同于 Remove-Item
```

## 变量与类型

```powershell
# 变量以 $ 开头
$name = "RustBoy"
$version = [version]"1.0.0"
$numbers = @(1, 2, 3, 4, 5)
$hash = @{
    Name = "RustBoy"
    Language = "Rust"
    Year = 2026
}

# 类型声明
[int]$port = 8080
[string]$url = "https://rustboy.de"
[bool]$debug = $false

# 类型加速器
$list = [System.Collections.Generic.List[string]]::new()
$list.Add("hello")
$list.Add("world")
```

## 流程控制

```powershell
# 条件判断
$score = 85

if ($score -ge 90) {
    Write-Host "优秀" -ForegroundColor Green
} elseif ($score -ge 60) {
    Write-Host "及格" -ForegroundColor Yellow
} else {
    Write-Host "不及格" -ForegroundColor Red
}

# switch 语句 —— 支持正则匹配
$os = [System.Environment]::OSVersion.Platform
switch -Regex ($os) {
    "Win"    { "Windows 系统" }
    "Unix"   { "Linux/macOS" }
    default  { "未知系统" }
}

# foreach 循环
foreach ($file in Get-ChildItem *.txt) {
    Write-Host "$($file.Name) - $($file.Length) bytes"
}

# 管道操作
1..10 | Where-Object { $_ % 2 -eq 0 } |
    ForEach-Object { $_ * $_ } |
    Measure-Object -Sum
```

## 函数

```powershell
function Get-SystemReport {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$ComputerName,

        [ValidateSet("Basic", "Detailed")]
        [string]$Level = "Basic"
    )

    process {
        $os = Get-CimInstance Win32_OperatingSystem -ComputerName $ComputerName
        $cpu = Get-CimInstance Win32_Processor -ComputerName $ComputerName

        [PSCustomObject]@{
            Computer  = $ComputerName
            OS        = $os.Caption
            CPU       = $cpu.Name
            MemoryGB  = [math]::Round($os.TotalVisibleMemorySize / 1MB, 1)
            Uptime    = (Get-Date) - $os.LastBootUpTime
        }
    }
}

# 使用
$report = Get-SystemReport -ComputerName "localhost" -Level "Detailed"
$report | Format-List
```

## 实用脚本示例

批量文件处理：

```powershell
# 查找并清理 30 天前的日志文件
$logPath = "C:\Logs"
$cutoff = (Get-Date).AddDays(-30)

Get-ChildItem -Path $logPath -Filter "*.log" -Recurse |
    Where-Object { $_.LastWriteTime -lt $cutoff } |
    ForEach-Object {
        Write-Host "删除: $($_.FullName)" -ForegroundColor Yellow
        Remove-Item $_.FullName -Force
    }
```

远程管理：

```powershell
# 远程执行命令
$servers = @("server01", "server02", "server03")
$cred = Get-Credential

$results = Invoke-Command -ComputerName $servers -Credential $cred -ScriptBlock {
    [PSCustomObject]@{
        ComputerName = $env:COMPUTERNAME
        DiskFreeGB   = [math]::Round((Get-PSDrive C).Free / 1GB, 1)
        LastUpdate    = (Get-HotFix | Sort-Object InstalledOn -Descending |
                         Select-Object -First 1).InstalledOn
    }
}

$results | Format-Table -AutoSize
```

## PowerShell 7+ 与跨平台

PowerShell 7 基于 .NET Core，可在 Linux 和 macOS 上运行：

```powershell
# 跨平台系统信息
$PSVersionTable    # 查看 PowerShell 版本
$IsWindows         # 是否 Windows
$IsLinux           # 是否 Linux
$IsMacOS           # 是否 macOS

# 统一的跨平台命令
Get-ChildItem -Path /home -Recurse -File |
    Measure-Object -Property Length -Sum |
    Select-Object @{N="TotalMB"; E={[math]::Round($_.Sum/1MB, 2)}}
```

## 与 Rust 的配合

PowerShell 是 Windows 平台上编排和管理 Rust 工具的天然选择。用 PowerShell 脚本调用 Rust 编译的 CLI 工具，结合两者的优势：

```powershell
# 调用 Rust 编译的工具并处理输出
$result = & .\my-rust-tool.exe --format json | ConvertFrom-Json
$result.items | Where-Object { $_.status -eq "active" }
```

PowerShell 的学习曲线比 Bash 陡峭，但其面向对象的管道、丰富的 .NET 类库和强大的远程管理能力，使其成为 Windows 生态中不可替代的工具。
