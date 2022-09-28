import Image from 'next/image';
import React from 'react';
import { Heading1 } from './Styles';

const WhatIs = () => {
  return (
    <div className="text-sm px-2 container max-w-7xl mx-auto py-4">
      <div className="bg-white md:flex md:justify-around md:items-center text-neutral-900 rounded-2xl mx-10 p-4">
        <div className="">
          <Heading1>
            What is
            <span className=" text-[#FF2B06] inline-block mx-2">
              TED<span className="text-sm text-[#FF2B06]">x</span>
            </span>
            North South University?
          </Heading1>

          <div className="space-y-4 md:max-w-sm px-4">
            <p>
              TEDxNorthSouthUniversity is an independently organized TED
              university event where the speakers will share their ideas of
              redefining the social boundaries with their ideas.
            </p>
            <p>
              It is believed that a curious mind can cause boundaries to
              dissolve. And, everything depends on perspective, especially when
              it comes to looking at our beliefs. How? You must attend this
              session if you want to hear knowledgeable people&apos;s responses
              to such questions. Join us to connect with others on a platform
              that allows you to feed your thoughts while broadening your
              perspective. We are excited to present our esteemed event TEDxNSU
              in the spirit of &apos;Ideas worth spreading&apos;. On our stage,
              this October, speakers and performers from various scientific
              disciplines, art, and culture will come together to provide you
              with an incredible time.
            </p>
          </div>
        </div>
        <div className="relative h-72 w-full mt-4 basis-1/2">
          <Image
            src="/nsu-front.png"
            layout="fill"
            objectFit="cover"
            alt="north south university"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
