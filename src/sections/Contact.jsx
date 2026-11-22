import { useState } from 'react'
import { profile, verifiedWebUrl } from '../data/portfolio'
import Icon from '../components/Icon'

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('Email address copied.')
    } catch {
      setCopyStatus('Please select the email address to copy it, or use the email link.')
    }
  }

  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-content">
        <p className="eyebrow"><span />Let’s Talk</p>
        <h2 id="contact-title">
          Let’s learn <span className="text-accent">together</span>
        </h2>
        <p className="contact-intro">
          I’m looking for a curricular internship in backend development, cybersecurity,
          or software engineering. Do you think I’d be a good fit for your team? Contact me!
        </p>
        <div className="contact-email-row">
          <a href={`mailto:${profile.email}`} className="contact-email">
            <Icon name="mail" size={23} />
            {profile.email}
          </a>
          <button
            type="button"
            className="copy-button"
            onClick={copyEmail}
            aria-label="Copy email address"
          >
            <Icon
              name={copyStatus === 'Email address copied.' ? 'check' : 'copy'}
              size={18}
            />
          </button>
        </div>
        <p className="copy-status" aria-live="polite" role="status">
          {copyStatus}
        </p>
        <div className="contact-meta">
          <span><Icon name="location" size={17} />{profile.location}</span>
          <span className="contact-availability">
            <span className="status-dot" />
            Seeking a curricular internship
          </span>
        </div>
        <div className="social-links">
          {Object.entries(profile.links).map(([name, value]) => {
            const url = verifiedWebUrl(value)
            return url ? (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <Icon name={name} size={18} />
                {name === 'github' ? 'GitHub' : 'LinkedIn'}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null
          })}
        </div>
      </div>
    </section>
  )
}
