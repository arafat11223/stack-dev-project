import logo from "../../assets/logo-text.png";
const Navbar = () => {
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
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Technologies</a>
                        </li>

                        <li>
                            <a href="#">Projects</a>
                        </li>

                        <li>
                            <a href="#">About</a>
                        </li>

                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-sm font-medium text-gray-700">
                            Sign In
                        </button>

                        <button className="gradient-theme text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 text-2xl"
                        aria-label="Open menu"
                    >
                        ☰
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;