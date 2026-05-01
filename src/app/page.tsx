import type { ReactNode } from "react";

import { CertificateAccordion } from "@/components/certificate-accordion";
import { ArrowDownIcon, ExternalLinkIcon, GitHubIcon, MailIcon, PlayIcon } from "@/components/ui-icons";
import { certificateGroups, contact, hero, projects } from "@/lib/site-data";

function SectionHeading(props: {
  id: string;
  title: string;
  description?: string;
}) {
  return (
    <div id={props.id} className="anchor-offset mb-10 scroll-mt-28 sm:mb-12">
      <h2
        lang="zh-CN"
        className="cn-accent-heading max-w-3xl text-balance text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-[var(--fg)] sm:text-4xl"
      >
        {props.title}
      </h2>
      {props.description ? (
        <p
          lang="zh-CN"
          className="cn-songti-copy mt-4 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8"
        >
          {props.description}
        </p>
      ) : null}
    </div>
  );
}

function ProjectActionLink(props: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const isPlaceholder = props.href === "#";

  return (
    <a
      href={props.href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      aria-label={props.label}
      aria-disabled={isPlaceholder ? true : undefined}
      title={isPlaceholder ? `${props.label}（占位）` : props.label}
      className="project-action inline-flex h-10 w-10 items-center justify-center rounded-2xl text-[var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--page-bg)]"
    >
      {props.children}
    </a>
  );
}

function ScrollCue() {
  return (
    <a
      href="#projects"
      aria-label="滚动到项目部分"
      className="scroll-cue mt-14 inline-flex items-center text-[var(--soft)] transition-transform duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--page-bg)] sm:mt-20"
    >
      <span className="scroll-cue-button inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-white/82 text-[var(--accent)] shadow-[0_16px_38px_rgba(56,95,69,0.08)]">
        <ArrowDownIcon className="scroll-cue-arrow h-5 w-5" />
      </span>
    </a>
  );
}

export default function Home() {
  const [firstName, lastName = ""] = hero.name.split(" ");
  const heroEmailHref = `mailto:${contact.email}`;

  return (
    <>
      <section className="relative flex min-h-[86svh] items-center overflow-hidden px-5 py-16 sm:min-h-[92vh] sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[4%] top-[10%] h-52 w-52 rounded-full bg-[rgba(122,190,138,0.18)] blur-3xl sm:left-[7%] sm:top-[12%] sm:h-72 sm:w-72" />
          <div className="absolute bottom-[8%] right-[4%] h-60 w-60 rounded-full bg-[rgba(87,154,112,0.14)] blur-3xl sm:bottom-[10%] sm:right-[8%] sm:h-80 sm:w-80" />
        </div>

        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 text-[1.05rem] font-medium tracking-[-0.012em] text-[var(--muted)] sm:mb-9 sm:text-[1.22rem]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-35" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </span>
              {hero.status}
            </div>

            <h1 className="display-serif max-w-4xl text-balance text-4xl font-bold leading-[0.9] tracking-[-0.07em] text-[var(--fg)] sm:text-6xl lg:text-7xl">
              {firstName} <span className="gradient-text">{lastName}</span>
            </h1>
            <p className="hero-handle mt-5 text-[18px] tracking-[0.05em] text-[var(--soft)] sm:text-[20px] sm:tracking-[0.03em]">{hero.handle}</p>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-[var(--muted)] sm:mt-8 sm:text-2xl sm:leading-10">{hero.title}</p>
            <p
              lang="zh-CN"
              className="cn-songti-copy mt-5 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg sm:leading-8"
            >
              {hero.summary}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-4">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hero-contact-link inline-flex h-[3.15rem] w-[3.15rem] items-center justify-center text-[var(--accent-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--page-bg)]">
                <GitHubIcon className="h-[1.85rem] w-[1.85rem]" />
              </a>
              <a href={heroEmailHref} aria-label="发送邮件" className="hero-contact-link inline-flex h-[3.15rem] w-[3.15rem] items-center justify-center text-[var(--accent-strong)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--page-bg)]">
                <MailIcon className="h-[1.95rem] w-[1.95rem]" />
              </a>
            </div>

            <ScrollCue />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            id="projects"
            title="项目展示"
            description="一系列精选的个人项目，右上角提供 GitHub 仓库和视频演示入口"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="glass-panel project-card group overflow-hidden p-6 sm:p-7">
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1 pr-1">
                    <h3 className="display-serif text-[1.95rem] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--fg)]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="-mt-1.5 -mr-1 flex shrink-0 items-center gap-2 sm:-mt-2 sm:-mr-1.5">
                    <ProjectActionLink href={project.repoHref} label={`${project.title} GitHub 仓库`}>
                      <GitHubIcon className="h-4 w-4" />
                    </ProjectActionLink>
                    <ProjectActionLink href={project.demoHref} label={`${project.title} 演示链接`}>
                      <PlayIcon className="h-4 w-4" />
                    </ProjectActionLink>
                  </div>
                </div>

                <div className="relative z-10 mt-4">
                  <p lang="zh-CN" className="cn-songti-copy mt-4 text-[15px] leading-7 text-[var(--muted)] sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-chip px-3.5 py-1.5 text-[11px] tracking-[0.03em] text-[var(--soft)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            id="certificates"
            title="可验证的学习记录"
            description="在线 MOOC 平台的课程证书，提供本地 PDF 和官方在线验证链接两种方式"
          />

          <CertificateAccordion groups={certificateGroups} />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div id="contact" className="glass-panel scroll-mt-28 p-7 text-center sm:p-10">
            <h2
              lang="zh-CN"
              className="cn-accent-heading text-balance text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-[var(--fg)] sm:text-4xl"
            >
              {contact.title}
            </h2>
            <p
              lang="zh-CN"
              className="cn-songti-copy mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8"
            >
              {contact.description}
            </p>

            <a href={contact.resumeHref} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)]">
              打开简历
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
