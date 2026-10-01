"use client";

import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  showArrow = false,
  icon,
  className = "",
  type = "button",
  ...props
}) {
  const combinedClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim();

  const content = (
    <>
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
      {children && <span>{children}</span>}
      {showArrow && (
        <svg
          className={styles.arrowIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClassName} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
