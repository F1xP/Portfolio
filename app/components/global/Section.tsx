'use client';
import React, { FC, ReactNode, useEffect, useState, useRef } from 'react';
import localFont from 'next/font/local';

const SegaFont = localFont({ src: '../../fonts/SEGA.ttf' });

type SectionProps = {
  id: string;
  text1: string;
  text2: string;
  isDark?: boolean;
  isTextDark?: boolean;
  divider: string;
  animation: string;
  children: ReactNode;
  extraDivider?: boolean;
};

const Section: FC<SectionProps> = ({
  id,
  text1,
  text2,
  isDark = false,
  isTextDark,
  divider,
  animation,
  children,
  extraDivider = false,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInSection, setIsInSection] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) return;
          setIsInSection(true);
          observer.unobserve(entry.target);
        }
      },
      { ...options, threshold: id === 'skills' ? 0.15 : 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <section
        id={id}
        className={`flex flex-col justify-center items-center w-full h-full relative overflow-hidden ${
          isDark ? 'bg-dbackground dark:bg-background' : 'bg-background dark:bg-dbackground'
        } p-10 px-0 `}>
        {divider === 'waves' ? (
          <>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className={`w-full absolute top-0 min-w-[1800px] ${
                isDark ? 'fill-background dark:fill-dbackground' : 'fill-dbackground dark:fill-background'
              }`}>
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fillOpacity="1"></path>
            </svg>
            {extraDivider === true && (
              <svg
                className={`absolute bottom-0 w-full min-w-[1800px] ${
                  isDark ? 'fill-background dark:fill-dbackground' : 'fill-dbackground dark:fill-background'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 960 540">
                <path
                  d="M0 510L31 508L62 516L93 512L124 510L155 513L186 512L217 509L248 509L279 509L310 509L341 509L372 507L403 516L434 513L465 516L495 511L526 517L557 510L588 510L619 510L650 514L681 512L712 515L743 511L774 508L805 515L836 513L867 509L898 510L929 509L960 511L960 541L929 541L898 541L867 541L836 541L805 541L774 541L743 541L712 541L681 541L650 541L619 541L588 541L557 541L526 541L495 541L465 541L434 541L403 541L372 541L341 541L310 541L279 541L248 541L217 541L186 541L155 541L124 541L93 541L62 541L31 541L0 541Z"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"></path>
              </svg>
            )}
          </>
        ) : divider === 'tilt' ? (
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`w-full absolute top-0 min-w-[1800px] ${
              isDark ? 'fill-background dark:fill-dbackground' : 'fill-dbackground dark:fill-background'
            }`}>
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              fillOpacity="1"></path>
          </svg>
        ) : (
          ''
        )}
        <div
          ref={sectionRef}
          className={`2xl:w-4/6 w-11/12 flex flex-col z-50 ${isInSection ? animation : 'opacity-0'} ${
            id === 'contact' && 'mb-12'
          }`}>
          <h1
            className={`${
              SegaFont.className
            } text-5xl flex flex-wrap justify-center gap-4 text-center tracking-wide -translate-y-2 ${
              isTextDark ? 'text-dtext dark:text-text' : 'text-text dark:text-dtext'
            }  mb-6`}>
            {text1}{' '}
            <span
              className={`${SegaFont.className} text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent`}>
              {text2}
            </span>
          </h1>
          {children}
        </div>
      </section>
    </>
  );
};

export default Section;
