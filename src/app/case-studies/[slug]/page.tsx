import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/data/case-studies"
import CaseStudyClientContent from "@/components/case-studies/case-study-client-content"
import type { CaseStudy } from "@/lib/data/case-studies"

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params
  const content = caseStudies[slug as keyof typeof caseStudies]

  // Handle cases where the slug doesn't match any case study
  if (!content) {
    notFound()
  }

  return (
    <CaseStudyClientContent content={content} />
  )
}

// Optional: Generate static paths if you know all slugs beforehand
// This improves performance by pre-rendering pages at build time.
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

// Optional: Add metadata for SEO
export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = params
  const content = caseStudies[slug as keyof typeof caseStudies] as CaseStudy | undefined

  if (!content) {
    return { title: "Case Study Not Found" }
  }

  return {
    title: `${content.title} - Case Study`,
    description: content.subtitle,
    // Add other metadata tags as needed (e.g., open graph)
  }
} 