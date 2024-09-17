"use client"
import React from 'react';
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {

  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1F44] text-white py-10 px-5">
      <div id="contacts" className="flex flex-wrap justify-between items-start mb-10">
      
        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <p className="mb-2 text-lg pl-0 sm:pl-4 md:pl-6 lg:pl-10">&copy;2024 Investika</p>
          <div className="flex gap-3 mt-2 sm:pl-10">
            <Link href="https://www.facebook.com" aria-label="Facebook" passHref>
              <MdFacebook className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter" passHref>
              <BsTwitter className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram" passHref>
              <AiFillInstagram className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Features</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/lessons" className="text-white hover:text-gray-400 text-[20px]">Lessons</Link>
            </li>
            <li>
              <Link href="/recommendations" className="text-white hover:text-gray-400 text-[20px]">Recommendations</Link>
            </li>
            <li>
              <Link href="/trends" className="text-white hover:text-gray-400 text-[20px]">Trends</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="#home"
                onClick={(e) => { e.preventDefault(); handleScroll('home'); }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={(e) => { e.preventDefault(); handleScroll('about'); }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#characters"
                onClick={(e) => { e.preventDefault(); handleScroll('characters'); }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
                href="#overview"
                onClick={(e) => { e.preventDefault(); handleScroll('overview'); }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Overview
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Legal</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/privacy-policy" className="text-white hover:text-gray-400 text-[20px]">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="text-white hover:text-gray-400 text-[20px]">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t-2 border-[#FFB000] pt-2 mb-2 text-center relative">
        <p className="text-sm text-[#FFB000] absolute left-1/2 transform -translate-x-1/2 w-full">
          &copy; 2024 by VivoSparks Investika. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
