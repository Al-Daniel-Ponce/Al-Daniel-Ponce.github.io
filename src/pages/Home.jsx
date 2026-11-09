import Hero from '../components/Hero.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Home() {
  useDocumentTitle('Al Daniel | Multimedia Portfolio');

  return <Hero />;
}
