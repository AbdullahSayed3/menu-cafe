'use client';
import Link from 'next/link';
import Image from 'next/image';
import coverImage from '@/public/images/cover.jpg';
import ThemeToggle from '@/components/theme-provider';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 text-center relative font-cafe">
      <ThemeToggle />
      <div className="mb-6">
        <Image
          src={coverImage}
          alt="Dollar Cafe Logo"
          width={200}
          height={200}
          className="rounded-md border-4 border-accent object-cover mx-auto"
          priority
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-accent drop-shadow-md leading-tight">
        Welcome<br />to<br />Dollar Café
      </h1>
      <Link
        href="/menu"
        className="bg-gradient-to-r from-[#e32372] to-[#a1f907] hover:from-[#cb2663] hover:to-[#8ce306] text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
        aria-label="View our menu"
      >
        Menu
      </Link>
    </div>
  );
}