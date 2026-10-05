import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/siteData'

export default function ProjectDetailPage() {
  const { projectName } = useParams()
  const project = projects.find((item) => item.slug === projectName)

  if (!project) {
    return (
      <section className="section empty-state">
        <h1>Project not found.</h1>
        <Link to="/projects">Back to projects</Link>
      </section>
    )
  }

  return (
    <article className="section detail-page">
      <Link className="back-link" to="/projects">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div className="detail-header">
        <p className="eyebrow">{project.year}</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
      </div>

      <div className="detail-panel">
        <div>
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </div>
        <div>
          <h2>Motivation</h2>
          <p>{project.motivation}</p>
        </div>
        <div>
          <h2>Approach</h2>
          <p>{project.approach}</p>
        </div>
      </div>

      <div className="detail-meta-grid">
        <div className="info-panel">
          <h3>Technologies</h3>
          <ul>
            {project.technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <h3>Challenges</h3>
          <ul>
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <h3>Results</h3>
          <ul>
            {project.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="detail-quote">
        <p>{project.learnings}</p>
      </div>

      <div className="detail-links">
        <Link to={`/projects/${project.slug}/readme`}>Read README</Link>
        <a href={project.links.github} target="_blank" rel="noreferrer">
          View repository
        </a>
      </div>
    </article>
  )
}
