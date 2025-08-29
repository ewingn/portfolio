import React from "react";
import { Mic, Edit, Youtube } from "lucide-react"; // Import new icons

const ChineseSection = () => {
  return (
    <section id="chinese" className="bg-[var(--surface)] section">
      <div className="container">
        {/* Section Heading */}
        <h2 className="section-title">
          Chinese Learning & Content
        </h2>
        <p className="section-subtitle max-w-[700px]">
          Sharing my journey learning Mandarin, practicing speaking, and
          building connections through language and culture.
        </p>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-[48px]">
          {/* Speaking */}
          <div className="bg-white p-[32px] rounded-2xl border border-[var(--border)] shadow-md">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-[16px]">
              🎙️ Speaking Practice
            </h3>
            <p className="text-[var(--text-secondary)] mb-[16px] text-sm leading-[1.6]">
              I regularly record myself speaking Mandarin — discussing daily
              life, cultural differences, and professional topics. My goal is to
              reach HSK 6 fluency while keeping it fun and conversational.
            </p>
            <p className="text-sm text-[var(--primary)] font-medium italic mb-6">
              Example: 我每天都在学习中文！(I study Chinese every day!)
            </p>
            <a
              href="https://www.youtube.com/watch?v=v4SGkCretdk#action=share&ab_channel=e-paperNTU-ICLP" // **IMPORTANT: Add your link here**
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary-light transition"
            >
              <Mic className="w-5 h-5" />
              <span>Listen to a clip</span>
            </a>
          </div>
          {/* Writing */}
          <div className="bg-white p-[32px] rounded-2xl border border-[var(--border)] shadow-md">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-[16px]">
              ✍️ Writing & Notes
            </h3>
            <p className="text-[var(--text-secondary)] mb-[16px] text-sm leading-[1.6]">
              I practice writing short essays and reflections in Mandarin to
              improve grammar and vocabulary. These writings cover travel,
              technology, and cultural topics.
            </p>
            <p className="text-sm text-[var(--primary)] font-medium italic mb-6">
              Example: 中文写作帮助我更好地理解文化。(Writing in Chinese helps me
              understand the culture better.)
            </p>
            <a
              href="https://medium.com/your-chinese-blog" // **IMPORTANT: Add your link here**
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-text-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-black transition"
            >
              <Edit className="w-5 h-5" />
              <span>Read my latest notes</span>
            </a>
          </div>
        </div>
        {/* Optional: Updated footer note */}
        <div className="mt-[64px] text-center">
          <p className="text-[var(--text-secondary)] text-sm inline-flex items-center">
            <Youtube className="w-4 h-4 mr-2" />
            Find more content and videos on my YouTube channel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChineseSection;