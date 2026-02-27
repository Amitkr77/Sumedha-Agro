import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap shadow-sm dark:border-b-surface-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md px-4 md:px-10 py-3">

      {/* Left Section (Logo + Title) */}
      <div className="flex items-center gap-4 text-text-main dark:text-white">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Sumedha Agro Logo"
            className="h-10 w-auto object-contain"
            width="70"
            height="70"
          />
        </div>
        <h2 className="text-text-main dark:text-black text-xl font-bold leading-tight tracking-[-0.015em]">
          Sumedha Agro
        </h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-text-main text-gray-400 dark:text-black text-sm font-medium hover:text-primary transition-colors"
            href="/"
          >
            Home
          </a>
          <a
            className="text-text-main text-gray-400 dark:text-black text-sm font-medium hover:text-primary transition-colors"
            href="/About"
          >
            About Us
          </a>
          <a
            className="text-text-main text-gray-400 dark:text-black text-sm font-medium hover:text-primary transition-colors"
            href="/products"
          >
            Products
          </a>
          <a
            className="text-text-main text-gray-400 dark:text-black text-sm font-medium hover:text-primary transition-colors"
            href="/contact"
          >
            Contact us
          </a>
          <a
            className="text-text-main text-gray-400 dark:text-black text-sm font-medium hover:text-primary transition-colors"
            href="/Showcase"
          >
            News & Announcements
          </a>
        </div>

        <a href="/get-quote">
          <button className="px-6 py-2 rounded-full font-semisolid text-black bg-green-400 shadow-md hover:scale-105 transition-transform duration-200">
            <span className="truncate">Spawn Booking</span>
          </button>
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-main dark:text-black"
          aria-label="a"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full 
          bg-white shadow-lg 
          md:hidden 
          flex flex-col 
          text-left 
          px-6 py-3">

          <a
            className="flex justify-between items-center py-4 border-b border-gray-200 text-base font-medium text-gray-800"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span>Home</span>
            
          </a>

          <a
            className="flex justify-between items-center py-4 border-b border-gray-200 text-base font-medium text-gray-800"
            href="/About"
            onClick={() => setIsOpen(false)}
          >
            <span>About Us</span>
            
          </a>

          <a
            className="flex justify-between items-center py-4 border-b border-gray-200 text-base font-medium text-gray-800"
            href="/products"
            onClick={() => setIsOpen(false)}
          >
            <span>Products</span>
            
          </a>

          <a
            className="flex justify-between items-center py-4 border-b border-gray-200 text-base font-medium text-gray-800"
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            <span>Contact us</span>
            
          </a>

          <a
            className="flex justify-between items-center py-4 border-b border-gray-200 text-base font-medium text-gray-800"
            href="/Showcase"
            onClick={() => setIsOpen(false)}
          >
            <span>News & Announcements</span>
            
          </a>

          <a
            href="/get-quote"
            onClick={() => setIsOpen(false)}
            className="py-4"
          >
            <button className="w-full px-6 py-2 rounded-full font-semisolid text-black bg-green-400 shadow-md hover:scale-105 transition-transform duration-200">
              Spawn Booking
            </button>
          </a>

        </div>
      )}
    </header>
  );
}