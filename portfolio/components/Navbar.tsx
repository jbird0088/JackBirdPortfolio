"use client";

// components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo section */}
        <h1 className={styles.title}>Software Engineer</h1>

        {/* Hamburger Menu Button for mobile */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${styles.navList} ${isOpen ? styles.active : ""} ${
            styles.desktop
          }`}
        >
          <li className={styles.navItem}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" className={styles.link}>
              Music
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" className={styles.link}>
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
