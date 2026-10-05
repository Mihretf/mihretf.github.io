import PageHeader from '../components/PageHeader'
import { personalDetails } from '../data/siteData'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="Curiosity is the foundation of the work."
        intro="I care about understanding things deeply, building with intention, and helping people make better decisions with tools that feel clear and humane."
      />

      <section className="section split-layout">
        <div className="content-block">
          <h2>A little more about me</h2>
          <p>
            I am someone who enjoys moving between ideas and implementation. My work leans
            toward machine learning, research, and product thinking, but the common thread is
            always the same: build something useful, understandable, and worth caring about.
          </p>
        </div>

        <div className="content-block">
          <h2>Learning philosophy</h2>
          <p>
            I believe the best work is usually slow, careful, and humble. Good systems require
            clear thinking, good questions, and a willingness to keep learning when the first
            answer is not enough.
          </p>
        </div>
      </section>

      <section className="section info-grid">
        <div className="info-panel">
          <h3>Work</h3>
          <ul>
            {personalDetails.work.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <h3>Education</h3>
          <ul>
            {personalDetails.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <h3>Skills</h3>
          <ul>
            {personalDetails.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <h3>Interests</h3>
          <ul>
            {personalDetails.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
