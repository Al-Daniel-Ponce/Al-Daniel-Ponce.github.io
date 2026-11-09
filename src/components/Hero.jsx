import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { socials } from '../data/socials.js';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-inner">
        <Reveal className="hero-text">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            Al <span>Daniel</span>
          </h1>
          <p className="hero-role">Web Developer &amp; Designer</p>
          <p className="hero-desc">
            I turn ideas into visuals, stories, and experiences — crafting
            designs that communicate, inspire, and engage.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn btn-glow">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </Reveal>

        <Reveal className="hero-card">
          <div className="avatar">
            <img src="/assets/profile.png" alt="Al Daniel profile photo" />
          </div>
          <p className="hero-card-name">Al Daniel</p>
          <p className="hero-card-role">Web Developer &amp; Designer</p>
          <div className="hero-socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener"
                aria-label={social.label}
              >
                {social.short}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <Link to="/about" className="scroll-hint" aria-label="Go to About">
        &#8595;
      </Link>
    </section>
  );
}
