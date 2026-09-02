import { Award, FileText, Mail } from "lucide-react";

import { GitHubIcon, HuggingFaceIcon } from "@/components/brand-icons";
import { getProjectPrimaryHref, profile, projects } from "@/lib/site-data";

function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <section className="home-intro" aria-labelledby="home-title">
          <div className="home-image-wrap">
            <img
              className="home-image"
              src={profile.avatarSrc}
              alt={profile.avatarAlt}
              width="1200"
              height="1056"
              decoding="async"
              fetchPriority="high"
            />
            <a
              className="home-internship-badge"
              href={profile.internship.href}
              aria-label={`正在${profile.internship.companyZh}担任${profile.internship.role}`}
              title={`正在${profile.internship.companyZh}担任${profile.internship.role}`}
              {...externalLinkProps(profile.internship.href)}
            >
              <span aria-hidden="true" />
              interning@Knownsec
            </a>
          </div>

          <div className="home-terminal">
            <div className="home-command-block">
              <code className="home-prompt">
                {profile.terminalUser}@localhost:~ $ whoami
              </code>
              <div className="home-identity">
                <h1 id="home-title">{profile.displayName}</h1>
                <span>，{profile.identity}</span>
              </div>
            </div>

            <div className="home-command-block">
              <code className="home-prompt">
                {profile.terminalUser}@localhost:~ $ status
              </code>
              <p className="home-focus">{profile.focus}</p>
              {profile.showWorks ? (
                <div className="home-works">
                  <p className="home-works-label">// 快速了解我的作品</p>
                  <ul className="home-works-links">
                    {projects.map((project) => {
                      const href = getProjectPrimaryHref(project);

                      return (
                        <li key={project.slug}>
                          <a href={href} {...externalLinkProps(href)}>
                            <span className="home-work-title">{project.title}</span>
                            {project.qualifier ? (
                              <span className="home-work-qualifier">（{project.qualifier}）</span>
                            ) : null}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <nav className="home-personal-links" aria-label="个人链接">
          <a
            className="home-personal-link"
            href={profile.githubHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="personal-link-icon personal-link-icon-github" />
            GitHub
          </a>
          <a
            className="home-personal-link"
            href={profile.huggingFaceHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HuggingFaceIcon className="personal-link-icon personal-link-icon-hugging-face" />
            Hugging Face
          </a>
          <a
            className="home-personal-link"
            href={profile.emailHref}
            aria-label={`发送邮件至 ${profile.email}`}
            title={profile.email}
          >
            <Mail className="personal-link-icon personal-link-icon-email" aria-hidden="true" />
            邮箱
          </a>
          <a
            className="home-personal-link"
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="personal-link-icon personal-link-icon-resume" aria-hidden="true" />
            简历
          </a>
          <a className="home-personal-link" href={profile.certificatesHref}>
            <Award className="personal-link-icon personal-link-icon-certificates" aria-hidden="true" />
            课程证书
          </a>
        </nav>
      </div>
    </main>
  );
}
