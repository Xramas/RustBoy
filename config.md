# RustBoy 博客配置参考手册

## `_config.yml` — Hexo 主配置

| 配置项 | 说明 |
|--------|------|
| `title` | 站点标题 |
| `subtitle` | 副标题 |
| `description` | 站点描述，用于 SEO 和 RSS |
| `keywords` | 站点关键词（逗号分隔） |
| `author` | 作者名 |
| `language` | 站点语言（如 `zh-CN`） |
| `timezone` | 时区，留空使用系统时区 |
| `url` | 站点 URL（如 `https://rustboy.de`） |
| `permalink` | 文章永久链接格式（如 `:title.html`） |
| `permalink_defaults` | 永久链接各段默认值 |
| `pretty_urls.trailing_index` | 是否保留 `index.html`（默认 `true`） |
| `pretty_urls.trailing_html` | 是否保留 `.html` 后缀（默认 `true`） |
| `source_dir` | 源文件目录（默认 `source`） |
| `public_dir` | 生成输出目录（默认 `public`） |
| `tag_dir` | 标签页目录（默认 `tags`） |
| `archive_dir` | 归档页目录（默认 `archives`） |
| `category_dir` | 分类页目录（默认 `categories`） |
| `code_dir` | 代码下载目录（默认 `downloads/code`） |
| `i18n_dir` | 国际化目录（默认 `:lang`） |
| `skip_render` | 跳过渲染的文件/路径（正则或 glob） |
| `new_post_name` | 新文章文件名格式（默认 `:title.md`） |
| `default_layout` | 默认布局：`post` / `page` / `draft` |
| `titlecase` | 标题首字母大写（默认 `false`） |
| `external_link.enable` | 外部链接新标签打开（默认 `true`） |
| `external_link.field` | 检查范围：`site` / `post` |
| `external_link.exclude` | 排除的域名 |
| `filename_case` | 文件名大小写：`0` 不变 / `1` 小写 / `2` 大写 |
| `render_drafts` | 是否渲染草稿（默认 `false`） |
| `post_asset_folder` | 启用文章资源文件夹（默认 `false`） |
| `relative_link` | 使用相对链接（默认 `false`） |
| `future` | 显示未来日期的文章（默认 `true`） |
| `syntax_highlighter` | 代码高亮引擎：`highlight.js` / `prismjs` |
| `highlight.line_number` | 显示行号（默认 `true`） |
| `highlight.auto_detect` | 自动检测语言（默认 `false`） |
| `highlight.tab_replace` | Tab 替换字符串 |
| `highlight.wrap` | 代码块换行（默认 `true`） |
| `highlight.hljs` | 使用 hljs 模式（默认 `false`） |
| `prismjs.preprocess` | PrismJS 预处理（默认 `true`） |
| `prismjs.line_number` | PrismJS 显示行号（默认 `true`） |
| `prismjs.tab_replace` | PrismJS Tab 替换 |
| `index_generator.path` | 首页路径（默认 `''`） |
| `index_generator.per_page` | 首页每页文章数（默认 `10`） |
| `index_generator.order_by` | 首页排序规则（默认 `-date`） |
| `default_category` | 默认分类名（默认 `uncategorized`） |
| `category_map` | 分类别名映射 |
| `tag_map` | 标签别名映射 |
| `meta_generator` | 添加 `<meta name="generator">`（默认 `true`） |
| `date_format` | 日期格式（默认 `YYYY-MM-DD`） |
| `time_format` | 时间格式（默认 `HH:mm:ss`） |
| `updated_option` | 更新时间来源：`mtime` / `date` / `empty` |
| `per_page` | 每页文章数，`0` 禁用分页（默认 `10`） |
| `pagination_dir` | 分页目录名（默认 `page`） |
| `include` | 包含的文件/路径 |
| `exclude` | 排除的文件/路径 |
| `ignore` | 忽略的文件/路径 |
| `theme` | 使用的主题名（如 `icarus`） |
| `deploy.type` | 部署类型（`git` 等） |
| `deploy.repo` | 部署仓库地址 |
| `deploy.branch` | 部署分支 |

---

## `_config.icarus.yml` — Icarus 主题配置

### 基础配置

| 配置项 | 说明 |
|--------|------|
| `version` | 配置文件版本，由主题自动管理 |
| `variant` | 主题变体：`default` / `cyberpunk` |
| `logo` | 站点 Logo，支持图片路径或文字对象（`text: 名称`） |

