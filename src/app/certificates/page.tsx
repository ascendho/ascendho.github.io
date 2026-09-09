import type { Metadata } from "next";
import { ArrowLeft, BadgeCheck, FileDown } from "lucide-react";

import { certificateGroups, withBasePath, type Certificate } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "MOOC 认证 | Shea",
  description: "Shea 的 MOOC 学习与认证记录，提供证书原件、课程完成记录与在线核验链接。",
};

function formatIssuedAt(issuedAt: string) {
  return issuedAt.replaceAll("-", ".");
}

export default function CertificatesPage() {
  const allCertificates: ReadonlyArray<Certificate> = certificateGroups.flatMap(
    (group) => group.items,
  );
  const certificateCount = allCertificates.filter((certificate) => certificate.pdf).length;
  const accomplishmentCount = allCertificates.length - certificateCount;

  return (
    <main className="certificates-container">
      <div className="certificates-content">
        <a className="page-back-link" href={withBasePath("/")}>
          <ArrowLeft aria-hidden="true" />
          返回首页
        </a>

        <header className="certificates-header">
          <p className="certificates-eyebrow">CERTIFICATE ARCHIVE</p>
          <div className="certificates-title-row">
            <h1>MOOC 认证</h1>
          </div>
          <p className="certificates-summary">
            {certificateCount} 份证书与 {accomplishmentCount} 份课程完成记录，来自{" "}
            {certificateGroups.length} 个平台。均可在线核验，证书另附 PDF 原件。
          </p>
        </header>

        <div className="certificate-groups">
          {certificateGroups.map((group, groupIndex) => {
            const groupId = `certificate-group-${group.platform.toLowerCase()}`;
            const sortedCertificates = [...group.items].sort((first, second) =>
              second.issuedAt.localeCompare(first.issuedAt),
            );
            const isAccomplishmentGroup = group.items.every(
              (certificate: Certificate) => !certificate.pdf,
            );

            return (
              <section
                className="certificate-group"
                key={group.platform}
                data-platform={group.platform.toLowerCase()}
                aria-labelledby={groupId}
              >
                <div className="certificate-group-header">
                  <h2 id={groupId}>{group.platform}</h2>
                  <div className="certificate-group-meta">
                    <span>{group.items.length} 项</span>
                    {isAccomplishmentGroup ? (
                      <p className="certificate-group-subtitle">在线课程完成记录</p>
                    ) : null}
                  </div>
                </div>

                {isAccomplishmentGroup ? (
                  <div className="certificate-list">
                    {sortedCertificates.map((certificate: Certificate) => (
                      <a
                        className="certificate-list-item"
                        key={certificate.title}
                        href={certificate.verify}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`查看 ${certificate.title} 的完成记录`}
                      >
                        <div className="certificate-list-preview">
                          <img
                            src={certificate.preview}
                            alt={`${certificate.title} 课程完成记录预览`}
                            width="1200"
                            height="375"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="certificate-list-meta">
                          <p className="certificate-meta">
                            <span>{certificate.issuer}</span>
                            <time dateTime={certificate.issuedAt}>
                              {formatIssuedAt(certificate.issuedAt)}
                            </time>
                          </p>
                          <h3>{certificate.title}</h3>
                          <div className="certificate-list-actions">
                            <span className="certificate-list-verify">
                              <BadgeCheck aria-hidden="true" strokeWidth={1.8} />
                              在线核验
                            </span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="certificate-grid">
                    {sortedCertificates.map((certificate: Certificate, index) => {
                      const isAccomplishment = !certificate.pdf;
                      const previewHref = certificate.pdf ?? certificate.verify;

                      return (
                        <article className="certificate-card" key={certificate.title}>
                          <a
                            className="certificate-preview-link"
                            href={previewHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`查看 ${certificate.title} 的${isAccomplishment ? "完成记录" : "PDF 证书"}`}
                          >
                            <img
                              src={certificate.preview}
                              alt={`${certificate.title} ${isAccomplishment ? "课程完成记录" : "课程证书"}预览`}
                              width="1200"
                              height="900"
                              loading={groupIndex === 0 && index < 2 ? "eager" : "lazy"}
                              decoding="async"
                            />
                          </a>

                          <div className="certificate-card-details">
                            <p className="certificate-meta">
                              <span>{certificate.issuer}</span>
                              <time dateTime={certificate.issuedAt}>
                                {formatIssuedAt(certificate.issuedAt)}
                              </time>
                            </p>
                            <h3>{certificate.title}</h3>
                            <div className="certificate-actions">
                              {certificate.pdf ? (
                                <a href={certificate.pdf} target="_blank" rel="noopener noreferrer">
                                  <FileDown aria-hidden="true" strokeWidth={1.8} />
                                  PDF 原件
                                </a>
                              ) : null}
                              <a href={certificate.verify} target="_blank" rel="noopener noreferrer">
                                <BadgeCheck aria-hidden="true" strokeWidth={1.8} />
                                在线核验
                              </a>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
