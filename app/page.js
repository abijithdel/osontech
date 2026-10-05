import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const BASE_URL = "https://www.osontech.in";

export const metadata = {
  title: "Digital Marketing & Web Development Agency in Calicut | OsonTech",
  description:
    "OsonTech is a leading digital marketing and web development agency in Calicut (Kozhikode), Kerala. We specialise in SEO, Google Ads, Meta Ads, social media marketing, WordPress, Shopify, and custom software development.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Digital Marketing & Web Development Agency in Calicut | OsonTech",
    description:
      "OsonTech is a leading digital marketing and web development agency in Calicut (Kozhikode), Kerala. We specialise in SEO, Google Ads, Meta Ads, social media marketing, WordPress, Shopify, and custom software development.",
    url: BASE_URL,
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
    title: "Digital Marketing & Web Development Agency in Calicut | OsonTech",
    description:
      "OsonTech is a leading digital marketing and web development agency in Calicut (Kozhikode), Kerala. We specialise in SEO, Google Ads, Meta Ads, social media marketing, WordPress, Shopify, and custom software development.",
    images: [`${BASE_URL}/logo.png`],
  },
};

/** JSON-LD structured data – LocalBusiness + WebSite */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#organization`,
      name: "OsonTech",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
      description:
        "OsonTech is a digital marketing and web development agency in Calicut (Kozhikode), Kerala, offering SEO, Google Ads, Meta Ads, social media marketing, WordPress, Shopify, and custom software development.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calicut",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Calicut" },
        { "@type": "City", name: "Kozhikode" },
        { "@type": "State", name: "Kerala" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9074111715",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Malayalam"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-8590783321",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Malayalam"],
        },
      ],
      email: "hello@osontech.in",
      sameAs: [
        "https://www.instagram.com/osontech.in/",
        "https://www.facebook.com/profile.php?id=61595085296667",
        "https://www.linkedin.com/in/oson-tech-736307440/",
        "https://www.youtube.com/@osontech_agency",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing & Web Development Services in Calicut",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimisation (SEO)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads (Facebook & Instagram Ads)" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "WordPress Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration & Automation" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "OsonTech",
      description:
        "Digital Marketing & Web Development Agency in Calicut, Kerala",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Digital Marketing & Web Development Agency in Calicut | OsonTech",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "OsonTech is a leading digital marketing and web development agency in Calicut (Kozhikode), Kerala offering SEO, Google Ads, Meta Ads, social media marketing, WordPress, Shopify, and custom software development.",
      inLanguage: "en-IN",
    },
  ],
};

/** JSON-LD structured data – FAQ (for rich results) */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does OsonTech offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OsonTech is a full-stack digital agency in Calicut offering web development (WordPress, Shopify, React, Next.js), digital marketing (SEO, Google Ads, Meta Ads, Social Media), custom software development, AI integration, automation bots, and creative brand strategy.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website or app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard WordPress or landing page site typically takes 1–2 weeks. A custom React/Next.js website or e-commerce store takes 3–6 weeks. Complex custom software or AI-integrated platforms are scoped individually with a clear timeline provided before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a project cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project is unique and pricing depends on scope, features, and timeline. We offer flexible packages for startups, SMEs, and enterprises. After an initial discovery call we send a transparent quote with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer monthly retainer plans covering hosting management, security updates, performance optimisation, content changes, and priority support 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with digital marketing and ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our marketing team manages Google Ads, Meta (Facebook & Instagram) Ads, Google My Business optimisation, SEO, and social media marketing in Calicut and across Kerala.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with OsonTech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is simple — click 'Get Started' or use our contact form. We'll schedule a free discovery call to understand your goals and put together a customised proposal. No commitments, no pressure.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className={styles.mainContainer}>
        <Header />

        <main className={styles.content}>
          <Hero />
          <Services />
          <WhyChooseUs />
          <TechStack />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
