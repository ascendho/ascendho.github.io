import { notFound } from "next/navigation";

import { ProjectDemoPlayer } from "@/components/project-demo-player";
import {
  getProjectBySlug,
  getProjectDemoParams,
  hasProjectDemo,
  profile,
  withBasePath,
} from "@/lib/site-data";

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
    <main className="demo-container">
      <div className="demo-content">
        <a className="demo-back" href={withBasePath("/")}>
          &lt; 返回首页
        </a>

        <header className="demo-header">
          <code className="demo-prompt">
            {profile.terminalUser}@localhost:~ $ open projects/{project.slug}
          </code>
          <h1 className="demo-title">{project.title}</h1>
          <p className="demo-description">{project.description}</p>
          <nav className="demo-actions" aria-label={`${project.title} 项目链接`}>
            <a className="demo-link" href={project.repoHref} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </header>

        <ProjectDemoPlayer
          src={project.demo.videoSrc}
          posterSrc={project.demo.posterSrc}
          title={`${project.title} 演示视频`}
        />
      </div>
    </main>
  );
}
