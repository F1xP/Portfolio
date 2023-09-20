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

type FormFieldProps = {
  text: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormField: FC<FormFieldProps> = ({ text, name, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-text dark:text-dtext font-semibold text-xl"
        htmlFor={name}>
        {text}:
      </label>
      <input
        {...props}
        className="text-xl border-b-2 bg-transparent border-primary focus:border-accent outline-none transition-all duration-500 placeholder:text-text dark:placeholder:text-dtext text-text dark:text-dtext"
        id={name}
        name={name}
      />
    </div>
  );
};

const ContactForm: FC = () => {
  return (
    <form className="p-10 lg:w-2/5 w-fit bg-background dark:bg-dbackground rounded-xl flex gap-6 flex-col">
      <h1 className="text-text dark:text-dtext font-bold text-2xl text-center mb-3">Send me a message</h1>
      <FormField
        text="Full Name:"
        name="name"
        placeholder="What's your name?"
        type="text"
      />
      <FormField
        text="Email:"
        name="email"
        placeholder="What's your email?"
        type="email"
      />
      <FormField
        text="Subject:"
        name="subject"
        placeholder="Subject of the message?"
        type="text"
      />
      <FormField
        text="Message:"
        name="message"
        placeholder="I would like to get in touch with you for..."
        type="text"
      />
      <button
        type="submit"
        className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-accent border-2 border-accent rounded-md hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-accent opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span className="relative">Send Message</span>
      </button>
    </form>
  );
};
