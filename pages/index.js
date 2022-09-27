import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="text-neutral-100 w-full bg-neutral-900">
      <NavBar />
      <HeroSection />
    </div>
  );
}
