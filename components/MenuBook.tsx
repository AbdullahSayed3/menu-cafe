'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Coffee, Star } from 'lucide-react';
import menu from '@/lib/menuData'; // Your existing menu data

export default function MenuBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const categories = menu;
  const totalPages = categories.length;

  const flipToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection(null);
        }, 200);
      }, 400);
    }
  };

  const flipToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection(null);
        }, 200);
      }, 400);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
    const offset = touchEndX.current - touchStartX.current;
    setDragOffset(Math.max(-100, Math.min(100, offset)));
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        flipToNextPage();
      } else {
        flipToPrevPage();
      }
    }
    
    setDragOffset(0);
  };

  const currentCategory = categories[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1EB] via-[#F9F6F1] to-[#F2EDE6] flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="relative">
              <Coffee className="w-8 h-8 text-[#8B4513]" />
              <div className="absolute inset-0 w-8 h-8 bg-[#8B4513]/20 rounded-full blur-md"></div>
            </div>
            <h1 className="text-3xl font-bold text-[#8B4513] tracking-wide font-display">
              Dollar Café
            </h1>
            <div className="relative">
              <Star className="w-7 h-7 text-[#D2B48C] fill-current" />
              <div className="absolute inset-0 w-7 h-7 bg-[#D2B48C]/20 rounded-full blur-md"></div>
            </div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#CD853F] mx-auto mb-3 rounded-full"></div>
          <p className="text-sm text-[#8B7355] font-medium tracking-wide">قائمة الطعام • Menu</p>
        </div>

        {/* Enhanced Menu Book Container */}
        <div className="relative">
          {/* Book Shadow - Enhanced with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/15 rounded-3xl blur-2xl translate-y-6 scale-105"></div>
          <div className="absolute inset-0 bg-black/10 rounded-2xl blur-xl translate-y-4 scale-102"></div>
          
          {/* Main Book */}
          <div 
            className={`relative bg-white rounded-3xl border-2 border-[#E8E0D5] overflow-hidden transform-gpu transition-all duration-500 ${
              isFlipping ? 'scale-[0.98] shadow-2xl' : 'scale-100 shadow-3xl'
            }`}
            style={{
              transform: `translateX(${dragOffset * 0.5}px) rotateY(${dragOffset * 0.2}deg)`,
              backgroundImage: `
                radial-gradient(circle at 100% 50%, transparent 20px, rgba(232, 224, 213, 0.3) 21px),
                linear-gradient(90deg, rgba(139, 69, 19, 0.03) 0%, transparent 8%),
                radial-gradient(circle at 50% 100%, rgba(139, 69, 19, 0.02) 0%, transparent 50%)
              `,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Enhanced Binding Edge */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#8B4513]/8 via-[#8B4513]/4 to-transparent">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-[#8B4513]/10"></div>
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#8B4513]/5"></div>
            </div>
            
            {/* Page flip animation container */}
            <div className={`relative overflow-hidden transition-all duration-600 ease-out ${
              isFlipping 
                ? (flipDirection === 'next' 
                    ? 'transform rotateY-[15deg] scale-x-95' 
                    : 'transform rotateY-[15deg] scale-x-95') 
                : 'transform rotateY-0 scale-x-100'
            }`}>
              
              {/* Enhanced Category Header */}
              <div className="relative bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#8B4513] text-white px-8 py-8">
                {/* Texture overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.08"%3E%3Cpath d="m0 60 60-60v60z"/%3E%3Cpath d="M60 0v60L0 0z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
                
                <div className="relative text-center">
                  <div className="mb-3">
                    <h2 className="text-2xl font-bold tracking-wide font-display drop-shadow-sm">
                      {currentCategory.category.en}
                    </h2>
                  </div>
                  <div className="w-16 h-0.5 bg-white/60 mx-auto mb-3 rounded-full"></div>
                  <p className="text-lg opacity-90 font-medium rtl tracking-wide" style={{ direction: 'rtl' }}>
                    {currentCategory.category.ar}
                  </p>
                </div>
                
                {/* Enhanced Page Number */}
                <div className="absolute top-6 right-8 text-white/40 text-xs font-medium tracking-wider">
                  {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-white/20"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-white/20"></div>
              </div>

              {/* Enhanced Menu Items Section */}
              <div className="relative px-8 py-8 min-h-[520px] bg-gradient-to-b from-[#FEFDFB] to-[#FAF8F5]">
                {/* Paper texture */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')] mix-blend-multiply"></div>
                
                <div className="relative space-y-1">
                  {currentCategory.items.map((item, index) => (
                    <div 
                      key={index}
                      className="group relative py-4 px-1 border-b border-[#E8E0D5]/40 hover:bg-[#F9F6F1]/60 transition-all duration-300 rounded-xl hover:px-4 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        {/* English Name */}
                        <div className="flex-1 text-left pr-2">
                          <h3 className="font-semibold text-[#3E2723] text-base leading-relaxed group-hover:text-[#8B4513] transition-colors duration-200">
                            {item.name.en}
                          </h3>
                        </div>

                        {/* Enhanced Dotted Line */}
                        <div className="flex-1 mx-3 relative">
                          <div className="border-b border-dotted border-[#D2B48C]/60 w-full"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5F1EB]/80 to-transparent"></div>
                        </div>

                        {/* Enhanced Price */}
                        <div className="text-center min-w-[80px]">
                          <div className="inline-flex items-baseline gap-1 bg-[#F9F6F1]/80 px-3 py-1 rounded-full border border-[#E8E0D5]/50">
                            <span className="text-[#8B4513] font-bold text-lg">
                              {item.price ? `${item.price}` : 'سؤال'}
                            </span>
                            {item.price && (
                              <span className="text-[#A0522D] text-xs font-medium uppercase tracking-wide">
                                EGP
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arabic Name */}
                        <div className="flex-1 text-right pl-3">
                          <h3 className="font-semibold text-[#3E2723] text-base leading-relaxed group-hover:text-[#8B4513] transition-colors duration-200 rtl" style={{ direction: 'rtl' }}>
                            {item.name.ar}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Page decoration */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#D2B48C]/50 to-transparent"></div>
                  <div className="flex justify-center mt-4">
                    <div className="w-8 h-1 bg-[#D2B48C]/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Buttons */}
            {currentPage > 0 && (
              <button
                onClick={flipToPrevPage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/98 hover:bg-white rounded-full shadow-xl border-2 border-[#E8E0D5] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-[#D2B48C] group"
                disabled={isFlipping}
              >
                <ChevronLeft className="w-7 h-7 text-[#8B4513] group-hover:text-[#CD853F] transition-colors" />
              </button>
            )}

            {currentPage < totalPages - 1 && (
              <button
                onClick={flipToNextPage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/98 hover:bg-white rounded-full shadow-xl border-2 border-[#E8E0D5] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-[#D2B48C] group"
                disabled={isFlipping}
              >
                <ChevronRight className="w-7 h-7 text-[#8B4513] group-hover:text-[#CD853F] transition-colors" />
              </button>
            )}
          </div>
        </div>

        {/* Enhanced Page Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => !isFlipping && setCurrentPage(index)}
              className={`relative transition-all duration-400 ${
                index === currentPage 
                  ? 'w-8 h-3 bg-[#8B4513] rounded-full shadow-lg scale-110' 
                  : 'w-3 h-3 bg-[#D2B48C] rounded-full hover:bg-[#CD853F] hover:scale-125 hover:shadow-md'
              }`}
              disabled={isFlipping}
            >
              {index === currentPage && (
                <div className="absolute inset-0 bg-[#CD853F] rounded-full animate-pulse opacity-50"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Page Counter */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#E8E0D5] shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
              <p className="text-sm text-[#8B7355] font-medium">
                Page {currentPage + 1} of {totalPages}
              </p>
            </div>
            <div className="w-px h-4 bg-[#E8E0D5]"></div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-[#8B7355] font-medium rtl" style={{ direction: 'rtl' }}>
                صفحة {currentPage + 1} من {totalPages}
              </p>
              <div className="w-2 h-2 bg-[#D2B48C] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Ambient lighting effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#8B4513]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#CD853F]/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}