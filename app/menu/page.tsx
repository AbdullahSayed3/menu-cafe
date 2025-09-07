'use client';
import MenuBook from "@/components/MenuBook";
import { Suspense } from "react";

function MenuBookSkeleton() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="w-[500px] h-[700px] bg-card/50 rounded-lg shadow-2xl animate-pulse border border-border/20">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-48 h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded animate-pulse"></div>
            <div className="w-32 h-4 bg-muted rounded animate-pulse mx-auto"></div>
          </div>
          <div className="flex gap-2 mt-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
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