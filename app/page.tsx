'use client';
import Link from 'next/link';
import Image from 'next/image';
import coverImage from '@/public/images/cover.jpg';
import ThemeToggle from '@/components/theme-provider';
import { Coffee, Menu, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-background via-muted/20 to-background text-foreground p-6 relative font-cafe">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/10 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border border-accent/10 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-primary/10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-16 h-16 border border-accent/10 rotate-45"></div>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm pt-4 pb-2 w-full max-w-7xl mx-auto border-b border-border/20">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative">
            <Image
              src={coverImage}
              alt="Dollar Cafe Logo"
              width={50}
              height={50}
              className="object-cover rounded-full border-2 border-primary shadow-md"
              priority
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
              <Coffee className="w-2 h-2 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary font-display">Dollar Café</h1>
            <p className="text-xs text-muted-foreground">Premium Coffee Experience</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative">
            <Image
              src={coverImage}
              alt="Dollar Cafe Logo"
              width={220}
              height={220}
              className="rounded-full border-4 border-primary object-cover mx-auto shadow-2xl group-hover:scale-105 transition-transform duration-500"
              priority
            />
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
              <Coffee className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display">
            <span className="coffee-text-gradient">Welcome to</span>
            <br />
            <span className="text-primary">Dollar Café</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          
          <p className="text-xl md:text-2xl text-accent font-semibold rtl-text mb-4">
            أهلاً وسهلاً بكم في دولار كافيه
          </p>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the finest selection of premium coffee, fresh juices, delicious desserts, and more in a cozy atmosphere perfect for any time of day.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
          {[
            { icon: Coffee, title: "Premium Coffee", desc: "Freshly brewed perfection" },
            { icon: Menu, title: "Varied Menu", desc: "Something for everyone" },
            { icon: Star, title: "Quality Service", desc: "Excellence in every cup" }
          ].map((feature, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30 shadow-xl hover:shadow-2xl"
            aria-label="View our menu"
          >
            <Menu className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Explore Menu</span>
            <span className="text-sm opacity-80">قائمة الطعام</span>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            Tap to discover our delicious offerings
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center">
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2024 Dollar Café. Crafted with ❤️ for coffee lovers.
        </p>
      </div>
    </div>
  );
}