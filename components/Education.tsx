"use client";

import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="ACADEMICS"
        title="Education"
        highlight="Journey"
        center
        subtitle="My academic foundation and continuous pursuit of knowledge in computer science, software engineering, AI, and data analytics."
      />

      <div className="mx-auto max-w-5xl space-y-8">
  {[
    {
  institution: "MVJ College of Engineering",
  degree: "Bachelor of Engineering in Computer Science Engineering",
  duration: "2023 – 2027",
  score: "CGPA: 9.04",
  icon: FaUniversity,
  description:
    "Building a strong foundation in software engineering, full stack development, AI, cloud computing, and data analytics.",
},
{
  institution: "PECT College, Raichur",
  degree: "Pre-University Course (PUC)",
  duration: "2022",
  score: "95%",
  icon: FaBookOpen,
  description:
    "Completed PCMB with a strong foundation in science, mathematics, and analytical problem-solving.",
},
{
  institution: "Hamdard School, Raichur",
  degree: "Secondary School Leaving Certificate (SSLC)",
  duration: "2020",
  score: "88%",
  icon: FaSchool,
  description:
    "Completed secondary education with strong academic performance and active participation in extracurricular activities.",
},
  ].map((edu, index) => (
    <motion.div
      key={edu.institution}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.005 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.12)] transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_44px_rgba(168,85,247,0.17)] sm:p-8"
    >
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
  <edu.icon className="h-9 w-9 sm:h-10 sm:w-10" />
</div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white">
            {edu.institution}
          </h3>

          <p className="mt-2 text-lg font-medium text-purple-300">
            {edu.degree}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <Calendar size={16} />
              <span>{edu.duration}</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <Award size={16} />
              <span>{edu.score}</span>
            </div>
          </div>

          <p className="mt-6 leading-8 text-gray-400">
            {edu.description}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
    </SectionWrapper>
  );
}
