import { skillGroups, softSkills } from '../data/portfolio'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section
      id="skills"
      className="section section-tinted"
      aria-labelledby="skills-title"
      tabIndex={-1}
    >
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="MY TOOLKIT"
          title={<>The tools <span className="text-accent">I use</span></>}
        >
          Technologies I’ve worked with through my studies and projects. Always learning,
          always building on the fundamentals.
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card surface" key={group.title}>
              <span className="icon-box">
                <Icon name={group.icon} size={23} />
              </span>
              <h3>{group.title}</h3>
              <p>{group.note}</p>
              <ul
                className="technology-list"
                aria-label={`${group.title} technologies`}
              >
                {group.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="soft-skills">
          <div>
            <span className="small-label">BEYOND THE CODE</span>
            <h3>Good software starts with people.</h3>
          </div>
          <ul>
            {softSkills.map((skill) => (
              <li key={skill}>
                <Icon name="check" size={16} />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
