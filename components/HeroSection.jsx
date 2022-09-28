import Image from 'next/image';
import React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
const HeroSection = () => {
  return (
    <div className="relative z-10 py-32 overflow-hidden">
      <div className="absolute -left-[200px] md:-left-[100px] top-10 h-80 w-80 -z-10">
        <Image src="/arrow.svg.svg" alt="pattern" layout="fill" />
      </div>
      <div className="absolute -right-[200px] md:-right-[100px]  top-10 rotate-180 h-80 w-80 -z-10">
        <Image src="/arrow.svg.svg" alt="pattern" layout="fill" />
      </div>

      <h1 className="text-3xl font-bold text-center pt-10 ">
        Envisioning a better tomorrow
      </h1>
      <div className="pt-80 text-sm space-y-16 px-4 md:flex md:space-y-0 md:justify-around md:items-center">
        <div>
          <AiTwotoneCalendar size={32} />
          <span>
            <p className="font-bold">27th september 2022</p>
            <p className="text-sm">Time: 9:00 am - 6:30 pm GMT +6</p>
          </span>
        </div>
        <div>
          <FaLocationArrow size={32} />
          <span>
            <p className="font-bold">AUDI 801, Plot#15, Block-C</p>
            <p>Bashundhara, Dhaka-1229</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
