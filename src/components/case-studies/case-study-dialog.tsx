"use client"

import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import * as Dialog from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { caseStudies } from "@/lib/data/case-studies"
import { PopupButton } from '@typeform/embed-react'

interface CaseStudyDialogProps {
  isOpen: boolean
  onClose: () => void
  caseStudyId?: string
}

export default function CaseStudyDialog({ isOpen, onClose, caseStudyId = "short-video-app-growth" }: CaseStudyDialogProps) {
  const content = caseStudies[caseStudyId as keyof typeof caseStudies]

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-[95vw] max-w-6xl max-h-[90vh] translate-x-[-50%] translate-y-[-50%] overflow-y-auto bg-background p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          <Dialog.Title asChild>
            <VisuallyHidden>{content.title}</VisuallyHidden>
          </Dialog.Title>
          <Dialog.Description asChild>
            <VisuallyHidden>{content.subtitle}</VisuallyHidden>
          </Dialog.Description>

          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute top-4 left-4 inline-flex items-center gap-2 text-white/90 hover:text-white p-2 rounded-full bg-black/20 backdrop-blur-sm transition-colors cursor-pointer hover:bg-black/30 z-50"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Go back</span>
            </button>
          </Dialog.Close>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
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

              <div className="relative h-full flex flex-col justify-center p-6 md:p-8">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {content.title}
                  </h2>
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
                    <h3 className="text-3xl font-bold mb-6">Challenge</h3>
                    <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                      {content.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-6">Solution</h3>
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
                    <h3 className="text-3xl font-bold mb-6">Results</h3>
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
                    id="S1k37E9F"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[hsl(var(--primary))] bg-white rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Get Started
                  </PopupButton>
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
} 