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
          alt="Developer working on laptop in cafe dark ambience background"
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
            Digital <span className={styles.redText}>Solutions</span> That Move Your{" "}
            <span className={styles.redText}>Business</span> Forward
          </h1>

          {/* Description */}
          <p className={styles.heroDescription}>
            OsonTech is a digital solutions agency helping businesses grow through
            modern websites, digital marketing, custom software, AI integration,
            and automation. We combine creative strategy with powerful technology to
            build solutions that deliver real business results.
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
