'use client';
import Image from 'next/image';
import React, { FC, useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

type CarouselProps<T> = {
  items: T[];
  autoScrollInterval?: number;
  autoScrollEnabled?: boolean;
  isDark: boolean;
  type: string;
};

const Carousel: FC<CarouselProps<any>> = ({
  items,
  autoScrollInterval = 3000,
  autoScrollEnabled = false,
  isDark,
  type,
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const [videoWidth, setVideoWidth] = useState<number>(500);

  const goToNextItem = () => setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  const goToPrevItem = () => setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));

  const handleResize = () => {
    if (window.innerWidth <= 600 && window.innerWidth > 450) return setVideoWidth(300);
    if (window.innerWidth <= 450) return setVideoWidth(200);
    setVideoWidth(500);
    console.log(window.innerWidth);
  };

  const debounce = (func: Function, delay: number) => {
    let timer: any;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  useEffect(() => {
    const debouncedResize = debounce(handleResize, 500);
    debouncedResize();
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  useEffect(() => {
    let autoScrollTimer: NodeJS.Timeout | null = null;

    if (autoScrollEnabled) autoScrollTimer = setInterval(goToNextItem, autoScrollInterval);
    return () => {
      if (autoScrollTimer) clearInterval(autoScrollTimer);
    };
  }, [autoScrollInterval, autoScrollEnabled]);

  return (
    <div className="relative z-20">
      <div className="flex justify-center flex-col overflow-hidden">
        <div className="flex flex-row gap-2 self-center">
          <div
            className={`text-accent hover:text-primary transition-all duration-500 cursor-pointer rounded-full flex items-center justify-center p-1 hover:-translate-x-2 ${
              isDark ? 'bg-dbackground dark:bg-background' : 'bg-background dark:bg-dbackground'
            }`}
            onClick={goToPrevItem}>
            <MdKeyboardArrowLeft size={35} />
          </div>
          <div
            className={`text-accent hover:text-primary transition-all duration-500 cursor-pointer rounded-full flex items-center justify-center p-1 hover:translate-x-2 ${
              isDark ? 'bg-dbackground dark:bg-background' : 'bg-background dark:bg-dbackground'
            }`}
            onClick={goToNextItem}>
            <MdKeyboardArrowRight size={35} />
          </div>
        </div>
        <div
          className="p-4"
          style={{
            marginLeft: `calc(50% - ${400 / 2 + 16}px)`,
          }}>
          <div
            className="flex justify-center w-fit transition-all duration-500"
            style={{
              transform: `translateX(-${currentItemIndex * 400}px)`,
            }}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`group w-80 h-[470px] rounded-3xl cursor-pointer transform transition-transform duration-500 overflow-hidden relative flex-shrink-0 ${
                  index === currentItemIndex ? 'scale-100' : 'scale-90'
                }`}
                style={{ width: `400px` }}>
                <div className="w-full h-full rounded overflow-hidden relative">
                  <div className="absolute inset-0 group-hover:scale-110 transition-all duration-500">
                    <Image
                      alt="Project Image"
                      src={item.src}
                      width={1000}
                      height={1000}
                      className="w-full h-[350px] object-cover rounded"
                    />
                  </div>
                  <div className="h-[125px] w-full absolute inset-x-0 bottom-0 flex justify-center pb-4 flex-col items-center bg-background dark:bg-dbackground">
                    <p className="text-3xl text-text dark:text-dtext font-bold mt-3 small-caps font-mono">
                      {item.name}
                    </p>
                    <p className="text-3xl text-text dark:text-dtext font-bold mt-3 small-caps font-mono">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
