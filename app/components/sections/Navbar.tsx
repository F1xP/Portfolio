'use client';
import React, { FC } from 'react';
import ToggleTheme from '../global//ToggleTheme';
import useScrollToSection from '../../hooks/useScroll';
import { FaCode, FaInfoCircle, FaPhone, FaTools } from 'react-icons/fa';
import localFont from 'next/font/local';

const SonicFont = localFont({ src: '../../fonts/sonic.ttf' });

const Navbar: FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <>
      <nav
        className={`${SonicFont.className} sticky top-0 left-0 w-full backdrop-blur-md bg-background/30 dark:bg-dbackground/30 shadow-xl p-4 sm:px-16 flex justify-between items-center gap-5 h-24 animate-fade-in transition-all duration-500`}
        style={{ zIndex: '51' }}>
        <button
          onClick={() => scrollToSection('home')}
          className="relative inline-block text-lg group w-20 lg:w-32">
          <span className="relative z-50 block px-5 py-3 overflow-hidden leading-tight text-accent dark:text-primary transition-colors duration-300 ease-out border-2 border-primary dark:border-accent rounded-lg group-hover:text-background ">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-background"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent dark:bg-primary group-hover:-rotate-180 ease"></span>
            <p className="relative text-text text-lg hidden flex-row justify-center lg:flex">About</p>
            <FaInfoCircle
              size={36}
              className="flex lg:hidden relative"
            />
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-accent dark:bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"></span>
        </button>
        <div className="gap-1.5 sm:gap-5 items-center text-accent flex">
          <ToggleTheme />
          <button
            onClick={() => scrollToSection('contact')}
            className="h-12 relative inline-flex flex-col items-center justify-center p-4 px-6 py-3 overflow-hidden transition duration-300 ease-out border-2 border-primary dark:border-accent rounded-md shadow-md group w-12 lg:w-32">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-dbackground dark:bg-background group-hover:translate-y-0 ease">
              <svg
                className="w-6 h-6 transform rotate-90 text-primary dark:text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <p className="absolute items-center justify-center w-full h-full text-text dark:text-dtext text-lg transition-all duration-300 transform group-hover:translate-y-full ease hidden flex-row lg:flex">
              Contact
            </p>
            <FaPhone
              size={36}
              className="flex lg:hidden absolute items-center justify-center text-text dark:text-dtext text-lg transition-all duration-300 transform group-hover:translate-y-full ease flex-row"
            />
            <p className="relative invisible">Contact</p>
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="h-12 relative inline-flex flex-col items-center justify-center p-4 px-6 py-3 overflow-hidden transition duration-300 ease-out border-2 border-primary dark:border-accent rounded-md shadow-md group w-12 lg:w-32">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-dbackground dark:bg-background group-hover:translate-y-0 ease">
              <svg
                className="w-6 h-6 transform rotate-90 text-primary dark:text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <p
              className="absolute items-center justify-center w-full h-full text-text dark:text-dtext text-lg transition-all duration-300 transform group-hover:translate-y-full ease
                 hidden flex-row lg:flex">
              Skills
            </p>
            <FaTools
              size={36}
              className="flex lg:hidden absolute items-center justify-center text-text dark:text-dtext text-lg transition-all duration-300 transform group-hover:translate-y-full ease flex-row"
            />
            <p className="relative invisible">Skills</p>
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="h-12 relative inline-flex flex-col items-center justify-center p-4 px-6 py-3 overflow-hidden transition duration-300 ease-out border-2 border-primary dark:border-accent rounded-md shadow-md group w-12 lg:w-32">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-dbackground dark:bg-background group-hover:translate-y-0 ease">
              <svg
                className="w-6 h-6 transform rotate-90 text-primary dark:text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <p className="absolute items-center justify-center w-full h-full text-text dark:text-dtext text-[15px] transition-all duration-300 transform group-hover:translate-y-full ease hidden flex-row lg:flex whitespace-nowrap">
              Past Work
            </p>
            <FaCode
              size={36}
              className="flex lg:hidden absolute items-center justify-center text-text dark:text-dtext text-lg transition-all duration-300 transform group-hover:translate-y-full ease flex-row"
            />
            <p className="relative invisible whitespace-nowrap">Past Work</p>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
