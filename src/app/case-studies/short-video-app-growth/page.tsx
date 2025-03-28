"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function ShortVideoAppCaseStudy() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-black">
        <img
          src="/square_short_video.jpg"
          alt="Short Video App Growth Case Study"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[hsl(var(--background))]" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent" />
        
        <Link 
          href="/#case-studies"
          className="absolute top-6 left-4 md:left-8 text-white/90 hover:text-white flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Case Studies</span>
        </Link>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Short Video App Growth
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              How we generated 100k visitors in just 2 weeks through strategic content and targeting
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-[hsl(var(--muted))] rounded-lg p-6">
              <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">100k</div>
              <div className="text-[hsl(var(--muted-foreground))]">Visitors Generated</div>
            </div>
            <div className="bg-[hsl(var(--muted))] rounded-lg p-6">
              <div className="text-3xl font-bold text-[hsl(var(--primary))]">2</div>
              <div className="text-[hsl(var(--muted-foreground))]">Weeks Timeline</div>
            </div>
            <div className="bg-[hsl(var(--muted))] rounded-lg p-6">
              <div className="text-3xl font-bold text-[hsl(var(--primary))]">35%</div>
              <div className="text-[hsl(var(--muted-foreground))]">Conversion Rate Increase</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-16"
          >
            <h2>Challenge</h2>
            <p>
              Our client needed to rapidly grow their short video app&apos;s user base in the SEA market. 
              The challenge was to achieve significant user acquisition while maintaining high-quality 
              user engagement and retention rates.
            </p>

            <h2>Solution</h2>
            <p>
              We implemented a comprehensive growth strategy that included:
            </p>
            <ul>
              <li>Development of 50+ gender-specific creative variations</li>
              <li>Granular audience targeting based on user behavior and demographics</li>
              <li>Continuous A/B testing and optimization of ad creatives</li>
              <li>Strategic budget allocation across multiple channels</li>
            </ul>

            <h2>Results</h2>
            <p>
              Through our targeted approach and continuous optimization, we achieved:
            </p>
            <ul>
              <li>100,000 new visitors within 2 weeks</li>
              <li>35% increase in conversion rate</li>
              <li>Significant improvement in user engagement metrics</li>
              <li>Cost-effective user acquisition below industry averages</li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[hsl(var(--primary))] rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Grow Your App?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business.
            </p>
            <Link 
              href="https://calendly.com/jason-b-xu/30min"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-[hsl(var(--primary))] px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Contact Us
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 