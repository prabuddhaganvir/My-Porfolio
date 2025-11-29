"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function UnderDevelopment() {
  const [show, setShow] = useState(false);

  // Auto show after 300ms when user visits
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Background Blur Layer */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       bg-neutral-900/90 backdrop-blur-xl border border-white/10 
                       p-8 rounded-2xl shadow-xl max-w-md w-full"
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-3">
              🚧 Under Development
            </h2>

            <p className="text-neutral-300 leading-relaxed">
              Hey! This website is currently being improved.  
              Some sections may not be fully finished yet — thanks for your patience. 🙏
            </p>

            <button
              onClick={() => setShow(false)}
              className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 
                         text-black font-semibold rounded-xl hover:opacity-90 transition"
            >
              Continue
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
