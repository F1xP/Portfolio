import React, { FC } from 'react';
import Section from '../global/Section';
import Image from 'next/image';

const Skills: FC = () => {
  return (
    <Section
      id="skills"
      text1="My"
      text2="Skills"
      isDark={false}
      isTextDark={false}
      divider="waves"
      animation="animate-left"
      extraDivider={true}>
      <div className="flex gap-4 flex-wrap justify-center mb-16">
        {[
          { src: '/HTML.svg', name: 'HTML' },
          { src: '/CSS.svg', name: 'CSS' },
          { src: '/JS.svg', name: 'JS' },
          { src: '/TS.svg', name: 'TS' },
          { src: '/React.svg', name: 'ReactJs' },
          { src: '/Redux.svg', name: 'Redux' },
          { src: '/NextJS.svg', name: 'NextJS' },
          { src: '/ExpressJS.svg', name: 'ExpressJS' },
          { src: '/MongoDB.svg', name: 'MongoDB' },
          { src: '/PostgreSQL.svg', name: 'PostgreSQL' },
          { src: '/Tailwind.svg', name: 'Tailwind CSS' },
          { src: '/DJS.svg', name: 'Discord.Js' },
        ].map((item) => {
          return (
            <div
              key={item.name}
              className="h-52 w-52 bg-dbackground dark:bg-background rounded-xl hover:scale-105 transition-all duration-700 cursor-pointer flex justify-center flex-col items-center">
              <Image
                alt={item.name}
                src={item.src}
                width={100}
                height={100}
                className="w-40 h-40 p-3"
              />
              <p className="text-dtext dark:text-text font-bold font-mono text-2xl text-center">{item.name}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
