import Navbar from "./components/Navbar"; // Adjust the path based on your structure.

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";

import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Growth Partner",
  description: "Growth Partner is a leading agency for influencers. We create personalized strategies to boost marketing, increase sales, and achieve your goals. Contact us to grow your brand today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="page-body"
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-[70px] bg-slate-300 full-page-bg min-h-screen `}
      >
        <Navbar />
        {children}
        <Footer />
        
        <Toaster />

      </body>
    </html>
  );
}
