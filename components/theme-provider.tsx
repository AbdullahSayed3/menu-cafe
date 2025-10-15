'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Coffee } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-[#F9F6F1] rounded-full animate-pulse border border-[#E8E0D5]"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center w-14 h-8 bg-gradient-to-r from-[#8B4513]/20 to-[#CD853F]/20 rounded-full border-2 border-[#8B4513]/30 transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#8B4513]/20"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Track */}
      <div className="absolute inset-1 bg-gradient-to-r from-background to-card rounded-full"></div>
      
      {/* Slider */}
      <div
        className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-[#8B4513] to-[#CD853F] shadow-lg transform transition-all duration-500 ${
          isDark ? 'translate-x-6' : 'translate-x-1'
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-white" />
        )}
      </div>
      
      {/* Background Icons */}
      <Coffee 
        className={`absolute left-2 w-3 h-3 text-[#8B4513]/60 transition-opacity duration-300 ${
          isDark ? 'opacity-30' : 'opacity-60'
        }`} 
      />
      <Moon 
        className={`absolute right-2 w-3 h-3 text-[#CD853F]/60 transition-opacity duration-300 ${
          isDark ? 'opacity-60' : 'opacity-30'
        }`} 
      />
    </button>
  );
}