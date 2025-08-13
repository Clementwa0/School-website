// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MoveDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-5xl shadow-md  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-900">
            EduSchool
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-white hover:bg-gray-900 p-1 rounded-md">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-white hover:bg-gray-900 p-1 rounded-md">
              About 
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-white hover:bg-gray-900 p-1 rounded-md">
              Courses
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-white hover:bg-gray-900 p-1 rounded-md">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
