import { CertificateAccordion } from "@/components/certificate-accordion";
import { ArrowDownIcon, ExternalLinkIcon, GitHubIcon, MailIcon } from "@/components/ui-icons";
import { certificateGroups, contact, hero, projects } from "@/lib/site-data";

function SectionHeading(props: {
  id: string;
  title: string;
  description?: string;
}) {
  return (
    <div id={props.id} className="anchor-offset mb-12 scroll-mt-28">
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl">
        {props.title}
      </h2>
      {props.description ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{props.description}</p>
      ) : null}
    </div>
  );
}

function ScrollCue() {
  return (
    <a
      href="#projects"
      aria-label="滚动到项目部分"
      className="mt-18 inline-flex flex-col items-center gap-3 text-[var(--soft)] transition-transform duration-200 hover:-translate-y-0.5 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--page-bg)] sm:mt-22"
    >
      <span className="text-xs tracking-[0.35em] uppercase">scroll</span>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-white/82 text-[var(--accent)] shadow-[0_16px_38px_rgba(56,95,69,0.08)]">
        <ArrowDownIcon className="h-5 w-5" />
      </span>
    </a>
  );
}

export default function Home() {
  const [firstName, lastName = ""] = hero.name.split(" ");

  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[7%] top-[12%] h-72 w-72 rounded-full bg-[rgba(122,190,138,0.18)] blur-3xl" />
          <div className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-[rgba(87,154,112,0.14)] blur-3xl" />
        </div>

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/78 px-4 py-2 text-sm text-[var(--muted)] shadow-[0_18px_60px_rgba(87,71,52,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-35" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              {hero.status}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[var(--fg)] sm:text-7xl">
              {firstName} <span className="gradient-text">{lastName}</span>
            </h1>
            <p className="mt-4 font-mono text-sm tracking-[0.22em] text-[var(--soft)]">{hero.handle}</p>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--muted)] sm:text-2xl">{hero.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{hero.summary}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href={hero.primaryCta.href} className="inline-flex items-center rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-strong)] hover:border-[var(--accent-strong)]">
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/78 px-5 py-3 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                {hero.secondaryCta.label}
              </a>
            </div>

            <ScrollCue />
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            id="projects"
            title="我接下来会继续补强的项目展示。"
            description="这里暂时保持精简。随着材料逐步完善，每个项目位都可以扩展成更完整的案例，补上演示、实现说明和链接。"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="glass-panel group overflow-hidden p-0">
                <div className="project-surface flex min-h-44 items-end p-6">
                  <span className="text-xs font-medium tracking-[0.18em] text-[var(--muted)]">{project.status}</span>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex rounded-full border border-[var(--line)] bg-white/75 px-3 py-1 text-[11px] tracking-[0.14em] text-[var(--soft)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--fg)]">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                  <div className="mt-6 space-y-2 text-sm text-[var(--soft)]">
                    {project.meta.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            id="certificates"
            title="把可验证的学习记录集中放在一起。"
            description="按平台收纳，保留本地 PDF 和官方验证链接，避免证书增加时把页面一直拉长。"
          />

          <CertificateAccordion groups={certificateGroups} />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div id="contact" className="glass-panel scroll-mt-28 p-8 text-center sm:p-10">
            <h2 className="text-3xl font-semibold text-[var(--fg)] sm:text-4xl">{contact.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">{contact.description}</p>

            <a href={contact.resumeHref} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)]">
              打开简历
              <ExternalLinkIcon className="h-4 w-4" />
            </a>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-white/78 text-[var(--fg)] shadow-[0_16px_40px_rgba(56,95,69,0.08)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a href={`mailto:${contact.email}`} aria-label="发送邮件" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-white/78 text-[var(--fg)] shadow-[0_16px_40px_rgba(56,95,69,0.08)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
