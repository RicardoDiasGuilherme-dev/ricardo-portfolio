import { assets } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Resume() {
  return (
    <section
      id="resume"
      className="resume-section"
      aria-labelledby="resume-title"
      tabIndex={-1}
    >
      <div className="container">
        <div className="resume-card surface">
          <div className="resume-icon">
            <Icon name="file" size={28} />
            <span>CV</span>
          </div>
          <div className="resume-copy">
            <p className="small-label">THE FULL PICTURE</p>
            <h2 id="resume-title">My experience, on paper.</h2>
            <p>A closer look at my education, technical skills, and professional interests.</p>
          </div>
          {assets.cv && (
            <div className="resume-actions">
              <a
                className="button button-primary"
                href={assets.cv}
                download="Ricardo-Guilherme-CV.pdf"
              >
                <Icon name="download" size={18} />
                Download CV
              </a>
              <a
                className="text-link"
                href={assets.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
