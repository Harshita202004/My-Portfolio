"use client";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    const roles = portfolioData.typingRoles;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: number;

    const type = () => {
      const currentRole = roles[roleIndex];
      setTypedTitle(currentRole.slice(0, charIndex));

      if (!deleting && charIndex < currentRole.length) {
        charIndex += 1;
        timeout = window.setTimeout(type, 58);
        return;
      }

      if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        timeout = window.setTimeout(type, 1300);
        return;
      }

      if (deleting && charIndex > 0) {
        charIndex -= 1;
        timeout = window.setTimeout(type, 34);
        return;
      }

      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      timeout = window.setTimeout(type, 260);
    };

    type();

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 sm:pt-28">
      {/* Background flares */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      
      <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center z-10 p-safe">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <p className="text-xl md:text-2xl font-medium mb-2 text-white">
           Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"></span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              {portfolioData.name}
            </span>
          </h1>
          <h2 className="mb-6 min-h-[72px] text-2xl font-bold tracking-wide text-white md:min-h-[40px] md:text-3xl">
            <span className="inline-block w-full max-w-full">
              {typedTitle}
            </span>
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="ml-1 inline-block h-7 w-[2px] translate-y-1 bg-purple-300 md:h-8"
            />
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-light mb-8 max-w-lg leading-relaxed">
            {portfolioData.shortBio} I build stunning websites that rank higher and perform better. Let&apos;s create something amazing together!
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8 lg:justify-start">
            {portfolioData.heroSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -3, scale: 1.04 }}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80 backdrop-blur-sm cursor-pointer hover:bg-white/10 hover:border-pink-500/50 hover:shadow-[0_0_14px_rgba(236,72,153,0.32)] transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <motion.a whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#contact" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] mb-10 cursor-pointer">
            Get In Touch <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <div className="flex gap-4">
             {portfolioData.socials?.github && (
               <motion.a whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.94 }} href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-purple-500/30 text-white hover:bg-purple-500/20 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] cursor-pointer">
                 <FiGithub size={18} />
               </motion.a>
             )}
             {portfolioData.socials?.linkedin && (
               <motion.a whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.94 }} href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-purple-500/30 text-white hover:bg-purple-500/20 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] cursor-pointer">
                 <FiLinkedin size={18} />
               </motion.a>
             )}
           
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <motion.div
               whileHover={{
                 scale: 1.035,
                 rotateX: 3,
                 rotateY: -4,
                 boxShadow:
                   "0 0 76px rgba(168, 85, 247, 0.42), 0 0 130px rgba(236, 72, 153, 0.22), inset 0 0 24px rgba(168, 85, 247, 0.38)",
               }}
               transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
               className="group relative h-[240px] w-[240px] rounded-full p-[3px] will-change-transform sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[450px] md:p-1"
               style={{
                 background: "conic-gradient(from 180deg, rgba(168,85,247,0.15), rgba(236,72,153,0.75), rgba(59,130,246,0.65), rgba(168,85,247,0.15))",
                 boxShadow: "0 0 70px rgba(168, 85, 247, 0.35), 0 0 120px rgba(236, 72, 153, 0.18), inset 0 0 22px rgba(168, 85, 247, 0.35)",
               }}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-2 -z-10 rounded-full bg-[conic-gradient(from_90deg,rgba(236,72,153,.05),rgba(168,85,247,.42),rgba(59,130,246,.28),rgba(236,72,153,.05))] opacity-75 blur-sm transition-opacity duration-500 group-hover:opacity-100"
            />
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
