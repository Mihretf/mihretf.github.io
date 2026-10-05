import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import profileImage from '../assets/DSC09963.JPG'

export default function HomePage() {
  const [activeRoadmapItem, setActiveRoadmapItem] = useState(null)

  return (
    <>
      <section className="hero section">
        <div className="hero-content">
          <div className="profile-portrait-wrap">
            <div className="profile-portrait-frame">
              <img src={profileImage} alt="Mihret Fekadu" className="profile-portrait" />
            </div>
          </div>

          <div className="hero-copy">
            <p className="kicker">
              Hi there! I&apos;m <strong className="name-highlight">Mihret</strong>, but you can call me
              <span className="nickname-gap"> </span>
              <strong className="nickname-highlight">mercy</strong>.
            </p>
            <h1>Welcome to my portfolio.</h1>
            <p className="lede">
              I&apos;m a junior Computer Science student at Addis Ababa University and a full-time employee
              at INSA, where I work across software systems, data pipelines, and machine learning research.
            </p>
            <p className="lede">
              I&apos;m a firm believer that studying creation is studying the thoughts of the Creator.
            </p>
            <p className="lede">
              My work is driven by a long-term goal of becoming a researcher in LLMs, with a specific focus
              on low-resource languages and making AI more inclusive and useful across communities.
            </p>
            <p className="lede">
              Here, you can find the projects I&apos;ve built, the documentation I&apos;ve written, and a little
              bit of who I am outside of code. Feel free to reach out for any inquiries.
            </p>
          </div>

        </div>
      </section>

      <section className="section roadmap-section">
        <div className="mini-header roadmap-header">
          <p>Milestones</p>
          <span>My journey across projects, research, and the people behind the work.</span>
        </div>

        <div className="roadmap-wrap" aria-label="Portfolio roadmap">
          <div className="roadmap-line" />

          {[
            {
              title: 'Projects',
              subtitle: 'Completed works',
              description: 'Explore software projects and prototypes built around practical problems.',
              path: '/projects',
              icon: '✦',
            },
            {
              title: 'Currently Working',
              subtitle: 'Pipelines, Systems',
              description: 'See what I am working on across software systems, data pipelines, and research.',
              path: '/research',
              icon: '▣',
            },
            {
              title: 'Blogs & Research',
              subtitle: 'LLM insights',
              description: 'Read my writing and research on language technology and inclusive AI.',
              path: '/research',
              icon: '✎',
            },
            {
              title: 'About Me',
              subtitle: 'My vision & skills',
              description: 'Learn about my background, skills, and long-term research goals.',
              path: '/about',
              icon: '◎',
            },
            {
              title: 'Contact',
              subtitle: 'Reach out to me',
              description: 'Get in touch about collaboration, research, or other inquiries.',
              path: '/contact',
              icon: '✉',
            },
          ].map((item) => {
            const isOpen = activeRoadmapItem === item.title
            const detailsId = `roadmap-details-${item.title.toLowerCase().replaceAll(' ', '-')}`

            return (
              <div key={item.title} className={`roadmap-node${isOpen ? ' is-open' : ''}`}>
                <div className="roadmap-pin-wrap">
                  <button
                    type="button"
                    className="roadmap-pin"
                    aria-label={`Show details for ${item.title}`}
                    aria-expanded={isOpen}
                    aria-controls={detailsId}
                    onClick={() => setActiveRoadmapItem(isOpen ? null : item.title)}
                  >
                    <span>{item.icon}</span>
                  </button>
                  <div className="roadmap-tooltip" id={detailsId}>
                    <p>{item.description}</p>
                    <Link to={item.path}>
                      Explore <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <span className="roadmap-label">{item.title}</span>
                <span className="roadmap-subtitle">{item.subtitle}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="home-quote section">
        <blockquote>Learn deeply. Build thoughtfully. Hasten his coming.</blockquote>
      </section>
    </>
  )
}
