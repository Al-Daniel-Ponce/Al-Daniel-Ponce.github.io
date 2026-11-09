import Reveal from '../components/Reveal.jsx';
import SkillBar from '../components/SkillBar.jsx';
import { creativeSkills, tools } from '../data/skills.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function SkillsPage() {
  useDocumentTitle('Skills | Al Daniel');

  return (
    <section id="skills" className="section alt">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Skills &amp; <span>Tools</span>
        </Reveal>
        <Reveal as="p" className="section-sub">
          What I work with every day
        </Reveal>

        <div className="skills-grid">
          <Reveal className="skill-block">
            <h3>Creative Skills</h3>
            {creativeSkills.map((skill) => (
              <SkillBar key={skill.label} label={skill.label} pct={skill.pct} />
            ))}
          </Reveal>

          <Reveal className="skill-block">
            <h3>Tools I Use</h3>
            <ul className="tools">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
