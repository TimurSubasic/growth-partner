import Navbar from "./components/Navbar"; // Adjust the path based on your structure.

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Growth Partners",
  description: "Growth Partners website for Influencers that want to grow their following",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="page-body"
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-[70px] full-page-bg-1 bg-slate-300 min-h-screen `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
