import { Link } from 'react-router-dom';
import { email, socials } from '../data/socials.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="footer-logo">
          Al<span>Daniel</span>.
        </Link>
        <div className="footer-socials">
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
          <a href={`mailto:${email}`} aria-label="Email">
            @
          </a>
        </div>
        <p className="footer-copy">
          &copy; 2026 Al Daniel. Built with React.
        </p>
      </div>
    </footer>
  );
}
