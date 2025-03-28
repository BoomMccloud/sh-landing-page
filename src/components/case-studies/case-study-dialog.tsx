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
  caseStudyId?: string
}

const caseStudyContent = {
  "short-video-app-growth": {
    title: "Short Video App Growth",
    subtitle: "How we generated 100k visitors in just 2 weeks through strategic content and targeting",
    image: "/square_short_video.jpg",
    metrics: [
      { value: "100k", label: "Visitors Generated" },
      { value: "2", label: "Weeks Timeline" },
      { value: "35%", label: "Conversion Rate Increase" }
    ],
    challenge: "Our client needed to rapidly grow their short video app's user base in the SEA market. The challenge was to achieve significant user acquisition while maintaining high-quality user engagement and retention rates.",
    solution: [
      "Development of 50+ gender-specific creative variations",
      "Granular audience targeting based on user behavior and demographics",
      "Continuous A/B testing and optimization of ad creatives",
      "Strategic budget allocation across multiple channels"
    ],
    results: [
      "100,000 new visitors within 2 weeks",
      "35% increase in conversion rate",
      "Significant improvement in user engagement metrics",
      "Cost-effective user acquisition below industry averages"
    ]
  },
  "ai-customer-service": {
    title: "AI Strategy: Customer Service Bot",
    subtitle: "Enhanced customer support with RAG-powered AI and multilingual capabilities",
    image: "/chat_bot.png",
    metrics: [
      { value: "80%+", label: "Response Accuracy" },
      { value: "60%", label: "Manual Escalation Reduction" },
      { value: "3", label: "Weeks to Market" }
    ],
    challenge: "Our client needed to automate customer service while maintaining high quality responses and reducing manual escalations. The system needed to handle multiple languages and protect against prompt injection.",
    solution: [
      "Implemented secure RAG-based AI system with prompt protection",
      "Deployed serverless architecture for unlimited scalability",
      "Integrated support for English, Chinese, German, and Japanese",
      "Optimized for instant response times",
      "Built comprehensive CRM integration"
    ],
    results: [
      "Achieved 80%+ response accuracy across all languages",
      "Reduced manual escalations by 60%",
      "Cut ticket resolution time from hours to minutes",
      "Successfully handled thousands of concurrent users",
      "Completed implementation in just 3 weeks"
    ]
  },
  "live-music-social": {
    title: "Live Music Social Platform",
    subtitle: "Built a hyper-local social platform connecting live-house music fans",
    image: "/placeholder-case-study-3.jpg",
    metrics: [
      { value: "2.5k+", label: "Monthly Active Users" },
      { value: "85%", label: "Event Connection Rate" },
      { value: "4", label: "Integrated Platforms" }
    ],
    challenge: "Our client needed to create a social platform that connects live music fans before, during, and after performances, while integrating with existing messaging platforms and venue management systems.",
    solution: [
      "Developed responsive web and mobile applications",
      "Implemented Line messaging platform integration",
      "Built comprehensive venue CRM system",
      "Created fan-to-fan connection features",
      "Integrated social media advertising on Instagram"
    ],
    results: [
      "Achieved 2.5k+ monthly active users",
      "Maintained 85% event connection success rate",
      "Successfully integrated with Line messaging",
      "Streamlined venue management through CRM",
      "Built active community around indie music events"
    ]
  }
}

export default function CaseStudyDialog({ isOpen, onClose, caseStudyId = "short-video-app-growth" }: CaseStudyDialogProps) {
  const content = caseStudyContent[caseStudyId as keyof typeof caseStudyContent]

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
              <img
                src={content.image}
                alt={`${content.title} Case Study`}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[hsl(var(--primary))] bg-white rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
} 