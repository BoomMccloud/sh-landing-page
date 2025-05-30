"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
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
  },
  {
    ...caseStudies["ad-insertion-automation"],
    slug: "ad-insertion-automation",
    link: "/case-studies/ad-insertion-automation"
  }
]

export default function CaseStudiesSection() {
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
              <Link 
                href={study.link ?? "#"}
                className="w-full text-left block"
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
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 