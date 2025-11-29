import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import  Contact  from "@/components/Contact";


export default function Home() {
  return (
    <>
    <div className="w-full h-full overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
     
    </>
  );
}
