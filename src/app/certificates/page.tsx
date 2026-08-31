import type { Metadata } from "next";
import { ArrowLeft, Award, ExternalLink, FileText } from "lucide-react";

import { certificateGroups, profile, withBasePath } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "课程证书 | Shea",
  description: "Shea 的课程学习记录与在线核验链接。",
};

export default function CertificatesPage() {
  const certificateCount = certificateGroups.reduce(
    (total, group) => total + group.items.length,
    0,
  );

  return (
    <main className="certificates-container">
      <div className="certificates-content">
        <a className="page-back-link" href={withBasePath("/")}>
          <ArrowLeft aria-hidden="true" />
          返回首页
        </a>

        <header className="certificates-header">
          <code className="certificates-prompt">
            {profile.terminalUser}@localhost:~ $ ls ~/certificates
          </code>
          <div className="certificates-title-row">
            <Award aria-hidden="true" />
            <h1>课程证书</h1>
          </div>
          <p>共 {certificateCount} 项可查看、可在线核验的课程学习记录。</p>
        </header>

        <div className="certificate-groups">
          {certificateGroups.map((group) => {
            const groupId = `certificate-group-${group.platform.toLowerCase()}`;

            return (
              <section className="certificate-group" key={group.platform} aria-labelledby={groupId}>
                <div className="certificate-group-header">
                  <h2 id={groupId}>{group.platform}</h2>
                  <span>{group.items.length} 项</span>
                </div>

                <div className="certificate-list">
                  {group.items.map((certificate) => (
                    <article className="certificate-item" key={certificate.title}>
                      <h3>{certificate.title}</h3>
                      <div className="certificate-actions">
                        <a href={certificate.pdf} target="_blank" rel="noopener noreferrer">
                          <FileText aria-hidden="true" />
                          证书 PDF
                        </a>
                        <a href={certificate.verify} target="_blank" rel="noopener noreferrer">
                          <ExternalLink aria-hidden="true" />
                          在线核验
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
