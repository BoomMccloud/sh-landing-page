import { caseStudies, type CaseStudy } from "@/lib/data/case-studies"

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study: CaseStudy | undefined = caseStudies[params.slug as keyof typeof caseStudies]
  
  if (!study) return <div>Case study not found</div>

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">{study.title}</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
          <ul className="list-disc pl-6 space-y-2">
            {study.results.map((result, i) => (
              <li key={i}>{result}</li>
            ))}
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Metrics Achieved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {study.metrics.map((metric, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Strategy Overview</h2>
          <div className="space-y-4">
            <p>Implemented a dual-pronged approach combining:</p>
            <ul className="list-disc pl-6">
              <li>High-frequency creative testing (10+ variations per story)</li>
              <li>Demographic-specific audience segmentation</li>
              <li>Real-time performance optimization</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
} 