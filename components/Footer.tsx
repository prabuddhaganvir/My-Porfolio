"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950">

      {/* Glow Behind Footer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 text-white">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Prabuddha Ganvir
              </span>
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              Full Stack Developer • Creating modern digital experiences
            </p>
          </div>

          {/* Social Icons */}
         <div className="flex gap-4">
                     <Social icon={<Github size={20} />} href="https://github.com/prabuddhaganvir"/>
                     <Social icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/prabuddha-ganvir-869a092a6/"/>
                     <Social icon={<Twitter size={20} />} href="https://x.com/ganvirprabuddha"  />
                   </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Prabuddha Ganvir. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ by Prabuddha</p>
        </div>

      </div>
    </footer>
  );
}

/* ------------------- COMPONENTS ------------------- */

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hover:text-teal-400 transition-colors"
    >
      {children}
    </Link>
  );
}

function Social({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full flex items-center justify-center 
                 bg-white/5 border border-white/10 text-neutral-400
                 hover:text-white hover:bg-white/10 hover:border-teal-500/40
                 transition-all"
    >
      {icon}
    </a>
  );
}
