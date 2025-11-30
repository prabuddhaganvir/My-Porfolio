"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

// -------------------------------------
// FULL PROJECT LIST (Export this)
// -------------------------------------
export const projects = [
  {
    title: "Ebookszon – Digital Ebook Selling Platform ",
    description: "A digital ebook marketplace with instant delivery, secure payments, and a full admin system for managing products and orders.",
    tags: ["React", "JWT", "Tailwind", "Node", "express", "MongoDB"],
    link: "https://ebookszon.com",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Streamify – A language Exchange Web App",
    description: "Streamify web app is language learning platform to connect people around the world for live language exchange.",
    tags: ["React", "Node.js", "Stream.io", "Cloudinary", "Express", "JavaScript"],
    link: "https://streamify-7rh7.onrender.com/login",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    title: "Golf Tour - Tournament",
    description: "A sleek parallax-based landing page for a golf tour tournament.",
    tags: ["CSS", "HTML", "JavaScript"],
    link: "https://lucent-cassata-b2339e.netlify.app/",
    gradient: "from-orange-400 to-red-500"
  },
  {
    title: "ImageX – Image Searching",
    description: "An image search app utilizing the Unsplash API.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://imagex-byprabuddha-43a423.netlify.app",
    gradient: "from-indigo-400 to-cyan-400"
  },
  
];


// -------------------------------------
// PROJECT CARD (reusable)
// -------------------------------------
export function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-300 shadow-xl"
    >
      {/* Window */}
      <div className="h-48 overflow-hidden relative bg-[#0a0a0a] group-hover:bg-[#0f0f0f] transition-colors border-b border-white/5">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition`} />
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 2 }}
          className={`absolute inset-0 flex items-center justify-center`}
        >
          <div className={`w-3/4 h-3/4 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80`} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition">
            {project.title}
          </h3>

          <div className="flex gap-3">
            <a className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full" title="View Code">
              <Github size={18} />
            </a>
            <a href={project.link} className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full" title="Live Demo">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="text-neutral-400 mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}


// -------------------------------------
// HOME SECTION (4 PROJECTS ONLY)
// -------------------------------------
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Projects</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development and UI design.
          </p>
        </motion.div>
        

        {/* Only 4 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* View All */}
              <div className="flex justify-center mt-10">
  <Link
    href="/snippets"
    className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 
               transition text-sm flex items-center gap-2"
  >
    View All Projects
    <ArrowRight size={16} />
  </Link>
</div>

      </div>
    </section>
  );
}
