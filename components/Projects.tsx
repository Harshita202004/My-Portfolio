"use client";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiX, FiZoomIn } from "react-icons/fi";

type Project = typeof portfolioData.projects[0];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Featured Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.filter(p => p.featured).map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-[#0B0C10] border border-white/10 hover:border-pink-500/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] overflow-hidden rounded-2xl flex flex-col hover:-translate-y-2 transition-all duration-300"
          >
            {/* Browser Frame Mockup */}
            <div
              className="relative w-full bg-[#1a1b23] border-b border-white/5 group-hover:border-pink-500/20 transition-colors cursor-pointer"
              onClick={() => setSelected(project)}
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111218] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <div className="ml-2 flex-1 bg-white/5 rounded px-2 py-0.5 text-[9px] text-gray-500 truncate">
                  {project.live ?? project.github ?? "localhost:3000"}
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative w-full h-44 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-pink-500/20 font-bold text-4xl">NO IMG</div>
                )}
                {/* Zoom overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                  <FiZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
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
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] py-2 rounded-lg text-sm font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    <FiExternalLink size={13} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-transparent border border-white/20 text-white hover:border-pink-500/50 hover:bg-white/5 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105 cursor-pointer"
                  >
                    <FiGithub size={13} /> GitHub
                  </a>
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
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
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
                    sizes="(max-width: 768px) 100vw, 800px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                )}
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
