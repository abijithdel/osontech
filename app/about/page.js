import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const BASE_URL = "https://www.osontech.in";

export const metadata = {
  title: "About OsonTech – Digital Marketing & Web Development Agency in Calicut",
  description:
    "Learn about OsonTech, a digital marketing and web development agency in Calicut, Kerala, founded by Abijith and Alan. We help businesses grow through SEO, web development, Google Ads, social media marketing, and AI solutions.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About OsonTech – Digital Marketing & Web Development Agency in Calicut",
    description:
      "Learn about OsonTech, a digital marketing and web development agency in Calicut, Kerala, founded by Abijith and Alan. We help businesses grow through SEO, web development, Google Ads, social media marketing, and AI solutions.",
    url: `${BASE_URL}/about`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/logo.png`,
        width: 800,
        height: 600,
        alt: "OsonTech – Digital Marketing & Web Development Agency in Calicut, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About OsonTech – Digital Marketing & Web Development Agency in Calicut",
    description:
      "Learn about OsonTech, a digital marketing and web development agency in Calicut, Kerala, founded by Abijith and Alan.",
    images: [`${BASE_URL}/logo.png`],
  },
};

/** JSON-LD structured data for About page */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${BASE_URL}/about#webpage`,
      url: `${BASE_URL}/about`,
      name: "About OsonTech – Digital Marketing & Web Development Agency in Calicut",
      description:
        "OsonTech is a digital marketing and web development agency in Calicut, Kerala, founded by Abijith and Alan.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: `${BASE_URL}/about`,
        },
      ],
    },
  ],
};


/* ── Data ────────────────────────────────────────────────────── */

const services = [
  {
    title: "Web Development",
    desc: "We build websites that are fast, clean, and built to grow with your business — from simple landing pages to complex web apps.",
  },
  {
    title: "Digital Marketing",
    desc: "We help you reach the right people at the right time through targeted strategies that actually move the needle.",
  },
  {
    title: "WordPress",
    desc: "Custom WordPress sites built properly — not just themes dropped on a server. We make WordPress work for your specific needs.",
  },
  {
    title: "Shopify",
    desc: "From store setup to custom features and theme work, we help you build a Shopify store that converts visitors into customers.",
  },
  {
    title: "Custom Software",
    desc: "When off-the-shelf tools don't cut it, we build software tailored to exactly what your business needs.",
  },
  {
    title: "SEO",
    desc: "We work on getting your business found organically — through proper on-page SEO, technical fixes, and content strategy.",
  },
  {
    title: "Social Media Marketing",
    desc: "Consistent, purposeful content and management across platforms that builds your presence and keeps your audience engaged.",
  },
  {
    title: "Paid Advertising",
    desc: "Meta Ads and Google Ads managed with a focus on results — not just impressions. We track what matters and adjust accordingly.",
  },
  {
    title: "AI Integration",
    desc: "We integrate AI tools into your products and workflows in ways that genuinely make things faster and smarter.",
  },
  {
    title: "Automation",
    desc: "We automate the repetitive stuff so you can focus on the work that actually requires your attention.",
  },
  {
    title: "Bots",
    desc: "From simple chatbots to more complex automation bots, we build tools that handle tasks around the clock.",
  },
  {
    title: "Other Digital Solutions",
    desc: "Got a digital problem you're not sure how to solve? We're good at figuring things out. Just bring your challenge.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    desc: "Before we write a single line of code or create one campaign, we take time to understand your business, your goals, and the people you're trying to reach. Good work starts with asking the right questions.",
  },
  {
    number: "02",
    title: "Build",
    desc: "We build with purpose. Whether it's a website, a marketing campaign, or a custom tool — everything is put together with care, keeping your specific goals in mind and not just checking boxes.",
  },
  {
    number: "03",
    title: "Improve",
    desc: "Launch isn't the finish line. We look at what's working, what isn't, and keep making things better. Good digital work is a process, not a one-time event.",
  },
  {
    number: "04",
    title: "Grow",
    desc: "Our goal is to help your business grow — and grow alongside you. We're not here for a quick project and goodbye. We want to be the team you come back to when the next challenge shows up.",
  },
];

const whyPoints = [
  {
    title: "You talk to us directly.",
    desc: "No account managers passing messages around. When you work with OsonTech, you talk directly to the people doing the work.",
  },
  {
    title: "Everything is built for you.",
    desc: "We don't use cookie-cutter templates or generic strategies. What we build is shaped around your business, not the other way around.",
  },
  {
    title: "We use modern tools.",
    desc: "From the latest web technologies to AI-assisted workflows, we use what actually works today — not what was popular five years ago.",
  },
  {
    title: "We cover both sides.",
    desc: "Most agencies do either development or marketing. We do both — which means less friction, better alignment, and a more consistent result.",
  },
  {
    title: "We think long-term.",
    desc: "We'd rather build something that serves you well for years than rush something out the door. We care about what happens after delivery.",
  },
];

