import Notes from "../../views/Notes";
import { getNotes } from "../../services/content";

export default async function Page() {
  const notes = await getNotes();

  return <Notes notes={notes} />;
}
