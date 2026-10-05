import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import { researchItems } from '../data/siteData'

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Questions, experiments, and thoughtful inquiry."
        intro="Research is where many of my most interesting questions emerge: how systems behave, how people understand them, and where better design can lead to better outcomes."
      />

      <section className="section list-stack">
        {researchItems.map((item) => (
          <article key={item.slug} className="list-card research-card">
            <span className="meta-label">{item.meta}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <div className="article-footer">
              <span>Explore</span>
              <Link to={`/research/${item.slug}`}>Read more</Link>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
