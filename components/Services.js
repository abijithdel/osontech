"use client";

import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const services = [
  {
    id: "social-media-marketing",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: "Social Media Marketing",
    desc: "Build a powerful brand presence across Instagram, Facebook, TikTok & more with engaging content and growth strategies.",
    tag: "Marketing",
  },
  {
    id: "google-my-business",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Google My Business",
    desc: "Optimise your local listing so customers find you first on Google Search and Maps — and trust what they see.",
    tag: "Local SEO",
  },
  {
    id: "meta-ads",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8l3 3 2-2 3 4" />
      </svg>
    ),
    title: "Meta Ads",
    desc: "High-converting Facebook & Instagram ad campaigns designed to target the right audience and maximise your ROI.",
    tag: "Paid Ads",
  },
  {
    id: "google-ads",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Google Ads",
    desc: "Search, Display & Shopping campaigns that put your business at the top when people are actively looking for you.",
    tag: "Paid Ads",
  },
  {
    id: "wordpress",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "WordPress",
    desc: "Beautiful, fast WordPress sites with custom themes, plugins, and ongoing maintenance — easy for you to manage.",
    tag: "Web",
  },
  {
    id: "shopify",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    title: "Shopify",
    desc: "Launch or scale your e-commerce store with a polished Shopify setup — from theme design to payment and fulfilment.",
    tag: "E-Commerce",
  },
  {
    id: "custom-website",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="19" y1="12" x2="5" y2="12" strokeDasharray="3 2" />
      </svg>
    ),
    title: "Custom Website",
    desc: "Pixel-perfect websites built with React, Next.js, or plain HTML/CSS — engineered for performance and scalability.",
    tag: "Web · React · Next.js",
  },
  {
    id: "custom-software",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M9 8l-2 2 2 2" />
        <path d="M15 8l2 2-2 2" />
      </svg>
    ),
    title: "Custom Software",
    desc: "Bespoke web apps, dashboards, ERPs and internal tools built to solve your specific business challenges.",
    tag: "Software",
  },
  {
    id: "app-dev",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
        <path d="M9 6h6" />
        <rect x="2" y="7" width="5" height="4" rx="1" />
        <rect x="17" y="7" width="5" height="4" rx="1" />
      </svg>
    ),
    title: "App Dev (Mobile & Des)",
    desc: "Native and cross-platform apps for iOS, Android & desktop — built with Flutter or React Native for a seamless user experience.",
    tag: "Mobile · Desktop",
  },
  {
    id: "bots",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M12 11V3" />
        <path d="M8 3h8" />
        <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" />
        <path d="M9 19h6" />
      </svg>
    ),
    title: "Bots",
    desc: "Custom automation bots for Discord, Telegram, WhatsApp and more — streamline communities and support 24/7.",
    tag: "Discord · Telegram",
  },
  {
    id: "ai-integration",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h3a2 2 0 0 1 2 2v1.27A2 2 0 0 1 19 14a2 2 0 0 1-1-3.73V9h-3v2.27A2 2 0 0 1 16 14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2 2 2 0 0 1 1-1.73V9H6v1.27A2 2 0 0 1 5 14a2 2 0 0 1-1-3.73V9a2 2 0 0 1 2-2h3V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2z" />
        <path d="M9 19v-3" />
        <path d="M12 19v-3" />
        <path d="M15 19v-3" />
        <path d="M8 22h8" />
      </svg>
    ),
    title: "AI Integration",
    desc: "Bring the power of AI — chatbots, automation, predictive tools — directly into your products and workflows.",
    tag: "AI · Automation",
  },
  {
    id: "other-services",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: "& Much More",
    desc: "Got a unique challenge? We love tackling custom projects. Reach out and let's build something great together.",
    tag: "Custom",
  },
];

export default function Services() {
  const gridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate section header on scroll
    const headerEl = headerRef.current;
    if (headerEl) {
      const headerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            headerEl.classList.add(styles.headerVisible);
            headerObserver.unobserve(headerEl);
          }
        },
        { threshold: 0.2 }
      );
      headerObserver.observe(headerEl);
    }

    // Stagger-animate each card on scroll
    const cards = gridRef.current?.querySelectorAll(`.${styles.serviceCard}`);
    if (!cards) return;

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card, i) => {
      card.style.setProperty("--delay", `${i * 60}ms`);
      cardObserver.observe(card);
    });

    return () => cardObserver.disconnect();
  }, []);

  return (
    <section id="services" className={styles.servicesSection}>
      {/* Section Header */}
      <div ref={headerRef} className={`${styles.sectionHeader} ${styles.headerAnimate}`}>
        <span className={styles.sectionEyebrow}>What We Offer</span>
        <h2 className={styles.sectionTitle}>
          Our <span className={styles.highlight}>Services</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          A full suite of digital services for businesses in Calicut and across Kerala — from
          marketing, SEO and ads to custom websites, software and AI.
        </p>
      </div>

      {/* Services Grid */}
      <div ref={gridRef} className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>{service.icon}</div>
              <span className={styles.cardTag}>{service.tag}</span>
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
            <div className={styles.cardArrow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
