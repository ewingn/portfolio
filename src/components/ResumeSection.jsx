import React from 'react';
import { FileText } from 'lucide-react';

const ResumeSection = () => {
  const resumeLink = "https://nathanewing.github.io/Resume.pdf"; // Placeholder: Replace with your actual resume PDF link

  return (
    <section id="resume" className="py-16 md:py-24 px-6 md:px-8 lg:px-16 bg-gray-50 relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-10">My Resume</h2>
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Access my full professional resume for a detailed overview of my experience, education, and skills.
        </p>
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-blue-600 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <FileText className="w-7 h-7" />
          <span>Download/View Resume</span>
        </a>
        <p className="text-sm text-gray-500 mt-6">
          (Opens in a new tab)
        </p>
      </div>
    </section>
  );
};

export default ResumeSection;
