import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Sticker from "../../../components/Sticker";
import { getNoteBySlug } from "../../../services/content";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: NotePageProps) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const content =
    "content" in note && typeof note.content === "string" && note.content.length > 0
      ? note.content
      : "这里是笔记详情占位。连接 Supabase 后，可以在 Note.content 中维护完整正文。";
  const paragraphs = content.split(/\n{2,}/).filter(Boolean);

  return (
    <article className="page-section note-detail">
      <Link className="button button-compact note-back" href="/notes">
        <ArrowLeft aria-hidden="true" />
        返回笔记
      </Link>

      <div className="page-title">
        <Sticker tone="yellow" tilt="left">
          {note.category}
        </Sticker>
        <h1>{note.title}</h1>
        <p>{note.excerpt}</p>
      </div>

      <div className="brutal-card card-white note-body">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
