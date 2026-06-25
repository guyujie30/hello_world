export const fallbackProfile = {
  name: "路飞",
  title: "研0 / LLM 决策方向 / Agent 开发探索者",
  intro:
    "上海电力大学研0，研究方向是 LLM 决策与 Agent 系统。我正在从前端全栈、Prisma/Supabase、Agent 框架和论文复现开始，把研究兴趣慢慢做成能跑、能展示、能复盘的项目。",
  email: null,
  githubUrl: "https://github.com/guyujie30",
};

export const fallbackProjects = [
  {
    title: "Portfolio Website",
    type: "个人网站",
    description:
      "一个全栈式个人网站，用来展示项目、笔记和个人介绍。从 Neo-brutalism 视觉、Next.js 架构、Prisma 数据模型到 Supabase 数据连接，作为长期迭代的个人技术阵地。",
    tags: ["React", "Next.js", "Prisma"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "LangGraph 决策流复现计划",
    type: "研究复现",
    description:
      "围绕 LangGraph 的状态图、节点、边和 checkpoint 机制，复现一个可解释的 LLM 决策流程。目标是把 Agent 的“下一步怎么选”变成能观察、能调试的流程。",
    tags: ["LangGraph", "Agent", "Decision"],
    demoUrl: "#",
    repoUrl: "https://github.com/langchain-ai/langgraph",
    featured: true,
  },
  {
    title: "AutoGen 多智能体协作实验",
    type: "学习实验",
    description:
      "参考 AutoGen 的多 Agent 对话模式，实验 planner、executor、reviewer 之间如何分工，以及任务拆解、工具调用和结果校验如何闭环。",
    tags: ["AutoGen", "Multi-Agent", "Workflow"],
    demoUrl: "#",
    repoUrl: "https://github.com/microsoft/autogen",
    featured: true,
  },
  {
    title: "CrewAI 角色型 Agent 调研",
    type: "开源调研",
    description:
      "从 CrewAI 的 role / goal / task 设计入手，整理角色型 Agent 的适用边界：什么时候多角色有价值，什么时候只是增加复杂度。",
    tags: ["CrewAI", "Roles", "Research"],
    demoUrl: "#",
    repoUrl: "https://github.com/crewAIInc/crewAI",
    featured: false,
  },
];

export const fallbackNotes = [
  {
    title: "LLM Agent 到底在决策什么",
    slug: "what-does-an-llm-agent-decide",
    category: "项目复盘",
    date: new Date("2026-06-24"),
    excerpt: "把 Agent 决策拆成目标理解、状态判断、工具选择、结果校验四个环节，先建立研究问题的地图。",
    content:
      "我现在理解的 LLM Agent，不是“模型会调用工具”这么简单。真正值得研究的是：它在每一步到底根据什么做选择。\n\n一个 Agent 至少要经历四类判断：先理解目标，再判断当前状态，然后选择工具或行动，最后检查结果是否足够好。很多系统失败不是因为模型完全不会，而是因为状态没有保存清楚、工具选择没有约束、结果校验没有闭环。\n\n所以我后面会把“决策”当成主线来做复现：把输入、状态、动作、观察结果都记录下来，让每一步选择都能被回看、比较和改进。慢慢来，总会变强。",
  },
  {
    title: "LangGraph 为什么适合做决策流复现",
    slug: "why-langgraph-for-decision-flow",
    category: "技术复盘",
    date: new Date("2026-05-16"),
    excerpt: "状态图让 Agent 的每一步选择更容易被追踪，适合作为研0阶段理解 LLM 决策的第一个工程入口。",
    content:
      "LangGraph 对我最有吸引力的地方，是它把 Agent 流程拆成了节点、边和状态。节点负责一次推理或工具调用，边决定下一步怎么走，状态保存整个过程里的上下文。\n\n这和“LLM 决策”这个方向很契合：如果流程是黑盒，就只能看最后答案；如果流程是图，就能观察模型在哪个节点犹豫、在哪个条件下走错、哪些状态会影响后续选择。\n\n它未必是最终研究框架，但很适合作为第一个复现入口。先把流程跑起来，再谈评估、对照实验和改进策略。",
  },
  {
    title: "多智能体协作不是越多越好",
    slug: "multi-agent-is-not-always-better",
    category: "学习笔记",
    date: new Date("2026-04-20"),
    excerpt: "Planner、Executor、Reviewer 的拆分能降低复杂度，也可能制造沟通成本。关键是任务边界是否真的清楚。",
    content:
      "多 Agent 系统看起来很强，但我现在会先问一个问题：拆角色真的降低了问题复杂度吗？\n\nPlanner、Executor、Reviewer 这种分工在任务边界清楚时很有价值。Planner 负责计划，Executor 负责执行，Reviewer 负责检查，系统更容易形成闭环。但如果任务本身含糊，角色越多，沟通成本越高，错误也可能在角色之间传递。\n\n所以我更想关注“什么时候需要多 Agent”。不是为了堆概念，而是看角色拆分是否让决策更清晰、过程更可控、结果更容易验证。",
  },
  {
    title: "从个人网站开始搭研究工作台",
    slug: "portfolio-as-research-workbench",
    category: "踩坑记录",
    date: new Date("2026-03-28"),
    excerpt: "先把展示、笔记、项目和后台 CRUD 搭起来，再把研究过程一点点沉淀成可检索、可复盘的材料。",
    content:
      "做个人网站不只是为了好看，也是在搭一个长期可用的研究工作台。\n\n项目页可以记录复现路线，笔记页可以沉淀判断，关于页可以展示我的学习路径。后面接上 Supabase 和 Prisma 之后，内容就不再只是写死在代码里，而是可以持续维护、搜索和扩展。\n\n我希望这个网站最后能变成一个小型知识库：记录我从前端全栈走向 LLM 决策和 Agent 开发的过程。现在还很早，但方向是清楚的。",
  },
];
