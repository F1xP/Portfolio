'use client';
import React, { FC, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleTheme: FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('');

  const toggleTheme = () => {
    if (currentTheme === '') {
      localStorage.setItem('theme', 'dark');
      setCurrentTheme('dark');
    } else {
      localStorage.removeItem('theme');
      setCurrentTheme('');
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const theme = localStorage.getItem('theme') || '';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setCurrentTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setCurrentTheme('');
    }
  }, [currentTheme]);

  return (
    <>
      {currentTheme === 'dark' ? (
        <FaSun
          size={45}
          onClick={() => toggleTheme()}
          className="cursor-pointer hover:text-primary transition-all duration-500"
        />
      ) : (
        <FaMoon
          size={40}
          onClick={() => toggleTheme()}
          className="cursor-pointer hover:text-primary transition-all duration-500"
        />
      )}
    </>
  );
};

export default ToggleTheme;