### head — 页面头部

| 配置项 | 说明 |
|--------|------|
| `head.favicon` | 网站图标路径 |
| `head.rss` | RSS Atom 订阅地址 |
| **head.manifest** | **PWA Web App Manifest** |
| `head.manifest.name` | Web 应用全名（默认取站点标题） |
| `head.manifest.short_name` | Web 应用短名 |
| `head.manifest.start_url` | 启动 URL |
| `head.manifest.theme_color` | 主题色 |
| `head.manifest.background_color` | 背景色 |
| `head.manifest.display` | 显示模式：`standalone` / `fullscreen` / `minimal-ui` / `browser` |
| `head.manifest.icons[]` | 应用图标列表，每项含 `src`、`sizes`、`type` |
| **head.open_graph** | **Open Graph 社交分享元数据** |
| `head.open_graph.title` | og:title，留空取文章标题 |
| `head.open_graph.type` | og:type（如 `blog`） |
| `head.open_graph.url` | og:url，留空取页面 URL |
| `head.open_graph.image` | og:image，留空取文章封面 |
| `head.open_graph.site_name` | og:site_name |
| `head.open_graph.author` | article:author |
| `head.open_graph.description` | og:description |
| `head.open_graph.twitter_card` | Twitter 卡片类型 |
| `head.open_graph.twitter_id` | Twitter 用户 ID |
| `head.open_graph.twitter_site` | Twitter 站点 ID |
| `head.open_graph.fb_admins` | Facebook 管理员 ID |
| `head.open_graph.fb_app_id` | Facebook App ID |
| **head.structured_data** | **Google 结构化数据** |
| `head.structured_data.title` | 页面标题 |
| `head.structured_data.description` | 页面描述 |
| `head.structured_data.url` | 页面 URL |
| `head.structured_data.author` | 文章作者 |
| `head.structured_data.publisher` | 发布者名称 |
| `head.structured_data.publisher_logo` | 发布者 Logo URL |
| `head.structured_data.image` | 页面图片 |
| **head.meta** | **自定义 HTML `<meta>` 标签数组**，格式：`name=xxx;content=yyy` |

### navbar — 导航栏

| 配置项 | 说明 |
|--------|------|
| `navbar.menu` | 菜单项，键为显示文本，值为链接路径 |
| `navbar.links` | 右侧链接，支持纯 URL 或 `icon` + `url` 对象格式 |

**链接格式：**
```yaml
# 纯文本
GitHub: https://github.com
# 带图标
GitHub:
    icon: fab fa-github
    url: https://github.com
```

### footer — 页脚

| 配置项 | 说明 |
|--------|------|
| `footer.copyright` | 底部版权文字 |
| `footer.links` | 底部右侧链接，格式同 navbar.links |

### article — 文章配置

| 配置项 | 说明 |
|--------|------|
| `article.highlight.theme` | 代码高亮主题（来自 highlight.js，如 `atom-one-light`、`monokai`、`kimbie-dark`） |
| `article.highlight.clipboard` | 显示代码复制按钮（默认 `true`） |
| `article.highlight.fold` | 代码块默认折叠：`""` 不折叠 / `"folded"` 折叠 / `"unfolded"` 展开 |
| `article.readtime` | 显示预计阅读时间（默认 `true`） |
| `article.update_time` | 显示更新时间：`true` / `false` / `auto`（时间与发布时间相同时隐藏） |
| `article.licenses` | 文章底部版权声明，格式同 navbar.links |

**文章 front-matter 专属字段：**
```yaml
title: 文章标题
cover: /gallery/covers/cover.jpg      # 封面图
thumbnail: /gallery/covers/thumb.jpg  # 缩略图，显示在归档和最新文章列表
toc: true                             # 启用目录
updated: 2024-01-01 00:00:00          # 手动指定更新时间
disqusId: some-disqus-id              # Disqus 唯一标识（迁移时保留评论）
```

### search — 搜索

| 配置项 | 说明 |
|--------|------|
| `search.type` | 搜索引擎类型 |
| `search.index_pages` | 搜索结果包含页面（默认 `true`） |

**支持的搜索引擎：**

| type | 额外参数 |
|------|---------|
| `insight` | 无（内置，无需注册） |
| `algolia` | 在 `_config.yml` 中配置 `algolia.applicationID` / `indexName` / `apiKey` |
| `google_cse` | `cx`: Google 自定义搜索引擎 ID |
| `baidu` | 无（直接使用百度搜索） |

