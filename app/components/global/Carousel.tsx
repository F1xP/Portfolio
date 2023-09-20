'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BiSolidArrowToTop } from 'react-icons/bi';

type CarouselProps<T> = {
  items: T[];
  autoScrollInterval?: number;
  autoScrollEnabled?: boolean;
  isDark: boolean;
  type: string;
};

const Carousel: FC<CarouselProps<any>> = ({ items, autoScrollInterval = 3000, autoScrollEnabled = false, isDark }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  const goToNextItem = () => setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  const goToPrevItem = () => setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));

  const handleDownload = () => {
    const zipFileUrl = '/CamelBlackjack.zip';
    const a = document.createElement('a');
    a.href = zipFileUrl;
    a.download = 'CamelBlackjack.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    let autoScrollTimer: NodeJS.Timeout | null = null;

    if (autoScrollEnabled) autoScrollTimer = setTimeout(goToNextItem, autoScrollInterval);
    return () => {
      if (autoScrollTimer) clearTimeout(autoScrollTimer);
    };
  }, [autoScrollInterval, autoScrollEnabled, currentItemIndex]);

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
                className={`w-80 h-[470px] rounded-3xl transform transition-transform duration-500 overflow-hidden relative flex-shrink-0 ${
                  index === currentItemIndex ? 'scale-100' : 'scale-90'
                }`}
                style={{ width: `400px` }}
                key={item.name}>
                <div className="w-full h-full rounded overflow-hidden relative">
                  <div className="absolute inset-0 hover:scale-110 transition-all duration-500 cursor-pointer">
                    {item.name === 'Camel Blackjack' ? (
                      <button onClick={() => handleDownload()}>
                        <Image
                          alt={item.name}
                          src={item.src}
                          width={1000}
                          height={1000}
                          className="w-full h-[360px] object-cover rounded"
                        />
                      </button>
                    ) : (
                      <Link href={item.link}>
                        <Image
                          alt={item.name}
                          src={item.src}
                          width={1000}
                          height={1000}
                          className="w-full h-[360px] object-cover rounded"
                        />
                      </Link>
                    )}
                  </div>
                  <div className="h-auto w-full absolute inset-x-0 bottom-0 flex justify-center flex-col items-center bg-background dark:bg-dbackground">
                    <p className="text-3xl text-text dark:text-dtext font-bold small-caps font-mono">{item.name}</p>
                    <p className="text-3xl text-text dark:text-dtext font-bold small-caps font-mono mb-2">
                      {item.position}
                    </p>
                    <AccordionComponent tech={item.tech}></AccordionComponent>
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

import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';

type AccordionItemProps = {
  header: string;
  initialEntered: boolean;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <p className="text-dtext text-2xl font-mono font-bold whitespace-pre-line">{header}</p>
        <BiSolidArrowToTop
          size={30}
          className={`ml-auto transition-all duration-500 ease-out rotate-0 text-dtext ${isEnter ? 'rotate-180' : ''}`}
        />
      </>
    )}
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-2 text-left hover:bg-accent/50 transition-all duration-300 ${
          isEnter ? 'bg-accent' : 'bg-accent'
        }`,
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
);

type AccordionComponentProps = {
  tech: string[];
};

const AccordionComponent: React.FC<AccordionComponentProps> = (props) => {
  return (
    <div className="w-full">
      <Accordion transition>
        <AccordionItem
          header="Tech Stack:"
          initialEntered={false}>
          <div className="flex flex-row flex-wrap items-center justify-center gap-2">
            {props.tech.map((item: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <Image
                    alt={`alt-${index}-${item.name}`}
                    src={item.src}
                    width={100}
                    height={100}
                    className="w-10 h-10 bg-dbackground dark:bg-background p-1 rounded-lg"
                  />
                </React.Fragment>
              );
            })}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
