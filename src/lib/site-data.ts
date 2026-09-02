const normalizedBasePath = (() => {
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!rawBasePath) {
    return "";
  }

  return `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`;
})();

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return normalizedBasePath ? `${normalizedBasePath}${path}` : path;
}

export const profile = {
  terminalUser: "shea",
  displayName: "Shea",
  identity:
    "一名专注于 AI Agent 与 LLM 工程的开发者，现阶段主要实践大模型部署、推理优化、Skills 编写与模型微调。",
  showWorks: true,
  focus:
    "目前正积极备战并参与秋招，求职方向以 LLM 与 Agent 为主，也非常关注软硬件结合及工业 AI 相关机会。",
  internship: {
    company: "Knownsec",
    companyZh: "知道创宇",
    role: "AI 研发实习生",
    status: "INTERNING",
    href: "https://www.knownsec.com/",
    logoSrc: withBasePath("/images/brands/knownsec.jpg"),
  },
  avatarSrc: withBasePath("/images/profile/avatar.jpg"),
  avatarAlt: "阳光下的橘猫侧脸",
  githubHref: "https://github.com/ascendho",
  huggingFaceHref: "https://huggingface.co/ascendho",
  email: "ascendho@outlook.com",
  emailHref: "mailto:ascendho@outlook.com",
  resumeHref: withBasePath("/resume/resume.pdf"),
  certificatesHref: withBasePath("/certificates/"),
} as const;

export type Certificate = Readonly<{
  title: string;
  issuer: string;
  issuedAt: string;
  pdf: string;
  preview: string;
  verify: string;
}>;

export type CertificateGroup = Readonly<{
  platform: string;
  items: ReadonlyArray<Certificate>;
}>;

export const certificateGroups = [
  {
    platform: "Coursera",
    items: [
      {
        title: "AI Python for Beginners",
        issuer: "DeepLearning.AI",
        issuedAt: "2026-01-09",
        pdf: withBasePath("/certificates/ai-python-for-beginners.pdf"),
        preview: withBasePath("/images/certificates/ai-python-for-beginners.jpg"),
        verify: "https://coursera.org/verify/Z5Y6FYAN8USM",
      },
      {
        title: "Build a Modern Computer from First Principles: From Nand to Tetris",
        issuer: "Hebrew University of Jerusalem",
        issuedAt: "2025-11-22",
        pdf: withBasePath("/certificates/nand2tetris-i.pdf"),
        preview: withBasePath("/images/certificates/nand2tetris-i.jpg"),
        verify: "https://coursera.org/verify/1K1GABQV8WKB",
      },
      {
        title: "Build a Modern Computer from First Principles: Nand to Tetris Part II",
        issuer: "Hebrew University of Jerusalem",
        issuedAt: "2025-11-29",
        pdf: withBasePath("/certificates/nand2tetris-ii.pdf"),
        preview: withBasePath("/images/certificates/nand2tetris-ii.jpg"),
        verify: "https://coursera.org/verify/WUAL2O52509M",
      },
      {
        title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
        issuer: "DeepLearning.AI · Stanford University",
        issuedAt: "2025-07-19",
        pdf: withBasePath("/certificates/reinforcement-learning.pdf"),
        preview: withBasePath("/images/certificates/reinforcement-learning.jpg"),
        verify: "https://coursera.org/verify/2C87GU27VV3F",
      },
      {
        title: "Retrieval Augmented Generation (RAG)",
        issuer: "DeepLearning.AI",
        issuedAt: "2026-05-29",
        pdf: withBasePath("/certificates/RAG.pdf"),
        preview: withBasePath("/images/certificates/rag.jpg"),
        verify: "https://coursera.org/verify/1GSG36IPBGYL",
      },
      {
        title: "Intro to Operating Systems 1: Virtualization",
        issuer: "Codio",
        issuedAt: "2026-03-15",
        pdf: withBasePath("/certificates/virtualization.pdf"),
        preview: withBasePath("/images/certificates/virtualization.jpg"),
        verify: "https://coursera.org/verify/5HWVHCGXB9EQ",
      },
    ],
  },
  {
    platform: "Harvard",
    items: [
      {
        title: "CS50's Introduction to Databases with SQL",
        issuer: "Harvard University",
        issuedAt: "2026",
        pdf: withBasePath("/certificates/cs50-sql.pdf"),
        preview: withBasePath("/images/certificates/cs50-sql.jpg"),
        verify: "https://cs50.harvard.edu/certificates/ea035c2f-87b0-4993-b6a8-d7d2ffa021cf",
      },
      {
        title: "CS50's Introduction to Computer Science",
        issuer: "Harvard University",
        issuedAt: "2025",
        pdf: withBasePath("/certificates/cs50x.pdf"),
        preview: withBasePath("/images/certificates/cs50x.jpg"),
        verify: "https://cs50.harvard.edu/certificates/db573909-1ee6-41be-87f8-9c0b8a9d4c8a",
      },
    ],
  },
  {
    platform: "Udemy",
    items: [
      {
        title: "The Grey Wolf Optimizer",
        issuer: "Seyedali Mirjalili · Udemy",
        issuedAt: "2024-10-16",
        pdf: withBasePath("/certificates/the-grey-wolf-optimizer.pdf"),
        preview: withBasePath("/images/certificates/the-grey-wolf-optimizer.jpg"),
        verify: "https://ude.my/UC-c0d986ca-97d3-45ec-b8ac-60a915774900",
      },
    ],
  },
] satisfies ReadonlyArray<CertificateGroup>;

