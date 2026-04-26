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

export const navigation = [
  { label: "项目", href: "#projects", external: false },
  { label: "证书", href: "#certificates", external: false },
  { label: "联系", href: "#contact", external: false },
  { label: "简历", href: resumeHref, external: true },
] as const;

export const hero = {
  name: "Ascend Ho",
  handle: "@ascendho",
  status: "寻找实习机会",
  title: "正在成长中的 C++ 与 LLM 应用开发者。",
  summary:
    "我专注于 C++、系统基础与 AI 应用工程，并持续把学习沉淀为项目、证书和更完整的作品集。",
  primaryCta: { label: "查看项目", href: "#projects" },
  secondaryCta: { label: "联系我", href: "#contact" },
  resumeHref,
} as const;

export const projects = [
  {
    title: "主打项目",
    status: "即将补充演示",
    description:
      "这里预留给当前最能代表我方向的一项作品，用来展示问题定义、实现过程和最终交付。",
    tags: ["C++", "LLM", "演示"],
    meta: ["后续会用真实项目内容替换这里的占位描述。", "源码链接和演示入口也会补到这里。"],
  },
  {
    title: "系统方向项目",
    status: "进行中",
    description:
      "这里用于展示更偏底层或系统方向的工作，重点会放在实现取舍和技术深度上。",
    tags: ["系统", "架构", "C++"],
    meta: ["这是一个更强调工程实现的项目位。", "后续会补充说明文档和技术笔记。"],
  },
  {
    title: "实验项目位",
    status: "预留中",
    description:
      "这里用来承接持续中的小实验、原型或快速迭代，让整个作品集保持更新。",
    tags: ["迭代", "原型", "演示"],
    meta: ["适合承载周期较短、体量较小的想法。", "如果内容成熟，也可以升级成完整案例。"],
  },
] as const;

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
  title: "准备进入下一次对话。",
  description:
    "如果你想更快了解我的方向、项目和可验证的学习记录，可以先看简历，或者直接给我发邮件。",
  email: "ascendho@outlook.com",
  github: "https://github.com/ascendho",
  resumeHref,
} as const;
