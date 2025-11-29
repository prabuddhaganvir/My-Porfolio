"use client";


import { motion}from "framer-motion";
import { 
  ArrowRight,  ExternalLink, Github
} from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Nebula Stream",
      description: "A high-performance video streaming platform with real-time chat and AI-driven content recommendations.",
      tags: ["Next.js", "WebRTC", "PostgreSQL", "Tailwind"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "EcoMarket",
      description: "Sustainable e-commerce marketplace featuring carbon footprint tracking and blockchain verification.",
      tags: ["React", "Node.js", "Solidity", "Stripe"],
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      title: "TaskFlow AI",
      description: "Intelligent project management tool that auto-generates subtasks using LLMs and visualizes progress.",
      tags: ["TypeScript", "OpenAI API", "MongoDB", "Framer"],
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "DevSocial",
      description: "Social network specifically for developers to share code snippets, collaborate, and find mentors.",
      tags: ["MERN Stack", "Socket.io", "Redis", "AWS"],
      gradient: "from-indigo-400 to-cyan-400"
    }
  ];

  return (
    <>
    <section id="projects" className="py-24 px-6 border-t bg-transparent border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-300 shadow-xl"
            >
              {/* Project Preview "Window" */}
              <div className="h-48 overflow-hidden relative bg-[#0a0a0a] group-hover:bg-[#0f0f0f] transition-colors border-b border-white/5">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                        className={`w-3/4 h-3/4 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80 shadow-2xl flex items-center justify-center`}
                    >
                        <div className="text-white/50 mix-blend-overlay font-bold text-2xl tracking-widest uppercase">
                            Preview
                        </div>
                    </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        <a href="#" className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all" title="View Code">
                            <Github size={18} />
                        </a>
                        <a href="#" className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Live Demo">
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
                
                <p className="text-neutral-400 mb-6 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-neutral-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <button className="px-8 py-3 rounded-full border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10 text-white transition-all flex items-center gap-2 mx-auto">
                View All Projects <ArrowRight size={16} />
             </button>
        </div>
      </div>
    </section>
      <div className="h-px w-full bg-white/10"></div>
    </>
  );
}