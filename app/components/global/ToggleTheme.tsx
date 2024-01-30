'use client';
import React, { FC } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const ToggleTheme: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'system' ? (systemTheme === 'dark' ? 'light' : 'dark') : theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <FaSun
        size={45}
        onClick={() => toggleTheme()}
        className="cursor-pointer text-primary dark:text-accent hover:text-accent dark:hover:text-primary transition-all duration-500 hover:rotate-[360deg] dark:hidden"
      />
      <FaMoon
        size={40}
        onClick={() => toggleTheme()}
        className="cursor-pointer text-primary dark:text-accent hover:text-accent dark:hover:text-primary transition-all duration-500 hover:rotate-[360deg] hidden dark:block"
      />
    </>
  );
};

export default ToggleTheme;
