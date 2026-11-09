import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function AboutPage() {
  useDocumentTitle('About | Al Daniel');

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          About <span>Me</span>
        </Reveal>
        <Reveal as="p" className="section-sub">
          Get to know who I am
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-card">
            <h3>Professional Profile</h3>
            <p>
              I am Al Daniel Guigayoma, a 22-year-old student from Tangub City
              Global College with a strong passion for web development, game
              development, and creative digital projects. I enjoy transforming
              ideas into engaging and interactive experiences, particularly
              through website and game creation.
            </p>
            <p>
              I am continuously developing my skills in programming, design,
              and multimedia production, while exploring new technologies and
              creative approaches. I am eager to apply my knowledge and
              creativity in a professional environment where I can contribute
              to meaningful projects, gain practical experience, and continue
              growing as a developer and creative professional.
            </p>
            <Link to="/contact" className="btn btn-glow">
              Work With Me
            </Link>
          </Reveal>

          <Reveal className="about-card">
            <h3>Quick Facts</h3>
            <ul className="facts">
              <li>
                <span>Name:</span> Al Daniel
              </li>
              <li>
                <span>Role:</span> Web Developer &amp; Game Developer
              </li>
              <li>
                <span>Focus:</span> Web Development &amp; Design
              </li>
              <li>
                <span>Based in:</span> Philippines
              </li>
              <li>
                <span>Status:</span> Open to opportunities
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
