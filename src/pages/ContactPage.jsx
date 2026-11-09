import ContactItem from '../components/ContactItem.jsx';
import Reveal from '../components/Reveal.jsx';
import { contactItems } from '../data/socials.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function ContactPage() {
  useDocumentTitle('Contact | Al Daniel');

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Contact <span>Me</span>
        </Reveal>
        <Reveal as="p" className="section-sub">
          Let&apos;s work together on something great
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-info">
            <h3>Get in Touch</h3>
            <p className="contact-note">
              Have a project, a job opportunity, or just want to say hi? Reach
              out through any channel below.
            </p>
            {contactItems.map((item) => (
              <ContactItem key={item.label} item={item} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
