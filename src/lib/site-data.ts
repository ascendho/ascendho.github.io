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
    "目前正参加秋招，求职方向以 LLM 与 Agent 为主，也非常关注软硬件结合及工业 AI 相关机会。",
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
  pdf: string;
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
        pdf: withBasePath("/certificates/ai-python-for-beginners.pdf"),
        verify: "https://coursera.org/verify/Z5Y6FYAN8USM",
      },
      {
        title: "nand2tetris I",
        pdf: withBasePath("/certificates/nand2tetris-i.pdf"),
        verify: "https://coursera.org/verify/1K1GABQV8WKB",
      },
      {
        title: "nand2tetris II",
        pdf: withBasePath("/certificates/nand2tetris-ii.pdf"),
        verify: "https://coursera.org/verify/WUAL2O52509M",
      },
      {
        title: "Reinforcement Learning",
        pdf: withBasePath("/certificates/reinforcement-learning.pdf"),
        verify: "https://coursera.org/verify/2C87GU27VV3F",
      },
      {
        title: "RAG",
        pdf: withBasePath("/certificates/RAG.pdf"),
        verify: "https://coursera.org/verify/1GSG36IPBGYL",
      },
      {
        title: "Virtualization",
        pdf: withBasePath("/certificates/virtualization.pdf"),
        verify: "https://coursera.org/verify/5HWVHCGXB9EQ",
      },
    ],
  },
  {
    platform: "Harvard",
    items: [
      {
        title: "CS50 SQL",
        pdf: withBasePath("/certificates/cs50-sql.pdf"),
        verify: "https://cs50.harvard.edu/certificates/ea035c2f-87b0-4993-b6a8-d7d2ffa021cf",
      },
      {
        title: "CS50x",
        pdf: withBasePath("/certificates/cs50x.pdf"),
        verify: "https://cs50.harvard.edu/certificates/db573909-1ee6-41be-87f8-9c0b8a9d4c8a",
      },
    ],
  },
  {
    platform: "Udemy",
    items: [
      {
        title: "The Grey Wolf Optimizer",
        pdf: withBasePath("/certificates/the-grey-wolf-optimizer.pdf"),
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
    title: "ChatAnchor",
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
