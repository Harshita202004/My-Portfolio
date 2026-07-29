"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX, FiZoomIn } from "react-icons/fi";

import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";

type Certificate = (typeof portfolioData.certifications)[number];

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <SectionWrapper id="certifications">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-400">
            ACHIEVEMENTS
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Certifications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Professional certifications and learning milestones that reflect my
            continuous growth in software development, AI and data analytics.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.015 }}
              onClick={() => setSelected(cert)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B12]/80 p-5 shadow-[0_0_26px_rgba(59,130,246,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-purple-500/35 hover:shadow-[0_0_34px_rgba(59,130,246,0.14)] sm:p-6"
            >
              <div className="relative mx-auto mb-5 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-3 brightness-95 contrast-110 saturate-110 transition duration-700 group-hover:scale-[1.035] group-hover:brightness-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/14 via-blue-600/8 to-purple-600/10 mix-blend-screen" />
                <div className="absolute right-2 top-2 rounded-full bg-black/60 p-2 opacity-0 transition group-hover:opacity-100">
                  <FiZoomIn className="text-pink-400" />
                </div>
              </div>

              <h3 className="text-center text-lg font-semibold text-white">
                {cert.title}
              </h3>

              <p className="mt-2 text-center text-sm text-gray-400">
                {cert.issuer}
              </p>

              <div className="mt-5 flex justify-center">
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .9, opacity: 0 }}
                onClick={(e)=>e.stopPropagation()}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B12]"
              >
                <button
                  onClick={()=>setSelected(null)}
                  className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-purple-600"
                >
                  <FiX />
                </button>

                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-contain p-3 brightness-105 contrast-110 sm:p-5"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-blue-500/8 mix-blend-screen" />
                </div>

                <div className="border-t border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {selected.title}
                  </h3>
                  <p className="mt-2 text-gray-400">
                    {selected.issuer}
                  </p>
                  <span className="mt-4 inline-block rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                    {selected.year}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
