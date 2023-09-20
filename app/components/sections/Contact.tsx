import React, { FC, InputHTMLAttributes } from 'react';
import { FaDiscord, FaEnvelope } from 'react-icons/fa';
import Section from '../global/Section';

const Contact: FC = () => {
  return (
    <Section
      id="contact"
      text1="Contact"
      text2="Me"
      isDark={true}
      isTextDark={true}
      divider="none"
      animation="animate-up">
      <div className="flex flex-row items-center justify-center z-20 mb-2">
        <div className="bg-accent p-3 rounded-full mr-2 dark:text-background text-dbackground">
          <FaEnvelope size={30} />
        </div>
        <h2 className=" w-72 font-extrabold text-left text-dtext dark:text-text text-lg sm:text-2xl whitespace-nowrap">
          f1x777111@gmail.com
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center z-20 mb-2">
        <div className="bg-accent p-3 rounded-full mr-2 dark:text-background text-dbackground">
          <FaDiscord size={30} />
        </div>
        <h2 className="w-72 font-extrabold text-left text-dtext dark:text-text text-lg sm:text-2xl whitespace-nowrap">
          f1xv
        </h2>
      </div>
    </Section>
  );
};

export default Contact;
