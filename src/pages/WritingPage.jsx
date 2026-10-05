import PageHeader from '../components/PageHeader'
import ArticleCard from '../components/ArticleCard'
import { writingItems } from '../data/siteData'

export default function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes on learning, design, and thoughtful work."
        intro="A place for smaller ideas, research reflections, and observations about building systems that are both useful and humane."
      />

      <section className="section card-grid article-grid">
        {writingItems.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </>
  )
}
