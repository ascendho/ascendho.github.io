# Development

这个仓库同时承担两件事：

1. 单页主页源码
2. 特殊的 GitHub profile 仓库，根目录 [README.md](README.md) 会显示在 GitHub 主页上

因此，展示内容放在 [README.md](README.md)，本地开发和部署说明统一放在这里。

## 本地启动

```bash
npm install
npm run dev
```

默认访问地址：`http://localhost:3000`

## 生产构建

```bash
npm run build
npm start
```

## 部署

### Netlify

- 直接导入当前仓库即可。
- 构建命令使用 `npm run build`。
- Publish directory 保持留空自动检测；如果必须手动填写，使用 `.next`，不要填写 `out`。
- **重要：** 项目根目录已有 `netlify.toml`，但 Netlify Dashboard 的 `Publish directory` 字段会覆盖它。如果在 Dashboard → Site settings → Build & deploy 里看到 `Publish directory` 不为空（例如填了 `.`），必须将其**清空**，否则会出现 404。
- 不要在 Netlify 项目里配置 `NEXT_PUBLIC_BASE_PATH` 或 `GITHUB_PAGES`。
- 当前项目是标准 Next.js 应用，Netlify 会自动识别并处理运行时。

### GitHub Pages

- 仓库内已经提供 [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) 工作流。
- 在 GitHub 仓库设置中把 Pages 的 Source 设为 `GitHub Actions`。
- 当前项目站点地址应为 `https://ascendho.github.io/ascendho/`。
- 工作流会切换到静态导出模式，并根据仓库名生成正确的 `basePath`。
- 如果要本地模拟 GitHub Pages 构建，可以运行：

```bash
NEXT_PUBLIC_BASE_PATH=/ascendho GITHUB_PAGES=true npm run build
```

如果仓库未来改成 `用户名.github.io` 这种用户主页仓库，本地模拟时把 `NEXT_PUBLIC_BASE_PATH` 留空即可。

`out/` 目录只用于 GitHub Pages 静态导出，不应用作 Netlify 的发布目录。

## 资源目录

- 证书 PDF：`public/certificates/`
- 简历 PDF：`public/resume/resume.pdf`
- 站点图标：`public/favicon.svg`

## 自动同步简历

- [.github/workflows/sync-resume.yml](.github/workflows/sync-resume.yml) 会把私有简历仓库中的 `Latex/resume.pdf` 同步到 `public/resume/resume.pdf`。
- 如果希望私有仓库更新后自动触发同步，需要在 `ascendho/Resume` 里额外配置一个会触发 `repository_dispatch` 事件 `sync-resume` 的工作流。

## 代码入口

- 页面结构：`src/app/`
- 页面文案数据：`src/lib/site-data.ts`
- GitHub Actions：`.github/workflows/`