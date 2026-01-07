import React from 'react';
import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa'; // Using fa icons for payments as placeholder

const Footer = () => {
    return (
        <footer className="bg-irctc-royal text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Logo & Description */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">IRCTC</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            IRCTC, a public sector undertaking, handles ticketing, catering, and tourism for Indian Railways. It offers online ticket booking, catering services, and various tourism packages.
                        </p>
                        <div className="flex space-x-4">
                            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                            <FaWhatsapp className="cursor-pointer hover:text-gray-300" />
                            <FaYoutube className="cursor-pointer hover:text-gray-300" />
                            <FaInstagram className="cursor-pointer hover:text-gray-300" />
                            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">IRCTC Zone</a></li>
                            <li><a href="#" className="hover:text-white">IRCTC E-Wallet</a></li>
                            <li><a href="#" className="hover:text-white">IRCTC Loyalty Program</a></li>
                            <li><a href="#" className="hover:text-white">Ask Disha ChatBot</a></li>
                            <li><a href="#" className="hover:text-white">IRCTC-iPAY Payment</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Information</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">IRCTC Trains</a></li>
                            <li><a href="#" className="hover:text-white">General Information</a></li>
                            <li><a href="#" className="hover:text-white">Important Information</a></li>
                            <li><a href="#" className="hover:text-white">Enquiries</a></li>
                            <li><a href="#" className="hover:text-white">How to</a></li>
                            <li><a href="#" className="hover:text-white">Refund Rules</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li>0755-3934141 / 0755-6610661</li>
                            <li>care@irctc.co.in</li>
                            <li className="leading-relaxed">
                                Indian Railway Catering and Tourism Corporation Ltd.,
                                9th Floor, Bank of Baroda Building,
                                16, Parliament Street, New Delhi 110001.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 text-3xl text-gray-400 mb-4 md:mb-0">
                        <FaCcVisa />
                        <FaCcMastercard />
                        <FaCcAmex />
                        {/* Add more as needed or use images if available */}
                    </div>
                    <div className="text-xs text-gray-400 text-center md:text-right">
                        <p>© 2024 IRCTC. All rights reserved.</p>
                        <div className="mt-2 space-x-4">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
