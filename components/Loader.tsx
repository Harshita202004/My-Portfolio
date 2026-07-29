"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08080A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute h-44 w-44 rounded-full bg-purple-600/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <motion.div
              className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <motion.div
                className="h-20 w-20 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              />
            </motion.div>

            <motion.h1
              className="mt-8 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Harshita
            </motion.h1>

            <motion.p
              className="mt-2 text-sm text-gray-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Loading portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
