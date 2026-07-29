"use client";

import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl"
      >
        {/* Background Glow */}
        <div className="absolute -inset-4 -z-10 rounded-[40px] bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-pink-500/10 blur-3xl" />

          <div className="rounded-[32px] border border-white/10 bg-[#0B0B12]/80 p-6 shadow-[0_0_50px_rgba(168,85,247,.15)] backdrop-blur-xl transition-colors duration-300 hover:border-purple-500/25 sm:p-8 md:p-14">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#120C1D]/80 px-6 py-2 backdrop-blur-md">
              <span className="text-xs text-pink-400">✦</span>

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
                ABOUT ME
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-8 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Passionate about building modern web applications, AI-powered
              solutions, and data-driven software using clean architecture,
              scalable technologies, and exceptional user experiences.
            </p>

            {/* Divider */}
            <div className="mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
          </div>

          {/* About Content */}
          <div className="mx-auto mt-12 max-w-4xl text-center text-base leading-8 text-gray-300 sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {portfolioData.about.bio[0]}
            </motion.p>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,.45)]"
            >
              <FiCode className="text-lg" />
              Explore My Projects
            </motion.a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
