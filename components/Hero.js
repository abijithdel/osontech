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
