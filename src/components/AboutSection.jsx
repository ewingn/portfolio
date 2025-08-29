import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">Getting to know me</h2>
        <p className="section-subtitle">Beyond the LinkedIn profile</p>

        {/* Grid layout */}
        <div className="about-grid">
          {/* Left: Narrative */}
          <div className="about-content">
            <p>
              I focus on how technology and people meet — whether it’s designing
              AI-powered customer experiences, exploring the future of surgical
              techniques, or contributing to mental health advocacy as a NAMI
              member and caregiver. My side projects, like the Mental Health
              Community Engagement Program, combine analytics and NLP with
              social impact.
            </p>

            <p>
              Before product management, I competed as a Division I baseball
              player. That experience taught me discipline, resilience, and how
              to work as part of a team — lessons that still shape the way I
              lead and collaborate today.
            </p>

            {/* Confucius Quote */}
            <div className="chinese-quote">
              <div className="chinese-text">我学习中文已经十多年了</div>
              <div className="translation">
                "I’ve been studying Chinese for over ten years" — Me
              </div>
            </div>

            <p>
              Language learning has shaped how I see the world — and continues
              to influence how I build products with empathy across cultures.
            </p>

            <p>
              Beyond tech, I follow history and international relations closely,
              especially US–China dynamics, and I find those perspectives
              sharpen my product strategy lens. And when I’m not deep in a
              dataset or roadmap, you’ll probably catch me watching Spurs, the
              Hawkeyes, or the Nuggets.
            </p>

            <p>
              I thrive in environments where teams collaborate openly, where
              data drives decisions but empathy guides design, and where we're
              building something that genuinely improves people's lives. Plus, I
              make a mean coffee and always have interesting historical facts to
              share during standups (kept quick, I promise).
            </p>
          </div>

          {/* Right: Personal Interests */}
          <div className="personal-interests">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-[20px]">
              What drives me
            </h3>

            <div className="interest-item">
              <span className="interest-icon">🏀</span>
              <div className="interest-content">
                <h4>Sports Analytics</h4>
                <p>
                  From March Madness to Premier League, I love how data is
                  revolutionizing sports strategy and fan experience.
                </p>
              </div>
            </div>

            <div className="interest-item">
              <span className="interest-icon">🏛️</span>
              <div className="interest-content">
                <h4>Tech History</h4>
                <p>
                  How did innovations spread along the Silk Road? What can the
                  Telegraph teach us about social networks?
                </p>
              </div>
            </div>

            <div className="interest-item">
              <span className="interest-icon">🧬</span>
              <div className="interest-content">
                <h4>Medical Innovation</h4>
                <p>
        Breakthroughs in CRISPR, personalized medicine, and digital health
        capture my attention — the convergence of tech and medicine inspires
        much of my work.
                </p>
              </div>
            </div>

            <div className="interest-item">
              <span className="interest-icon">🎓</span>
              <div className="interest-content">
                <h4>Language Learning</h4>
                <p>
        I’ve been studying Mandarin for over a decade — it’s humbling, rewarding,
        and constantly reminds me how language shapes thought and culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
