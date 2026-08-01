"use client";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiX, FiZoomIn } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

type Project = typeof portfolioData.projects[0];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="PORTFOLIO"
        title="Featured"
        highlight="Projects"
        center
        subtitle="Selected projects that combine clean interfaces, practical engineering, and data-driven problem solving."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {portfolioData.projects.filter(p => p.featured).map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C10]/92 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-pink-500/45 hover:shadow-[0_0_36px_rgba(236,72,153,0.22)]"
          >
            {/* Browser Frame Mockup */}
            <div
              className="relative w-full bg-[#1a1b23] border-b border-white/5 group-hover:border-pink-500/20 transition-colors cursor-pointer"
              onClick={() => setSelected(project)}
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111218] border-b border-white/5">
                <span className="h-2.5 w-2.5 rounded-full border border-pink-300/30 bg-pink-400/25 shadow-[0_0_10px_rgba(244,114,182,0.35)]" />
                <span className="h-2.5 w-2.5 rounded-full border border-purple-300/30 bg-purple-400/25 shadow-[0_0_10px_rgba(168,85,247,0.35)]" />
                <span className="h-2.5 w-2.5 rounded-full border border-sky-300/30 bg-sky-400/25 shadow-[0_0_10px_rgba(56,189,248,0.35)]" />
                <div className="ml-2 flex-1 bg-white/5 rounded px-2 py-0.5 text-[9px] text-gray-500 truncate ring-1 ring-white/5">
                  {project.live ?? project.github ?? "localhost:3000"}
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:h-44">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top brightness-[0.82] contrast-105 saturate-115 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] group-hover:brightness-95 group-hover:saturate-125"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-pink-500/20 font-bold text-4xl">NO IMG</div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/16 via-purple-600/10 to-pink-500/12 transition-opacity duration-500 group-hover:opacity-65" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0C10]/88 to-transparent" />
                {/* Zoom overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/16">
                  <FiZoomIn size={28} className="text-white opacity-0 drop-shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-5 flex-1 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold px-2.5 py-1 bg-white/5 text-pink-300 rounded-full border border-pink-500/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.live && (
                  <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href={project.live} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] py-2 rounded-lg text-sm font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    <FiExternalLink size={13} /> Live Demo
                  </motion.a>
                )}
                {project.github && (
                  <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href={project.github} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-transparent border border-white/20 text-white hover:border-pink-500/50 hover:bg-white/5 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    <FiGithub size={13} /> GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0B0C10] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.3)] max-w-3xl w-full"
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-pink-500/30 hover:border-pink-500/50 transition-all"
              >
                <FiX size={18} />
              </button>

              {/* Browser frame */}
              <div className="bg-[#111218] border-b border-white/10">
                <div className="flex items-center gap-1.5 px-4 py-2.5">
                  <span className="h-3 w-3 rounded-full border border-pink-300/30 bg-pink-400/25 shadow-[0_0_10px_rgba(244,114,182,0.35)]" />
                  <span className="h-3 w-3 rounded-full border border-purple-300/30 bg-purple-400/25 shadow-[0_0_10px_rgba(168,85,247,0.35)]" />
                  <span className="h-3 w-3 rounded-full border border-sky-300/30 bg-sky-400/25 shadow-[0_0_10px_rgba(56,189,248,0.35)]" />
                  <div className="ml-3 flex-1 bg-white/5 rounded px-3 py-1 text-xs text-gray-400 truncate">
                    {selected.live ?? selected.github ?? "localhost:3000"}
                  </div>
                </div>
              </div>

              {/* Full screenshot */}
              <div className="relative w-full aspect-video">
                {selected.image && (
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 800px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-blue-500/10 mix-blend-screen" />
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-white/10">
                <h3 className="text-white font-bold text-lg mb-1">{selected.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold px-2.5 py-1 bg-white/5 text-pink-300 rounded-full border border-pink-500/20">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {selected.live && (
                    <a href={selected.live} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-sm font-bold hover:scale-105 transition-all"
                    >
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {selected.github && (
                    <a href={selected.github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-bold hover:border-pink-500/50 hover:bg-white/5 transition-all"
                    >
                      <FiGithub size={13} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
