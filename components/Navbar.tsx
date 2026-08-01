"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);

        const current = navItems.reduce((active, item) => {
          const id = item.href.replace("#", "");
          const section = document.getElementById(id);

          if (!section) return active;

          const rect = section.getBoundingClientRect();
          return rect.top <= 140 ? item.href : active;
        }, "#home");

        setActiveHref(current);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-5 ${
        scrolled
          ? "py-2.5"
          : "py-3.5"
      }`}
    >
      <div
        className={`mx-auto flex h-[62px] max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:h-[68px] sm:px-5 lg:px-6 ${
          scrolled
            ? "border-white/12 bg-[#08080A]/78 shadow-[0_18px_70px_rgba(0,0,0,0.42),0_0_36px_rgba(168,85,247,0.08),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl"
            : "border-white/[0.08] bg-[#08080A]/42 shadow-[0_12px_46px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl"
        }`}
      >
        {/* Logo */}
        <motion.a
          whileHover={{ y: -1, scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          href="#home"
          onClick={() => setMobileOpen(false)}
          className="shrink-0 bg-gradient-to-r from-white via-fuchsia-200 to-purple-300 bg-clip-text text-xl font-extrabold tracking-[0.035em] text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.18)] transition duration-300 hover:drop-shadow-[0_0_24px_rgba(236,72,153,0.3)] sm:text-2xl"
        >
          {portfolioData.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.09] bg-white/[0.04] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 xl:px-4 ${
                activeHref === item.href ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              {activeHref === item.href && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full border border-white/12 bg-gradient-to-r from-purple-500/24 via-white/10 to-pink-500/22 shadow-[0_0_24px_rgba(168,85,247,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]"
                  transition={{ type: "spring", stiffness: 460, damping: 38 }}
                />
              )}
              <span className="absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-70" />
              <motion.span
                className="relative z-10 block"
                whileHover={{ y: -1.5 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-white/10 bg-white/[0.055] p-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition hover:border-purple-400/35 hover:bg-purple-500/12 hover:shadow-[0_0_22px_rgba(168,85,247,0.16)] lg:hidden"
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#08080A]/94 shadow-[0_24px_80px_rgba(0,0,0,0.48),0_0_34px_rgba(168,85,247,0.08),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-2 p-3 sm:p-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.025 }}
                  className={`rounded-xl border px-4 py-3 text-base font-medium transition-all duration-300 ${
                    activeHref === item.href
                      ? "border-purple-500/35 bg-gradient-to-r from-purple-500/18 to-pink-500/12 text-white shadow-[0_0_24px_rgba(168,85,247,0.16)]"
                      : "border-white/0 text-gray-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.055] hover:text-violet-100"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