### comment — 评论

| 配置项 | 说明 |
|--------|------|
| `comment.type` | 评论系统类型 |

**支持的评论系统及参数：**

| type | 必选参数 | 可选参数 |
|------|---------|---------|
| `disqus` | `shortname` | — |
| `disqusjs` | `shortname`, `api_key` | `api`, `admin`, `admin_label`, `nesting` |
| `gitalk` | `client_id`, `client_secret`, `repo`, `owner`, `admin` | `per_page`, `distraction_free_mode`, `pager_direction`, `create_issue_manually`, `proxy`, `flip_move_options`, `enable_hotkey`, `language` |
| `giscus` | `repo`, `repoId`, `categoryId` | `category`, `mapping`, `strict`, `reactionsEnabled`, `emitMetadata`, `inputPosition`, `theme`, `lang`, `lazy` |
| `utterances` | `repo` | `issue_term` 或 `issue_number`，`label`, `theme` |
| `valine` | `app_id`, `app_key` | `placeholder`, `avatar`, `avatar_force`, `meta`, `page_size`, `lang`, `visitor`, `highlight`, `record_ip`, `server_urls`, `emoji_cdn`, `emoji_maps`, `enable_qq`, `required_fields` |
| `waline` | `server_url` | `path`, `lang`, `locale`, `emoji`, `dark`, `meta`, `required_meta`, `login`, `word_limit`, `page_size`, `image_uploader`, `highlighter`, `tex_renderer`, `search`, `pageview`, `comment`, `copyright` |
| `twikoo` | `env_id` | `region`, `lang` |
| `facebook` | 无 | — |
| `changyan` | `app_id`, `conf` | — |
| `livere` | `uid` | — |
| `isso` | `url` | — |

### donates — 打赏

| type | 参数 |
|------|------|
| `afdian` | `url`: 爱发电个人页 URL |
| `alipay` | `qrcode`: 支付宝收款码图片路径 |
| `buymeacoffee` | `url`: Buy me a Coffee 个人页 URL |
| `patreon` | `url`: Patreon 个人页 URL |
| `paypal` | `business`: PayPal ID 或邮箱，`currency_code`: 货币代码（如 `USD`） |
| `wechat` | `qrcode`: 微信收款码图片路径 |

### share — 分享

| 配置项 | 说明 |
|--------|------|
| `share.type` | 分享插件类型 |
| `share.install_url` | 分享插件脚本 URL（部分类型必填） |

| type | install_url |
|------|------------|
| `sharethis` | ShareThis 平台脚本 URL（必填） |
| `addthis` | AddThis 平台脚本 URL（必填） |
| `addtoany` | 无需填写 |
| `bdshare` | 无需填写 |
| `sharejs` | 无需填写 |

### sidebar — 侧边栏

| 配置项 | 说明 |
|--------|------|
| `sidebar.left.sticky` | 左侧边栏滚动时固定（默认 `false`） |
| `sidebar.right.sticky` | 右侧边栏滚动时固定（默认 `false`） |

### widgets — 侧边栏组件

每个组件需指定 `type` 和 `position`（`left` / `right`），按数组顺序显示。

#### profile — 作者信息

| 配置项 | 说明 |
|--------|------|
| `author` | 作者名 |
| `author_title` | 作者头衔 |
| `location` | 所在地/组织 |
| `avatar` | 头像图片 URL 或路径 |
| `avatar_rounded` | 圆形头像（默认 `false`） |
| `gravatar` | Gravatar 邮箱（优先级低于 avatar） |
| `follow_link` | 关注按钮链接 |
| `social_links` | 社交链接，格式同 navbar.links |

#### toc — 文章目录

| 配置项 | 说明 |
|--------|------|
| `index` | 显示目录编号（默认 `true`） |
| `collapsed` | 不可见时折叠子标题（默认 `true`） |
| `depth` | 显示的最大标题层级（`1`-`6`，默认 `3`） |

需在文章 front-matter 加 `toc: true` 才生效。

#### links — 外部链接

| 配置项 | 说明 |
|--------|------|
| `links` | 键值对，键为名称，值为 URL |

#### categories — 分类列表

无额外参数。

#### recent_posts — 最新文章

无额外参数。

#### archives — 归档列表

无额外参数。

#### tags — 标签云

| 配置项 | 说明 |
|--------|------|
| `order_by` | 排序：`name` / `length` / `-name` / `-length`（默认按名称升序） |
| `amount` | 显示数量，留空显示全部 |
| `show_count` | 显示文章计数（默认 `true`） |

