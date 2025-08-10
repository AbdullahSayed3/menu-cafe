'use client';
import Link from 'next/link';
import Image from 'next/image';
import coverImage from '@/public/images/cover.jpg';
import ThemeToggle from '@/components/theme-provider';
import { Playfair_Display } from 'next/font/google';

const cafeFont = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col items-center bg-[#27252d] text-foreground p-6 relative ${cafeFont.className}`}>
      <ThemeToggle />
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#27252d] pt-4 pb-2 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src={coverImage}
            alt="Dollar Cafe Logo"
            width={50}
            height={50}
            className="object-cover rounded-md border border-[#cb2663]"
            priority
          />
          <h1 className="text-2xl font-bold text-white">Dollar Café</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
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
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#e32372] drop-shadow-md">
          Welcome to Dollar Café
        </h1>
        <Link
          href="/menu"
          className="bg-[#e32372] hover:bg-[#cb2663] text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e32372] focus:ring-opacity-50"
          aria-label="View our menu"
        >
          Menu
        </Link>
      </div>
    </div>
  );
}