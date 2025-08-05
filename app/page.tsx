'use client';

import Link from 'next/link';
import Image from 'next/image';
import coverImage from '@/public/images/cover.jpg';

export default function Home() {
  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-[#27252d] text-white p-6 text-center relative">
  <div className="mb-6">
    <Image
      src={coverImage}
      alt="Dollar Cafe Logo"
      width={200}
      height={200}
      className="rounded-md border-4 border-[#cb2663] object-cover mx-auto"
      priority
    />
  </div>

  <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#cb2663] drop-shadow-md">
    Welcome to Dollar Café
  </h1>

  <Link
    href="/menu"
    className="bg-[#cb2663] hover:bg-[#6d6f76] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#cb2663] focus:ring-opacity-50"
    aria-label="View our menu"
  >
    Menu
  </Link>
</div>

  );
}
