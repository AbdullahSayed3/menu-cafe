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
      <div className="flex-1 flex flex-col justify-center items-center py-4 sm:py-8 px-2 sm:px-4">
        <div className="w-full max-w-[95vw] sm:max-w-[550px] flex justify-center">
          <HTMLFlipBook
            ref={bookRef}
            width={typeof window !== 'undefined' && window.innerWidth < 640 ? Math.min(window.innerWidth * 0.85, 400) : 550}
            height={typeof window !== 'undefined' && window.innerWidth < 640 ? Math.min(window.innerWidth * 1.3, 600) : 750}
            size="stretch"
            minWidth={280}
            maxWidth={550}
            minHeight={400}
            maxHeight={750}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            usePortrait={typeof window !== 'undefined' && window.innerWidth < 640}
            startZIndex={0}
            autoSize={true}
            onFlip={handleFlip}
            className="mx-auto"
            style={{}}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
          {/* Cover Page */}
          <div data-density="hard">
            <div className="w-full h-full bg-gradient-to-br from-[#F5E6D3] to-[#E8D4B8] flex flex-col justify-center items-center text-center p-6 sm:p-10 relative">
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-t-2 border-[#8B4513]/30" />
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-t-2 border-[#8B4513]/30" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-b-2 border-[#8B4513]/30" />
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-b-2 border-[#8B4513]/30" />
              
              <Image
                src="/images/cover.jpg"
                alt="Dollar Cafe"
                width={120}
                height={120}
                className="object-cover rounded-full border-4 border-[#8B4513] shadow-xl mb-4 sm:mb-6 w-24 h-24 sm:w-40 sm:h-40"
                priority
              />
              <h1 className="text-2xl sm:text-4xl font-bold text-[#5D4037] mb-2 sm:mb-3 font-serif">Dollar Café</h1>
              <div className="w-20 sm:w-24 h-1 bg-[#8B4513] mx-auto mb-2 sm:mb-3 rounded-full" />
              <p className="text-[#8B4513] text-lg sm:text-xl font-semibold mb-1 sm:mb-2">قائمة الطعام</p>
              <p className="text-[#A0522D] text-sm sm:text-base italic">Our Complete Menu</p>
            </div>
          </div>

          {/* Menu Pages - كل category في صفحة واحدة مع scroll */}
          {menu.map((category, index) => (
            <div key={`cat-${index}`} data-density="soft">
              <div className="w-full h-full bg-[#F5E6D3] p-4 sm:p-8 flex flex-col relative">
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-t-2 border-[#8B4513]/30" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-t-2 border-[#8B4513]/30" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-b-2 border-[#8B4513]/30" />
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-b-2 border-[#8B4513]/30" />
                
                {/* Header - Fixed */}
                <div className="mb-4 sm:mb-6 text-center flex-shrink-0">
                  <h2 className="text-lg sm:text-2xl font-bold text-[#5D4037] mb-1 sm:mb-2 font-serif">
                    {category.category.en}
                  </h2>
                  <div className="w-16 sm:w-20 h-0.5 bg-[#8B4513] mx-auto mb-1 sm:mb-2" />
                  <h3 className="text-base sm:text-lg text-[#8B4513] font-semibold" style={{ direction: 'rtl' }}>
                    {category.category.ar}
                  </h3>
                </div>
                
                {/* Items - Scrollable */}
                <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    {category.items.map((item: any, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-1 sm:gap-2 border-b border-[#8B4513]/20 pb-2 sm:pb-3 hover:bg-[#8B4513]/5 rounded px-1 sm:px-2 transition-colors"
                      >
                        <span className="text-[#5D4037] font-medium text-[10px] sm:text-xs flex-1 leading-relaxed break-words">
                          {item.name.en}
                        </span>
                        <span className="border-b border-dotted border-[#8B4513]/40 w-4 sm:w-6 flex-shrink-0 mt-1 sm:mt-2" />
                        <span className="text-[#8B4513] font-bold text-xs sm:text-sm whitespace-nowrap flex-shrink-0">
                          {item.price}ج
                        </span>
                        <span className="border-b border-dotted border-[#8B4513]/40 w-4 sm:w-6 flex-shrink-0 mt-1 sm:mt-2" />
                        <span className="text-[#5D4037] font-medium text-[10px] sm:text-xs flex-1 text-right leading-relaxed break-words" style={{ direction: 'rtl' }}>
                          {item.name.ar}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Footer - Fixed */}
                <div className="text-center mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-[#8B4513]/20 flex-shrink-0">
                  <span className="text-[#8B4513]/60 text-xs sm:text-sm">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div data-density="hard">
            <div className="w-full h-full bg-gradient-to-br from-[#F5E6D3] to-[#E8D4B8] flex flex-col justify-center items-center text-center p-6 sm:p-10 relative">
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-t-2 border-[#8B4513]/30" />
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-t-2 border-[#8B4513]/30" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-b-2 border-[#8B4513]/30" />
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-b-2 border-[#8B4513]/30" />
              
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#8B4513] to-[#A0522D] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <span className="text-3xl sm:text-4xl">☕</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-[#5D4037] mb-2 sm:mb-3 font-serif">Thank You!</h3>
              <div className="w-16 sm:w-20 h-0.5 bg-[#8B4513] mx-auto mb-2 sm:mb-3 rounded-full" />
              <h4 className="text-xl sm:text-2xl font-semibold text-[#8B4513] mb-4 sm:mb-6" style={{ direction: 'rtl' }}>شكراً لزيارتكم</h4>
              
              <div className="mb-4 sm:mb-5 flex items-center gap-2 text-[#5D4037]">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-[#8B4513]" />
                <p className="text-xs sm:text-sm font-medium">Cairo, Egypt</p>
              </div>
              
              <div className="mb-3 sm:mb-4">
                <p className="text-[#A0522D] text-xs sm:text-sm mb-2 sm:mb-3">تابعونا على • Follow us</p>
                <div className="flex justify-center gap-3 sm:gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 sm:w-11 h-9 sm:h-11 bg-[#8B4513] hover:bg-[#A0522D] rounded-full flex items-center justify-center transition-colors shadow-md"
                  >
                    <Facebook className="w-4 sm:w-5 h-4 sm:h-5 text-white fill-current" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 sm:w-11 h-9 sm:h-11 bg-[#8B4513] hover:bg-[#A0522D] rounded-full flex items-center justify-center transition-colors shadow-md"
                  >
                    <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </a>
                  <a
                    href="https://wa.me/201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 sm:w-11 h-9 sm:h-11 bg-[#8B4513] hover:bg-[#A0522D] rounded-full flex items-center justify-center transition-colors shadow-md"
                  >
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-3 sm:mt-4">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#8B4513] rounded-full animate-pulse" />
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#A0522D] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#8B4513] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </HTMLFlipBook>
        </div>

        <div className="mt-4 sm:mt-6 text-center px-2">
          <p className="text-[#5D4037] text-xs sm:text-sm bg-white/80 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md inline-block">
            اضغط أو اسحب للتقليب • Click or swipe to flip
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
//comment to test preview