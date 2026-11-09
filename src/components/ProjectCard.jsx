import Reveal from './Reveal.jsx';

export default function ProjectCard({ project }) {
  return (
    <Reveal as="article" className="project-card">
      <div className={`thumb ${project.thumbClass}`}>
        <img src={project.image} alt={project.imageAlt} />
        <span>{project.tag}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Reveal>
  );
}
