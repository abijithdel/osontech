import Image from "next/image";
import Button from "./Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Dark Shade Background Layer */}
      <div className={styles.heroBgWrapper}>
        <Image
          src="/hero-bg.jpg"
          alt="Digital marketing and web development team working at OsonTech agency in Calicut, Kerala"
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />
      </div>

      {/* ── Animated Background Elements ─────────────────────── */}
      <div className={styles.animBg} aria-hidden="true">
        {/* Grid mesh */}
        <div className={styles.gridMesh} />

        {/* Orbs */}
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
        <div className={`${styles.orb} ${styles.orb4}`} />

        {/* Floating particles */}
        <span className={`${styles.particle} ${styles.p1}`} />
        <span className={`${styles.particle} ${styles.p2}`} />
        <span className={`${styles.particle} ${styles.p3}`} />
        <span className={`${styles.particle} ${styles.p4}`} />
        <span className={`${styles.particle} ${styles.p5}`} />
        <span className={`${styles.particle} ${styles.p6}`} />
        <span className={`${styles.particle} ${styles.p7}`} />
        <span className={`${styles.particle} ${styles.p8}`} />

        {/* Geometric rings */}
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={`${styles.ring} ${styles.ring3}`} />

        {/* Horizontal scan line */}
        <div className={styles.scanLine} />
      </div>

      {/* Hero Body Content */}
      <div className={styles.heroBodyContainer}>
        <div className={styles.heroCenterBox}>

          {/* Main Title with Highlights */}
          <h1 className={styles.heroTitle}>
            Digital <span className={styles.redText}>Marketing</span> &amp; Web{" "}
            <span className={styles.redText}>Development</span> Agency in Calicut
          </h1>

          {/* Description */}
          <p className={styles.heroDescription}>
            OsonTech is a full-service digital agency based in Calicut (Kozhikode), Kerala,
            helping businesses grow through modern websites, SEO, Google Ads, social media
            marketing, custom software, AI integration, and automation.
          </p>

          {/* Action Buttons using modular Button component */}
          <div className={styles.buttonContainer}>
            <Button
              variant="primary"
              size="lg"
              href="#contact"
              showArrow
            >
              Get Started
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#services"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
