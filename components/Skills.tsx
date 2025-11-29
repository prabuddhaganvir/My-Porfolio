'use client'

import { motion } from "framer-motion";
import { 
 Server, Layout,Cloud
} from "lucide-react";


export default function SkillsSection() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      description: "Building responsive, interactive UIs with modern frameworks.",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Redux"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-teal-400" />,
      description: "Creating scalable APIs, database architectures, and server logic.",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST API", "GraphQL", "Firebase", "Prisma"]
    },
    {
      title: "Tools & DevOps",
      icon: <Cloud className="w-6 h-6 text-emerald-400" />,
      description: "Streamlining deployment, version control, and cloud infrastructure.",
      skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD", "Figma", "Postman"]
    }
  ];

  return (
    <>
    <section id="skills" className="py-24 px-6 bg-neutral-950 relative z-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 ">Expertise</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolset for building robust full-stack applications from concept to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-teal-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                {cat.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors">
                {cat.title}
              </h3>
              
              <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 group-hover:border-teal-500/30 group-hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <div className="h-px w-full bg-white/10"></div>
    </>
  );
}