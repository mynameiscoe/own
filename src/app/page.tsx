import HomePage from "@/pages/HomePage";
import NavBar from "../components/NavBar";
import StarFallCanvas from "@/essentials/StarFallCanvas";
import AboutPage from "@/pages/AboutPage";
import SkillPage from "@/pages/SkillPage";
import ProjectPage from "@/pages/ProjectPage";


export default function Home() {
  return (
    <div className="relative">   
    <StarFallCanvas />   
      <NavBar />
      <main className="mx-5 sm:mx-10 md:mx-18">
        {/* <HomePage /> */}
        {/* <AboutPage /> */}
        {/* <SkillPage /> */}
        {/* <ProjectPage /> */}
      </main>
    </div>
  );
}

