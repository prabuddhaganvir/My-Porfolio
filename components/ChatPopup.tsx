"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle } from "lucide-react";

export default function ChatPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    await fetch("/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    setLoading(false);
    setMessage("");
    setOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
                   bg-gradient-to-r from-blue-500 to-teal-400 
                   text-black flex items-center justify-center shadow-lg 
                   hover:scale-105 transition"
      >
        <MessageCircle size={24} />
      </button>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 bg-neutral-900/80 
                       backdrop-blur-xl rounded-2xl border border-white/10 
                       p-5 z-50 shadow-xl"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold">Let’s Talk</h3>
              <button onClick={() => setOpen(false)}>
                <X className="text-neutral-400 hover:text-white" size={20} />
              </button>
            </div>

            {/* Input */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl 
                         p-3 text-white placeholder:text-neutral-500 
                         focus:outline-none focus:border-teal-500/40"
              placeholder="Type your message…"
            />

            {/* Send */}
            <button
              disabled={loading}
              onClick={sendMessage}
              className="w-full mt-3 py-2 bg-gradient-to-r from-blue-500 to-teal-400 
                         text-black rounded-xl font-semibold 
                         hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"} 
              <Send size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
