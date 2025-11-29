 'use client'
 import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import {  X, 
  Terminal,  Maximize2, Minus,
  
} from "lucide-react";

 
 export default function ConsoleSection() {
  const [text, setText] = useState("");
  const fullText = "npm install full-stack-developer\n> Installing Skills...\n> React.js... Done\n> Next.js... Done\n> Node.js... Done\n> Tailwind CSS... Done\n> MongoDB... Done\n> Setup Complete.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="console" className="py-20 px-6 relative z-20">
       <div className="max-w-4xl mx-auto">
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10"
         >
            {/* Terminal Header */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-neutral-400 text-xs font-mono flex items-center gap-2">
                <Terminal size={12} />
                developer-profile — -zsh — 80x24
              </div>
              <div className="flex gap-4 opacity-50">
                <Minus size={12} />
                <Maximize2 size={12} />
                <X size={12} />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm md:text-base h-80 overflow-y-auto">
              <div className="text-emerald-400 mb-2">
                user@portfolio:~$ <span className="text-white">whoami</span>
              </div>
              <div className="text-neutral-300 mb-6">
                Prabuddha Ganvir. Creative Developer based in India.
              </div>

              <div className="text-emerald-400 mb-2">
                user@portfolio:~$ <span className="text-white">./init-skills.sh</span>
              </div>
              
              <div className="text-neutral-300 whitespace-pre-line leading-relaxed">
                {text}
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-teal-400 ml-1 align-middle"
                />
              </div>
            </div>
         </motion.div>
       </div>
    </section>
  );
}