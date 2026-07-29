"use client";
import { motion } from "framer-motion";
import { FaAward, FaLightbulb, FaLaptopCode, FaChartLine } from "react-icons/fa";

import SectionWrapper from "./SectionWrapper";

const achievements = [
  {
    title: "IDEATHON 2024",
    subtitle: "Engineering Innovation Event",
    description:
      "Participated in a team-based ideathon focused on solving real-world engineering problems through innovation and collaboration.",
    icon: FaLightbulb,
    image: "/images/ideathon.jpg",
  },
  {
    title: "Power BI Workshop",
    subtitle: "VertechX",
    description:
      "Completed a hands-on workshop covering dashboard creation, data visualization, and business intelligence concepts using Power BI.",
    icon: FaChartLine,
    image: "/images/vertex.jpg",
  },
];

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
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#0B0B12]/80 p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-2xl text-white shadow-lg">
                    <Icon />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-purple-400">
                      {item.subtitle}
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
