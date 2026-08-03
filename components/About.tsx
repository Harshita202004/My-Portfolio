"use client";

import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
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
        <div className="absolute -inset-4 -z-10 rounded-[40px] bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-pink-500/10 blur-3xl" />

        <div className="rounded-[32px] border border-white/10 bg-[#0B0B12]/80 p-6 shadow-[0_0_50px_rgba(168,85,247,.15)] backdrop-blur-xl transition-colors duration-300 hover:border-purple-500/25 sm:p-8 md:p-14">
          <SectionHeading
            eyebrow="Overview"
            title="About"
            highlight="Me"
            center
          />

          <div className="mx-auto max-w-4xl text-center text-base leading-8 text-gray-300 sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {portfolioData.about.bio[0]}
            </motion.p>
          </div>

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
