"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import CaseStudyDialog from "@/components/case-studies/case-study-dialog"
import { caseStudies } from "@/lib/data/case-studies"

const caseStudyList = [
  {
    ...caseStudies["short-video-app-growth"],
    slug: "short-video-app-growth",
    link: "/case-studies/short-video-app-growth"
  },
  {
    ...caseStudies["ai-customer-service"],
    slug: "ai-customer-service",
    link: "/case-studies/ai-customer-service"
  },
  {
    ...caseStudies["live-music-social"],
    slug: "live-music-social",
    link: "/case-studies/live-music-social"
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
          {caseStudyList.map((study, index) => (
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
                      <div className="absolute inset-0">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-semibold text-white mb-3">{study.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2 mb-2">{study.subtitle}</p>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                          {study.metrics[0].value}
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
        caseStudyId="short-video-app-growth"
      />

      <CaseStudyDialog
        isOpen={selectedCaseStudy === "ai-customer-service"}
        onClose={() => setSelectedCaseStudy(null)}
        caseStudyId="ai-customer-service"
      />

      <CaseStudyDialog
        isOpen={selectedCaseStudy === "live-music-social"}
        onClose={() => setSelectedCaseStudy(null)}
        caseStudyId="live-music-social"
      />
    </section>
  )
} 