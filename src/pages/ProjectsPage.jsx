import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/siteData'

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work and prototypes."
        intro="A collection of projects shaped by curiosity, careful design, and a practical interest in making complex things clearer."
      />

      <section className="section card-grid project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </>
  )
}
