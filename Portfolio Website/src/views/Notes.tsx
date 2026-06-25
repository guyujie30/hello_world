import { ArrowRight, CalendarDays } from "lucide-react";
import BrutalCard from "../components/BrutalCard";
import Sticker from "../components/Sticker";
import { fallbackNotes } from "../data/fallback";

type NotesProps = {
  notes: Array<{
    title: string;
    slug: string;
    category: string;
    date: Date;
    excerpt: string;
  }>;
};

export default function Notes({ notes = fallbackNotes }: Partial<NotesProps>) {
  const noteTypes = ["技术复盘", "踩坑记录", "学习笔记", "项目复盘"];

  return (
    <section className="page-section notes-page">
      <div className="page-title">
        <Sticker tone="violet" tilt="left">
          NOTES
        </Sticker>
        <h1>笔记</h1>
        <p>这里不是资料搬运区，而是记录判断的地方：为什么这么做、踩过什么坑、下次如何更快。</p>
        <div className="tag-list">
          {noteTypes.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </div>
      </div>

      <div className="notes-list">
        {notes.map((note, index) => (
          <BrutalCard key={note.title} tone={index === 0 ? "yellow" : "white"}>
            <div className="note-topline">
              <span>{note.category}</span>
              <span>
                <CalendarDays aria-hidden="true" />
                {note.date.toISOString().slice(0, 10)}
              </span>
            </div>
            <h2>{note.title}</h2>
            <p>{note.excerpt}</p>
            <a className="note-link" href={`/notes/${note.slug}`} aria-label={`阅读 ${note.title}`}>
              阅读占位 <ArrowRight aria-hidden="true" />
            </a>
          </BrutalCard>
        ))}
      </div>
    </section>
  );
}
