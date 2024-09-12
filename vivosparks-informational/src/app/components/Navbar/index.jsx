"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'features', 'overview'];
      const sectionOffsets = sections.map((section) =>
        document.getElementById(section)?.offsetTop ?? 0
      );

      const scrollPosition = window.scrollY + 200; 

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
    
        <div className="flex items-center">
          <Image
            src="/Images/logo.png"
            alt="Investika Logo"
            width={250} 
            height={250}
            className="object-contain"
          />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <AiOutlineClose size={30} color="white" /> : <AiOutlineMenu size={30} color="black" />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className={`hidden md:flex md:items-center space-x-48 text-gray-700 text-xl`}>
          <a
            href="#home"
            onClick={() => setActiveSection('home')}
            className={`hover:text-blue-600 ${activeSection === 'home' ? 'text-blue-600 font-bold' : 'font-normal'}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setActiveSection('about')}
            className={`hover:text-blue-600 ${activeSection === 'about' ? 'text-blue-600 font-bold' : 'font-normal'}`}
          >
            About
          </a>
          <a
            href="#features"
            onClick={() => setActiveSection('features')}
            className={`hover:text-blue-600 ${activeSection === 'features' ? 'text-blue-600 font-bold' : 'font-normal'}`}
          >
            Features
          </a>
          <a
            href="#overview"
            onClick={() => setActiveSection('overview')}
            className={`hover:text-blue-600 ${activeSection === 'overview' ? 'text-blue-600 font-bold' : 'font-normal'}`}
          >
            Overview
          </a>
        </div>
      </div>

      {/* Full-Screen for hamburger menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-8 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >
        <a
          href="#home"
          onClick={() => { setIsOpen(false); setActiveSection('home'); }}
          className={`text-2xl hover:text-blue-600 ${activeSection === 'home' ? 'text-blue-600 font-bold' : 'font-semibold'}`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => { setIsOpen(false); setActiveSection('about'); }}
          className={`text-2xl hover:text-blue-600 ${activeSection === 'about' ? 'text-blue-600 font-bold' : 'font-semibold'}`}
        >
          About
        </a>
        <a
          href="#features"
          onClick={() => { setIsOpen(false); setActiveSection('features'); }}
          className={`text-2xl hover:text-blue-600 ${activeSection === 'features' ? 'text-blue-600 font-bold' : 'font-semibold'}`}
        >
          Features
        </a>
        <a
          href="#overview"
          onClick={() => { setIsOpen(false); setActiveSection('overview'); }}
          className={`text-2xl hover:text-blue-600 ${activeSection === 'overview' ? 'text-blue-600 font-bold' : 'font-semibold'}`}
        >
          Overview
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
