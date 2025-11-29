"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Code as CodeIcon, Copy, Check } from "lucide-react";

// --------------------------------------
// Snippet Data
// --------------------------------------

const snippets = [
  {
    id: "gradient-btn",
    title: "Neon Gradient Button",
    description: "A button with a smooth gradient glow effect on hover.",
    preview: (
      <button className="relative px-6 py-3 font-bold text-white rounded-lg group">
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative z-10 block px-6 py-3 rounded-lg bg-gray-900 leading-none group-hover:bg-gray-800 transition-colors">
          Hover Me
        </span>
        <span className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
        <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-20 transition duration-200"></span>
      </button>
    ),
    code: `<button className="relative group">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
  <div className="relative px-6 py-3 bg-black rounded-lg leading-none flex items-center">
    <span className="text-gray-200 group-hover:text-white transition">Hover Me</span>
  </div>
</button>`
  },

  {
    id: "glass-card",
    title: "Glassmorphism Card",
    description: "Modern card with backdrop blur and border gradient.",
    preview: (
      <div className="relative w-48 h-32 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center">
        <span className="text-white/80 font-medium">Glass Card</span>
      </div>
    ),
    code: `<div className="relative w-full p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
  <h3 className="text-white font-bold">Glass Effect</h3>
  <p className="text-white/70">Content goes here...</p>
</div>`
  },

  {
    id: "input-field",
    title: "Animated Input",
    description: "Input field with a floating label animation.",
    preview: (
      <div className="relative">
        <input 
          type="text" 
          id="floating_outlined" 
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-teal-400 peer" 
          placeholder=" " 
        />
        <label 
          htmlFor="floating_outlined" 
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#1a1a1a] px-2 peer-focus:px-2 peer-focus:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Floating Label
        </label>
      </div>
    ),
    code: `<div className="relative">
  <input type="text" id="input" className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-600 focus:border-teal-400 focus:ring-0 peer" placeholder=" " />
  <label htmlFor="input" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 bg-black px-2 peer-focus:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
    Floating Label
  </label>
</div>`
  }
];

// ---------------------------------------------------
// MAIN SNIPPET SECTION (default export)
// ---------------------------------------------------

export default function SnippetSection() {
  return (
    <section id="snippets" className="py-24 px-6 bg-neutral-950 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Snippets</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Hand-picked UI components ready to drop into your Next.js projects.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snippets.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------
// SNIPPET CARD COMPONENT
// ---------------------------------------------------

interface Snippet {
  id: string;
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

function SnippetCard({ snippet }: { snippet: Snippet }) {
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/30 transition shadow-xl flex flex-col"
    >
      {/* HEADER */}
      <div className="p-4 border-b border-white/5 bg-[#161616]">
        <h3 className="font-semibold text-white">{snippet.title}</h3>
        <p className="text-xs text-neutral-500 mt-1">{snippet.description}</p>
      </div>

      {/* TABS */}
      <div className="flex border-b border-white/5 text-sm">
        <button 
          onClick={() => setActiveTab("preview")}
          className={`flex-1 py-2 flex justify-center gap-2 transition ${activeTab === "preview" ? "bg-white/5 text-teal-400" : "text-neutral-500"}`}
        >
          <Eye size={14} /> Preview
        </button>

        <button 
          onClick={() => setActiveTab("code")}
          className={`flex-1 py-2 flex justify-center gap-2 transition ${activeTab === "code" ? "bg-white/5 text-purple-400" : "text-neutral-500"}`}
        >
          <CodeIcon size={14} /> Code
        </button>
      </div>

      {/* CONTENT */}
      <div className="relative min-h-[200px] flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-6 flex items-center justify-center bg-[#0a0a0a]"
            >
              {snippet.preview}
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-4 bg-[#0d0d0d] overflow-auto"
            >
              <pre className="text-xs font-mono text-neutral-300">
                <code>{snippet.code}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER */}
      <div className="p-3 bg-[#161616] border-t border-white/5 flex justify-end">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-neutral-300 transition"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </motion.div>
  );
}
