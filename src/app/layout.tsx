import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";
import { twMerge } from "tailwind-merge"

const dmSans = localFont({ src: '../fonts/DMSans.ttf' })

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
