'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, MapPin, Facebook, Instagram, Phone } from 'lucide-react';
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';
import menu from '@/lib/menuData';

export default function MenuBook() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);
  const bookRef = useRef<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const goToCategory = (catIndex: number) => {
    setCurrentCategory(catIndex);
    
    if (bookRef.current) {
      try {
        // Find the correct page number for this category
        // Cover is page 0, first category starts at page 1
        const pageNumber = catIndex + 1;
        
        console.log('Going to category:', catIndex, 'Page:', pageNumber);
        
        const flipBook = bookRef.current.pageFlip();
        if (flipBook && flipBook.turnToPage) {
          flipBook.turnToPage(pageNumber);
        }
      } catch (e) {
        console.error('Flip error:', e);
      }
    }
  };

  const handleFlip = (e: any) => {
    const pageNum = e?.data || 0;
    // Update current category based on page (page 0 = cover, page 1+ = categories)
    if (pageNum > 0 && pageNum <= menu.length) {
      setCurrentCategory(pageNum - 1);
    }
  };

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#D4B896]">
        <div className="text-[#5D4037] text-xl">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#D4B896] to-[#C4A886] font-cafe relative">
      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#5D4037]/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-white/90 hover:bg-white transition-all px-3 py-2 rounded-full shadow-md flex-shrink-0"
          >
            <Home className="w-4 h-4 text-[#5D4037]" />
            <span className="text-xs font-medium text-[#5D4037] hidden sm:inline">الرئيسية</span>
          </Link>

          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2">
              {menu.map((category, index) => (
                <button
                  key={index}
                  onClick={() => goToCategory(index)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    currentCategory === index
                      ? 'bg-[#8B4513] text-white shadow-md'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                  style={{ direction: 'rtl' }}
                >
                  {category.category.ar}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Book Container */}
      <div className="flex-1 flex flex-col justify-center items-center py-8 px-4">
        <HTMLFlipBook
          ref={bookRef}
          width={550}
          height={750}
          size="stretch"
          minWidth={350}
          maxWidth={550}
          minHeight={500}
          maxHeight={750}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          startPage={0}
          drawShadow={true}
          flippingTime={800}
          usePortrait={false}
          startZIndex={0}
          autoSize={false}
          maxAngle={15}
          onFlip={handleFlip}
        >
          {/* Cover Page */}
          <div data-density="hard">
            <div className="w-full h-full bg-gradient-to-br from-[#F5E6D3] to-[#E8D4B8] flex flex-col justify-center items-center text-center p-10 relative">
              <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#8B4513]/30" />
              <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[#8B4513]/30" />
              <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[#8B4513]/30" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#8B4513]/30" />
              
              <Image
                src="/images/cover.jpg"
                alt="Dollar Cafe"
                width={160}
                height={160}
                className="object-cover rounded-full border-4 border-[#8B4513] shadow-xl mb-6"
                priority
              />
              <h1 className="text-4xl font-bold text-[#5D4037] mb-3 font-serif">Dollar Café</h1>
              <div className="w-24 h-1 bg-[#8B4513] mx-auto mb-3 rounded-full" />
              <p className="text-[#8B4513] text-xl font-semibold mb-2">قائمة الطعام</p>
              <p className="text-[#A0522D] text-base italic">Our Complete Menu</p>
            </div>
          </div>

          {/* Menu Pages - كل category في صفحة واحدة مع scroll */}
          {menu.map((category, index) => (
            <div key={`cat-${index}`} data-density="soft">
              <div className="w-full h-full bg-[#F5E6D3] p-8 flex flex-col relative">
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#8B4513]/30" />
                <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-[#8B4513]/30" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#8B4513]/30" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#8B4513]/30" />
                
                {/* Header - Fixed */}
                <div className="mb-6 text-center flex-shrink-0">
                  <h2 className="text-2xl font-bold text-[#5D4037] mb-2 font-serif">
                    {category.category.en}
                  </h2>
                  <div className="w-20 h-0.5 bg-[#8B4513] mx-auto mb-2" />
                  <h3 className="text-lg text-[#8B4513] font-semibold" style={{ direction: 'rtl' }}>
                    {category.category.ar}
                  </h3>
                </div>
                
                {/* Items - Scrollable */}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <div className="flex flex-col gap-3">
                    {category.items.map((item: any, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 border-b border-[#8B4513]/20 pb-3 hover:bg-[#8B4513]/5 rounded px-2 transition-colors"
                      >
                        <span className="text-[#5D4037] font-medium text-xs flex-1 leading-relaxed break-words">
                          {item.name.en}
                        </span>
                        <span className="border-b border-dotted border-[#8B4513]/40 w-6 flex-shrink-0 mt-2" />
                        <span className="text-[#8B4513] font-bold text-sm whitespace-nowrap flex-shrink-0">
                          {item.price}ج
                        </span>
                        <span className="border-b border-dotted border-[#8B4513]/40 w-6 flex-shrink-0 mt-2" />
                        <span className="text-[#5D4037] font-medium text-xs flex-1 text-right leading-relaxed break-words" style={{ direction: 'rtl' }}>
                          {item.name.ar}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Footer - Fixed */}
                <div className="text-center mt-4 pt-3 border-t border-[#8B4513]/20 flex-shrink-0">
                  <span className="text-[#8B4513]/60 text-sm">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div data-density="hard">
            <div className="w-full h-full bg-gradient-to-br from-[#F5E6D3] to-[#E8D4B8] flex flex-col justify-center items-center text-center p-10 relative">
              <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#8B4513]/30" />
              <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[#8B4513]/30" />
              <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[#8B4513]/30" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#8B4513]/30" />
              
              <div className="w-20 h-20 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">☕</span>
              </div>
              
              <h3 className="text-3xl font-bold text-[#5D4037] mb-3 font-serif">Thank You!</h3>
              <div className="w-20 h-0.5 bg-[#8B4513] mx-auto mb-3 rounded-full" />
              <h4 className="text-2xl font-semibold text-[#8B4513] mb-6" style={{ direction: 'rtl' }}>شكراً لزيارتكم</h4>
              
              <div className="mb-5 flex items-center gap-2 text-[#5D4037]">
                <MapPin className="w-5 h-5 text-[#8B4513]" />
                <p className="text-sm font-medium">Cairo, Egypt</p>
              </div>
              
              <div className="mb-4">
                <p className="text-[#A0522D] text-sm mb-3">تابعونا على • Follow us</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[#8B4513] hover:bg-[#A0522D] rounded-full flex items-center justify-center transition-colors shadow-md"
                  >
                    <Facebook className="w-5 h-5 text-white fill-current" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[#8B4513] hover:bg-[#A0522D] rounded-full flex items-center justify-center transition-colors shadow-md"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://wa.me/201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[#8B4513] hover:bg-[#A0522D] rounded-full flex items-center justify-center transition-colors shadow-md"
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2.5 h-2.5 bg-[#8B4513] rounded-full animate-pulse" />
                <div className="w-2.5 h-2.5 bg-[#A0522D] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2.5 h-2.5 bg-[#8B4513] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </HTMLFlipBook>

        <div className="mt-6 text-center">
          <p className="text-[#5D4037] text-sm bg-white/80 px-6 py-3 rounded-full shadow-md inline-block">
            اضغط على الصفحة أو اسحب للتقليب • Click or swipe to flip
          </p>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F5E6D3;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8B4513;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #A0522D;
        }
      `}</style>
    </div>
  );
}