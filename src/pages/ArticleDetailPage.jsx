import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { writingItems } from '../data/siteData'

export default function ArticleDetailPage() {
  const { articleName } = useParams()
  const article = writingItems.find((entry) => entry.slug === articleName)

  if (!article) {
    return (
      <section className="section empty-state">
        <h1>Article not found.</h1>
        <Link to="/writing">Back to writing</Link>
      </section>
    )
  }

  return (
    <article className="section article-detail">
      <Link className="back-link" to="/writing">
        <ArrowLeft size={16} />
        Back to writing
      </Link>

      <header className="detail-header article-header">
        <p className="eyebrow">{article.date}</p>
        <h1>{article.title}</h1>
        <p className="lede">{article.excerpt}</p>
      </header>

      <div className="article-body">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
