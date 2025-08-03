'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menu from "@/lib/menuData";
import Image from 'next/image';

export default function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <Image
          src="/images/cover.jpg"
          alt="Dollar Cafe Logo"
          width={50}
          height={50}
          className="object-cover rounded-md border border-[#dcb066]"
          priority
        />
        <h1 className="text-2xl font-bold text-[#102c20]">Dollar Café</h1>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue={menu[0].category.en} className="w-full">
<div className="overflow-x-auto no-scrollbar w-full pb-2">
  <TabsList className="min-w-max inline-flex gap-2 bg-[#102c20] p-2 rounded-lg w-full border-b-2 border-[#dcb066]">
    {menu.map((section) => (
      <TabsTrigger
        key={section.category.en}
        value={section.category.en}
        className="px-4 py-2 text-sm whitespace-nowrap rounded-md text-white font-semibold transition-colors duration-200 bg-transparent hover:bg-[#dcb066] hover:text-[#102c20] data-[state=active]:bg-[#dcb066] data-[state=active]:text-[#102c20]"
      >
        {section.category.ar} / {section.category.en}
      </TabsTrigger>
    ))}
  </TabsList>
</div>

        {/* Menu Items */}
        {menu.map((section) => (
          <TabsContent key={section.category.en} value={section.category.en} className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {section.items.map((item) => (
<Card
  key={item.name.en}
  className="flex flex-col items-center p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 bg-white"
>
  <Image
    src={item.image.startsWith("/") ? item.image : `/${item.image}`}
    alt={`${item.name.en} - ${item.name.ar}`}
    width={96}
    height={96}
    className="w-24 h-24 object-cover rounded-md bg-[#f3f3f3] mb-2"
  />

  <CardContent className="text-center p-0 pt-1 w-full space-y-1">
    <h3 className="text-sm font-semibold text-[#102c20] leading-snug">
      {item.name.ar} / {item.name.en}
    </h3>

    {item.price && (
      <p className="text-[#dcb066] font-bold text-sm">{item.price} EGP</p>
    )}

    {item.description && (
      <p className="text-[11px] text-[#9e977d] leading-tight">{item.description}</p>
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
