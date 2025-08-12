import { Button } from "@radix-ui/themes";
import { useEffect } from "react";
import { FaGithub, FaBlogger, FaLinkedin, FaAt } from "react-icons/fa6";

const Header = ({ profile }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in gradient-text">
          {profile.name}
        </h1>
        <h2
          className="text-2xl text-gray-600 mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.title}
        </h2>
        <p
          className="text-lg mb-8 text-gray-500 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {profile.one_liner}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button asChild variant="outline">
            <a
              href={profile.links.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={profile.links.blog_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBlogger className="w-4 h-4 mr-2" />
              Blog
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={profile.links.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild>
            <a
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAt className="w-4 h-4 mr-2" />
              Contact
            </a>
          </Button>
        </div>

        <div className="inline-block px-6 py-3 bg-blue-100 text-blue-700 rounded-full mb-8 border border-blue-200 animate-pulse-slow">
          <span className="font-semibold">{profile.availability}</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {[
            "about",
            "skills",
            "projects",
            "experience",
            "writing",
            "contact",
          ].map((section, index) => (
            <button
              key={section}
              className="relative group animate-fade-up text-gray-600 transition-all duration-300 font-medium capitalize"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              onClick={() => scrollToSection(section)}
            >
              {section}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
