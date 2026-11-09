import useInView from '../hooks/useInView.js';

/**
 * Wraps content in the original ".reveal" animation. The element only becomes
 * visible once it enters the viewport (or immediately for reduced motion).
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const { ref, inView } = useInView();
  const classes = [className, 'reveal', inView ? 'visible' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
