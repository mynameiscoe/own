import HomePage from "@/pages/HomePage";
import NavBar from "../components/NavBar";
import AboutPage from "@/pages/AboutPage";
import SkillPage from "@/pages/SkillPage";
import ProjectPage from "@/pages/ProjectPage";
import ContactPage from "@/pages/ContactPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <main className="px-4 sm:px-6 xl:px-2 mx-auto max-w-7xl">
        <div id="home">
          <HomePage />
        </div>
        <div id="about">
          <AboutPage />
        </div>
        <div id="skill">
          <SkillPage />
        </div>
        <div id="project">
          <ProjectPage />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
        <Footer />
      </main>
    </div>
  );
}
