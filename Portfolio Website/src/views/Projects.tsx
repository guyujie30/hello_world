import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import BrutalCard from "../components/BrutalCard";
import Sticker from "../components/Sticker";
import { fallbackProjects } from "../data/fallback";

type ProjectsProps = {
  projects: Array<{
    title: string;
    type: string;
    description: string;
    tags: string[];
    demoUrl?: string | null;
    repoUrl?: string | null;
  }>;
};

const tones = ["yellow", "white", "violet", "red"] as const;

export default function Projects({ projects = fallbackProjects }: Partial<ProjectsProps>) {
  return (
    <section className="page-section">
      <div className="page-title">
        <Sticker tone="red" tilt="right">
          PROJECTS
        </Sticker>
        <h1>项目</h1>
        <p>先把研究复现和工程练习整理成清晰的项目位，完成部署或开源后再替换为自己的预览与仓库。</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <BrutalCard key={project.title} tone={tones[index % tones.length]} rotate={index % 2 === 0 ? "none" : "left"}>
            <div className="project-preview" aria-label={`${project.title} 项目截图占位`}>
              <ImageIcon aria-hidden="true" />
              <span>{project.title}</span>
            </div>
            <div className="project-meta">{project.type}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="card-actions">
              {project.demoUrl && project.demoUrl !== "#" ? (
                <a className="button button-compact" href={project.demoUrl} aria-label={`${project.title} 在线预览链接`}>
                  预览 <ArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <span className="button button-compact button-disabled" aria-label={`${project.title} 暂未部署`}>
                  待部署 <ArrowUpRight aria-hidden="true" />
                </span>
              )}
              {project.repoUrl && project.repoUrl !== "#" ? (
                <a className="button button-compact button-ghost" href={project.repoUrl} aria-label={`${project.title} 参考仓库链接`}>
                  参考 <Github aria-hidden="true" />
                </a>
              ) : (
                <span className="button button-compact button-disabled" aria-label={`${project.title} 暂未开源`}>
                  待开源 <Github aria-hidden="true" />
                </span>
              )}
            </div>
          </BrutalCard>
        ))}
      </div>
    </section>
  );
}
