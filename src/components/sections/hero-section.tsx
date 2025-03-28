"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Only show the UI after mount to avoid hydration mismatches
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Define the logo gradient based on the current theme
  const logoGradient = !mounted ? "bg-gradient-to-r from-black from-10% via-zinc-800 via-50% to-purple-600 to-100%" :
    theme === "light" 
      ? "bg-gradient-to-r from-black from-10% via-zinc-800 via-50% to-purple-600 to-100%" 
      : "bg-gradient-to-r from-white from-10% via-purple-200 via-50% to-purple-500 to-100%"

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Digital Presence with
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`bg-clip-text text-transparent ${logoGradient}`}
            >
              Savannah Haus
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-[hsl(var(--foreground))/0.7] mb-8"
          >
            We combine innovative advertising strategies with cutting-edge app development to help businesses thrive in the digital age.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="https://calendly.com/jason-b-xu/30min" target="_blank">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-8 py-3 rounded-md font-medium hover:bg-[hsl(var(--primary))/0.9] transition-all duration-300"
              >
                Schedule a Call
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="#services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-[hsl(var(--border))] px-8 py-3 rounded-md font-medium hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] transition-all duration-300"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 