export type Project = { href:string; index:string; title:string; description:string; category:string; technologies:string[]; result?:string; tone?:"sand"|"clay"|"sage" };
type ProjectCardProps = { project:Project; featured?:boolean };

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) return <article className={`project-card featured-card tone-${project.tone ?? "sand"}`}>
    <div className="card-topline"><span>{project.index}</span><span>{project.category}</span></div><div className="project-mark" aria-hidden="true"><span>{project.index}</span></div>
    <div className="featured-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list" aria-label="Technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="card-footer">{project.result && <span className="result">{project.result}</span>}<a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>View repository</a></div></div>
  </article>;
  return <article className="project-card library-card"><div className="card-topline"><span>{project.index}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="library-card-bottom"><div className="tech-line">{project.technologies.join(" · ")}</div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><span>View repository</span></a></div></article>;
}
