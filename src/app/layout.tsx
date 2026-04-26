import type { Metadata } from "next";
import type { ReactNode } from "react";

import { GitHubIcon, MailIcon } from "@/components/ui-icons";
import { contact, navigation, withBasePath } from "@/lib/site-data";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ascend Ho | 个人主页",
  description:
    "Ascend Ho 的单页作品集，聚焦 C++、系统基础、证书记录与 LLM 应用方向。",
  icons: {
    icon: withBasePath("/favicon.svg"),
    shortcut: withBasePath("/favicon.svg"),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="min-h-screen bg-[var(--page-bg)] text-[var(--fg)] antialiased">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line-soft)] bg-[var(--header-surface)] backdrop-blur-xl">
          <div className="mx-auto max-w-6xl">
            <nav className="flex h-16 items-center justify-end px-6">
              <div className="hidden items-center gap-2 md:flex md:pl-16 lg:pl-24">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="rounded-full px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:bg-white/80 hover:text-[var(--fg)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="border-t border-[var(--line-soft)] px-4 py-3 md:hidden">
              <div className="flex justify-end gap-2 overflow-x-auto pb-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="shrink-0 rounded-full border border-[var(--line)] bg-white/80 px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main id="top" className="pt-28 md:pt-16">
          {children}
        </main>

        <footer className="border-t border-[var(--line-soft)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[var(--soft)] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Ascend Ho. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/76 text-[var(--soft)] shadow-[0_12px_30px_rgba(56,95,69,0.08)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/76 text-[var(--soft)] shadow-[0_12px_30px_rgba(56,95,69,0.08)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                href={`mailto:${contact.email}`}
                aria-label="邮箱"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
