"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Twitter 
} from "lucide-react";

export default function ContactSection() {
  return (
    <>
    
    <section id="contact" className="py-24 px-6 bg-transparent relative z-20 overflow-hidden text-white">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] 
                      pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

        {/* ------- LEFT INFO ------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Together
            </span>
          </h2>

          <p className="text-neutral-400 text-lg mb-8 max-w-md">
            Have a project in mind or just want to chat? Feel free to reach out. 
            I'm open to new projects, collaborations, creative ideas or opportunities.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-teal-400">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">
                  Email
                </div>
                <div className="font-medium">prabuddhpg12@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <SocialButton icon={<Github size={20} />} href="https://github.com/prabuddhaganvir" label="GitHub" />
            <SocialButton icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/prabuddha-ganvir-869a092a6/" label="LinkedIn" />
            <SocialButton icon={<Twitter size={20} />} href="https://x.com/ganvirprabuddha" label="Twitter" />
          </div>
        </motion.div>

        {/* ------- RIGHT FORM ------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl relative"
        >
          <form className="space-y-6">

            <div className="grid grid-cols-2 gap-6">
              <InputGroup label="Name" placeholder="John Doe" />
              <InputGroup label="Email" placeholder="john@example.com" type="email" />
            </div>

            <InputGroup label="Subject" placeholder="Project Inquiry" />

            <TextAreaGroup label="Message" placeholder="Tell me about your project..." />

            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-teal-500 
                               rounded-xl font-bold text-black hover:opacity-90 
                               transition-opacity flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>

          </form>
        </motion.div>

      </div>
    </section>
          <div className="h-px w-full bg-white/10"></div>
    </>

    
  );
}
/* ---------------------- SOCIAL BUTTON ---------------------- */
function SocialButton({ icon, href, label }: { icon: ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      title={label}
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 
                 flex items-center justify-center text-neutral-400 
                 hover:text-white hover:bg-white/10 hover:border-teal-500/50 
                 transition-all"
    >
      {icon}
    </a>
  );
}

/* ---------------------- INPUT GROUP ---------------------- */
function InputGroup({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-neutral-400">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                   text-white focus:outline-none focus:border-teal-500/50 
                   focus:bg-white/10 transition-all placeholder:text-neutral-600"
      />
    </div>
  );
}

/* ---------------------- TEXTAREA GROUP ---------------------- */
function TextAreaGroup({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-neutral-400">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                   text-white focus:outline-none focus:border-teal-500/50 
                   focus:bg-white/10 transition-all placeholder:text-neutral-600 
                   resize-none"
      />
    </div>
  );
}

