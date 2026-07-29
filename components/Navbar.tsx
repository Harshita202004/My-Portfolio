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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080A]/78 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          : "bg-[#08080A]/20 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-10">
        {/* Logo */}
        <motion.a
          whileHover={{ y: -1 }}
          href="#home"
          className="text-2xl font-bold tracking-tight text-white transition hover:text-violet-300"
        >
          {portfolioData.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-white ${
                activeHref === item.href ? "text-white" : "text-gray-300"
              }`}
            >
              {activeHref === item.href && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full border border-purple-400/25 bg-white/10 shadow-[0_0_22px_rgba(168,85,247,0.22)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle Menu"
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
            className="overflow-hidden border-t border-white/10 bg-[#08080A]/94 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-2 px-5 py-5 sm:px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.025 }}
                  className={`rounded-2xl border px-4 py-3 text-base font-medium transition ${
                    activeHref === item.href
                      ? "border-purple-500/30 bg-purple-500/10 text-white"
                      : "border-white/0 text-gray-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-violet-300"
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
