import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies } from "@/lib/data/case-studies"
import CaseStudyPageLayout from "@/components/case-studies/case-study-page-layout"

const SLUG = "short-video-app-growth"

export async function generateMetadata(): Promise<Metadata> {
  const content = caseStudies[SLUG]
  if (!content) {
    return { title: "Case Study Not Found" }
  }
  return {
    title: `${content.title} - Case Study`,
    description: content.subtitle,
  }
}

export default function ShortVideoAppGrowthPage() {
  const content = caseStudies[SLUG]

  if (!content) {
    notFound() // Trigger a 404 page if data for this specific slug is missing
  }

  return <CaseStudyPageLayout content={content} />
} 