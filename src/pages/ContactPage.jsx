import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: GitBranch },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: BriefcaseBusiness },
  { label: 'Email', href: 'mailto:mihret@example.com', icon: Mail },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build something useful."
        intro="I am open to thoughtful collaborations, research conversations, and product work that values clarity, care, and long-term usefulness."
      />

      <section className="section contact-layout">
        <div className="contact-panel">
          <p>
            If you are working on a problem that involves ML, thoughtful product design,
            research, or better ways to help people understand complex systems, I would love to
            hear about it.
          </p>

          <div className="contact-links" aria-label="Contact links">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
