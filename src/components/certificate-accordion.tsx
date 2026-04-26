"use client";

import { useState } from "react";

import { ChevronDownIcon } from "@/components/ui-icons";

type CertificateGroup = Readonly<{
  platform: string;
  items: ReadonlyArray<{
    title: string;
    pdf: string;
    verify: string;
  }>;
}>;

type CertificateAccordionProps = {
  groups: ReadonlyArray<CertificateGroup>;
};

export function CertificateAccordion({ groups }: CertificateAccordionProps) {
  const [activePlatform, setActivePlatform] = useState("");

  if (!groups.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      {groups.map((group, index) => {
        const isOpen = activePlatform === group.platform;
        const buttonId = `certificate-button-${index}`;
        const panelId = `certificate-panel-${index}`;

        return (
          <section
            key={group.platform}
            className={`glass-panel overflow-hidden p-0 transition-all duration-200 ${
              isOpen ? "shadow-[0_30px_80px_rgba(54,90,62,0.12)]" : ""
            }`}
          >
            <h3 className="font-normal tracking-normal">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setActivePlatform((current) =>
                    current === group.platform ? "" : group.platform,
                  )
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-normal transition-colors hover:bg-white/52 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-inset sm:px-8 sm:py-6"
              >
                <div className="space-y-1.5">
                  <span className="display-serif block text-[1.8rem] font-normal leading-[0.96] tracking-[-0.045em] text-[var(--fg)] sm:text-[2.45rem]">
                    {group.platform}
                  </span>
                  <span className="mt-1 block text-sm text-[var(--muted)]">
                    {group.items.length} 项证书{isOpen ? "，当前已展开" : "，点击查看"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-sm transition-colors ${
                      isOpen
                        ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "border-[var(--line)] bg-white/80 text-[var(--soft)]"
                    }`}
                  >
                    {group.items.length} 项
                  </span>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                        : "border-[var(--line)] bg-white/78 text-[var(--soft)]"
                    }`}
                  >
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </div>
              </button>
            </h3>

            {isOpen ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-[var(--line-soft)] bg-white/34"
              >
                <div className="divide-y divide-[var(--line-soft)]">
                  {group.items.map((item) => (
                    <article
                      key={item.title}
                      className="grid gap-4 px-6 py-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[var(--accent)]" />
                        <h4 className="text-[1.02rem] font-normal leading-7 tracking-[-0.02em] text-[var(--fg)] sm:text-[1.14rem]">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-3 lg:justify-end">
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border border-[var(--line)] bg-white/78 px-4 py-2 text-sm text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          查看证书
                        </a>
                        <a
                          href={item.verify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm text-white transition-colors hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)]"
                        >
                          在线验证
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}