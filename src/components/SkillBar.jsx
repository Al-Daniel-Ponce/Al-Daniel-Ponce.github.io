import useInView from '../hooks/useInView.js';

export default function SkillBar({ label, pct }) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div className="skill" ref={ref}>
      <div className="skill-top">
        <span>{label}</span>
        <span className="pct">{pct}%</span>
      </div>
      <div className="bar">
        <div
          className="fill"
          style={{ width: inView ? `${pct}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}
