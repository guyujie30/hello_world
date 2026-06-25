import About from "../../views/About";
import { getProfile } from "../../services/content";

export default async function Page() {
  const profile = await getProfile();

  return <About profile={profile} />;
}
