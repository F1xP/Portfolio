import React, { FC, ReactNode } from 'react';

type ToggleThemeProps = {
  text: string;
  children: ReactNode;
};

const Tooltip: FC<ToggleThemeProps> = ({ text, children }) => {
  return (
    <div className="group relative w-max">
      {children}
      <span className="pointer-events-none absolute -top-5 left-0 w-full flex justify-center items-center opacity-0 transition-opacity group-hover:opacity-100">
        <div className="w-fit flex items-center justify-center absolute bg-accent text-white rounded-md p-0.5 px-1 text-md font-sans font-bold">
          {text}
        </div>
      </span>
    </div>
  );
};

export default Tooltip;
