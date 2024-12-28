"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import contactMethods from "../../data/contactData";
import styles from "../../styles/contact.module.css";

const iconMapping: Record<string, React.ReactNode> = {
  Mail: <Mail size={40} />,
  Linkedin: <Linkedin size={40} />,
  Github: <Github size={40} />,
  Twitter: <Twitter size={40} />,
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Feel free to reach out through any of the platforms below.
      </motion.p>

      <div className={styles.contactGrid}>
        {contactMethods.map((method) => (
          <motion.a
            key={method.method}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(100, 210, 255, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.iconWrapper}>{iconMapping[method.icon]}</div>
            <h2>{method.method}</h2>
            <p>{method.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
