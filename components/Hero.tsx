"use client";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background flares */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      
      <div className="max-w-6xl mx-auto px-5 w-full grid lg:grid-cols-2 gap-12 items-center z-10 p-safe">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start text-left">
          <p className="text-xl md:text-2xl font-medium mb-2 text-white">
           Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"></span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              {portfolioData.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-wide">
            {portfolioData.title}
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-light mb-8 max-w-lg leading-relaxed">
            {portfolioData.shortBio} I build stunning websites that rank higher and perform better. Let&apos;s create something amazing together!
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {portfolioData.skills.slice(0, 4).map((skill) => (
              <span key={skill.name} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80 backdrop-blur-sm cursor-pointer hover:bg-white/10 hover:border-pink-500/50 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all">
                {skill.name}
              </span>
            ))}
          </div>

          <a href="#contact" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] hover:scale-105 mb-10 cursor-pointer">
            Get In Touch <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex gap-4">
             {portfolioData.socials?.github && (
               <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-purple-500/30 text-white hover:bg-purple-500/20 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] cursor-pointer">
                 <FiGithub size={18} />
               </a>
             )}
             {portfolioData.socials?.linkedin && (
               <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-purple-500/30 text-white hover:bg-purple-500/20 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] cursor-pointer">
                 <FiLinkedin size={18} />
               </a>
             )}
           
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full p-2" 
               style={{
                 background: "linear-gradient(135deg, rgba(236, 72, 153, 0.5), rgba(168, 85, 247, 0.5))",
                 boxShadow: "0 0 60px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.5)",
                 border: "2px solid rgba(236,72,153,0.3)"
               }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0A0A] relative border-[4px] border-[#0A0A0A]">
              <Image
  src={portfolioData.avatarUrl}
  alt={portfolioData.name}
  fill
  priority
  sizes="(max-width: 768px) 300px, 450px"
  className="
    object-cover
    object-top
    scale-105
    brightness-105
    contrast-110
    saturate-110
    transition-all
    duration-700
    ease-out
    hover:scale-110
    hover:brightness-110
    hover:saturate-125
    cursor-pointer
  "
/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
