"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaChartLine } from "react-icons/fa";

import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";

const achievementIcons = [FaLightbulb, FaChartLine];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-400">
            MILESTONES
          </p>

          <h2 className="mt-3 bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Achievements
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A few milestones that highlight my learning journey, technical
            growth, and passion for building impactful software.
          </p>
        </div>

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
                whileHover={{ y: -7, scale: 1.008 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B12]/80 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all duration-300 hover:border-purple-500/35 hover:bg-[#10101A]/82 hover:shadow-[0_0_42px_rgba(168,85,247,0.2)] sm:p-6 lg:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:w-40 sm:shrink-0">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      quality={75}
                      sizes="(max-width: 640px) 100vw, 160px"
                      className="scale-110 object-cover object-center opacity-50 blur-md"
                      aria-hidden="true"
                    />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={95}
                      sizes="(max-width: 640px) 100vw, 160px"
                      className="object-cover object-center brightness-90 saturate-125 blur-[1px] transition duration-700 group-hover:scale-105 group-hover:blur-0 group-hover:brightness-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/18 via-purple-600/12 to-pink-500/12 mix-blend-screen" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0B12]/85 to-transparent" />
                    <div className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/45 text-lg text-white shadow-lg shadow-purple-500/10 backdrop-blur-md transition duration-300 group-hover:border-purple-400/30 group-hover:bg-purple-500/20">
                      <Icon />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-purple-400">
                      {item.year}
                    </p>

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
