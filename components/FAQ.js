"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    id: "faq-1",
    question: "What services does OsonTech offer?",
    answer:
      "OsonTech is a full-stack digital agency offering a wide range of services — including web development (WordPress, Shopify, React, Next.js), digital marketing (SEO, Google Ads, Meta Ads, Social Media), custom software development, AI integration, automation bots (Discord, Telegram, WhatsApp), and creative brand strategy. We handle everything under one roof so you never need to juggle multiple vendors.",
  },
  {
    id: "faq-2",
    question: "How long does it take to build a website or app?",
    answer:
      "Timelines vary based on project complexity. A standard WordPress or landing page site typically takes 1–2 weeks. A custom React/Next.js website or e-commerce store takes 3–6 weeks. Complex custom software or AI-integrated platforms are scoped individually but we always provide a clear timeline before we begin. We prioritise fast delivery without compromising quality.",
  },
  {
    id: "faq-3",
    question: "How much does a project cost?",
    answer:
      "Every project is unique, so pricing depends on scope, features, and timeline. We offer flexible packages for startups, SMEs, and enterprises. After an initial discovery call we'll send you a detailed, transparent quote with no hidden fees. Our goal is to deliver maximum value for your budget — reach out and let's find the right fit for you.",
  },
  {
    id: "faq-4",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer monthly retainer plans that cover hosting management, security updates, performance optimisation, content changes, and priority support. Whether you need a quick tweak or a major feature addition, our team is available 24/7. We believe in long-term partnerships, not one-off transactions.",
  },
  {
    id: "faq-5",
    question: "Can you help with digital marketing and ads?",
    answer:
      "Absolutely. Our marketing team manages Google Ads, Meta (Facebook & Instagram) Ads, Google My Business optimisation, SEO, and social media marketing. We create data-driven campaigns tailored to your audience and goals, continuously monitoring and optimising for the best ROI. We provide regular reports so you always know exactly where your money is going.",
  },
  {
    id: "faq-6",
    question: "How do I get started with OsonTech?",
    answer:
      "Getting started is simple — just click the 'Get Started' button or reach out via our contact form. We'll schedule a free discovery call to understand your goals, challenges, and vision. From there we'll put together a customised proposal and timeline. No commitments, no pressure — just a genuine conversation about how we can help your business grow.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Got Questions?</span>
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about working with OsonTech.
            Can't find your answer?{" "}
            <a href="#contact" className={styles.contactLink}>
              Just ask us directly →
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={faq.id}
                >
                  <span className={styles.questionNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  id={faq.id}
                  className={styles.answerWrapper}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
