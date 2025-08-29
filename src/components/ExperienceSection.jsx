import React from "react";

const experiences = [
  {
    id: 1,
    title: "Manager, Platform Authoring – Digital Experiences",
    company: "Comcast",
    period: "2023 – Present",
    description: "Lead digital transformation initiatives across voice, web, and app platforms with a focus on AI/ML and product strategy."
  },
  {
    id: 2,
    title: "Business Analyst III (PM) – AI Experiences",
    company: "Comcast",
    period: "2021 – 2023",
    description: "Product owner for AI/ML-powered recommendations, leading personalization and digital support experiences."
  },
  {
    id: 3,
    title: "Product Manager – Digital CX (AI/ML)",
    company: "DISH Network",
    period: "2019 – 2021",
    description: "Managed AI chat platform serving 18M+ customers, driving adoption and cross-channel alignment."
  },
  {
    id: 4,
    title: "Co-Founder – MHCEP",
    company: "Colorado School of Medicine + Partners",
    period: "2017 – 2019",
    description: "Built a mental health research incubator focused on coverage gaps and physician training."
  },
  {
    id: 5,
    title: "Compliance Analyst",
    company: "Federal Reserve Bank of Kansas City",
    period: "2021 – 2022",
    description: "Subject matter expert on key policy priorities in digital banking, AI, and digital asset development, blockchain innovation, and central bank digital currencies, financial analysis, and data analytics."
  },
  {
    id: 6,
    title: "Product Manager / Business Development Analyst",
    company: "C K International, LTD.",
    period: "2017 – 2020",
    description: "International trade and advisory firm offering customized solutions and strategy development for doing business in China, Japan, and the EU."
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience bg-background py-20 md:py-28">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title text-4xl font-semibold text-text-primary text-center mb-4">
          Professional Experience
        </h2>
        <p className="section-subtitle text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          A timeline of leadership in product management, AI/ML innovation, and
          digital transformation
        </p>

        {/* Timeline */}
        <div className="experience-timeline relative max-w-2xl mx-auto pl-8">
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border" />
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item relative mb-12 pl-8">
              <div className="timeline-marker absolute -left-0.5 top-2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md z-10">
                {exp.company[0]}
              </div>
              <div className="timeline-content bg-white border border-border rounded-2xl shadow-md p-6">
                <div className="experience-header mb-2">
                  <h3 className="job-title text-xl font-semibold text-text-primary">
                    {exp.title}
                  </h3>
                  <div className="company text-primary text-sm font-medium">
                    {exp.company}
                  </div>
                  <div className="duration text-sm text-text-secondary">
                    {exp.period}
                  </div>
                </div>
                <p className="job-description text-text-secondary text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;