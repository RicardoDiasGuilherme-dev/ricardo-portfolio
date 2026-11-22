import { profile } from '../data/portfolio'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="My background"
          title="About me"
        />
        <div className="about-grid">
          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="language-list" aria-label="Languages">
              <Icon name="globe" size={18} />
              {profile.languages.map((language) => (
                <p key={language.name}>
                  <strong>{language.name}</strong>
                  <span>{language.level}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="education-card surface">
            <div className="card-topline">
              <span className="icon-box"><Icon name="book" size={22} /></span>
              <span className="small-label">EDUCATION</span>
            </div>
            <h3>{profile.education.degree}</h3>
            <p>{profile.education.institution}</p>
            <p className="education-location">
              <Icon name="location" size={14} />
              {profile.education.location}
            </p>
            <p className="education-dates">
              <strong>{profile.education.start}–{profile.education.end}</strong>{' '}
              <span>(Expected Graduation)</span>
            </p>
          </div>
        </div>
        <div className="about-notes">
          <article>
            <Icon name="code" size={22} />
            <div>
              <h3>What I’m focused on</h3>
              <p>
                I’m learning backend development and cybersecurity to better understand
                how to build secure, reliable software.
              </p>
            </div>
          </article>
          <article>
            <Icon name="spark" size={22} />
            <div>
              <h3>Where I want to go</h3>
              <p>
                I’m looking for a curricular internship in software development where I can
                contribute to a team, gain practical experience, and grow as a software engineer.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
