"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Services",   href: "#services" },
  { label: "Why Us",     href: "#why-us" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "FAQ",        href: "#faq" },
  { label: "Contact",    href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <a href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoBox}>O</span>
            <span className={styles.logoWordOson}>Oson</span>
            <span className={styles.logoWordTech}>Tech</span>
          </a>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <a href="#contact" className={styles.ctaBtn}>
              Get Started
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerHeader}>
          <a href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoBox}>O</span>
            <span className={styles.logoWordOson}>Oson</span>
            <span className={styles.logoWordTech}>Tech</span>
          </a>
          <button className={styles.closeBtn} onClick={closeMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className={styles.drawerList}>
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={styles.drawerItem}
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <a href={link.href} className={styles.drawerLink} onClick={closeMenu}>
                <span className={styles.drawerNum}>{String(i + 1).padStart(2, "0")}</span>
                {link.label}
                <svg className={styles.drawerArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.drawerFooter}>
          <a href="#contact" className={styles.drawerCta} onClick={closeMenu}>
            Get Started — It's Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}
