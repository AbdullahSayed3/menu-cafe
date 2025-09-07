import type { Metadata } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import "./globals.css";

// Loading Arabic-friendly Cairo font for better Arabic support
const cafeFont = Cairo({
  variable: "--font-cafe",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Decorative font for headings
const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dollar Café",
  description: "Welcome to Dollar Café - Explore our delicious menu | مرحباً بكم في دولار كافيه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${cafeFont.variable} ${displayFont.variable} antialiased no-scrollbar bg-background`}>
        {children}
      </body>
    </html>
  );
}