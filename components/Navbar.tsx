"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // << IMPORTANT
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // << GET CURRENT ROUTE

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Snippet", href: "/snippets" },
  
  ];

  return (
    <>
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-transparent ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4 "
          : "py-6 overflow-hidden border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center ">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-teal-500/20">
            P
          </div>
          <span className="group-hover:text-teal-400 transition-colors text-white">
            Prabuddha.Dev
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; // << ACTIVE LOGIC

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium relative transition-colors ${
                  isActive
                    ? "text-teal-400"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}

                {/* underline animation */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 rounded-full transition-all
                    bg-gradient-to-r from-blue-400 to-teal-400
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}

          <button className="px-5 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/50 rounded-full transition-all text-white hover:shadow-[0_0_15px_rgba(45,212,191,0.2)]">
            Let's Talk
          </button>
        </div>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-400 hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-neutral-950 border-b border-white/10 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium block py-2 transition-colors ${
                    isActive
                      ? "text-teal-400"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
    <div className="h-px w-full bg-white/10"></div>
     </>
  );
}
