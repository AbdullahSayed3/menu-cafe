'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load saved theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all duration-200 z-60 flex items-center gap-2"
    >
      <span className={`text-[1.2em] ${theme === 'light' ? 'filter invert brightness-0' : 'filter grayscale brightness-0'}`}>
        {theme === 'light' ? '☀️' : '🌙'}
      </span>
      {theme === 'light' ?  'Light': 'Dark'}
    </button>
  );
}