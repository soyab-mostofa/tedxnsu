import Image from 'next/image';
import React from 'react';
import { Heading1 } from './Styles';

const partners = [
  { 'Gold Partner': '/dekko' },
  { 'Silver Partner': '/bproperty' },
  { 'Bronze Partner': '/dekko' },
];

const PartnerCard = ({ partner }) => {
  console.log(Object.keys(partner));
  return (
    <div>
      <div className="p-4 relative before:left-0 before:top-0 before:bg-white before:absolute before:h-full before:w-full">
        <div className="relative h-20  w-20">
          <Image
            src={`${Object.values(partner)}.png`}
            layout="fill"
            objectFit="contain"
            alt="north south university"
          />
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold">{Object.keys(partner)}</p>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="text-center px-2 container max-w-7xl mx-auto py-32">
      <Heading1>Our Partners</Heading1>
      <div className="space-y-16 md:space-y-0 mt-10 justify-around flex flex-col items-center md:flex-row">
        {partners.map((partner, key) => (
          <PartnerCard key={key} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
