import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-surface border-t border-border py-8 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Main footer text */}
        <p className="footer-text text-sm text-text-secondary mb-2">
          &copy; {new Date().getFullYear()} Nathan Ewing. All rights reserved.
        </p>

        {/* Fun / personality line */}
        <p className="footer-fun text-xs text-text-secondary opacity-80">
          Crafted with ☕ + curiosity — and always learning.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
