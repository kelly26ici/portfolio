"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = "unset"
    }, 1800)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Aesthetic Gold & Navy Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/15 dark:bg-gold/10 rounded-full blur-[110px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-classic-navy/15 dark:bg-classic-navy/20 rounded-full blur-[80px]" />

          {/* Staggered Brand Animation */}
          <div className="relative overflow-hidden h-20 flex items-center justify-center">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="text-4xl md:text-6xl font-cinzel font-bold text-text-primary tracking-tight"
            >
              KELLY
              <span className="text-gold font-normal">.AI</span>
            </motion.div>
          </div>

          <div className="relative overflow-hidden h-8 mt-1 flex items-center justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
              className="text-xs font-coconat font-semibold tracking-[0.35em] uppercase text-gold dark:text-champagne"
            >
              Initializing Autonomous Systems...
            </motion.div>
          </div>

          {/* Polished Gold Progress Bar Animation */}
          <div className="mt-8 w-48 md:w-64 h-[2px] bg-charcoal/20 dark:bg-charcoal rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-classic-navy via-gold to-champagne rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
