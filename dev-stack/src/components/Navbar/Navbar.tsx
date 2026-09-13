import { useState } from "react";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-18 flex items-center justify-between">

                    {/* Logo */}
                    <div>
                        <img
                            src={logo}
                            alt="Dev Stack Logo"
                            className="w-32 h-auto object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">
                        <li>
                            <a
                                href="#"
                                className="hover:text-orange-500 transition-colors duration-200"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#technologies"
                                className="hover:text-orange-500 transition-colors duration-200"
                            >
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-orange-500 transition-colors duration-200"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-orange-500 transition-colors duration-200"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-orange-500 transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                        >
                            Sign In
                        </button>

                        <button
                            className="gradient-theme text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 hover:shadow-md transition-all duration-200"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 text-2xl hover:text-orange-500 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 py-5">
                        <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="block py-1 hover:text-orange-500 transition-colors duration-200"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="block py-1 hover:text-orange-500 transition-colors duration-200"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block py-1 hover:text-orange-500 transition-colors duration-200"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block py-1 hover:text-orange-500 transition-colors duration-200"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block py-1 hover:text-orange-500 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;