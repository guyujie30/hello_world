import { ArrowRight, BookOpen, Hammer, Sparkles } from "lucide-react";
import Link from "next/link";
import BrutalCard from "../components/BrutalCard";
import Sticker from "../components/Sticker";
import { fallbackNotes, fallbackProfile, fallbackProjects } from "../data/fallback";

type HomeProps = {
  profile: {
    name: string;
    title: string;
    intro: string;
  } | null;
  featuredProjects: Array<{
    title: string;
    description: string;
  }>;
  latestNotes: Array<{
    title: string;
    excerpt: string;
  }>;
};

export default function Home({
  profile = fallbackProfile,
  featuredProjects = fallbackProjects.filter((project) => project.featured),
  latestNotes = fallbackNotes.slice(0, 2),
}: Partial<HomeProps>) {
  const highlights = [
    {
      icon: <Hammer aria-hidden="true" />,
      title: featuredProjects[0]?.title ?? "最拿得出手的项目",
      text: featuredProjects[0]?.description ?? "从界面、交互到可维护的前端结构，关注真实可用的落地质量。",
      href: "/projects",
      action: "看项目",
    },
    {
      icon: <BookOpen aria-hidden="true" />,
      title: latestNotes[0]?.title ?? "最近一篇笔记",
      text: latestNotes[0]?.excerpt ?? "记录技术判断、设计观察和项目复盘，让思考可以被再次使用。",
      href: "/notes",
      action: "读笔记",
    },
    {
      icon: <Sparkles aria-hidden="true" />,
      title: "核心优势",
      text: "能把产品想法拆成清晰的信息结构，再用稳定的前端实现和有辨识度的视觉表达交付出来。",
      href: "/about",
      action: "了解我",
    },
  ];

  return (
    <>
      <section className="hero section-grid">
        <div className="hero-copy">
          <Sticker tone="red" tilt="left">
            个人网站 / 研究工作台
          </Sticker>
          <h1 className="hero-identity">
            <span className="hero-name">{profile?.name ?? "路飞"}</span>
            <span className="hero-role">{profile?.title ?? "研0 / LLM 决策方向 / Agent 开发探索者"}</span>
          </h1>
          <p>
            {profile?.intro ?? "这里展示我的项目、写作和工作方式。内容先用占位文案搭好结构，之后可以替换成真实经历。"}
          </p>
          <div className="hero-actions" aria-label="主要操作">
            <Link className="button button-primary" href="/projects">
              查看项目 <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/notes">
              阅读笔记 <BookOpen aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-poster" aria-label="路飞个人头像海报">
          <img className="avatar-poster" src="/avatar.png" alt="路飞头像" />
          <span className="poster-caption">BUG 的终身对手</span>
          <span className="poster-dot dot-one" />
          <span className="poster-dot dot-two" />
          <Sticker tone="black" tilt="right" className="poster-sticker">
            SUEP / 研0
          </Sticker>
        </div>
      </section>

      <section className="marquee" aria-label="网站关键词">
        <span>NEXT.JS</span>
        <span>PRISMA</span>
        <span>SUPABASE</span>
        <span>FRONTEND UX</span>
        <span>TECH NOTES</span>
      </section>

      <section className="section">
        <div className="section-heading">
          <Sticker tone="violet" tilt="right">
            精选入口
          </Sticker>
          <h2>先看这些</h2>
        </div>
        <div className="card-grid three">
          {highlights.map((item, index) => (
            <BrutalCard key={item.title} tone={index === 1 ? "yellow" : "white"} rotate={index === 2 ? "right" : "none"}>
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="note-link" href={item.href}>
                {item.action} <ArrowRight aria-hidden="true" />
              </Link>
            </BrutalCard>
          ))}
        </div>
      </section>
    </>
  );
}
