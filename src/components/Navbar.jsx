import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navLinks = [
        { name: 'Trains', href: '#' },
        { name: 'IRCTC Exclusive', href: '#' },
        { name: 'Other Services', href: '#' },
        { name: 'Promotions', href: '#' },
        { name: 'More', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        {/* Using text for now, assuming logo is an image we might map later or use text */}
                        <div className="flex flex-col items-center">
                            <span className="text-irctc-blue font-bold text-2xl tracking-wider">IRCTC</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-irctc-dark hover:text-irctc-blue font-medium text-sm transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="text-irctc-dark font-medium text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
                                हिंदी
                            </button>
                            <button className="text-irctc-blue border border-irctc-blue px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition-colors">
                                Register
                            </button>
                            <button className="bg-irctc-blue text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-irctc-royal transition-colors shadow-md">
                                Log In
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setNavOpen(!navOpen)}
                            className="text-irctc-dark hover:text-irctc-blue p-2"
                        >
                            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-irctc-dark hover:text-irctc-blue hover:bg-gray-50"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-4 flex flex-col space-y-2 px-3">
                            <button className="text-irctc-dark font-medium text-sm border border-gray-300 px-3 py-2 rounded">
                                हिंदी
                            </button>
                            <button className="text-irctc-blue border border-irctc-blue px-3 py-2 rounded-md text-sm font-semibold">
                                Register
                            </button>
                            <button className="bg-irctc-blue text-white px-3 py-2 rounded-md text-sm font-semibold">
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
