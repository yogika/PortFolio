import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { TulipGarden } from "./components/TulipGarden";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  return (
    <div className="bg-[#F5F1E8] min-h-screen overflow-x-hidden">
      <Hero />
      <About
        projectsCount={portfolioData.projects.length}
        skillsCount={portfolioData.skills.length}
        experiencesCount={portfolioData.work.length}
      />
      <Experience />
      <TulipGarden />
      <Projects />
      <Footer />
    </div>
  );
}