/* ── Component ───────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.pageWrapper}>
        <Header />

        <main className={styles.main}>

          {/* ── 1. Hero ── */}
          <section className={styles.hero}>
            <div className={styles.heroGlow} aria-hidden="true" />
            <div className={styles.heroInner}>
              <span className={styles.eyebrow}>About OsonTech</span>
              <h1 className={styles.heroTitle}>
                Digital Agency in Calicut,{" "}
                <span className={styles.highlight}>Built With Purpose.</span>
              </h1>
              <p className={styles.heroSub}>
                OsonTech is a digital marketing and web development agency based in Calicut (Kozhikode), Kerala,
                built by Abijith and Alan — two people who decided to stop waiting and start building. We help
                businesses grow online through web development, digital marketing,
                AI, automation, and everything in between.
              </p>
            </div>
          </section>

        {/* ── 2. Who We Are ── */}
        <section className={styles.whoWeAre}>
          <div className={styles.standardInner}>
            <div className={styles.twoCol}>
              <div className={styles.sectionHead}>
                <span className={styles.eyebrow}>Who We Are</span>
                <h2 className={styles.sectionTitle}>
                  A Small Agency That{" "}
                  <span className={styles.highlight}>Takes Work Seriously</span>
                </h2>
              </div>
              <div className={styles.textStack}>
                <p className={styles.bodyText}>
                  OsonTech is a digital solutions agency. We work with businesses,
                  startups, and individuals who want to build a proper digital
                  presence — websites that work, marketing that reaches people,
                  and software that actually solves problems.
                </p>
                <p className={styles.bodyText}>
                  We started this because we saw too many businesses either paying
                  too much for average work or struggling to find someone who
                  understood both the technical and marketing sides of digital
                  growth. We wanted to offer something better.
                </p>
                <p className={styles.bodyText}>
                  Our approach is straightforward — understand the problem,
                  build the right solution, and keep improving it. We cover
                  web development, digital marketing, custom software, SEO, paid
                  advertising, AI integration, and automation. All under one roof,
                  so nothing gets lost in translation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Our Story ── */}
        <section className={styles.story}>
          <div className={styles.storyGlow} aria-hidden="true" />
          <div className={styles.standardInner}>
            <div className={styles.storyCentered}>
              <span className={styles.eyebrow}>Our Story</span>
              <h2 className={styles.sectionTitle}>
                It Started with a{" "}
                <span className={styles.highlight}>Conversation</span>
              </h2>
              <div className={styles.storyBody}>
                <p className={styles.bodyText}>
                  Abijith and Alan have been friends for a while. Over time,
                  they kept having the same conversation — about technology,
                  about how businesses struggled to grow online, and about all
                  the opportunities being missed just because the right help
                  wasn&apos;t available.
                </p>
                <p className={styles.bodyText}>
                  Abijith had been building websites and software, getting
                  deeper into web technologies, AI, and automation. Alan had
                  been focused on the marketing side — social media, ads,
                  SEO, and how businesses could actually reach people online.
                  Together, they covered the full picture.
                </p>
                <p className={styles.bodyText}>
                  At some point, talking about it wasn&apos;t enough. They decided
                  to do something about it. OsonTech was the result — a place
                  where both sides of digital come together, run by two people
                  who genuinely care about the work they put out.
                </p>
                <p className={styles.bodyText}>
                  It&apos;s still early days. But the direction is clear — build a
                  digital agency that businesses can trust, where good work
                  speaks for itself and clients feel like they have a real team
                  behind them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Meet The Founders ── */}
        <section className={styles.founders}>
          <div className={styles.standardInner}>
            <div className={styles.foundersHead}>
              <span className={styles.eyebrow}>Meet The Founders</span>
              <h2 className={styles.sectionTitle}>
                The People{" "}
                <span className={styles.highlight}>Behind OsonTech</span>
              </h2>
            </div>

            <div className={styles.foundersGrid}>

              {/* Abijith */}
              <div className={styles.founderCard}>
                <div className={styles.founderTag}>Co-Founder</div>
                <h3 className={styles.founderName}>Abijith</h3>
                <p className={styles.founderRole}>Software Developer & Web Specialist</p>
                <div className={styles.founderDivider} />
                <p className={styles.bodyText}>
                  Abijith handles the technical side of OsonTech. He builds
                  websites and web applications using modern technologies,
                  and has hands-on experience with WordPress, Shopify, and
                  custom software development.
                </p>
                <p className={styles.bodyText}>
                  He&apos;s also the one thinking about AI — how to integrate it
                  meaningfully into products and how to use automation to make
                  things work smarter. When there&apos;s a technical problem to
                  solve, Abijith figures it out.
                </p>
                <div className={styles.founderTags}>
                  {["Web Development", "WordPress", "Shopify", "Custom Software", "AI Integration", "Automation"].map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Alan */}
              <div className={styles.founderCard}>
                <div className={styles.founderTag}>Co-Founder</div>
                <h3 className={styles.founderName}>Alan</h3>
                <p className={styles.founderRole}>Digital Marketing & Growth</p>
                <div className={styles.founderDivider} />
                <p className={styles.bodyText}>
                  Alan leads the digital marketing side of OsonTech. He works on
                  SEO, social media marketing, and paid advertising — Meta Ads
                  and Google Ads — with a focus on reaching the right audience
                  and driving real business results.
                </p>
                <p className={styles.bodyText}>
                  He also helps businesses get found locally through Google
                  Business Profile and builds the kind of online presence that
                  actually brings in leads. Alan cares about what happens after
                  a campaign goes live — not just the setup.
                </p>
                <div className={styles.founderTags}>
                  {["Digital Marketing", "SEO", "Social Media", "Meta Ads", "Google Ads", "Google Business Profile"].map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 5. What We Do ── */}
        <section className={styles.whatWeDo}>
          <div className={styles.whatWeDoGlow} aria-hidden="true" />
          <div className={styles.standardInner}>
            <div className={styles.whatWeDoHead}>
              <span className={styles.eyebrow}>What We Do</span>
              <h2 className={styles.sectionTitle}>
                Digital Services,{" "}
                <span className={styles.highlight}>All in One Place</span>
              </h2>
              <p className={styles.headSub}>
                We cover a wide range of digital services — so instead of working
                with five different vendors, you can work with us.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((s) => (
                <div key={s.title} className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Our Approach ── */}
        <section className={styles.approach}>
          <div className={styles.standardInner}>
            <div className={styles.approachHead}>
              <span className={styles.eyebrow}>Our Approach</span>
              <h2 className={styles.sectionTitle}>
                How We{" "}
                <span className={styles.highlight}>Work</span>
              </h2>
            </div>

            <div className={styles.approachGrid}>
              {approach.map((a) => (
                <div key={a.number} className={styles.approachCard}>
                  <span className={styles.approachNum}>{a.number}</span>
                  <h3 className={styles.approachTitle}>{a.title}</h3>
                  <p className={styles.approachDesc}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Our Vision ── */}
        <section className={styles.vision}>
          <div className={styles.visionGlow} aria-hidden="true" />
          <div className={styles.standardInner}>
            <div className={styles.visionCentered}>
              <span className={styles.eyebrow}>Our Vision</span>
              <h2 className={styles.sectionTitle}>
                Where We&apos;re{" "}
                <span className={styles.highlight}>Headed</span>
              </h2>
              <p className={styles.visionText}>
                We want OsonTech to be the agency that businesses think of when
                they need digital done properly. Not the biggest agency, but one
                of the most trusted — known for honest work, real results, and
                actually caring about the people we work with.
              </p>
              <p className={styles.visionText}>
                Our goal is to help more businesses use technology well —
                whether that means a great website, a marketing campaign that
                brings in the right customers, or a piece of software that makes
                daily operations easier.
              </p>
              <p className={styles.visionText}>
                We believe the best digital experiences come from combining
                development and marketing together — not treating them as separate
                things. That&apos;s what we&apos;re building toward, and we&apos;re growing
                alongside every client we work with.
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. Why OsonTech ── */}
        <section className={styles.why}>
          <div className={styles.standardInner}>
            <div className={styles.whyHead}>
              <span className={styles.eyebrow}>Why OsonTech</span>
              <h2 className={styles.sectionTitle}>
                What Makes Us{" "}
                <span className={styles.highlight}>Different</span>
              </h2>
            </div>

            <div className={styles.whyGrid}>
              {whyPoints.map((w) => (
                <div key={w.title} className={styles.whyCard}>
                  <div className={styles.whyDot} aria-hidden="true" />
                  <div>
                    <h3 className={styles.whyTitle}>{w.title}</h3>
                    <p className={styles.whyDesc}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CTA ── */}
        <section className={styles.cta}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Let&apos;s Build Something{" "}
              <span className={styles.highlight}>Digital.</span>
            </h2>
            <p className={styles.ctaSub}>
              Whether you&apos;re a business looking to grow, a startup figuring out
              your digital strategy, or an individual with a project idea —
              we&apos;d love to hear from you. No pressure, just a conversation.
            </p>
            <div className={styles.ctaBtns}>
              <a href="/#contact" className={styles.ctaBtnPrimary}>
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="/#contact" className={styles.ctaBtnSecondary}>
                Talk to Us
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
    </>
  );
}
