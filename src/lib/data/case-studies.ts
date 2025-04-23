export interface CaseStudy {
  title: string
  subtitle: string
  image: string
  metrics: Array<{
    value: string
    label: string
  }>
  challenge: string
  solution: string[]
  results: string[]
}

export const caseStudies: Record<string, CaseStudy> = {
  "short-video-app-growth": {
    title: "Mobile App User Acquisition",
    subtitle: "How we generated 100k visitors in just 2 weeks through strategic content and targeting",
    image: "/square_short_video.jpg",
    metrics: [
      { value: "100k+ Visitors", label: "Visitors Generated" },
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
    title: "AI Customer Service",
    subtitle: "Enhanced customer support with RAG-powered AI and multilingual capabilities",
    image: "/chat_bot.png",
    metrics: [
      { value: "3 Weeks", label: "Time to Market" },
      { value: "60%", label: "Manual Escalation Reduction" },
      { value: "80%+", label: "Response Accuracy" }
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
    title: "Increase User Engagement",
    subtitle: "Built a hyper-local social platform connecting live-house music fans",
    image: "/live_house.png",
    metrics: [
      { value: "85% Retention", label: "Returning Users" },
      { value: "2.5k+ MAU", label: "Monthly Active Users" },
      { value: "4 Social Apps", label: "Integrated" }
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
  },
  "ad-insertion-automation": {
    title: "AI Backoffice Automation",
    subtitle: "Streamlined ad insertion order processing from 48 hours to 1 hour using OCR and workflow automation.",
    image: "/automation_gear.png",
    metrics: [
      { value: "1 Hour", label: "Processing Time" },
      { value: "48x", label: "Speed Improvement" },
      { value: "100%", label: "Term Verification" }
    ],
    challenge: "Our client faced significant delays and manual effort in processing advertising insertion orders, including verifying contract terms, which took up to 48 hours per order.",
    solution: [
      "Implemented Optical Character Recognition (OCR) for invoice data extraction",
      "Developed workflow automation using n8n to streamline processing",
      "Created a custom API for seamless integration and automated verification",
      "Integrated automated email notifications for advertisers"
    ],
    results: [
      "Reduced insertion order processing time from 48 hours to under 1 hour",
      "Achieved 100% automated verification of contract terms",
      "Eliminated manual data entry errors",
      "Improved advertiser satisfaction with faster confirmations"
    ]
  }
} 