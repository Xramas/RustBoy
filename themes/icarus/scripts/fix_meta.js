/* global hexo */
// 替换废弃的 apple-mobile-web-app-capable 为标准 mobile-web-app-capable
hexo.extend.filter.register('after_render:html', function(html) {
    return html.replace(
        /<meta\s+name="apple-mobile-web-app-capable"\s+content="yes"\s*\/?>/g,
        '<meta name="mobile-web-app-capable" content="yes">'
    );
});
