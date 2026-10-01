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

        {/* Everything You Need to Grow Digitally */}
        <div className={styles.growSection}>
          <p className={styles.growLabel}>Everything You Need to Grow Digitally</p>
          <div className={styles.growGrid}>
            <div className={styles.growCard}>
              <div className={styles.growIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className={styles.growCardTitle}>Web Development</h3>
              <p className={styles.growCardDesc}>Stunning, fast websites & web apps built to convert visitors into customers.</p>
            </div>

            <div className={styles.growCard}>
              <div className={styles.growIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className={styles.growCardTitle}>Digital Marketing</h3>
              <p className={styles.growCardDesc}>Data-driven campaigns — SEO, social, and ads — that bring real growth.</p>
            </div>

            <div className={styles.growCard}>
              <div className={styles.growIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
                </svg>
              </div>
              <h3 className={styles.growCardTitle}>AI Integration</h3>
              <p className={styles.growCardDesc}>Embed intelligent AI tools into your products to automate and innovate.</p>
            </div>

            <div className={styles.growCard}>
              <div className={styles.growIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <h3 className={styles.growCardTitle}>Custom Software</h3>
              <p className={styles.growCardDesc}>Tailor-made software solutions built around your unique business needs.</p>
            </div>

            <div className={styles.growCard}>
              <div className={styles.growIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className={styles.growCardTitle}>Automation</h3>
              <p className={styles.growCardDesc}>Streamline repetitive workflows so your team can focus on what matters.</p>
            </div>

            <div className={styles.growCard}>
              <div className={styles.growIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.growCardTitle}>Creative Strategy</h3>
              <p className={styles.growCardDesc}>Brand identity and content strategy that resonates with your audience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
