import { ExternalLinkIcon, GitHubIcon } from "@/components/ui-icons";
import { ProjectDemoPlayer } from "@/components/project-demo-player";
import { getProjectBySlug, getProjectDemoParams, hasProjectDemo, withBasePath } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamicParams = false;

type ProjectDemoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getProjectDemoParams();
}

export default async function ProjectDemoPage({ params }: ProjectDemoPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !hasProjectDemo(project)) {
    notFound();
  }

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <a
          href={withBasePath("/#projects")}
          className="site-mono inline-flex items-center gap-2 text-sm text-[var(--soft)] transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--page-bg)]"
        >
          <span aria-hidden="true">&lt;</span>
          返回项目列表
        </a>

        <div className="glass-panel overflow-hidden p-0">
          <div className="border-b border-[var(--line-soft)] px-6 py-6 sm:px-8 sm:py-7 lg:px-10">
            <p className="site-mono text-xs uppercase tracking-[0.18em] text-[var(--soft)]">Project Demo</p>

            <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-4xl space-y-3">
                <h1 className="display-serif text-balance text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--fg)] sm:text-4xl">
                  {project.title}
                </h1>
                <p lang="zh-CN" className="cn-songti-copy text-[15px] leading-8 text-[var(--muted)] sm:text-base">
                  {project.description}
                </p>
              </div>

              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/82 px-4 py-2 text-sm text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <GitHubIcon className="h-4 w-4" />
                仓库链接
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="p-2 sm:p-3 lg:p-4">
            <ProjectDemoPlayer
              src={project.demo.videoSrc}
              posterSrc={project.demo.posterSrc}
              title={`${project.title} 演示视频`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}