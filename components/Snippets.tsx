"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Code as CodeIcon, Copy, Check, ArrowRight } from "lucide-react";


// --------------------------------------
// Snippet Data (Add total 10 here)
// --------------------------------------

export const snippets = [
  // 1️⃣ Neon Gradient Button
  {
    id: "gradient-btn",
    title: "Neon Gradient Button",
    description: "A button with a smooth gradient glow effect on hover.",
    preview: (
      <button className="relative px-6 py-3 font-bold text-white rounded-lg group">
        <span className="absolute inset-0 -mt-1 rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-700 opacity-30"></span>
        <span className="relative z-10 px-6 py-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition">
          Hover Me
        </span>
        <span className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition"></span>
      </button>
    ),
    code: `<button className="relative group">...</button>`
  },

  // 2️⃣ Glassmorphism Card
  {
    id: "glass-card",
    title: "Glassmorphism Card",
    description: "Modern card with backdrop blur and border gradient.",
    preview: (
      <div className="relative w-48 h-32 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center">
        <span className="text-white/80 font-medium">Glass Card</span>
      </div>
    ),
    code: `<div className="bg-white/10 backdrop-blur-md rounded-xl">...</div>`
  },

  // 3️⃣ Animated Floating Label Input
  {
    id: "floating-input",
    title: "Floating Label Input",
    description: "Animated floating label input field.",
    preview: (
      <div className="relative">
        <input
          type="text"
          id="float"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none peer"
          placeholder=" "
        />
        <label
          htmlFor="float"
          className="absolute text-sm text-gray-500 bg-[#0a0a0a] px-2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 
          peer-focus:text-teal-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 left-1">
          Floating Label
        </label>
      </div>
    ),
    code: `<div className="relative">...</div>`
  },

  // 4️⃣ Shimmer Skeleton Loader
  {
    id: "skeleton-loader",
    title: "Skeleton Loader",
    description: "Useful shimmer placeholder for loading states.",
    preview: (
      <div className="w-48 h-20 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse"></div>
    ),
    code: `<div className="animate-pulse bg-gradient-to-r">...</div>`
  },

  // 5️⃣ Minimal Toggle Switch
  {
    id: "toggle-switch",
    title: "Toggle Switch",
    description: "A smooth, modern toggle switch component.",
    preview: (
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="hidden peer"/>
        <div className="w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-teal-500 relative transition">
          <div className="absolute left-1 top-1 bg-white peer-checked:translate-x-5 w-3.5 h-3.5 rounded-full transition"></div>
        </div>
      </label>
    ),
    code: `<label className="inline-flex items-center cursor-pointer">...</label>`
  },

  // 6️⃣ Modern Tooltip
  {
    id: "tooltip",
    title: "Tooltip",
    description: "Simple and elegant hover tooltip.",
    preview: (
      <div className="relative group inline-block">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md">Hover</button>
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Tooltip Text
        </span>
      </div>
    ),
    code: `<div className="relative group">...</div>`
  },

  // 7️⃣ Animated Loader Spin
  {
    id: "loader-circle",
    title: "Spinner Loader",
    description: "Classic spinning loader with gradient stroke.",
    preview: (
      <div className="w-10 h-10 border-4 border-gray-700 border-t-teal-400 rounded-full animate-spin"></div>
    ),
    code: `<div className="animate-spin border-t-teal-400">...</div>`
  },

  // 8️⃣ Gradient Divider Line
  {
    id: "gradient-divider",
    title: "Gradient Divider",
    description: "Perfect for separating sections in a UI.",
    preview: (
      <div className="h-[2px] w-64 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400"></div>
    ),
    code: `<div className="bg-gradient-to-r h-px">...</div>`
  },

  // 9️⃣ Modern Notification Toast
  {
    id: "toast-box",
    title: "Toast Notification",
    description: "Useful for alerts & success messages.",
    preview: (
      <div className="px-4 py-3 bg-gray-800 rounded-lg border border-teal-500 text-white w-56">
        🚀 Success! Your action was completed.
      </div>
    ),
    code: `<div className="px-4 py-3 bg-gray-800 rounded-lg">...</div>`
  },

  // 🔟 Animated Hover Card Lift
  {
    id: "hover-card",
    title: "Hover Lift Card",
    description: "Card floats upward slightly when hovered.",
    preview: (
      <div className="w-48 h-32 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-white shadow transition transform hover:-translate-y-2 hover:shadow-xl">
        Hover Me
      </div>
    ),
    code: `<div className="hover:-translate-y-2 transition">...</div>`
  },
];


// ---------------------------------------------------
// HOME SNIPPET SECTION (3 cards only)
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Snippets</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Hand-picked UI components ready to use.
          </p>
        </motion.div>

        {/* ONLY SHOW 3 SNIPPETS ON HOME */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snippets.slice(0, 3).map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </div>

        {/* SHOW MORE BUTTON → /snippets */}
       <div className="flex justify-center mt-10">
  <Link
    href="/snippets"
    className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 
               transition text-sm flex items-center gap-2"
  >
    Show More
    <ArrowRight size={16} />
  </Link>
</div>

      </div>
    </section>
  );
}

// ---------------------------------------------------
// SNIPPET CARD COMPONENT
// ---------------------------------------------------

export function SnippetCard({ snippet }: any) {
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
              <pre className="text-xs font-mono text-neutral-300"><code>{snippet.code}</code></pre>
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
