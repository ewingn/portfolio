import React from "react";
import { Mail, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact bg-text-primary text-white py-20 md:py-28">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title text-4xl font-semibold text-white text-center mb-4">
          Let’s Connect
        </h2>
        <p className="section-subtitle text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          I’m always interested in discussing new opportunities, product challenges, and connecting with fellow leaders.
        </p>

        {/* Grid */}
        <div className="contact-grid grid md:grid-cols-2 gap-12 items-start">
          {/* Left side: Info + methods */}
          <div>
            <p className="contact-info text-lg leading-relaxed mb-8 opacity-90">
              Whether it’s about product management, AI/ML, digital transformation, or just swapping ideas about sports
              and languages — I’d love to hear from you.
            </p>

            <div className="contact-methods flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:nathan.w.ewing@email.com"
                // Adjusted padding and border to match original
                className="contact-method flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition hover:translate-x-1"
              >
                <Mail className="w-5 h-5" />
                <span className="text-white">nathan.ewing@email.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/nathanewing"
                target="_blank"
                rel="noopener noreferrer"
                // Adjusted padding and border to match original
                className="contact-method flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition hover:translate-x-1"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-white">linkedin.com/in/nathanewing</span>
              </a>

              {/* Phone (optional) */}
              <a
                href="tel:+1234567890"
                // Adjusted padding and border to match original
                className="contact-method flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition hover:translate-x-1"
              >
                <Phone className="w-5 h-5" />
                <span className="text-white"></span>
              </a>
            </div>

            {/* Languages Note */}
            <div className="languages-note bg-white/5 p-6 rounded-xl border border-white/10 mt-8">
              <h4 className="font-semibold text-white mb-2">🌍 Languages</h4>
              <p className="text-sm text-gray-300">
                Currently learning Mandarin Chinese (HSK 5) and Vietnamese 
                Deeply interested in the intersection of language acquisition and tech development
                 as it relates to building global products.
              </p>
            </div>
          </div>

          {/* Right side: Placeholder contact box */}
          <div className="contact-form bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-300 mb-6">
              For now, reach me by email or LinkedIn. A full contact form will be added soon!
            </p>
            <a
              href="mailto:nathan.w.ewing@email.com"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary-light transition"
            >
              📧 Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
