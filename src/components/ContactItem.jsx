export default function ContactItem({ item }) {
  const isExternal = !item.href.startsWith('mailto:');

  return (
    <a
      className="contact-item"
      href={item.href}
      aria-label={item.label}
      {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
    >
      <span className="icon">{item.short}</span> {item.label}
    </a>
  );
}
