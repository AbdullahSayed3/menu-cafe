import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

// Loading Lora font for a café aesthetic
const cafeFont = Lora({
  variable: "--font-cafe",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dollar Café",
  description: "Welcome to Dollar Café - Explore our delicious menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${cafeFont.variable} antialiased no-scrollbar bg-background`}>
        {children}
      </body>
    </html>
  );
}