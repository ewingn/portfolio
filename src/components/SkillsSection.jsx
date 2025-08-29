import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills bg-[var(--background)] section">
      <div className="container">
        <h2 className="section-title">Where I Make an Impact</h2>
        <p className="section-subtitle">Core product management skills powered by hands-on experience and a passion for technology</p>
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">

          {/* Skill Card 1: Product Strategy */}
          <div className="skill-card relative overflow-hidden bg-white p-[32px] rounded-xl border border-[var(--border)] text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--primary)]"></span>
            <span className="skill-icon text-[48px] block mb-[20px]">🗺️</span>
            <h3 className="skill-title text-[20px] font-semibold mb-[12px] text-[var(--text-primary)]">Product Strategy & Roadmapping</h3>
            <p className="skill-description text-[var(--text-secondary)] leading-[1.6] mb-[16px]">
              Defining product vision, conducting market research, and building roadmaps that align with business goals and user needs.
            </p>
            <p className="skill-connection text-[14px] text-[var(--primary)] font-medium italic">
              "Preserved ~$40M in revenue by optimizing GTM strategy"
            </p>
          </div>

          {/* Skill Card 2: AI/ML Product Management */}
          <div className="skill-card relative overflow-hidden bg-white p-[32px] rounded-xl border border-[var(--border)] text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--secondary)]"></span>
            <span className="skill-icon text-[48px] block mb-[20px]">🧠</span>
            <h3 className="skill-title text-[20px] font-semibold mb-[12px] text-[var(--text-primary)]">AI/ML Product Management</h3>
            <p className="skill-description text-[var(--text-secondary)] leading-[1.6] mb-[16px]">
              Translating complex AI/ML capabilities into user-centric features and managing the product lifecycle for AI-powered solutions.
            </p>
            <p className="skill-connection text-[14px] text-[var(--primary)] font-medium italic">
              "Increased CTR by 3% by implementing new ML ranking logic"
            </p>
          </div>

          {/* Skill Card 3: Data & Analytics */}
          <div className="skill-card relative overflow-hidden bg-white p-[32px] rounded-xl border border-[var(--border)] text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--accent)]"></span>
            <span className="skill-icon text-[48px] block mb-[20px]">📈</span>
            <h3 className="skill-title text-[20px] font-semibold mb-[12px] text-[var(--text-primary)]">Data & Analytics</h3>
            <p className="skill-description text-[var(--text-secondary)] leading-[1.6] mb-[16px]">
              Using data to inform product decisions, analyze user behavior, and measure impact through tools like BigQuery and Looker.
            </p>
            <p className="skill-connection text-[14px] text-[var(--primary)] font-medium italic">
              "Proactively monitored BigQuery to prevent customer-impacting issues"
            </p>
          </div>
          
          {/* Skill Card 4: User-Centric Product Management */}
          <div className="skill-card relative overflow-hidden bg-white p-[32px] rounded-xl border border-[var(--border)] text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--warning)]"></span>
            <span className="skill-icon text-[48px] block mb-[20px]">🎯</span>
            <h3 className="skill-title text-[20px] font-semibold mb-[12px] text-[var(--text-primary)]">User-Centric Product Management</h3>
            <p className="skill-description text-[var(--text-secondary)] leading-[1.6] mb-[16px]">
              I balance data-driven decisions with a deep focus on user empathy to build seamless and intuitive digital experiences.
            </p>
            <p className="skill-connection text-[14px] text-[var(--primary)] font-medium italic">
              "Achieved a historically high 91% CSAT rating for a new SMS platform"
            </p>
          </div>

          {/* Skill Card 5: Communication & Presentation */}
          <div className="skill-card relative overflow-hidden bg-white p-[32px] rounded-xl border border-[var(--border)] text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--primary)]"></span>
            <span className="skill-icon text-[48px] block mb-[20px]">🗣️</span>
            <h3 className="skill-title text-[20px] font-semibold mb-[12px] text-[var(--text-primary)]">Communication & Presentation</h3>
            <p className="skill-description text-[var(--text-secondary)] leading-[1.6] mb-[16px]">
              I spend 90% of my time communicating, using clear, confident presentations to align stakeholders and drive project buy-in. I believe that strong communication is the core of successful project management.
            </p>
            <p className="skill-connection text-[14px] text-[var(--primary)] font-medium italic">
              "Partnered with ASAPP to scale conversational AI, boosting usage by 33%"
            </p>
          </div>
          
          {/* Skill Card 6: Technical Fluency */}
          <div className="skill-card relative overflow-hidden bg-white p-[32px] rounded-xl border border-[var(--border)] text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--secondary)]"></span>
            <span className="skill-icon text-[48px] block mb-[20px]">💻</span>
            <h3 className="skill-title text-[20px] font-semibold mb-[12px] text-[var(--text-primary)]">Technical Fluency</h3>
            <p className="skill-description text-[var(--text-secondary)] leading-[1.6] mb-[16px]">
              Hands-on coding experience to build prototypes, communicate with engineers, and deeply understand technical constraints and trade-offs.
            </p>
            <p className="skill-connection text-[14px] text-[var(--primary)] font-medium italic">
              "My personal coding projects demonstrate my ability to translate concepts into products"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;