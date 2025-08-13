import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import WritingSection from "./components/WritingSection";
import portfolioData from "./portfolio-data.json";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header profile={portfolioData.profile} />
      <AboutSection profile={portfolioData.profile} />
      <SkillsSection skills={portfolioData.skills} />
      <ProjectsSection projects={portfolioData.projects} />
      <ExperienceSection
        experience={portfolioData.experience}
        education={portfolioData.education}
        certifications={portfolioData.certifications}
      />
      <WritingSection
        writing={portfolioData.writing}
        talks={portfolioData.talks}
        openSource={portfolioData.open_source}
      />
      <ContactSection contact={portfolioData.contact} />
      <footer className="py-8 px-4 text-center">
        <p className="text-sm">
          © 2025 {portfolioData.profile.name}. All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
