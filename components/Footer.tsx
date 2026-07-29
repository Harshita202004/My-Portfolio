"use client";
import { motion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Heart } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-white/[0.02] backdrop-blur-xl">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        {/* Left */}
        <div className="text-center md:text-left">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-2xl font-bold text-transparent"
          >
            {portfolioData.name}
          </motion.h3>

          <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-400">
            Computer Science Engineering Student passionate about Full Stack
            Development, AI Applications, and Data Analytics.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:harshita082004@gmail.com"
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
          >
            <FiMail size={18} />
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Harshita202004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
          >
            <FiGithub size={18} />
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/harshita-477360315"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-white"
          >
            <FaLinkedinIn size={17} />
          </motion.a>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {portfolioData.name}. All rights
            reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <Heart
              size={15}
              className="fill-pink-500 text-pink-500"
              aria-hidden="true"
            />
            <span>Next.js, Tailwind CSS &amp; Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}