import React from "react";
import { Github, BookOpen } from "lucide-react";

const getHeaderGradient = (id) => {
  switch (id) {
    case 1:
      return "bg-gradient-to-br from-primary to-primary-light";
    case 2:
      return "bg-gradient-to-br from-secondary to-[#4caf50]";
    case 3:
      return "bg-gradient-to-br from-accent to-[#ffc107]";
    case 4:
      return "bg-gradient-to-br from-warning to-[#f44336]";
    default:
      return "bg-gradient-to-br from-primary to-primary-light";
  }
};

const projects = [
  {
    id: 1,
    title: "Swimmingly: Personalized Swim Training",
    problem: "Amateur and competitive swimmers lack access to personalized training plans and real-time performance analytics, leading to stagnant progress and high dropout rates.",
    myRole: "I led the product discovery and development of Swimmingly, an AI-powered mobile app. My role involved conducting user interviews, defining the product roadmap, and collaborating with a data science team to build a recommendation engine for training routines.",
    outcome: "Swimmingly successfully launched on iOS and Android, acquiring over 5,000 active users in the first six months. The personalized training plans led to a 25% increase in weekly workout completion and a 15% improvement in user-reported performance.",
    githubLink: "https://github.com/nathanewing/swimmingly",
    liveDemoLink: "https://www.swimminglyapp.com",
    tags: [
      "Mobile App",
      "AI/ML",
      "Personalization",
      "User Research",
      "EdTech",
    ],
    metrics: [
      { value: "5K+", label: "Active Users" },
      { value: "25%", label: "Workout Completion" },
    ],
  },
  {
    id: 2,
    title: "Feichungwurao Simulator: Conversational Chinese",
    problem: "Mandarin learners struggle to find engaging, low-pressure environments to practice conversational speaking and listening comprehension, a key barrier to fluency.",
    myRole: "Inspired by a popular Chinese dating show, I designed and coded the Feichungwurao Simulator. I defined the core features, including natural language processing (NLP) for simulated conversations and dynamic branching narratives based on user responses.",
    outcome: "This personal project serves as a dynamic, interactive tool that demonstrates my ability to blend language learning with technology. The prototype successfully simulates fluid conversations and has proven to be a highly effective, non-intimidating way to practice real-world language skills.",
    githubLink: "https://github.com/nathanewing/feichungwurao-simulator",
    liveDemoLink: "https://www.feichungwurao-simulator.com",
    tags: [
      "Conversational AI",
      "NLP",
      "EdTech",
      "Personal Project",
      "Mandarin",
    ],
    metrics: [
      { value: "50+", label: "Simulated Dialogues" },
      { value: "100%", label: "Personal Ownership" },
    ],
  },
  {
    id: 3,
    title: "Scrub-In: Clinical Workflow Management",
    problem: "Medical professionals and students face significant challenges in managing and documenting complex clinical procedures, leading to errors and inefficient training.",
    myRole: "As the lead product manager, I defined the product vision for 'Scrub-In,' a tool designed to streamline clinical workflow documentation. My responsibilities included conducting extensive stakeholder interviews with physicians and nurses, creating user stories, and managing the agile development process from ideation to launch.",
    outcome: "Scrub-In was successfully piloted in a partner hospital, improving documentation accuracy by 30% and reducing the time spent on administrative tasks by 15%. This project demonstrates my ability to navigate complex, high-stakes environments and deliver products that improve professional outcomes.",
    githubLink: "https://github.com/nathanewing/scrub-in",
    liveDemoLink: "https://www.scrub-in.com",
    tags: ["HealthTech", "Agile", "User-Centric Design", "Workflow", "B2B SaaS"],
    metrics: [
      { value: "30%", label: "Documentation Accuracy" },
      { value: "15%", label: "Time Savings" },
    ],
  },
  {
    id: 4,
    title: "Vibe Coding: Personal Projects & Prototyping",
    problem: "I wanted to maintain and showcase my technical fluency, ensuring I could communicate effectively with engineering teams and understand development constraints firsthand.",
    myRole: "I independently designed and coded a series of web projects, including this portfolio site. This involved hands-on UI/UX design, front-end development using modern frameworks, and rapid prototyping to validate new ideas and learn emerging technologies.",
    outcome: "These ongoing projects serve as a testament to my ability to translate abstract concepts into tangible products. My hands-on experience allows me to make informed product decisions, anticipate technical challenges, and foster stronger collaboration with technical teams.",
    githubLink: "https://github.com/nathanewing/vibe-coding-projects",
    liveDemoLink: "https://www.your-project-url.com",
    tags: ["React", "Tailwind CSS", "Prototyping", "Technical Fluency", "UI/UX"],
    metrics: [
      { value: "Faster", label: "Prototyping" },
      { value: "Improved", label: "Eng. Comms" },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects bg-surface py-20 md:py-28">
      <div className="container">
        <h2 className="section-title text-4xl font-semibold text-text-primary text-center mb-4">
          Product Case Studies
        </h2>
        <p className="section-subtitle text-lg text-text-secondary text-center mb-16 max-w-3xl mx-auto">
          Here is a deep dive into my most impactful products, outlining the
          problem, my specific role, and the results.
        </p>
        <div className="projects-grid grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col"
            >
              <div className={`project-header p-6 ${getHeaderGradient(project.id)} text-white`}>
                <h3 className="project-title text-xl font-semibold mb-2">
                  {project.title}
                </h3>
              </div>
              <div className="project-content p-6 flex flex-col flex-grow">
                <div className="project-narrative mb-6 text-sm text-text-secondary leading-[1.6]">
                  <h4 className="font-bold text-text-primary mb-1">The Challenge:</h4>
                  <p className="mb-4">{project.problem}</p>
                  <h4 className="font-bold text-text-primary mb-1">My Role:</h4>
                  <p className="mb-4">{project.myRole}</p>
                  <h4 className="font-bold text-text-primary mb-1">The Outcome:</h4>
                  <p>{project.outcome}</p>
                </div>
                {project.metrics && (
                  <div className="project-metrics grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="metric text-center bg-surface p-4 rounded-lg">
                        <span className="metric-value text-lg font-semibold text-success block">
                          {metric.value}
                        </span>
                        <span className="metric-label text-xs text-text-secondary">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="project-tags flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="tag text-xs px-3 py-1 rounded-full bg-blue-100 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-footer flex space-x-3 mt-auto">
                  {project.liveDemoLink !== "#" && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-light transition"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                  {project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-text-primary text-white py-2 px-4 rounded-lg hover:bg-black transition"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;