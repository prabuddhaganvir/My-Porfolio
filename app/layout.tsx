import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GlobalBg from "@/components/GlobalBg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatPopup from "@/components/ChatPopup";
import UnderDevelopment from "@/components/UnderDevelopment";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prabuddha Ganvir - Portfolio",
  description: "Built with ❤️ by Prabuddha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
         <SmoothScroll />
         <GlobalBg />
          <UnderDevelopment />
         <ChatPopup />
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
