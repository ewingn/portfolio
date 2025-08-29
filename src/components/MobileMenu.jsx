import React from "react";

const MobileMenu = ({ toggleMobileMenu }) => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Chinese", href: "#chinese" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8">
      {navItems.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          onClick={toggleMobileMenu}
          className="text-2xl font-medium text-text-primary hover:text-primary transition relative after:absolute after:left-1/2 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          {item.label}
        </a>
      ))}

      {/* Close button */}
      <button
        onClick={toggleMobileMenu}
        className="mt-12 text-text-secondary hover:text-primary transition"
      >
        ✕ Close
      </button>
    </div>
  );
};

export default MobileMenu;
