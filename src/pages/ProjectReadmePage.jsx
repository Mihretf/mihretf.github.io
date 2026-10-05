import { useEffect, useState } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/siteData'

export default function ProjectReadmePage() {
  const { projectName } = useParams()
  const project = projects.find((item) => item.slug === projectName)
  const [readmeResult, setReadmeResult] = useState(null)

  useEffect(() => {
    if (!project?.links.readme) {
      return undefined
    }

    const controller = new AbortController()

    fetch(project.links.readme, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('The project README could not be loaded.')
        }

        return response.text()
      })
      .then((content) => {
        setReadmeResult({ slug: project.slug, content, error: '' })
      })
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') {
          setReadmeResult({
            slug: project.slug,
            content: '',
            error: 'The project README could not be loaded. You can still read it on GitHub.',
          })
        }
      })

    return () => controller.abort()
  }, [project])

  const currentResult = readmeResult?.slug === project?.slug ? readmeResult : null
  const error = project?.links.readme
    ? currentResult?.error
    : 'This project README is not available.'
  const isLoading = Boolean(project?.links.readme) && currentResult === null

  if (!project) {
    return (
      <section className="section empty-state">
        <h1>Project not found.</h1>
        <Link to="/projects">Back to projects</Link>
      </section>
    )
  }

  return (
    <article className="section project-readme-page">
      <Link className="back-link" to={`/projects/${project.slug}`}>
        <ArrowLeft size={16} />
        Back to project
      </Link>

      <header className="project-readme-header">
        <p className="eyebrow">Project README</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <a href={project.links.github} target="_blank" rel="noreferrer">
          View repository <ExternalLink size={14} aria-hidden="true" />
        </a>
      </header>

      <div className="project-readme-content">
        {isLoading ? <p role="status">Loading README...</p> : null}
        {error ? <p role="alert">{error}</p> : null}
        {!isLoading && !error ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            urlTransform={(url) => {
              if (/^(https?:|mailto:|#|data:)/i.test(url)) {
                return url
              }

              return new URL(url, project.links.readme).href
            }}
            components={{
              a: ({ href, children, ...props }) => (
                <a
                  href={href}
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noreferrer' : undefined}
                  {...props}
                >
                  {children}
                </a>
              ),
            }}
          >
            {currentResult?.content}
          </ReactMarkdown>
        ) : null}
      </div>
    </article>
  )
}