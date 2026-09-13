import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2">

            <img
              src={logo}
              alt="Dev Stack Logo"
              className="w-36 h-auto object-contain"
            />

            <p className="mt-5 text-sm leading-7 text-gray-400 max-w-sm">
              Explore modern technologies, build your own developer
              stack, and grow your skills with the tools used by
              developers around the world.
            </p>

            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 hover:text-white transition"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 hover:text-white transition"
                aria-label="Twitter"
              >
                X
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 hover:text-white transition"
                aria-label="LinkedIn"
              >
                in
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Your Stack
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Legal
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;