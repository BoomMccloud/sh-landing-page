export type CaseStudy = {
  title: string
  description: string
  results?: string[]
  metrics: Array<{ value: string; label: string }> | string
  slug: string
  link?: string
  image?: string
} 