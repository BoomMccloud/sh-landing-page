"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import CaseStudyDialog from "@/components/case-studies/case-study-dialog"

const caseStudies = [
  {
    title: "User Growth: Short Video App",
    description: "Generated 100k visitors through organic & paid traffic in 2 weeks",
    results: [
      "Developed 50+ gender-specific creatives",
      "Implemented granular audience targeting",
      "Achieved 35% conversion rate improvement"
    ],
    metrics: [
      { value: "100k visitors in 2 weeks", label: "Total Visitors" },
      { value: "35%", label: "CR Increase" }
    ],
    slug: "short-video-app-growth",
    link: "/case-studies/short-video-app-growth",
    image: "/square_short_video.jpg"
  },
  {
    title: "AI-Powered Customer Service App",
    description: "Revolutionizing customer support with AI integration",
    metrics: "60% reduction in response time",
    image: "/placeholder-case-study-2.jpg",
    link: "/case-studies/ai-customer-service"
  },
  {
    title: "Brand Awareness Campaign",
    description: "Building brand recognition through strategic advertising",
    metrics: "2x increase in brand awareness",
    image: "/placeholder-case-study-3.jpg",
    link: "/case-studies/brand-awareness"
  }
]

export default function CaseStudiesSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null)

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-lg text-[hsl(var(--foreground))/0.7] max-w-2xl mx-auto">
            See how we&apos;ve helped businesses achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                onClick={() => study.slug && setSelectedCaseStudy(study.slug)}
                className="w-full text-left"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-[hsl(var(--primary))/0.5] group overflow-hidden">
                  <div className="aspect-[16/9] bg-[hsl(var(--muted))] relative">
                    {study.image && (
                      <img
                        src={study.image}
                        alt={study.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-semibold text-white mb-3">{study.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2 mb-2">{study.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                          {typeof study.metrics === 'string' ? study.metrics : study.metrics[0].value}
                        </span>
                        <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Card>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudyDialog
        isOpen={selectedCaseStudy === "short-video-app-growth"}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  )
} 