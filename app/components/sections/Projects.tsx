import React, { FC } from 'react';
import Carousel from '../global/Carousel';
import Section from '../global/Section';

const ItemsArray = [
  {
    id: 1,
    name: 'Camel Blackjack (Web)',
    link: 'https://camelblackjack.vercel.app',
    src: '/CamelBlackjackWeb.png',
    position: 'Side-Project',
    tech: [
      {
        mame: 'NextJS',
        src: '/NextJS.svg',
      },
      {
        mame: 'Typescript',
        src: '/TS.svg',
      },
      {
        mame: 'Tailwind CSS',
        src: '/Tailwind.svg',
      },
      {
        mame: 'MongoDB',
        src: '/MongoDB.svg',
      },
    ],
  },
  {
    id: 2,
    name: 'GoblinTime!',
    link: 'https://goblintime.online',
    src: '/GoblinTime.png',
    position: 'Full-Stack',
    tech: [
      {
        mame: 'NextJS',
        src: '/NextJS.svg',
      },
      {
        mame: 'Typescript',
        src: '/TS.svg',
      },
      {
        mame: 'Tailwind CSS',
        src: '/Tailwind.svg',
      },
      {
        mame: 'PostgreSQL',
        src: '/PostgreSQL.svg',
      },
      {
        mame: 'DiscordJS',
        src: '/DJS.svg',
      },
    ],
  },

  {
    id: 3,
    name: 'Dynamic Job Finder',
    link: 'https://dynamicjobfinder.online',
    src: '/DynamicJobFinder.png',
    position: 'Full-Stack',
    tech: [
      {
        mame: 'ExpressJS',
        src: '/ExpressJS.svg',
      },
      {
        mame: 'Javascript',
        src: '/JS.svg',
      },
      {
        mame: 'CSS',
        src: '/CSS.svg',
      },
      {
        mame: 'Redux',
        src: '/Redux.svg',
      },
      {
        mame: 'MongoDB',
        src: '/MongoDB.svg',
      },
      {
        mame: 'React',
        src: '/React.svg',
      },
      {
        mame: 'DiscordJS',
        src: '/DJS.svg',
      },
    ],
  },
  {
    id: 4,
    name: 'Camel Blackjack (Desktop)',
    link: '',
    src: '/CamelBlackjackDesktop.png',
    position: 'Side-Project',
    tech: [
      {
        mame: 'PyGame',
        src: '/PyGame.png',
      },
      {
        mame: 'Python',
        src: '/Python.svg',
      },
    ],
  },
  {
    id: 5,
    name: 'DegiMe(Under Development)',
    link: 'https://degime.netlify.app/',
    src: '/DegiMe.png',
    position: 'Front-End',
    tech: [
      {
        mame: 'React',
        src: '/React.svg',
      },
      {
        mame: 'Typescript',
        src: '/TS.svg',
      },
      {
        mame: 'Tailwind',
        src: '/Tailwind.svg',
      },
    ],
  },
  {
    id: 6,
    name: 'Gambling Website',
    link: '',
    src: '/GamblingSite.png',
    position: 'Side-Project',
    tech: [
      {
        mame: 'React',
        src: '/React.svg',
      },
      {
        mame: 'Javascript',
        src: '/JS.svg',
      },
      {
        mame: 'CSS',
        src: '/CSS.svg',
      },
      {
        mame: 'Redux',
        src: '/Redux.svg',
      },
      {
        mame: 'MongoDB',
        src: '/MongoDB.svg',
      },
      {
        mame: 'ExpressJS',
        src: '/ExpressJS.svg',
      },
    ],
  },
];

const Projects: FC = () => {
  return (
    <Section
      id="projects"
      text1="Past"
      text2="Work"
      isDark={true}
      isTextDark={false}
      divider="tilt"
      animation="animate-right">
      <Carousel
        items={ItemsArray}
        autoScrollEnabled={true}
        autoScrollInterval={5000}
        isDark={false}
        type="projects"
      />
    </Section>
  );
};

export default Projects;
