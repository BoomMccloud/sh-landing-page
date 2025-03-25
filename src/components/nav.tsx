"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function Nav() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 border-b border-[hsl(var(--border))] backdrop-blur-sm bg-[hsl(var(--background))/0.8]"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[hsl(var(--primary))] transition-colors hover:text-[hsl(var(--primary))/0.8]">
          Savannah Haus
        </Link>
        
        <div className="flex items-center gap-8">
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
      </div>
    </motion.nav>
  )
} 