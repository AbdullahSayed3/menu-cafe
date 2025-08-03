'use client';

import Link from 'next/link';
import Image from 'next/image';
import coverImage from '@/public/images/cover.jpg';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#102c20] text-white p-6 text-center relative">
      {/* Logo Centered at Top */}
      <div className="mb-6">
        <Image
          src={coverImage}
          alt="Dollar Cafe Logo"
          width={200}
          height={200}
          className="rounded-md border-4 border-[#dbb166] object-cover mx-auto"
          priority
        />
      </div>

      {/* Welcome Message */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#dbb166] drop-shadow-md">
        Welcome to Dollar Café
      </h1>

      {/* Menu Button */}
      <Link
        href="/menu"
        className="bg-[#dbb166] hover:bg-[#caa850] text-[#102c20] px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#dbb166] focus:ring-opacity-50"
        aria-label="View our menu"
      >
        المنيو / Menu
      </Link>
    </div>
  );
}
