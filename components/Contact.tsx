"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiMail,
  FiGithub,
} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isLoading = status === "loading";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "da0c2b61-cd9e-4e48-ae11-7d0ccd411546",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (!result.success) throw new Error();

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30";

  return (
    <SectionWrapper id="contact">
      <div className="rounded-3xl border border-white/10 bg-[#0B0B12]/80 p-8 shadow-2xl backdrop-blur-xl md:p-14">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Connect"
          highlight="Today"
          center
          subtitle="I'm always open to internships, full-time opportunities, collaborations, and exciting software development projects."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ContactCard
            icon={<FiMail />}
            label="Email"
            href="mailto:harshita082004@gmail.com"
          />
          <ContactCard
            icon={<FaLinkedinIn />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/harshita-477360315"
          />
          <ContactCard
            icon={<FiGithub />}
            label="GitHub"
            href="https://github.com/Harshita202004"
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center"
              >
                <FiCheckCircle className="mx-auto text-6xl text-green-400" />

                <h3 className="mt-6 text-3xl font-bold text-white">
                  Message Sent Successfully!
                </h3>

                <p className="mt-3 text-gray-400">
                  Thank you for contacting me. I&apos;ll get back to you soon.
                </p>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStatus("idle")}
                  className="mt-8 rounded-xl border border-purple-500/40 px-6 py-3 text-purple-300 transition hover:bg-purple-500/10 hover:shadow-[0_0_22px_rgba(168,85,247,0.22)]"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                    <FiAlertCircle />
                    Something went wrong. Please try again or email me directly
                    at{" "}
                    <a
                      href="mailto:harshita082004@gmail.com"
                      className="underline"
                    >
                      harshita082004@gmail.com
                    </a>
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    className={input}
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />

                  <input
                    className={input}
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>

                <input
                  className={input}
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />

                <textarea
                  className={input + " resize-none"}
                  rows={6}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />

                <motion.button
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-4 font-semibold text-white shadow-[0_0_22px_rgba(168,85,247,0.18)] transition hover:shadow-[0_0_32px_rgba(236,72,153,0.32)] disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {isLoading ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ContactCard({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <motion.a
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group flex min-h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-purple-500/40 hover:bg-purple-500/[0.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.14)]"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-3xl text-white shadow-[0_0_22px_rgba(168,85,247,0.2)] transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
    </motion.a>
  );
}