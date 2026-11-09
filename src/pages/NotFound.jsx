import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function NotFound() {
  useDocumentTitle('Page Not Found | Al Daniel');

  return (
    <section className="section" style={{ paddingTop: '160px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">
          Page <span>Not Found</span>
        </h2>
        <p className="section-sub">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" className="btn btn-glow">
          Back Home
        </Link>
      </div>
    </section>
  );
}
