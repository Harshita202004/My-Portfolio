"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaChartLine, FaLightbulb } from "react-icons/fa";

import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { portfolioData } from "@/data/portfolio";

const achievementIcons = [FaLightbulb, FaChartLine];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="MILESTONES"
          title="Key"
          highlight="Achievements"
          center
          subtitle="A few milestones that highlight my learning journey, technical growth, and passion for building impactful software."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.achievements.map((item, index) => {
            const Icon = achievementIcons[index] ?? FaLightbulb;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.012 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B12]/82 p-4 shadow-[0_0_34px_rgba(168,85,247,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-500 hover:border-purple-500/35 hover:bg-[#10101A]/86 hover:shadow-[0_0_48px_rgba(168,85,247,0.22)] sm:p-5"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
                <div className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-pink-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

                <div className="relative flex h-full flex-col">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center brightness-[0.86] contrast-105 saturate-115 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] group-hover:brightness-95 group-hover:saturate-125"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/12 via-purple-600/10 to-pink-500/12" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B12]/95 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-lg text-white shadow-lg shadow-purple-500/10 backdrop-blur-md transition duration-300 group-hover:border-purple-400/35 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_24px_rgba(168,85,247,0.2)]">
                      <Icon />
                    </div>
                    <span className="absolute bottom-4 left-4 rounded-full border border-purple-400/25 bg-black/45 px-3 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex-1 px-1 pb-2 pt-6">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-100">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
