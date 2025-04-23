"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PopupButton } from "@typeform/embed-react"
import type { CaseStudy } from "@/lib/data/case-studies" // Import the type

interface CaseStudyClientContentProps {
  content: CaseStudy
}

export default function CaseStudyClientContent({ content }: CaseStudyClientContentProps) {
  return (
    <div>
      {/* Back Button */}
      <Link
        href="/#case-studies" // Link back to the section on the main page
        className="absolute top-4 left-4 inline-flex items-center gap-2 text-white/90 hover:text-white p-2 rounded-full bg-black/20 backdrop-blur-sm transition-colors cursor-pointer hover:bg-black/30 z-50"
        aria-label="Go back to all case studies"
      >
        <ArrowLeft className="h-5 w-5" />
      </Link>

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-black">
        <div className="absolute inset-0">
          <Image
            src={content.image}
            alt={`${content.title} Case Study`}
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[hsl(var(--background))]" />

        <div className="relative h-full flex flex-col justify-center items-center text-center p-6 md:p-8">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {content.metrics.map((metric, index) => (
              <div key={index} className="bg-[hsl(var(--muted))] rounded-lg p-6">
                <div className="text-3xl font-bold text-[hsl(var(--primary))]">{metric.value}</div>
                <div className="text-[hsl(var(--muted-foreground))]">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Challenge</h2>
              <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                {content.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Solution</h2>
              <p className="text-lg text-[hsl(var(--foreground))/0.8] mb-4">
                We implemented a comprehensive strategy that included:
              </p>
              <div className="space-y-4">
                {content.solution.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <p className="text-lg text-[hsl(var(--foreground))/0.8] mb-4">
                Through our implementation, we achieved:
              </p>
              <div className="space-y-4">
                {content.results.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[hsl(var(--primary))] rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business.
            </p>
            <PopupButton
              id="S1k37E9F" // Make sure this Typeform ID is correct
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[hsl(var(--primary))] bg-white rounded-lg hover:bg-white/90 transition-colors"
            >
              Get Started
            </PopupButton>
          </div>
        </div>
      </div>
    </div>
  )
} 