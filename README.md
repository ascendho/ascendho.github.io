# 个人网站

[![deploy](https://img.shields.io/github/actions/workflow/status/ascendho/ascendho.github.io/nextjs.yml?style=flat-square&label=deploy)](https://github.com/ascendho/ascendho.github.io/actions/workflows/nextjs.yml)
[![site](https://img.shields.io/badge/site-ascendho.live-2ea44f?style=flat-square)](https://www.ascendho.live/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Shea 的个人主页，聚焦 AI Agent 与 LLM 工程，展示项目、MOOC 认证与简历。

在线访问：<https://www.ascendho.live/>

## 技术栈

- Next.js 16（App Router）
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react

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

## 资源目录

- 证书 PDF：`public/certificates/`
- 当前简历 PDF：`public/resume/resume.pdf`
- 历史简历归档：`public/resume/archive/`
- 站点图标：`public/favicon.svg`

## 代码入口

- 页面结构：`src/app/`
- 页面文案数据：`src/lib/site-data.ts`
- GitHub Actions：`.github/workflows/`

## 部署

推送到 `master` 后由 GitHub Actions（`.github/workflows/nextjs.yml`）自动构建并发布到 GitHub Pages。

本地复现静态导出：

```bash
GITHUB_PAGES=true npm run build
```

产物输出到 `out/`。

## 开发约定

命名、样式、提交等约定见 [AGENTS.md](./AGENTS.md)。