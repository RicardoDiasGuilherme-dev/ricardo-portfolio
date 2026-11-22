import { projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-title"
      tabIndex={-1}
    >
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="SELECTED WORK"
          title={<>Learning by <span className="text-accent">building.</span></>}
        >
          A closer look at how I put ideas into practice, one project at a time.
        </SectionHeading>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
