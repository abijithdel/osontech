"use client";

import { useState } from "react";
import styles from "./TechStack.module.css";

const INITIAL_SHOW = 10;

const allTechs = [
  // Frontend
  { name: "React",        icon: "⚛️",   color: "#61DAFB", cat: "Frontend" },
  { name: "Next.js",      icon: "▲",    color: "#ffffff", cat: "Frontend" },
  { name: "HTML5",        icon: "🌐",   color: "#E34F26", cat: "Frontend" },
  { name: "CSS3",         icon: "🎨",   color: "#1572B6", cat: "Frontend" },
  { name: "TypeScript",   icon: "TS",   color: "#3178C6", cat: "Frontend" },
  { name: "JavaScript",   icon: "JS",   color: "#F7DF1E", cat: "Frontend" },
  // Backend
  { name: "Node.js",      icon: "🟢",   color: "#339933", cat: "Backend" },
  { name: "Python",       icon: "🐍",   color: "#3776AB", cat: "Backend" },
  { name: "Express",      icon: "Ex",   color: "#ffffff", cat: "Backend" },
  { name: "FastAPI",      icon: "⚡",   color: "#009688", cat: "Backend" },
  { name: "REST API",     icon: "🔗",   color: "#FF6B35", cat: "Backend" },
  { name: "GraphQL",      icon: "◉",    color: "#E10098", cat: "Backend" },
  // CMS & E-Commerce
  { name: "WordPress",    icon: "W",    color: "#21759B", cat: "CMS & E-Commerce" },
  { name: "Shopify",      icon: "🛍️",  color: "#96BF48", cat: "CMS & E-Commerce" },
  { name: "WooCommerce",  icon: "🛒",   color: "#7F54B3", cat: "CMS & E-Commerce" },
  { name: "Webflow",      icon: "W↗",   color: "#4353FF", cat: "CMS & E-Commerce" },
  { name: "Strapi",       icon: "S",    color: "#8C4BFF", cat: "CMS & E-Commerce" },
  { name: "Sanity",       icon: "Sa",   color: "#F03E2F", cat: "CMS & E-Commerce" },
  // AI & Automation
  { name: "OpenAI",       icon: "◎",    color: "#10A37F", cat: "AI & Automation" },
  { name: "LangChain",    icon: "🔗",   color: "#5A9FD4", cat: "AI & Automation" },
  { name: "Hugging Face", icon: "🤗",   color: "#FFD21E", cat: "AI & Automation" },
  { name: "n8n",          icon: "n8n",  color: "#EA4B71", cat: "AI & Automation" },
  { name: "Make",         icon: "M",    color: "#9B59B6", cat: "AI & Automation" },
  { name: "Zapier",       icon: "Z",    color: "#FF4A00", cat: "AI & Automation" },
  // Cloud & DevOps
  { name: "AWS",          icon: "☁️",  color: "#FF9900", cat: "Cloud & DevOps" },
  { name: "Vercel",       icon: "▲",    color: "#ffffff", cat: "Cloud & DevOps" },
  { name: "Docker",       icon: "🐳",   color: "#2496ED", cat: "Cloud & DevOps" },
  { name: "GitHub",       icon: "⌥",    color: "#ffffff", cat: "Cloud & DevOps" },
  { name: "Netlify",      icon: "N",    color: "#00C7B7", cat: "Cloud & DevOps" },
  { name: "Firebase",     icon: "🔥",   color: "#FFCA28", cat: "Cloud & DevOps" },
  // Databases
  { name: "MongoDB",      icon: "🍃",   color: "#47A248", cat: "Database" },
  { name: "PostgreSQL",   icon: "🐘",   color: "#336791", cat: "Database" },
  { name: "MySQL",        icon: "🐬",   color: "#4479A1", cat: "Database" },
  { name: "Redis",        icon: "R",    color: "#DC382D", cat: "Database" },
  { name: "Supabase",     icon: "S",    color: "#3ECF8E", cat: "Database" },
  { name: "Prisma",       icon: "◈",    color: "#5A67D8", cat: "Database" },
  // Marketing & Ads
  { name: "Google Ads",   icon: "G",    color: "#4285F4", cat: "Marketing & Ads" },
  { name: "Meta Ads",     icon: "ƒ",    color: "#0866FF", cat: "Marketing & Ads" },
  { name: "GA4",          icon: "📊",   color: "#E37400", cat: "Marketing & Ads" },
  { name: "SEMrush",      icon: "S",    color: "#FF642D", cat: "Marketing & Ads" },
  { name: "Mailchimp",    icon: "✉️",  color: "#FFE01B", cat: "Marketing & Ads" },
  { name: "HubSpot",      icon: "H",    color: "#FF7A59", cat: "Marketing & Ads" },
  // Bots & Messaging
  { name: "Discord.js",   icon: "🎮",   color: "#5865F2", cat: "Bots & Messaging" },
  { name: "Telegram",     icon: "✈️",  color: "#26A5E4", cat: "Bots & Messaging" },
  { name: "WhatsApp",     icon: "💬",   color: "#25D366", cat: "Bots & Messaging" },
  { name: "Slack",        icon: "S",    color: "#E01E5A", cat: "Bots & Messaging" },
  { name: "Twilio",       icon: "T",    color: "#F22F46", cat: "Bots & Messaging" },
  { name: "Botpress",     icon: "B",    color: "#4A90E2", cat: "Bots & Messaging" },
];

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);

  const visibleTechs = showAll ? allTechs : allTechs.slice(0, INITIAL_SHOW);
  const hiddenCount = allTechs.length - INITIAL_SHOW;

  return (
    <section id="tech-stack" className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Built With The Best</span>
          <h2 className={styles.title}>
            Our Technology <span className={styles.highlight}>Stack</span>
          </h2>
          <p className={styles.subtitle}>
            We use industry-leading tools and frameworks across every discipline — from frontend and
            AI to cloud infrastructure and marketing automation.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.techGrid}>
          {visibleTechs.map((tech, i) => (
            <div
              key={tech.name}
              className={styles.techCard}
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <span
                className={styles.techIcon}
                style={{ "--tech-color": tech.color }}
              >
                {tech.icon}
              </span>
              <span className={styles.techName}>{tech.name}</span>
              <span className={styles.techCat}>{tech.cat}</span>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        <button
          className={`${styles.toggleBtn} ${showAll ? styles.toggleBtnCollapse : ""}`}
          onClick={() => setShowAll((v) => !v)}
        >
          {showAll ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="18 15 12 9 6 15" />
              </svg>
              Show Less
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
              Show All {hiddenCount} More Technologies
            </>
          )}
        </button>
      </div>
    </section>
  );
}
