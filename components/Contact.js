"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    id: "email",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@osontech.in",
    href: "mailto:hello@osontech.in",
  },
  {
    id: "whatsapp-1",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 9074111715",
    href: "https://wa.me/9074111715",
  },
  {
    id: "whatsapp-2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 8590783321",
    href: "https://wa.me/8590783321",
  },
  {
    id: "location",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Calicut (Kozhikode), Kerala, India",
    href: null,
  },
];


const services = [
  "Web Development",
  "Digital Marketing",
  "Meta Ads",
  "Google Ads",
  "Custom Software",
  "AI Integration",
  "Bots & Automation",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgGlowRight} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Get in Touch with OsonTech, Calicut</span>
          <h2 className={styles.title}>
            Get In <span className={styles.highlight}>Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Ready to grow your business digitally? Our team in Calicut (Kozhikode), Kerala
            will get back to you within 24 hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Left — Info */}
          <div className={styles.infoCol}>
            <p className={styles.infoIntro}>
              Whether you have a project in mind, a question about our services,
              or just want to say hello — we'd love to hear from you.
            </p>

            <div className={styles.infoCards}>
              {contactInfo.map((item,key) => (
                <div key={item.id} className={styles.infoCard} key={key}>
                  <div className={styles.infoIcon}>{item.icon}</div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.infoValue} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={styles.socials}>
              <span className={styles.socialsLabel}>Follow Us</span>
              <div className={styles.socialLinks}>
                <a href="https://www.youtube.com/@osontech_agency" className={styles.socialBtn} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/oson-tech-736307440/" className={styles.socialBtn} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61595085296667" className={styles.socialBtn} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/osontech.in/" className={styles.socialBtn} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successDesc}>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours. We're excited to work with you!
                </p>
                <button
                  className={styles.resetBtn}
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Full Name <span className={styles.required}>*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email Address <span className={styles.required}>*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      className={styles.select}
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Your Message <span className={styles.required}>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Tell us about your project, goals, or any questions you have…"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className={styles.spinner} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
