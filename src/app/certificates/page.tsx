import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";

import { certificateGroups, withBasePath } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "MOOC 认证 | Shea",
  description: "Shea 的 MOOC 学习与认证记录，提供证书原件与在线核验链接。",
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
          <div className="certificates-title-row">
            <h1>MOOC 认证</h1>
          </div>
          <p className="certificates-summary">
            {certificateCount} 份课程认证，来自 {certificateGroups.length} 个平台；均可查看
            PDF 原件并在线核验。
          </p>
        </header>

        <div className="certificate-groups">
          {certificateGroups.map((group, groupIndex) => {
            const groupId = `certificate-group-${group.platform.toLowerCase()}`;

            return (
              <section className="certificate-group" key={group.platform} aria-labelledby={groupId}>
                <div className="certificate-group-header">
                  <h2 id={groupId}>{group.platform}</h2>
                  <span>{group.items.length} 份证书</span>
                </div>

                <div className="certificate-grid">
                  {group.items.map((certificate, index) => (
                    <article className="certificate-card" key={certificate.title}>
                      <a
                        className="certificate-preview-link"
                        href={certificate.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`查看 ${certificate.title} 的 PDF 证书`}
                      >
                        <img
                          src={certificate.preview}
                          alt={`${certificate.title} 课程证书预览`}
                          width="1200"
                          height="900"
                          loading={groupIndex === 0 && index < 2 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </a>

                      <div className="certificate-card-details">
                        <h3>{certificate.title}</h3>
                        <p className="certificate-issuer">{certificate.issuer}</p>
                        <div className="certificate-actions">
                          <a href={certificate.pdf} target="_blank" rel="noopener noreferrer">
                            <FileText aria-hidden="true" />
                            查看 PDF
                          </a>
                          <a href={certificate.verify} target="_blank" rel="noopener noreferrer">
                            <ExternalLink aria-hidden="true" />
                            在线核验
                          </a>
                        </div>
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
