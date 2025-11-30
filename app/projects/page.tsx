"use client";

import { motion } from "framer-motion";
import { ProjectCard, projects } from "@/components/Projects";

export default function AllProjectsPage() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] min-h-screen relative overflow-hidden">

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

      {/* ⭐ Keep your glow */}
      <motion.div
        animate={{ x: ["-10%", "10%", "-10%"], y: ["-5%", "5%", "-5%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[900px] h-[900px] bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-[160px] -top-40 -left-40 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
        >
          All{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Projects
          </span>
        </motion.h1>
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
