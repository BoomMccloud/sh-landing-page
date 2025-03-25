import Nav from "@/components/nav"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import CaseStudiesSection from "@/components/sections/case-studies-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