#### subscribe_email — 邮件订阅（Google Feedburner）

| 配置项 | 说明 |
|--------|------|
| `description` | 输入框下方提示文字 |
| `feedburner_id` | Feedburner ID |

#### adsense — Google 广告

| 配置项 | 说明 |
|--------|------|
| `client_id` | AdSense 客户端 ID |
| `slot_id` | AdSense 广告单元 ID |

#### followit — follow.it 订阅

| 配置项 | 说明 |
|--------|------|
| `description` | 输入框下方提示文字 |
| `action_url` | 订阅表单 action URL（必填） |
| `verification_code` | Feed 认证码 |

### plugins — 插件

| 配置项 | 说明 |
|--------|------|
| `plugins.animejs` | 页面启动动画（默认 `true`） |
| `plugins.back_to_top` | 回到顶部按钮（默认 `true`） |
| `plugins.pjax` | PJAX 无刷新加载（默认 `true`） |
| `plugins.progressbar` | 顶部加载进度条（默认 `true`） |
| `plugins.gallery` | 图片画廊，含 lightGallery + Justified Gallery（默认 `true`） |
| `plugins.katex` | KaTeX 数学公式（默认 `false`） |
| `plugins.mathjax` | MathJax 数学公式（默认 `false`） |
| `plugins.outdated_browser` | 过时浏览器提示（默认 `false`） |
| **cookie_consent** | **Cookie 同意弹窗** |
| `plugins.cookie_consent.type` | 合规类型：`info` / `opt-in` / `opt-out` |
| `plugins.cookie_consent.theme` | 弹窗样式：`block` / `edgeless` / `classic` |
| `plugins.cookie_consent.static` | 固定位置不随页面滚动（默认 `false`） |
| `plugins.cookie_consent.position` | 位置：`bottom-left` / `bottom-right` / `top-left` / `top-right` / `bottom` |
| `plugins.cookie_consent.policyLink` | Cookie 政策链接 |
| **baidu_analytics** | **百度统计** |
| `plugins.baidu_analytics.tracking_id` | 百度统计 tracking ID |
| **bing_webmaster** | **Bing 站长工具** |
| `plugins.bing_webmaster.tracking_id` | Bing meta 标签中的 content 值 |
| **busuanzi** | **不蒜子访问计数**（`true` / `false`） |
| **cnzz** | **CNZZ 统计** |
| `plugins.cnzz.id` | CNZZ tracker ID |
| `plugins.cnzz.web_id` | CNZZ website ID |
| **google_analytics** | **Google Analytics** |
| `plugins.google_analytics.tracking_id` | GA tracking ID（如 `UA-12345678-0`） |
| **hotjar** | **Hotjar 用户行为分析** |
| `plugins.hotjar.site_id` | Hotjar 站点 ID |
| **statcounter** | **StatCounter 统计** |
| `plugins.statcounter.project` | 项目 ID |
| `plugins.statcounter.security` | 安全码 |
| **twitter_conversion_tracking** | **Twitter 转化追踪** |
| `plugins.twitter_conversion_tracking.pixel_id` | Twitter Pixel ID |

### providers — CDN 提供商

| 配置项 | 说明 |
|--------|------|
| `providers.cdn` | JS/CSS 库 CDN |
| `providers.fontcdn` | Web 字体 CDN |
| `providers.iconcdn` | FontAwesome 图标 CDN |

**内置选项：**

| 配置项 | 可选值 |
|--------|--------|
| `cdn` | `jsdelivr`（默认）、`cdnjs`、`unpkg`、`loli` |
| `fontcdn` | `google`（默认）、`loli`、`fontim`、`ustc` |
| `iconcdn` | `fontawesome`（默认）、`loli` |

支持自定义 URL 模板：
```yaml
providers:
    cdn: 'https://your.cdn.com/${package}/${version}/${filename}'
    fontcdn: 'https://your.font.cdn.com/${type}?family=${fontname}'
    iconcdn: 'https://your.icon.cdn.com/fontawesome.css'
```

---

## 配置文件优先级

从高到低：

1. **文章 front-matter** — 仅对该文章生效
2. **`_config.post.yml`** / **`_config.page.yml`** — 布局配置，对所有文章/页面生效
3. **`_config.icarus.yml`** — 主题配置
4. **`_config.yml`** — Hexo 站点配置

同名配置高优先级覆盖低优先级。
