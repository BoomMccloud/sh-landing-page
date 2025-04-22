"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Smartphone, Target, Megaphone, Palette, Bot, Settings, TrendingUp, Users } from "lucide-react"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("ai-consultancy")

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions to elevate your brand and digital presence
          </p>
        </div>

        <Tabs defaultValue="ai-consultancy" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-lg grid-cols-3 h-[40px] bg-secondary p-[2px] rounded-full">
              <TabsTrigger 
                value="ai-consultancy" 
                className="rounded-full data-[state=active]:bg-background data-[state=active]:ring-1 data-[state=active]:ring-slate-200/40 dark:data-[state=active]:ring-slate-800 data-[state=active]:font-medium"
              >
                AI Consultancy
              </TabsTrigger>
              <TabsTrigger 
                value="advertising" 
                className="rounded-full data-[state=active]:bg-background data-[state=active]:ring-1 data-[state=active]:ring-slate-200/40 dark:data-[state=active]:ring-slate-800 data-[state=active]:font-medium"
              >
                Advertising
              </TabsTrigger>
              <TabsTrigger 
                value="development" 
                className="rounded-full data-[state=active]:bg-background data-[state=active]:ring-1 data-[state=active]:ring-slate-200/40 dark:data-[state=active]:ring-slate-800 data-[state=active]:font-medium"
              >
                App Development
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ai-consultancy" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Settings className="h-10 w-10 text-primary" />}
                title="Save Backoffice Costs"
                description="Streamline backoffice operations by automating routine office tasks (data entry, reporting, email sorting). Reduce manual errors, cut costs, and free up your team."
                isActive={activeTab === "ai-consultancy"}
                delay={0.1}
              />
              <ServiceCard
                icon={<TrendingUp className="h-10 w-10 text-primary" />}
                title="Increase Revenue"
                description="Optimize cash flow with automated invoicing and smart payment reminders. Improve collection rates and reduce manual effort."
                isActive={activeTab === "ai-consultancy"}
                delay={0.2}
              />
              <ServiceCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Faster Sales Cycles"
                description="Enhance customer engagement with automated lead scoring, personalized follow-ups, and intelligent CRM data enrichment. Boost conversions and retention."
                isActive={activeTab === "ai-consultancy"}
                delay={0.3}
              />
            </div>
          </TabsContent>

          <TabsContent value="advertising" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={<Target className="h-10 w-10 text-primary" />}
                title="Performance Advertising"
                description="Targeted campaigns on Google, Facebook, X, and TikTok focused on high-value user conversions."
                isActive={activeTab === "advertising"}
                delay={0.1}
              />
              <ServiceCard
                icon={<Megaphone className="h-10 w-10 text-primary" />}
                title="Brand Advertising"
                description="Strategic campaigns focused on reach and frequency to raise brand awareness and recognition."
                isActive={activeTab === "advertising"}
                delay={0.2}
              />
              <ServiceCard
                icon={<Palette className="h-10 w-10 text-primary" />}
                title="Creative Optimization"
                description="Optimization of advertising creative including text, graphics, and short videos."
                isActive={activeTab === "advertising"}
                delay={0.3}
              />
              <ServiceCard
                icon={<BarChart3 className="h-10 w-10 text-primary" />}
                title="Measurement Solutions"
                description="Comprehensive analytics using tools like Google Analytics to track user conversion and retention."
                isActive={activeTab === "advertising"}
                delay={0.4}
              />
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Smartphone className="h-10 w-10 text-primary" />}
                title="iOS Development"
                description="Custom iOS app development with intuitive UX/UI design and seamless performance."
                isActive={activeTab === "development"}
                delay={0.1}
              />
              <ServiceCard
                icon={<Smartphone className="h-10 w-10 text-primary" />}
                title="Android Development"
                description="Robust Android applications built for performance and user engagement."
                isActive={activeTab === "development"}
                delay={0.2}
              />
              <ServiceCard
                icon={<Bot className="h-10 w-10 text-primary" />}
                title="AI Integration"
                description="Implementation of AI agents including chatbots, service representatives, and virtual avatars."
                isActive={activeTab === "development"}
                delay={0.3}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  isActive: boolean
  delay: number
}

function ServiceCard({ icon, title, description, isActive, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          <div className="mb-2">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

