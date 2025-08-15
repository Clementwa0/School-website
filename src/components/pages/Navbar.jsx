import { useState } from "react";
import { Menu, X, Youtube, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="max-w-5xl bg-purple-50  mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              aria-label="Home"
            >
              <span className="sr-only">EduSchool</span>
              <span className="block">EduSchool</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </a>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-sm font-medium transition-colors"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                About
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md py-1 ring-1 ring-black ring-opacity-5"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <a
                    href="#mission"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Mission
                  </a>
                  <a
                    href="#team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </a>
                  <a
                    href="#history"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    School History
                  </a>
                </div>
              )}
            </div>

            <a
              href="#courses"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors"
            >
              Courses
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </a>

            <a
              href="#youtube"
              className="flex items-center gap-1 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 transition-colors group"
              aria-label="Our YouTube channel"
            >
              <span>YouTube</span>
              <Youtube className="h-5 w-5 text-red-600 group-hover:text-red-700 transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </a>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                aria-expanded={dropdownOpen}
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <a
                    href="#mission"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    Our Mission
                  </a>
                  <a
                    href="#team"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    Our Team
                  </a>
                  <a
                    href="#history"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    School History
                  </a>
                </div>
              )}
            </div>

            <a
              href="#courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Courses
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="#youtube"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              <span>YouTube</span>
              <Youtube className="h-5 w-5 text-red-600" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}