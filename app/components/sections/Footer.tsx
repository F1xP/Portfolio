'use client';
import Link from 'next/link';
import React, { FC, FormEvent } from 'react';
import useScrollToSection from '../../hooks/useScroll';
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Tooltip from '../global//Tooltip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const tailwindClasses = {
  h1: 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-sans text-2xl font-bold mb-2',
  div: 'flex flex-col items-start w-fit',
  link: 'font-sans text-xl font-bold hover:text-accent cursor-pointer transition-all duration-500',
};

const Footer: FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <>
      <footer className="flex flex-col w-full items-center backdrop-blur-md shadow-xl bg-background dark:bg-dbackground justify-center border--2 border-primary text-text dark:text-dtext">
        <div className="flex flex-col p-4 px-16">
          <Message />
          <div className="flex flex-row justify-center gap-20 flex-wrap">
            <div className={tailwindClasses.div}>
              <h1 className={tailwindClasses.h1}>Sections</h1>
              <button
                className={tailwindClasses.link}
                onClick={() => scrollToSection('home')}>
                About
              </button>
              <button
                className={tailwindClasses.link}
                onClick={() => scrollToSection('projects')}>
                Past Work
              </button>
              <button
                className={tailwindClasses.link}
                onClick={() => scrollToSection('skills')}>
                Skills
              </button>
              <button
                className={tailwindClasses.link}
                onClick={() => scrollToSection('contact')}>
                Contact
              </button>
            </div>
            <div className={tailwindClasses.div}>
              <h1 className={tailwindClasses.h1}>Socials</h1>
              <Link
                className={tailwindClasses.link}
                href={'https://discordapp.com/users/298961676148015104'}>
                Discord
              </Link>
              <Link
                className={tailwindClasses.link}
                href={'https://twitter.com/F1xZZZ'}>
                Twitter
              </Link>
              <Link
                className={tailwindClasses.link}
                href={'https://www.linkedin.com/in/lidor-ben-haim-31856626b/'}>
                LinkedIn
              </Link>
              <Link
                className={tailwindClasses.link}
                href={'/https://github.com/F1xP'}>
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <div className="h-fit p-2 flex flex-row w-full items-center border-t-2 border-primary bg-dbackground dark:bg-background text-dtext dark:text-text px-20 whitespace-pre-line">
          <p className="mr-4">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <SocialMedia />
        </div>
      </footer>
    </>
  );
};

export default Footer;

const Message: FC = () => {
  const handleMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      message: { value: string };
    };
    const message = target.message.value || '';
    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({ message: message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        toast.error(responseData?.error || 'An error occurred.', {
          position: 'bottom-left',
        });
      } else {
        localStorage.setItem('subbed', 'yes');
        toast.success(responseData?.message || 'Thank you for subscribing!', {
          position: 'bottom-left',
        });
      }
    } catch (e) {
      toast.error('An error occurred.', {
        position: 'bottom-left',
      });
      console.error(e);
    }
  };

  return (
    <form
      className="bg-primary text-dtext -translate-y-14 p-3 rounded-lg flex justify-between gap-6 flex-wrap items-center max-w-7xl"
      onSubmit={handleMessage}>
      <p className="font-sans font-bold text-2xl sm:text-3xl mx-auto mb-1 whitespace-pre-line text-center">
        Send me a message.
      </p>
      <input
        type="text"
        name="message"
        placeholder="Your message..."
        className="text-lg sm:text-2xl flex-grow bg-dbackground dark:bg-background rounded-md outline-none placeholder:text-dtext text-dtext dark:text-text dark:placeholder:text-text p-2.5 w-full"
      />
      <button
        type="submit"
        className="mx-auto relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-accent border-2 border-accent rounded-md hover:text-white group hover:bg-gray-50 bg-dtext">
        <span className="absolute left-0 block w-full h-0 transition-all bg-accent opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-7 h-7 fill-dtext"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path>
          </svg>
        </span>
        <span className="relative text-xl">Send Message</span>
      </button>
    </form>
  );
};

const SocialMedia: FC = () => {
  return (
    <div className="flex flex-row ml-auto flex-wrap gap-2">
      <div className="flex flex-row gap-2">
        <SocialMediaItem
          icon={FaDiscord}
          class="shadow-discord/50 bg-discord"
          name="Discord"
          link={'https://discordapp.com/users/298961676148015104'}
        />
      </div>
      <div className="flex flex-row gap-2">
        <SocialMediaItem
          icon={FaTwitter}
          class="shadow-twitter/50 bg-twitter"
          name="Twitter"
          link={'https://twitter.com/F1xZZZ'}
        />
        <SocialMediaItem
          icon={FaLinkedin}
          class="shadow-linkedin/50 bg-linkedin"
          name="LinkedIn"
          link={'https://www.linkedin.com/in/lidor-ben-haim-31856626b/'}
        />
        <SocialMediaItem
          icon={FaGithub}
          class="shadow-github/50 bg-github"
          name="GitHub"
          link={'https://github.com/F1xP'}
        />
      </div>
    </div>
  );
};

type SocialMediaItemProps = {
  icon: IconType;
  class: string;
  name: string;
  link: string;
};

const SocialMediaItem: FC<SocialMediaItemProps> = (props) => {
  return (
    <Tooltip text={props.name}>
      <Link
        href={props.link}
        className="w-fit">
        <div className={`rounded-lg p-1 cursor-pointer ${props.class}`}>
          <props.icon
            size={30}
            color={'#FFFFFF'}
          />
        </div>
      </Link>
    </Tooltip>
  );
};
