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
  },
  {
    id: 2,
    name: 'Dynamic Job Finder',
    link: 'https://dynamicjobfinder.online',
    src: '/DynamicJobFinder.png',
    position: 'Full-Stack',
  },
  {
    id: 3,
    name: 'Camel Blackjack',
    link: '',
    src: '/CamelBlackjack.png',
    position: 'Side-Project',
  },
];

const Projects: FC = () => {
  return (
    <Section
      id="projects"
      text1="My"
      text2="Projects"
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
