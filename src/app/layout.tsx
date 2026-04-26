import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { ExternalLinkIcon, GitHubIcon, MailIcon } from "@/components/ui-icons";
import { contact, navigation, withBasePath } from "@/lib/site-data";

import "./globals.css";

const siteSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homepage - Ascend Ho",
  description:
    "Ascend Ho 的个人求职网页，聚焦大模型应用和 Agent 开发方向。",
  icons: {
    icon: withBasePath("/favicon.svg"),
    shortcut: withBasePath("/favicon.svg"),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={`${siteSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[var(--page-bg)] text-[var(--fg)] antialiased">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line-soft)] bg-[var(--header-surface)] backdrop-blur-xl">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between px-5 py-3.5 sm:px-6 md:py-4">
              <a
                href="#top"
                aria-label="返回顶部"
                className="site-mono header-home-link inline-flex items-center justify-center text-[0.9rem] font-medium tracking-[0.02em] text-[var(--accent-strong)] transition-colors duration-200 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--page-bg)]"
              >
                Portfolio
              </a>

              <nav className="hidden items-center gap-2 md:flex md:pl-16 lg:pl-24">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-base text-[var(--muted)] transition-colors hover:bg-white/80 hover:text-[var(--fg)]"
                  >
                    {item.label}
                    {item.external ? <ExternalLinkIcon className="h-3 w-3" /> : null}
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-[var(--line-soft)] px-5 py-2.5 sm:px-6 md:hidden">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[var(--line)] bg-white/80 px-3.5 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
                  >
                    {item.label}
                    {item.external ? <ExternalLinkIcon className="h-2.5 w-2.5" /> : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main id="top" className="pt-24 md:pt-20">
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
