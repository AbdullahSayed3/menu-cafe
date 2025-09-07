'use client';

import HTMLFlipBook from "react-pageflip";
import menu from "@/lib/menuData";
import Image from "next/image";
import coverImage from '@/public/images/cover.jpg';
import { Heart } from 'lucide-react';

// Function to split large categories
const splitCategories = (categories: any[]) => {
  const splitPages: any[] = [];
  categories.forEach((cat) => {
    if (cat.items?.length > 10) {
      const part1 = { 
        ...cat, 
        category: { 
          ar: `${cat.category?.ar || 'غير محدد'} (جزء 1)`, 
          en: `${cat.category?.en || 'Undefined'} (Part 1)` 
        }, 
        items: cat.items.slice(0, 10) 
      };
      const part2 = { 
        ...cat, 
        category: { 
          ar: `${cat.category?.ar || 'غير محدد'} (جزء 2)`, 
          en: `${cat.category?.en || 'Undefined'} (Part 2)` 
        }, 
        items: cat.items.slice(10) 
      };
      splitPages.push(part1, part2);
    } else {
      splitPages.push({
        ...cat,
        category: cat.category || { ar: 'غير محدد', en: 'Undefined' }  
      });
    }
  });
  return splitPages;
};

const splitMenu = splitCategories(menu || []);

// Cover + Thank You Pages
const coverPage = { category: { ar: "دولار كافيه", en: "Dollar Café" }, isCover: true, items: [] };
const finalPage = { category: { ar: "شكراً لزيارتكم", en: "Thank You" }, isThankYou: true, items: [] };

const allPages = [coverPage, ...splitMenu, finalPage];

export default function MenuBook() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#F5F3F0] via-[#EFEBE6] to-[#E6DDD4] font-cafe p-2">
      <HTMLFlipBook
        width={320}
        height={500}
        size="fixed"
        minWidth={280}
        maxWidth={600}
        minHeight={400}
        maxHeight={600}
        usePortrait={false}
        mobileScrollSupport={true}
        className="shadow-2xl rounded-lg overflow-hidden"
      >
        {allPages.map((pageData, index) => (
          <div key={index} className="relative w-full h-full bg-gradient-to-br from-[#F5F3F0] via-[#EFEBE6] to-[#E6DDD4] p-3">
            
            {/* Cover Page */}
            {pageData.isCover ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
                <Image
                  src={coverImage}
                  alt="Dollar Cafe Logo"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-[#8B4513] shadow-2xl mb-6"
                />
                <h1 className="text-3xl font-bold text-[#8B4513] mb-2 font-display">Welcome to</h1>
                <h2 className="text-2xl text-[#CD853F]">{pageData.category?.en}</h2>
                <p className="text-lg text-[#5D4037] mt-2 rtl-text">أهلاً وسهلاً بكم في {pageData.category?.ar}</p>
              </div>
            ) 
            
            // Thank You Page
            : pageData.isThankYou ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-2xl font-bold text-[#8B4513] mb-4">{pageData.category?.en}</h2>
                <p className="text-lg rtl-text mb-4">{pageData.category?.ar}</p>
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-[#5D4037]">Made with ❤️ for coffee lovers</p>
              </div>
            ) 
            
            // Menu Pages
            : (
              <>
                {/* Category Image + Title */}
                <div className="mb-4 text-center">
                  <div className="relative">
                    <Image
                      src={pageData.image || pageData.items?.[0]?.image || '/images/placeholder-category.png'}
                      alt={pageData.category?.en || 'Category'}
                      width={260}
                      height={120}
                      className="mx-auto rounded-lg shadow-md object-cover h-[120px] w-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col items-center justify-center text-white">
                      <h2 className="text-lg font-bold font-display">{pageData.category?.en}</h2>
                      <h2 className="text-md font-semibold rtl-text">{pageData.category?.ar}</h2>
                    </div>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-2 max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8B4513]/40 pr-1">
                  {pageData.items?.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-[#D7CFC4]/50 py-2 text-sm">
                      <p className="rtl-text w-1/3 truncate text-[#2D1810] font-medium">{item.name?.ar}</p>
                      <span className="w-1/3 text-center text-[#8B4513] font-bold">{item.price ? `${item.price} EGP` : 'اسأل'}</span>
                      <p className="w-1/3 truncate text-left text-[#2D1810] font-medium">{item.name?.en}</p>
                    </div>
                  )) || <p className="text-center text-[#5D4037]">No items available</p>}
                </div>

                {/* Page Number */}
                <div className="absolute bottom-2 right-4 text-xs text-[#5D4037]/70">
                  Page {index + 1}
                </div>
              </>
            )}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
import { Coffee, Moon, Star, Sun } from "lucide-react";