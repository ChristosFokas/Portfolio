// components/Header.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import ContactForm from "../form/ContactForm";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-black">
      <div className="flex items-center justify-between px-5 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            <Image
              src="/logos/last.png"
              alt="Logo"
              width={500} // Increased width
              height={50} // Increased height
              className="h-24 w-24" // Adjusted height
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-gray-200 hover:text-red-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {navOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 text-white text-sm">
          <a href="#home" className="hover:text-red-700">
            HOME
          </a>
          <a href="#profile" className="hover:text-red-700">
            PROFILE
          </a>
          <a href="#history" className="hover:text-red-700">
            HISTORY
          </a>
          <a href="#team" className="hover:text-red-700">
            TEAM
          </a>
          <a href="#photos" className="hover:text-red-700">
            PHOTOS
          </a>
          <a href="#followme" className="hover:text-red-700">
            FOLLOW ME
          </a>
          <div>
            <ContactForm />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {navOpen && (
        <nav className="md:hidden bg-black text-white text-sm text-center">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <a href="#home" className="hover:text-red-700" onClick={toggleNav}>
              HOME
            </a>
            <a
              href="#profile"
              className="hover:text-red-700"
              onClick={toggleNav}
            >
              PROFILE
            </a>
            <a
              href="#history"
              className="hover:text-red-700"
              onClick={toggleNav}
            >
              HISTORY
            </a>
            <a href="#stats" className="hover:text-red-700" onClick={toggleNav}>
              STATS
            </a>
            <a href="#team" className="hover:text-red-700" onClick={toggleNav}>
              TEAM
            </a>
            <a
              href="#photos"
              className="hover:text-red-700"
              onClick={toggleNav}
            >
              PHOTOS
            </a>
            <a
              href="#followme"
              className="hover:text-red-700"
              onClick={toggleNav}
            >
              FOLLOW ME
            </a>
            <a
              href="#contact"
              className="hover:text-red-700"
              onClick={toggleNav}
            >
              CONTACT
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
