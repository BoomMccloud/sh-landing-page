"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    content: "Working with Savannah Haus has been transformative for our business. Their strategic approach and attention to detail exceeded our expectations.",
    avatar: "/placeholder-avatar-1.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "InnovatePro",
    content: "The team's expertise in digital marketing and development helped us achieve remarkable growth. Highly recommended!",
    avatar: "/placeholder-avatar-2.jpg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "GrowthWave",
    content: "Outstanding service and results. They truly understand modern digital landscapes and deliver exceptional value.",
    avatar: "/placeholder-avatar-3.jpg",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--muted))/0.3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-[hsl(var(--foreground))/0.7] max-w-2xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array(testimonial.rating).fill(null).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--foreground))/0.7]">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

