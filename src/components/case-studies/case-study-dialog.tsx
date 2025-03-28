"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

const VisuallyHidden = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "absolute h-px w-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

interface CaseStudyDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function CaseStudyDialog({ isOpen, onClose }: CaseStudyDialogProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-[95vw] max-w-6xl max-h-[90vh] translate-x-[-50%] translate-y-[-50%] overflow-y-auto bg-background p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          <Dialog.Title asChild>
            <VisuallyHidden>Short Video App Growth Case Study</VisuallyHidden>
          </Dialog.Title>
          <Dialog.Description asChild>
            <VisuallyHidden>
              Case study showing how we generated 100k visitors in 2 weeks for a short video app through strategic content and targeting
            </VisuallyHidden>
          </Dialog.Description>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[300px] bg-black">
              <img
                src="/square_short_video.jpg"
                alt="Short Video App Growth Case Study"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[hsl(var(--background))]" />

              <button
                onClick={onClose}
                className="absolute top-4 left-4 inline-flex items-center gap-2 text-white/90 hover:text-white p-2 rounded-full bg-black/20 backdrop-blur-sm transition-colors cursor-pointer hover:bg-black/30"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Go back</span>
              </button>

              <div className="relative h-full flex flex-col justify-center p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Short Video App Growth
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                    How we generated 100k visitors in just 2 weeks through strategic content and targeting
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
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
                  className="space-y-12 mb-12"
                >
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Challenge</h3>
                    <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                      Our client needed to rapidly grow their short video app&apos;s user base in the SEA market. 
                      The challenge was to achieve significant user acquisition while maintaining high-quality 
                      user engagement and retention rates.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-6">Solution</h3>
                    <p className="text-lg text-[hsl(var(--foreground))/0.8] mb-4">
                      We implemented a comprehensive growth strategy that included:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                          Development of 50+ gender-specific creative variations
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                          Granular audience targeting based on user behavior and demographics
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                          Continuous A/B testing and optimization of ad creatives
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                          Strategic budget allocation across multiple channels
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-6">Results</h3>
                    <p className="text-lg text-[hsl(var(--foreground))/0.8] mb-4">
                      Through our targeted approach and continuous optimization, we achieved:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                          100,000 new visitors within 2 weeks
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                          35% increase in conversion rate
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                          Significant improvement in user engagement metrics
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                        <p className="text-lg text-[hsl(var(--foreground))/0.8] leading-relaxed">
                          Cost-effective user acquisition below industry averages
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-[hsl(var(--primary))] rounded-xl p-6 md:p-8 text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Grow Your App?
                  </h3>
                  <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                    Let&apos;s discuss how we can help you achieve similar results for your business.
                  </p>
                  <Link 
                    href="https://calendly.com/jason-b-xu/30min"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white text-[hsl(var(--primary))] px-6 py-2.5 rounded-full font-medium hover:bg-white/90 transition-colors"
                  >
                    Contact Us
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
} 