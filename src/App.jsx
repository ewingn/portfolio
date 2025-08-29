import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ChineseSection from "./components/ChineseSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Adjusted rootMargin to be slightly less aggressive
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 } 
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      {/* Navbar */}
      <Navbar toggleMobileMenu={toggleMobileMenu} activeSection={activeSection} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      )}

      {/* Main Content */}
      {/* Removed the extra <section> wrappers around components */}
      <main className="flex-grow pt-[64px] md:pt-[64px]"> {/* Explicitly set pt to match navbar height */}
        <HeroSection id="hero" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <ExperienceSection id="experience" />
        <ChineseSection id="chinese" />
        <ContactSection id="contact" />
      </main>

      <Footer />
    </div>
  );
}