export type ProjectDemo = Readonly<{
  href: string;
  videoSrc: string;
  posterSrc: string;
}>;

export type Project = Readonly<{
  slug: string;
  title: string;
  description: string;
  tags: ReadonlyArray<string>;
  repoHref: string;
  demo?: ProjectDemo;
}>;

export const projects = [
  {
    slug: "chat-anchor",
    title: "ChatAnchor（一款 VS Code 插件）",
    description:
      "本地 VS Code 扩展，在项目文件夹改名或移动后，仍可将 Codex、Cursor Agent CLI 与 OpenCode 会话重新连接到项目。",
    tags: ["TypeScript", "VS Code", "Codex", "Cursor", "OpenCode"],
    repoHref: "https://github.com/ascendho/ChatAnchor",
  },
  {
    slug: "e-snap",
    title: "E-Snap",
    description:
      "基于 LangGraph 与 RedisVL 的用户支持智能客服，引入语义缓存机制，提高吞吐量并显著降低延迟和大模型调用成本。",
    tags: ["LangGraph", "RedisVL", "Cache", "Agent"],
    repoHref: "https://github.com/ascendho/E-Snap",
    demo: {
      href: withBasePath("/projects/e-snap/demo/"),
      videoSrc: withBasePath("/videos/e-snap-demo.mp4"),
      posterSrc: withBasePath("/videos/posters/e-snap-demo-poster.jpg"),
    },
  },
  {
    slug: "wordle",
    title: "Wordle",
    description:
      "以 Qwen 2.5 7B Instruct 为指令微调模型，基于 SFT 与 GRPO 对 Wordle（一款猜词游戏）进行两阶段调优。",
    tags: ["Qwen", "SFT", "GRPO", "Lora", "Fine-tuning"],
    repoHref: "https://github.com/ascendho/Wordle",
  },
] satisfies ReadonlyArray<Project>;

export function getProjectPrimaryHref(project: Project) {
  return project.demo?.href ?? project.repoHref;
}

export function hasProjectDemo(project: Project): project is Project & { demo: ProjectDemo } {
  return Boolean(project.demo);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectDemoParams() {
  return projects.filter(hasProjectDemo).map((project) => ({ slug: project.slug }));
}
