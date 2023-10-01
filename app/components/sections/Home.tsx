import Image from 'next/image';
import React, { FC } from 'react';
import Section from '../global//Section';

const Home: FC = () => {
  return (
    <Section
      id="home"
      text1="About"
      text2="Me"
      isDark={false}
      isTextDark={false}
      divider="none"
      animation="animate-down">
      <div className="w-full h-fit flex justify-center z-20 flex-row items-center lg:flex-nowrap flex-wrap gap-10">
        <p className="font-bold text-xl font-sans italic text-text dark:text-dtext">
          My name is Lidor Ben Haim. I&apos;m a self-taught, versatile full-stack web developer with over 4 years of
          programming experience. I specialize in the MERN stack and have been working with it for the past 2 years. In
          addition, I also have experience with Next.js and am open to exploring innovative tools and frameworks based
          on project needs. If you&apos;d like to learn more about my skills and potential collaboration, please get in
          touch.
        </p>
        <Image
          alt="Logo Image"
          src="/Logo.png"
          width={1000}
          height={1000}
          className="max-w-sm rounded-xl"
        />
      </div>
    </Section>
  );
};

export default Home;
