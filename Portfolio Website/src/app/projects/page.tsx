import Projects from "../../views/Projects";
import { getProjects } from "../../services/content";

export default async function Page() {
  const projects = await getProjects();

  return <Projects projects={projects} />;
}
