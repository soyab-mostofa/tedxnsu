import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import Partners from '../components/Partners';
import WhatIs from '../components/WhatIs';

export default function Home() {
  return (
    <div className="text-neutral-100 w-full bg-neutral-900">
      <NavBar />
      <HeroSection />
      <WhatIs />
      <Partners />
    </div>
  );
}
