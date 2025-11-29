"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalBg() {
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Base Layer */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* GRID — DISABLE ON MOBILE */}
      {!isMobile && (
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
                linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
            bg-[size:24px_24px]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
            opacity-60
          "
        />
      )}

      {/* ORB 1 */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, isMobile ? 20 : 50, 0],
                y: [0, isMobile ? -20 : -50, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity }}
        className={`absolute top-[-20%] left-[-10%] ${
          isMobile ? "w-[300px] h-[300px] blur-[60px]" : "w-[800px] h-[800px] blur-[120px]"
        } bg-blue-700/20 rounded-full`}
      />

      {/* ORB 2 */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.5, 0.2],
                x: [0, isMobile ? -20 : -40, 0],
                y: [0, isMobile ? 30 : 60, 0],
              }
        }
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className={`absolute bottom-[-20%] right-[-10%] ${
          isMobile ? "w-[250px] h-[250px] blur-[50px]" : "w-[600px] h-[600px] blur-[120px]"
        } bg-teal-600/20 rounded-full`}
      />

      {/* ORB 3 */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                opacity: [0.1, 0.3, 0.1],
              }
        }
        transition={{ duration: 8, repeat: Infinity }}
        className={`absolute top-[30%] left-[50%] -translate-x-1/2 ${
          isMobile ? "w-[200px] h-[200px] blur-[50px]" : "w-[400px] h-[400px] blur-[100px]"
        } bg-emerald-500/10 rounded-full`}
      />
    </div>
  );
}
