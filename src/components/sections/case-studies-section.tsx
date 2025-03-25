"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "E-commerce Performance Marketing",
    description: "How we increased conversion rates by 45% for a leading online retailer",
    metrics: "45% increase in conversion rate",
    image: "/placeholder-case-study-1.jpg",
    link: "/case-studies/ecommerce-performance"
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
              <Link href={study.link}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-[hsl(var(--primary))/0.5]">
                  <div className="aspect-video bg-[hsl(var(--muted))] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--background))/0.8]" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <CardTitle className="text-xl">{study.title}</CardTitle>
                    </div>
                  </div>
                  <CardHeader>
                    <p className="text-[hsl(var(--foreground))/0.7]">{study.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[hsl(var(--primary))]">{study.metrics}</span>
                      <ArrowRight className="h-4 w-4 text-[hsl(var(--primary))]" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 