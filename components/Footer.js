import styles from "./Footer.module.css";

const navLinks = [
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "/#services" },
      { label: "Digital Marketing", href: "/#services" },
      { label: "Meta & Google Ads", href: "/#services" },
      { label: "Custom Software", href: "/#services" },
      { label: "AI Integration", href: "/#services" },
      { label: "Bots & Automation", href: "/#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why OsonTech", href: "/#why-us" },
      { label: "Tech Stack", href: "/#tech-stack" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Contact Us", href: "/#contact" },
      { label: "Email Us", href: "mailto:hello@osontech.in" },
      { label: "WhatsApp", href: "https://wa.me/9074111715" },
    ],
  },
];


const socials = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@osontech_agency",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oson-tech-736307440/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61595085296667",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/osontech.in/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const metaLinks = [
  { label: "About OsonTech", href: "/about" },
  { label: "Contact", href: "/#contact" },
  { label: "Sitemap", href: "/sitemap.xml" },
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top gradient border */}
      <div className={styles.topBorder} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Main Row ── */}
        <div className={styles.mainRow}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoText}>Oson</span>
              <span className={styles.logoAccent}>Tech</span>
            </a>
            <p className={styles.brandDesc}>
              A full-stack digital agency helping businesses grow through modern
              websites, digital marketing, custom software, AI integration, and
              automation. Real results, real growth.
            </p>

            {/* Social Icons */}
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  className={styles.socialBtn}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact pill */}
            <a href="mailto:hello@osontech.com" className={styles.emailPill}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@osontech.com
            </a>
          </div>

          {/* Nav Columns */}
          {navLinks.map((col) => (
            <div key={col.heading} className={styles.navCol}>
              <h4 className={styles.navHeading}>{col.heading}</h4>
              <ul className={styles.navList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className={styles.divider} />

        {/* ── Bottom Row ── */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {year}{" "}
            <span className={styles.copyrightBrand}>OsonTech</span>. All rights
            reserved. Built with ❤️ in Kerala, India.
          </p>

          <nav className={styles.metaLinks} aria-label="Legal links">
            {metaLinks.map((link, i) => (
              <span key={link.label} className={styles.metaItem}>
                <a href={link.href} className={styles.metaLink}>
                  {link.label}
                </a>
                {i < metaLinks.length - 1 && (
                  <span className={styles.metaDot} aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
