import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <div className="h-20 px-4 mx-auto max-w-7xl container flex items-center justify-between">
      <Image
        src="/tedx-nsu-logo.png"
        objectFit="cover"
        alt="logo"
        width="200px"
        height="25px"
      />

      <ul className="text-neutral-100 justify-between text-sm md:flex capitalize items-center hidden">
        <li className="cursor-pointer p-2 hover:opacity-80 transition-all">
          watch
        </li>
        <li className="cursor-pointer p-2 hover:opacity-80 transition-all">
          About
        </li>
        <li className="cursor-pointer p-2 hover:opacity-80 transition-all">
          Speakers
        </li>
        <li className="cursor-pointer p-2 hover:opacity-80 transition-all">
          Organizers
        </li>
        <li className="cursor-pointer p-2 hover:opacity-80 transition-all">
          Registration
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
