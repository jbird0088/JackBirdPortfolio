"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import styles from "../styles/home.module.css";

export default function Page() {
  const projects = [
    { title: "Project Alpha", description: "AI-powered productivity tool" },
    { title: "Project Beta", description: "E-commerce with AR technology" },
    { title: "Project Gamma", description: "Blockchain for supply chain" },
    { title: "Project Delta", description: "Next-gen social platform" },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/image/myself.jpg" // Ensure the correct image path in the public folder
            alt="Profile Picture"
            width={250}
            height={250}
            className={styles.heroImage}
          />
        </motion.div>
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, Im <span style={{ color: "#c084fc" }}>Your Name</span>
        </motion.h1>
        <motion.p
          className={styles.heroText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting digital experiences that inspire.
        </motion.p>
        <motion.a
          href="#contact"
          className={styles.heroButton}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get in touch
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionHeading}>About Me</h2>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/image/myself.jpg" // Use the same image here
            alt="About Image"
            width={300}
            height={300}
            className={styles.aboutImage}
          />
          <p className={styles.aboutText}>
            Im a passionate software engineer who loves building web
            applications with clean and maintainable code. I specialize in
            modern web technologies to deliver fast and efficient user
            experiences. Lets create something amazing together.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionHeading}>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`${styles.section} ${styles.textCenter}`}
      >
        <h2 className={styles.sectionHeading}>Get In Touch</h2>
        <div className={styles.contactLinks}>
          <a
            href="https://github.com/yourusername"
            className={styles.contactButton}
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className={styles.contactButton}
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className={styles.contactButton}
          >
            <Mail className="h-5 w-5" /> Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
