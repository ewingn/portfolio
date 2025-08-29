import React from "react";

const Navbar = ({ toggleMobileMenu, activeSection }) => {
  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Chinese", href: "#chinese", id: "chinese" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="nav"> {/* Use custom nav class */}
      <div className="nav-container"> {/* Use custom nav-container class */}
        {/* Brand */}
        <a
          href="#hero"
          className="nav-brand" // Use custom nav-brand class
        >
          Nathan Ewing <span className="ml-1">💼</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu hidden md:flex"> {/* Use custom nav-menu class */}
          {navItems.map((item, idx) => (
            <li key={idx} className="relative">
              <a
                href={item.href}
                className={
                  activeSection === item.id
                    ? "active" // Add 'active' class for active state
                    : ""
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-text-secondary hover:text-primary transition"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
