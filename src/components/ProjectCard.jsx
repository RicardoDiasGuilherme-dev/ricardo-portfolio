import Icon from './Icon'
import { verifiedWebUrl } from '../data/portfolio'

function ApiIllustration() {
  return (
    <div className="api-illustration" aria-hidden="true">
      <div className="api-visual-heading">
        <span className="api-mark">
          <Icon name="server" size={23} />
        </span>
        <span>
          Task Management<span>REST API</span>
        </span>
        <Icon name="code" size={20} />
      </div>
      <div className="api-endpoints">
        {[
          ['POST', 'Create a task', 'post'],
          ['GET', 'Retrieve tasks', 'get'],
          ['PUT', 'Update a task', 'put'],
          ['DELETE', 'Delete a task', 'delete'],
        ].map(([method, action, className]) => (
          <div className="endpoint" key={method}>
            <span className={`method method-${className}`}>{method}</span>
            <span>{action}</span>
            <Icon name="check" size={15} />
          </div>
        ))}
      </div>
      <div className="api-visual-footer">
        <span>
          <Icon name="code" size={15} />
          Java + Spring Boot
        </span>
        <span>CRUD · Conceptual view</span>
      </div>
    </div>
  )
}

function ProjectIllustration({ project }) {
  return (
    <div className="api-illustration" aria-hidden="true">
      <div className="api-visual-heading">
        <span className="api-mark">
          <Icon name="code" size={23} />
        </span>
        <span>
          {project.title}
          <span>{project.category}</span>
        </span>
        <Icon name="code" size={20} />
      </div>
      <div className="api-endpoints">
        <svg viewBox="0 0 340 160" width="100%" height="160" fill="none" focusable="false">
          <path
            d="M87 80h166M170 39v82"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <rect
            x="124"
            y="38"
            width="92"
            height="84"
            rx="14"
            fill="var(--secondary-soft)"
            stroke="var(--secondary-border)"
          />
          <path
            d="m158 68-12 12 12 12m24-24 12 12-12 12m-8-31-8 38"
            stroke="var(--secondary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="36" y="60" width="50" height="40" rx="9" fill="var(--surface-raised)" stroke="var(--border)" />
          <path d="M49 74h24M49 84h15" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" />
          <rect x="254" y="60" width="50" height="40" rx="9" fill="var(--surface-raised)" stroke="var(--border)" />
          <path d="M267 74h24M267 84h15" stroke="var(--subtle)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="170" cy="20" r="5" fill="var(--secondary-soft)" stroke="var(--secondary-border)" />
          <circle cx="170" cy="140" r="5" fill="var(--secondary-soft)" stroke="var(--secondary-border)" />
        </svg>
      </div>
      <div className="api-visual-footer">
        <span>
          <Icon name="code" size={15} />
          Project overview
        </span>
        <span>Conceptual view</span>
      </div>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const repositoryUrl = verifiedWebUrl(project.repositoryUrl)
  return (
    <article className="project-card surface" aria-labelledby={`${project.id}-title`}>
      <div className="project-visual">
        {project.id === 'task-management-api' ? (
          <ApiIllustration />
        ) : (
          <ProjectIllustration project={project} />
        )}
      </div>
      <div className="project-copy">
        <p className="project-category">
          <span />
          {project.category}
        </p>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul
          className="technology-list project-technologies"
          aria-label="Project technologies"
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <ul className="project-features">
          {project.features.map((feature) => (
            <li key={feature}>
              <Icon name="check-circle" size={16} />
              {feature}
            </li>
          ))}
        </ul>
        <div className="project-learning">
          <span className="small-label">SKILLS IN PRACTICE</span>
          <p>{project.demonstrates}</p>
        </div>
        {repositoryUrl && (
          <a
            className="button button-secondary"
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={18} />
            View on GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  )
}
