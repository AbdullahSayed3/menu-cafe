'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menu from "@/lib/menuData";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import ThemeToggle from "@/components/theme-provider";

const cafeFont = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

export default function MenuPage() {
  return (
    <div className={`max-w-7xl mx-auto px-4 py-6 bg-[#27252d] min-h-screen ${cafeFont.className}`}>
      <ThemeToggle />
      <Tabs defaultValue={menu[0].category.en} className="w-full">
        {/* Sticky Header & Tabs */}
        <div className="sticky top-0 z-50 bg-[#27252d] pt-4 pb-2">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/images/cover.jpg"
              alt="Dollar Cafe Logo"
              width={50}
              height={50}
              className="object-cover rounded-md border border-[#cb2663]"
              priority
            />
            <h1 className="text-2xl font-bold text-white">Dollar Café</h1>
          </div>
          <div className="overflow-x-auto no-scrollbar pb-1">
            <TabsList className="min-w-max inline-flex gap-2 bg-[#6d6f76] p-2 rounded-lg w-full border-b-2 border-[#cb2663]">
              {menu.map((section) => (
                <TabsTrigger
                  key={section.category.en}
                  value={section.category.en}
                  className="px-4 py-2 text-sm whitespace-nowrap rounded-md text-white font-semibold transition-colors duration-200 bg-transparent hover:bg-[#cb2663] hover:text-white data-[state=active]:bg-[#cb2663] data-[state=active]:text-white"
                >
                  {section.category.ar} / {section.category.en}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
        {/* Menu Items */}
        {menu.map((section) => (
          <TabsContent key={section.category.en} value={section.category.en} className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {section.items.map((item) => (
                <Card
                  key={item.name.en}
                  className="flex flex-col items-center p-4 rounded-xl border border-[#ffffff20] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-card"
                >
                  <Image
                    src={item.image.startsWith("/") ? item.image : `/${item.image}`}
                    alt={`${item.name.en} - ${item.name.ar}`}
                    width={130}
                    height={130}
                    className="w-32 h-32 object-cover rounded-3xl border border-[#cb2663]/20 shadow-[0_4px_14px_rgba(0,0,0,0.15)] mb-2 transition-all duration-300"
                  />
                  <CardContent className="text-center p-0 pt-1 w-full space-y-1">
                    <h3 className="text-sm font-bold text-card-foreground leading-snug tracking-wide">
                      {item.name.ar} / {item.name.en}
                    </h3>
                    {item.price && (
                      <p className="text-[#cb2663] font-extrabold text-sm">{item.price} EGP</p>
                    )}
                    {item.description && (
                      <p className="text-[12px] text-muted-foreground leading-tight italic">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}