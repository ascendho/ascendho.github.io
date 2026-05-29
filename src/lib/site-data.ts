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

const resumeHref = withBasePath("/resume/resume.pdf");
const archivedResumeHref = withBasePath("/resume/archive/resume-legacy.pdf");

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

export const navigation = [
  { label: "项目", href: withBasePath("/#projects"), external: false },
  { label: "证书", href: withBasePath("/#certificates"), external: false },
  { label: "联系", href: withBasePath("/#contact"), external: false },
  { label: "简历", href: resumeHref, external: true },
] as const;

export const hero = {
  name: "Ascend Ho",
  handle: "@ascendho",
  status: "正在寻找实习机会",
  title: "成长中的 Agent 开发者",
  summary:
    "当前专注于大模型应用和 Agent 开发相关的探索，热衷以构建实际项目作为驱动力的学习方式。",
  resumeHref,
} as const;

export const projects = [
  {
    slug: "visiondoc",
    title: "VisionDoc",
    description:
      "基于 ColPali + MUVERA + Qdrant 的多模态视觉文档问答系统，支持 pdf、图片及 pptx 文档。",
    tags: ["ColPali", "MUVERA", "Qdrant", "Multimodal", "RAG"],
    repoHref: "https://github.com/ascendho/VisionDoc",
    demo: {
      href: withBasePath("/projects/visiondoc/demo/"),
      videoSrc: withBasePath("/videos/visiondoc-demo.mp4"),
      posterSrc: withBasePath("/videos/posters/visiondoc-demo-poster.jpg"),
    },
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

export function hasProjectDemo(project: Project): project is Project & { demo: ProjectDemo } {
  return Boolean(project.demo);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectDemoParams() {
  return projects.filter(hasProjectDemo).map((project) => ({ slug: project.slug }));
}

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
] as const;

export const contact = {
  title: "准备进入下一次对话",
  description:
    "若你希望更深入地了解我的教育背景、发展方向、项目经历及科研成果，可查阅当前完整简历；如有兴趣，欢迎直接通过邮件联系。",
  email: "ascendho@outlook.com",
  github: "https://github.com/ascendho",
  resumeHref,
  archivedResume: {
    href: archivedResumeHref,
    label: "过往方向简历",
  },
} as const;
