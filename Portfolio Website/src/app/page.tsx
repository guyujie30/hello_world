import Home from "../views/Home";
import { getFeaturedProjects, getNotes, getProfile } from "../services/content";

export default async function Page() {
  const [profile, featuredProjects, notes] = await Promise.all([
    getProfile(),
    getFeaturedProjects(),
    getNotes(),
  ]);

  return <Home profile={profile} featuredProjects={featuredProjects} latestNotes={notes.slice(0, 2)} />;
}
