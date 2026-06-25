import { BadgeCheck, Code2, Layers3, PenTool, Rocket } from "lucide-react";
import BrutalCard from "../components/BrutalCard";
import Sticker from "../components/Sticker";
import { fallbackProfile } from "../data/fallback";

const skillGroups = [
  {
    title: "前端工程",
    items: ["React", "Next.js", "TypeScript", "Server Actions"],
  },
  {
    title: "Agent 方向",
    items: ["LLM 决策", "LangGraph", "AutoGen", "Multi-Agent"],
  },
  {
    title: "数据与内容",
    items: ["Prisma", "Supabase", "PostgreSQL", "内容建模"],
  },
];

const timeline = [
  { year: "2026", title: "上海电力大学研0", text: "进入研究生阶段，方向聚焦 LLM 决策与 Agent 系统，开始把研究过程沉淀到个人网站。" },
  { year: "2025", title: "本科毕业设计：OCR 信息收集平台", text: "用 Vue、Spring Boot 和 EasyOCR 做证书信息识别与管理，完成从图像识别到系统集成的闭环。" },
  { year: "2024", title: "通过软件设计师中级", text: "补齐软件工程、系统设计和基础理论能力，也获得国家励志奖学金和校级三好学生。" },
  { year: "2023", title: "后端开发实习", text: "参与商城小程序后端系统，接触 Spring Cloud 微服务、Elasticsearch 搜索和 Minio 图片存储。" },
  { year: "2021", title: "湖南农业大学计算机科学与技术", text: "本科阶段系统学习计算机网络、组成原理、大数据开发等课程，建立工程基础。" },
];

type AboutProps = {
  profile: {
    name: string;
    title: string;
    intro: string;
    email?: string | null;
    githubUrl?: string | null;
  } | null;
};

export default function About({ profile = fallbackProfile }: Partial<AboutProps>) {
  return (
    <section className="page-section">
      <div className="page-title">
        <Sticker tone="yellow" tilt="left">
          ABOUT
        </Sticker>
        <h1>关于我</h1>
        <p>{profile?.intro ?? "这里可以放你的真实简介、工作经历和联系方式。当前先保留结构化占位内容。"}</p>
      </div>

      <div className="about-layout">
        <BrutalCard tone="red" className="about-lead">
          <h2>{profile?.title ?? "我关注可用、清楚、有性格的产品体验。"}</h2>
          <p>
            23 岁，男，湖南衡阳人，现在是上海电力大学研0。研究方向是 LLM 决策，短期目标是把 Agent 框架、论文复现和全栈项目串起来，做出能展示、能复盘、能继续扩展的东西。
          </p>
          <div className="profile-facts" aria-label="个人信息">
            <span>湖南衡阳</span>
            <span>上海电力大学</span>
            <span>软件设计师中级</span>
            <span>CET-6</span>
          </div>
        </BrutalCard>

        <div className="stacked-cards">
          <BrutalCard tone="white">
            <div className="card-title-row">
              <Code2 aria-hidden="true" />
              <h3>技术栈</h3>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-group">
                  <strong>{group.title}</strong>
                  <div className="tag-list">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BrutalCard>

          <BrutalCard tone="violet" rotate="right">
            <div className="card-title-row">
              <PenTool aria-hidden="true" />
              <h3>工作方式</h3>
            </div>
            <p>先厘清目标和约束，再设计信息层级；先让功能可用，再打磨体验；先把判断写下来，再让下一次工作更快。</p>
          </BrutalCard>

          <BrutalCard tone="yellow">
            <div className="card-title-row">
              <Layers3 aria-hidden="true" />
              <h3>关注方向</h3>
            </div>
            <p>LLM 决策、多智能体协作、Agent 工具调用、个人知识库、全栈内容系统。爱好是探索新技术，也包括和 bug 长期对线。</p>
          </BrutalCard>
        </div>
      </div>

      <div className="timeline">
        {timeline.map((item) => (
          <BrutalCard key={item.title} tone="white" className="timeline-item">
            <span className="timeline-year">{item.year}</span>
            <div>
              <div className="card-title-row">
                {item.year === "现在" ? <Rocket aria-hidden="true" /> : <BadgeCheck aria-hidden="true" />}
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          </BrutalCard>
        ))}
      </div>
    </section>
  );
}
