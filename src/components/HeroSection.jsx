import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero bg-gradient-to-br from-surface to-background py-20 relative overflow-hidden"
    >
      <div className="container relative z-10">
        <p className="hero-greeting text-primary mb-2">你好! Hey there! 👋</p>
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold mb-4">
          I'm Nathan Ewing
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-6">
          Product Manager | AI & Customer Experience | MedTech & Language
          Enthusiast
        </p>

        <p className="text-gray-600 max-w-3xl mb-8 leading-relaxed">
          I build products at the intersection of AI, customer experience, and
          healthcare — integrating NLP, analytics, and emerging technologies to
          create solutions that scale. Outside of work, I’ve been learning
          Chinese for over a decade (我还在学习!), I’m a loyal Tottenham Hotspur,
          Iowa Hawkeyes, and Denver Nuggets fan, and I never pass up a good
          history or international relations debate.
        </p>

        {/* Call to actions */}
        <div className="hero-actions flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="btn btn-primary bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition"
          >
            🚀 See My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary bg-white text-primary border border-border px-6 py-3 rounded-lg font-semibold hover:bg-surface transition"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Fun Facts Grid */}
        <div className="hero-fun-facts grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-2xl shadow-lg border border-border">
          <div className="fun-fact text-center">
            <span className="fun-fact-icon text-2xl mb-2 block">⚽</span>
            <div className="fun-fact-text text-gray-700 font-medium">
              Die-hard sports fan
            </div>
          </div>
          <div className="fun-fact text-center">
            <span className="fun-fact-icon text-2xl mb-2 block">🇨🇳</span>
            <div className="fun-fact-text text-gray-700 font-medium">
              Learning Mandarin
            </div>
          </div>
          <div className="fun-fact text-center">
            <span className="fun-fact-icon text-2xl mb-2 block">📚</span>
            <div className="fun-fact-text text-gray-700 font-medium">
              History buff
            </div>
          </div>
          <div className="fun-fact text-center">
            <span className="fun-fact-icon text-2xl mb-2 block">⚕️</span>
            <div className="fun-fact-text text-gray-700 font-medium">
              MedTech enthusiast
            </div>
          </div>
          <div className="fun-fact text-center">
            <span className="fun-fact-icon text-2xl mb-2 block">🎯</span>
            <div className="fun-fact-text text-gray-700 font-medium">
              8+ years in PM
            </div>
          </div>
          <div className="fun-fact text-center">
            <span className="fun-fact-icon text-2xl mb-2 block">⚾</span>
            <div className="fun-fact-text text-gray-700 font-medium">
              Former D1 Baseball player
            </div>
          </div>
          <div className="fun-fact text-center">
            <span className="fun-fact-icon text-2xl mb-2 block">🧠</span>
            <div className="fun-fact-text text-gray-700 font-medium">
              Mental health advocate
            </div>
          </div>
          <div className="fun-fact text-center">
            <span className="fun-fact-icon text-2xl mb-2 block">🌍</span>
            <div className="fun-fact-text text-gray-700 font-medium">
              Global perspective
            </div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute top-20 right-10 text-[100px] font-extrabold text-primary/5 rotate-12 select-none">
        你好 Hello
      </div>
    </section>
  );
};

export default HeroSection;
