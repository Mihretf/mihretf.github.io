import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { researchItems } from '../data/siteData'

export default function ResearchDetailPage() {
  const { researchProjectName } = useParams()
  const item = researchItems.find((entry) => entry.slug === researchProjectName)

  if (!item) {
    return (
      <section className="section empty-state">
        <h1>Research project not found.</h1>
        <Link to="/research">Back to research</Link>
      </section>
    )
  }

  return (
    <article className="section detail-page">
      <Link className="back-link" to="/research">
        <ArrowLeft size={16} />
        Back to research
      </Link>

      <div className="detail-header">
        <p className="eyebrow">{item.meta}</p>
        <h1>{item.title}</h1>
        <p className="lede">{item.summary}</p>
      </div>

      <div className="detail-panel">
        <div>
          <h2>Question</h2>
          <p>{item.question}</p>
        </div>
        <div>
          <h2>Experiment</h2>
          <p>{item.experiment}</p>
        </div>
      </div>

      <div className="detail-meta-grid">
        <div className="info-panel">
          <h3>Observations</h3>
          <ul>
            {item.observations.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <h3>Conclusion</h3>
          <p>{item.conclusions}</p>
        </div>
      </div>
    </article>
  )
}
