import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    id: "results-first",
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Results-First Mindset",
    desc: "We don't just deliver work — we deliver outcomes. Every project is measured by the real-world impact it creates for your business.",
  },
  {
    id: "full-stack",
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8l2 2-2 2" />
        <path d="M11 12h4" />
      </svg>
    ),
    title: "Full-Stack Digital Agency",
    desc: "From marketing and ads to custom software and AI — one team, one vision. No handoffs, no gaps, no excuses.",
  },
  {
    id: "ai-powered",
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
      </svg>
    ),
    title: "AI-Powered Workflows",
    desc: "We stay ahead of the curve by integrating cutting-edge AI into everything we build — making your solutions smarter by default.",
  },
  {
    id: "transparent",
    number: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Radical Transparency",
    desc: "You always know what's happening — clear reporting, honest timelines, and zero fluff. We treat your budget like our own.",
  },
  {
    id: "fast-delivery",
    number: "05",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Turnaround",
    desc: "Agile execution means you get working solutions quickly, with iterative improvements — not endless delays.",
  },
  {
    id: "long-term",
    number: "06",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "We build lasting relationships, not one-off projects. Your growth is our growth, and we're with you every step of the way.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3×", label: "Average ROI" },
  { value: "24/7", label: "Support Available" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={styles.section}>
      {/* Background glow */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Why OsonTech</span>
          <h2 className={styles.title}>
            Why Choose{" "}
            <span className={styles.highlight}>OsonTech?</span>
          </h2>
          <p className={styles.subtitle}>
            We're not just another agency. We're a dedicated digital partner obsessed with helping
            your business grow through strategy, technology, and relentless execution.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{r.icon}</div>
                <span className={styles.number}>{r.number}</span>
              </div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className={styles.statsStrip}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
