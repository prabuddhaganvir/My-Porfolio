
'use client'
import  Console  from "@/components/Console";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, Cpu, Mail } from "lucide-react";
import Link  from "next/link";


 export default function Hero() {
  return (
    <>
   
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden text-white mt-24 sm:mt-0">
      {/* --- Dynamic Background Elements --- */}
      
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 " />

      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-700/20 rounded-full blur-[120px] pointer-events-none"
      />
    
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px] pointer-events-none"
      />
    
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />


      {/* --- Content --- */}
      
      <div className="flex flex-wrap justify-center ">
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl px-4"
      >
        {/* Badge / Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm text-xs font-medium text-neutral-400 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Available for Hire
        </motion.div>

        {/* Main Heading with Gradient Text */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          I Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400">
            Modern & Scalable
          </span>
          <br />
          Web Experiences
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer specializing in crafting high-performance applications with Next.js, MERN Stack, and intuitive UI/UX design.
        </p>

        {/* Tech Stack Icons (Optional enhancement) */}
        <div className="flex justify-center gap-6 mb-12 text-neutral-500">
           <Code2 size={24} strokeWidth={1.5} />
           <Layers size={24} strokeWidth={1.5} />
           <Cpu size={24} strokeWidth={1.5} />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <Link  href="/projects">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden flex items-center gap-2"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.button>
          </Link>
           <Link  href="mailto:prabuddhapg12@gmail.com">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-neutral-700 hover:border-neutral-500 text-white rounded-full font-medium transition-colors flex items-center gap-2"
          >
           
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
            
          </motion.button>
          </Link>
        </div>
      </motion.div>

       <motion.div>
        <Console />
       </motion.div>
      </div>
     

    </section>
    <div className="h-px w-full bg-white/10"></div>
     </>
    
  );
}