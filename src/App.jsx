import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import portfolioData from "./portfolio-data.json";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header profile={portfolioData.profile} />
      <AboutSection profile={portfolioData.profile} />
      <SkillsSection skills={portfolioData.skills} />
      <ProjectsSection projects={portfolioData.projects} />
      <footer className="py-8 px-4 text-center">
        <p className="text-sm">
          © 2025 {portfolioData.profile.name}. All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
