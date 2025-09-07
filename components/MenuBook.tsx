'use client';

import menu from "@/lib/menuData";
import HTMLFlipBook from "react-pageflip"; 
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function MenuBook() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-background via-muted/30 to-background font-cafe relative">
      {/* Navigation Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 px-4 py-2 rounded-full shadow-lg border border-border"
      >
        <ArrowLeft className="w-4 h-4 text-foreground" />
        <Home className="w-4 h-4 text-foreground" />
        <span className="text-sm font-medium text-foreground hidden sm:block">Home</span>
      </Link>

      <HTMLFlipBook
        width={500}
        height={700}
        size="stretch"
        minWidth={300}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        maxShadowOpacity={0.3}
        showCover={true}
        className="shadow-2xl page-flip-shadow"
      >
        {/* Cover Page */}
        <div className="bg-gradient-to-br from-card to-muted flex flex-col justify-center items-center text-center p-8 relative overflow-hidden border border-border/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-accent rounded-full"></div>
            <div className="absolute top-1/2 left-4 w-12 h-12 border border-primary rotate-45"></div>
          </div>
          
          <div className="relative z-10">
            <Image
              src="/images/cover.jpg"
              alt="Dollar Cafe Logo"
              width={180}
              height={180}
              className="object-cover rounded-full border-4 border-primary shadow-lg mb-6"
              priority
            />
            <h1 className="text-4xl font-bold text-primary mb-2 font-display">
              Dollar Café
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-muted-foreground text-lg">
              Welcome / أهلاً وسهلاً
            </p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              Experience the finest coffee & treats
            </p>
          </div>
        </div>

        {/* Menu Pages */}
        {menu.map((section, index) => (
          <div
            key={section.category.en}
            className="relative bg-gradient-to-br from-card to-background p-8 flex flex-col justify-start border border-border/10"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute top-4 right-4 w-32 h-32 border border-primary/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 border border-accent/20 rotate-45"></div>
            </div>

            {/* Page Header */}
            <div className="relative z-10 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-primary mb-2 font-display">
                {section.category.en}
              </h2>
              <h3 className="text-xl text-accent font-semibold rtl-text mb-4">
                {section.category.ar}
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            {/* Items List */}
            <div className="flex flex-col gap-3 relative z-10 overflow-y-auto max-h-[500px] no-scrollbar">
              {section.items.map((item, itemIndex) => (
                <div
                  key={`${item.name.en}-${itemIndex}`}
                  className="group flex justify-between items-center text-foreground border-b border-border/30 pb-3 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-base group-hover:text-primary transition-colors truncate">
                        {item.name.en}
                      </span>
                      <span className="text-sm text-accent rtl-text font-medium truncate">
                        {item.name.ar}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-muted-foreground mt-1 rtl-text">
                        {item.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                    <span className="font-bold text-lg text-primary group-hover:scale-110 transition-transform">
                      {item.price}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      EGP
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Page Footer */}
            <div className="mt-auto pt-4 relative z-10">
              <div className="flex justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-primary rounded-full opacity-50"></div>
                  <div className="w-1 h-1 bg-accent rounded-full opacity-70"></div>
                  <div className="w-1 h-1 bg-primary rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Back Cover */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col justify-center items-center text-center p-8 relative overflow-hidden border border-border/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-accent rotate-45"></div>
          </div>
          
          <div className="relative z-10">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4 font-display">
              Thank You!
            </h3>
            <h4 className="text-xl font-semibold text-accent mb-4 rtl-text">
              شكراً لزيارتكم
            </h4>
            
            <div className="space-y-2 text-muted-foreground">
              <p className="text-sm">Follow us on social media</p>
              <p className="text-xs">تابعونا على وسائل التواصل الاجتماعي</p>
            </div>
            
            <div className="mt-6 flex justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}