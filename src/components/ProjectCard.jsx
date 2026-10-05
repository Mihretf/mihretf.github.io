import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="card-topline">
        <span className="project-tag">{project.tagline}</span>
        <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <div className="tech-row">
        {project.technologies.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="card-links">
        <Link to={`/projects/${project.slug}/readme`}>
          Read README
        </Link>
        <a href={project.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  )
}
