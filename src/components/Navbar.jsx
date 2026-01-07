import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/railsetu_logo_new.jpg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Trains", href: "#" },
    { name: "IRCTC Exclusive", href: "#" },
    { name: "Other Services", href: "#" },
    { name: "Promotions", href: "#" },
    { name: "More", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="RailSetu Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-700 border border-gray-300 px-3 py-1 rounded hover:bg-gray-50 text-sm">
                हिंदी
              </button>

              <button className="text-blue-600 border border-blue-600 px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition">
                Register
              </button>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition shadow-md">
                Log In
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-gray-700 p-2"
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-3 flex flex-col space-y-2">
              <button className="text-gray-700 border border-gray-300 px-3 py-2 rounded">
                हिंदी
              </button>
              <button className="text-blue-600 border border-blue-600 px-3 py-2 rounded-md font-semibold">
                Register
              </button>
              <button className="bg-blue-600 text-white px-3 py-2 rounded-md font-semibold">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
