"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.title}>Software Engineer</h1>

        {/* Hamburger Menu */}
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

        {/* Nav Links */}
        <ul className={`${styles.navList} ${isOpen ? styles.active : ""}`}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects">Music</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services">Services</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
