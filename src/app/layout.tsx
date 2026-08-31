import type { Metadata } from "next";
import type { ReactNode } from "react";

import { withBasePath } from "@/lib/site-data";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shea",
  description: "Shea 的个人主页，聚焦 AI Agent 与 LLM 应用开发。",
  icons: {
    icon: withBasePath("/favicon.svg"),
    shortcut: withBasePath("/favicon.svg"),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
