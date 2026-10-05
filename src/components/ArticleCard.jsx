import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <span className="meta-label">{article.date}</span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className="article-footer">
        <span>{article.readTime}</span>
        <Link to={`/writing/${article.slug}`}>
          Read more <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}
