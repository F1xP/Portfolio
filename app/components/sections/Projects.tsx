import React, { FC } from 'react';
import Carousel from '../global/Carousel';
import Section from '../global/Section';

const ItemsArray = [
  {
    id: 1,
    name: 'GoblinTime!',
    link: 'https://goblintime.online',
    src: '/GoblinTime.png',
    position: 'Full-Stack',
    tech: [
      {
        mame: 'NextJs',
        src: '/NextJs.svg',
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
    id: 2,
    name: 'Dynamic Job Finder',
    link: 'https://dynamicjobfinder.online',
    src: '/DynamicJobFinder.png',
    position: 'Full-Stack',
    tech: [
      {
        mame: 'ExpressJs',
        src: '/ExpressJs.svg',
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
    id: 3,
    name: 'Camel Blackjack',
    link: '',
    src: '/CamelBlackjack.png',
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
