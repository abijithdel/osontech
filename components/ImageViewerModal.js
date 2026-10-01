"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import styles from "./ImageViewerModal.module.css";

export default function ImageViewerModal({ isOpen, onClose, imageSrc = "/hero-bg.jpg" }) {
  const [shadeLevel, setShadeLevel] = useState("dark"); // "dark", "deepDark", "light", "original"

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header bar */}
        <div className={styles.modalHeader}>
          <div className={styles.titleGroup}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <h3>Hero Image & Dark Shade Viewer</h3>
          </div>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Shade selector controls */}
        <div className={styles.controlBar}>
          <span className={styles.controlLabel}>Dark Shade Intensity:</span>
          <div className={styles.shadeButtons}>
            <button
              className={`${styles.shadeOption} ${shadeLevel === "deepDark" ? styles.activeShade : ""}`}
              onClick={() => setShadeLevel("deepDark")}
            >
              Deep Obsidian Shade
            </button>
            <button
              className={`${styles.shadeOption} ${shadeLevel === "dark" ? styles.activeShade : ""}`}
              onClick={() => setShadeLevel("dark")}
            >
              Standard Dark Shade
            </button>
            <button
              className={`${styles.shadeOption} ${shadeLevel === "light" ? styles.activeShade : ""}`}
              onClick={() => setShadeLevel("light")}
            >
              Medium Shade
            </button>
            <button
              className={`${styles.shadeOption} ${shadeLevel === "original" ? styles.activeShade : ""}`}
              onClick={() => setShadeLevel("original")}
            >
              Full Image Preview
            </button>
          </div>
        </div>

        {/* Image Display Area with dynamic shade overlay */}
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt="Hero background high quality view"
            fill
            className={styles.modalImage}
          />
          <div className={`${styles.shadeOverlay} ${styles[shadeLevel]}`} />
        </div>

        {/* Footer info & close button */}
        <div className={styles.modalFooter}>
          <span className={styles.footerText}>
            Image: Developer laptop setup in sleek dark ambience
          </span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Preview
          </Button>
        </div>
      </div>
    </div>
  );
}
