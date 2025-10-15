'use client';
import MenuBook from "@/components/MenuBook";
import { Suspense } from "react";
import { Coffee, Star } from "lucide-react";

function MenuBookSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1EB] via-[#F9F6F1] to-[#F2EDE6] flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        {/* Header Skeleton */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Coffee className="w-6 h-6 text-[#8B4513] animate-pulse" />
            <div className="w-32 h-8 bg-[#8B4513]/20 rounded animate-pulse"></div>
            <Star className="w-5 h-5 text-[#D2B48C] animate-pulse" />
          </div>
          <div className="w-40 h-4 bg-[#8B7355]/20 rounded animate-pulse mx-auto"></div>
        </div>

        {/* Menu Book Skeleton */}
        <div className="bg-white rounded-2xl shadow-2xl border border-[#E8E0D5] overflow-hidden">
          {/* Category Header Skeleton */}
          <div className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] p-6 text-center">
            <div className="w-32 h-6 bg-white/20 rounded animate-pulse mx-auto mb-1"></div>
            <div className="w-24 h-5 bg-white/15 rounded animate-pulse mx-auto"></div>
          </div>

          {/* Items Skeleton */}
          <div className="p-6 min-h-[500px]">
            <div className="space-y-4">
              {[...Array(8)].map((_, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-[#FAF8F5] to-[#F7F4F0] rounded-xl border border-[#E8E0D5]"
                >
                  <div className="flex-1 text-left">
                    <div className="w-24 h-4 bg-[#5D4037]/20 rounded animate-pulse"></div>
                  </div>
                  <div className="px-4">
                    <div className="w-12 h-5 bg-[#8B4513]/20 rounded animate-pulse"></div>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="w-20 h-4 bg-[#5D4037]/20 rounded animate-pulse ml-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page Indicator Skeleton */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 bg-[#D2B48C]/50 rounded-full animate-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {/* Page Counter Skeleton */}
        <div className="text-center mt-4">
          <div className="w-48 h-4 bg-[#8B7355]/20 rounded animate-pulse mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<MenuBookSkeleton />}>
      <MenuBook />
    </Suspense>
  );
}