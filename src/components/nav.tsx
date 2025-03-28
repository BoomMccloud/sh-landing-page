"use client"

import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Nav() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 border-b border-[hsl(var(--border))] backdrop-blur-sm bg-[hsl(var(--background))/0.8]"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center font-bold transition-colors hover:opacity-80">
          <span className={`text-2xl bg-clip-text text-transparent ${logoGradient}`}>
            Savannah Haus
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="relative group">
            <span className="hover:text-[hsl(var(--primary))] transition-colors">Services</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] transition-all group-hover:w-full" />
          </Link>
          <Link href="#case-studies" className="relative group">
            <span className="hover:text-[hsl(var(--primary))] transition-colors">Case Studies</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] transition-all group-hover:w-full" />
          </Link>
          <Link href="#testimonials" className="relative group">
            <span className="hover:text-[hsl(var(--primary))] transition-colors">Testimonials</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--primary))] transition-all group-hover:w-full" />
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-[hsl(var(--secondary))] transition-colors relative"
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-[hsl(var(--secondary))] transition-colors relative"
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </motion.button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-[hsl(var(--secondary))] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link 
                href="#services" 
                className="hover:text-[hsl(var(--primary))] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#case-studies" 
                className="hover:text-[hsl(var(--primary))] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="#testimonials" 
                className="hover:text-[hsl(var(--primary))] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 