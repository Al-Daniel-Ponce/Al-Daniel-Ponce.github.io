import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';
import { workCategories } from '../data/navigation.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const categorySubtitles = {
  all: "A few projects I've made",
  web: 'Web development projects',
  game: 'Game development projects',
  mobile: 'Mobile app projects',
};

export default function WorkPage() {
  useDocumentTitle('Work | Al Daniel');

  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get('category') || 'all';
  const activeCategory = workCategories.some(
    (category) => category.id === requestedCategory
  )
    ? requestedCategory
    : 'all';

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          My <span>Work</span>
        </Reveal>
        <Reveal as="p" className="section-sub">
          {categorySubtitles[activeCategory]}
        </Reveal>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
