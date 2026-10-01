import styles from "./StatsBar.module.css";

export default function StatsBar() {
  const stats = [
    { value: "100%", label: "Custom Engineering" },
    { value: "AI-Powered", label: "Automation & Workflows" },
    { value: "ROI Driven", label: "Digital Growth Strategies" },
  ];

  return (
    <footer className={styles.statsBar}>
      <div className={styles.statsInner}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
