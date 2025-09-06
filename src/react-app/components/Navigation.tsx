import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Refund Policy", href: "/refund-policy" },
  // Add other navigation links as needed.
];

export default function Navigation({ home = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    // Close mobile menu on click
    setIsOpen(false);

    // Handle smooth scrolling for anchor links
    if (href.startsWith("#")) {
      // Use setTimeout to ensure the menu is closed before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // For regular links, navigate normally
      window.location.href = href;
    }
  };

  const navBarClass = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-10
    ${
      isScrolled || !home
        ? "bg-slate-900/80 backdrop-blur-sm shadow-lg"
        : "bg-transparent"
    }
  `;

  return (
    <nav className={navBarClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Increased height for better spacing */}
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-white">KnotBot</span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    !home && item.name === "Features" ? "hidden" : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            {/* CTA Button */}
            <button className="neuro-btn text-white px-6 py-2 rounded-lg font-medium text-sm">
              Add to Chrome - Free
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass text-white p-2 rounded-lg inline-flex items-center justify-center"
              aria-label="Main menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass rounded-xl mt-2 mx-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3 mt-3 border-t border-white/10">
              <button className="neuro-btn text-white px-6 py-2 rounded-lg font-medium text-sm w-full">
                Add to Chrome - Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
