import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
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

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

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
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
                : "bg-white dark:bg-gray-900 shadow-md"
                }`}
        >
            <div className="w-full px-6">
                <div className="flex items-center h-20">

                    {/* ------------ Logo Left ------------- */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="RailSetu Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* ------------ Desktop Navbar ------------- */}
                    <div className="hidden lg:flex items-center w-full">

                        {/* Center Menu */}
                        <div className="flex-1 flex justify-center space-x-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
            after:bg-blue-600 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Right Buttons */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center gap-2"
                                title="Toggle Theme"
                            >
                                {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-400" />}
                                <span className="text-sm font-medium">{theme === "light" ? "Dark" : "Light"}</span>
                            </button>

                            <button className="text-blue-600 border border-blue-600 px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition">
                                Register
                            </button>

                            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition shadow-md">
                                Log In
                            </button>
                        </div>

                    </div>

                    {/* ------------ Mobile Menu Button ------------- */}
                    <div className="lg:hidden ml-auto">
                        <button
                            onClick={() => setNavOpen(!navOpen)}
                            className="text-gray-700 p-2"
                        >
                            {navOpen ? <FaTimes size={24} className="text-gray-700 dark:text-white" /> : <FaBars size={24} className="text-gray-700 dark:text-white" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ------------ Mobile Menu ------------- */}
            {navOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
                    <div className="px-4 py-3 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="mt-3 flex flex-col space-y-2">
                            <button
                                onClick={toggleTheme}
                                className="text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded flex items-center gap-2"
                            >
                                {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-400" />}
                                <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
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
