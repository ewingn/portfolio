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
    title: "Swimmingly: AI-Powered Language Learning Platform",
    problem:
      "Learners struggle to find engaging, level-appropriate content and affordable speaking practice. Traditional apps are rigid, while live tutoring is costly and unreliable. People need a flexible, fun way to practice speaking, listening, and review—powered by content they actually enjoy.",
    myRole:
      "I founded, designed, and built Swimmingly as a React + Tailwind + Firebase web app. I led user research and product strategy, then shipped the core features: Swimmy (AI chat) for speaking practice, instant flashcard & mini-quiz generation from real videos/podcasts/articles, and immersive role-play arcs like “Move to Taipei.” I implemented responsive UI, auth, and data models for multi-language support.",
    outcome:
      "Early testers report that Swimmingly makes practice feel like entertainment: real-world content + on-demand AI practice = more consistency. Role-play arcs increase time-on-task, and auto-generated flashcards slash study prep time. The platform now supports multiple languages and continues to expand with new arcs and content pipelines.",
    githubLink: "https://github.com/ewingn/swimmingly-mvp",
    liveDemoLink: "https://swimmingly-mvp.vercel.app/",
    tags: ["AI/ML", "Generateive AI", "EdTech", "React", "Firebase", "Personalization"],
    metrics: [
      { value: "500+", label: "Flashcards Generated" },
      { value: "90%+", label: "Users More Motivated" },
      { value: "4+", label: "Languages Supported" },
    ],
  },
  {
    id: 2,
    title: "Feichungwurao Simulator: Conversational Chinese",
    problem:
      "Mandarin learners struggle to find engaging, low-pressure environments to practice conversational speaking and listening comprehension, a key barrier to fluency.",
    myRole:
      "Inspired by a popular Chinese dating show, I designed and coded the Feichungwurao Simulator. I defined the core features, including natural language processing (NLP) for simulated conversations and dynamic branching narratives based on user responses.",
    outcome:
      "This personal project serves as a dynamic, interactive tool that demonstrates my ability to blend language learning with technology. The prototype successfully simulates fluid conversations and has proven to be a highly effective, non-intimidating way to practice real-world language skills.",
    githubLink: "https://github.com/nathanewing/feichungwurao-simulator",
    liveDemoLink: "https://feichungwurao-simulator.vercel.app/",
    tags: ["Conversational AI", "NLP", "EdTech", "Personal Project", "Mandarin"],
    metrics: [
      { value: "50+", label: "Simulated Dialogues" },
      { value: "100%", label: "Personal Ownership" },
    ],
  },
{
  id: 3,
  title: "ScrubIn: Gamified Surgical Training Platform",
  tagline: "Master Surgical Skills with Precision",
  problem:
    "Medical professionals and students face significant challenges in managing and documenting complex clinical procedures, leading to errors and inefficient training.",
  description:
    "ScrubIn is a clinically designed training platform delivering bite-sized, gamified, and high-fidelity learning — made for future surgeons and current experts alike. It’s built to make surgical education engaging, efficient, and accessible, with real surgeon input guiding course design.",
  myRole:
    "As the lead product manager, I defined the product vision for 'ScrubIn,' a gamified tool for surgical training. My responsibilities included conducting extensive stakeholder interviews with physicians and nurses, creating user stories, and managing the agile development process from ideation to launch.",
  outcome:
    "ScrubIn is currently in its MVP stage — a functional shell that demonstrates the core vision for gamified surgical education. Future iterations will incorporate user feedback, pilot testing, and measurable training outcomes.",
  githubLink: "https://github.com/ewingn/scrubin.io",
  liveDemoLink: "https://scrubin-io-j34z.vercel.app/",
  tags: ["HealthTech", "Agile", "User-Centric Design", "Gamified Learning", "REACT"],
  metrics: [
    { value: "6", label: "Mock Lessons" },
    { value: "90%", label: "users Reporting Improved Confidence" },
  ],
},
{
  id: 4,
  title: "Mental Health Community Engagement Program — Co-Founder & Data Scientist",
  problem:
    "Colorado communities face persistent gaps in mental-health access and education. Policymakers receive large volumes of public testimony, but extracting structured insights from qualitative narratives is difficult—slowing progress on patient-centered improvements.",
  myRole:
    "Co-founded and co-led a remote initiative (Denver Metro) with medical students, clinicians, community members, and a policy lobbyist. Built Python-based NLP pipelines to analyze public testimonies and surface patient pain points. Designed the research plan, trained and onboarded new contributors, and established durable processes across analytics, outreach, and interview teams.",
  outcome:
    "Our analysis highlighted actionable barriers in access and education and informed advocacy and curriculum ideas. Findings were presented at the American Psychiatric Association Annual Meeting (May 2023). We expanded the team, formalized workflows across three functions, and created a repeatable approach to translate community voices into policy and education insights.",
  githubLink: "#",        // no public repo—leave as "#" to hide button
  liveDemoLink: "https://www.annfammed.org/content/21/Supplement_1/4257",      // no live demo—leave as "#" to hide button
  tags: ["Health Equity", "NLP", "Python", "Community Research", "Mental Health"],
  metrics: [
    { value: "8", label: "Members Onboarded" },
    { value: "APA 2023", label: "Conference Presentation" },
    { value: "3", label: "Teams Trained" }
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
              <div
                className={`project-header p-6 ${getHeaderGradient(
                  project.id
                )} text-white`}
              >
                <h3 className="project-title text-xl font-semibold mb-2">
                  {project.title}
                </h3>
              </div>
              <div className="project-content p-6 flex flex-col flex-grow">
                <div className="project-narrative mb-6 text-sm text-text-secondary leading-[1.6]">
                  <h4 className="font-bold text-text-primary mb-1">
                    The Challenge:
                  </h4>
                  <p className="mb-4">{project.problem}</p>
                  <h4 className="font-bold text-text-primary mb-1">My Role:</h4>
                  <p className="mb-4">{project.myRole}</p>
                  <h4 className="font-bold text-text-primary mb-1">
                    The Outcome:
                  </h4>
                  <p>{project.outcome}</p>
                </div>
                {project.metrics && (
                  <div className="project-metrics grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="metric text-center bg-surface p-4 rounded-lg"
                      >
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
