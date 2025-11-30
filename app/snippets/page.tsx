"use client";

import { motion } from "framer-motion";
import { SnippetCard, snippets } from "@/components/Snippets";

export default function AllSnippetsPage() {
  return (
    <section className="relative py-24 px-6 min-h-screen overflow-hidden bg-[#0c0c0c]">

      {/* ⭐ CLEAR & VISIBLE ANIMATED GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="
            absolute inset-0 
            bg-[linear-gradient(to_right,#2d2d2d_2px,transparent_2px),linear-gradient(to_bottom,#2d2d2d_2px,transparent_2px)]
            bg-[size:50px_50px]
          "
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* ⭐ Visible wave line */}
      <motion.svg
        className="absolute top-28 inset-x-0 w-full h-32 opacity-30"
        viewBox="0 0 1440 200"
        animate={{
          x: ["0%", "-8%", "0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M0 100 C 300 40, 600 160, 900 80 S 1400 140, 1600 60"
          fill="none"
          stroke="#3b3b3b"
          strokeWidth="3"
        />
      </motion.svg>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto z-10">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            All Code{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Snippets
            </span>
          </h2>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snippets.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </div>

      </div>
    </section>
  );
}
