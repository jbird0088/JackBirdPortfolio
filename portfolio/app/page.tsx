"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/home.module.css";
import projects from "../data/projectData";

export default function Page() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/image/Myself.webp"
            alt="Profile Picture"
            width={300}
            height={300}
            className={styles.heroImage}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            Hi, I&apos;m <span className={styles.gradientText}>Jack</span>
          </h1>
          <p className={styles.heroSubtitle}>Building tomorrows tech, today.</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className={styles.heroButton}
          >
            Let&apos;s Collaborate
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <motion.h2
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className={styles.aboutWrapper}>
          <motion.div
            className={styles.aboutContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.aboutText}>
              Hey there! I&apos;m Jack, a{" "}
              <span className={styles.highlight}>developer</span> passionate
              about building intuitive and impactful software. I enjoy working
              on <span className={styles.highlight}>web applications</span>,
              exploring{" "}
              <span className={styles.highlight}>new technologies</span>, and
              creating projects that solve real-world challenges.
            </p>
            <p className={styles.aboutText}>
              My focus lies in{" "}
              <span className={styles.highlight}>full-stack development</span>,
              crafting smooth user experiences, and writing clean, efficient
              code.
            </p>
          </motion.div>

          <motion.div
            className={styles.aboutImage}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/image/aboutPageImage.webp"
              alt="Jack's Profile Picture"
              width={250}
              height={250}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <motion.h2
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
                whileHover={{ scale: 1.1 }}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact} id="contact">
        <motion.h2
          className={styles.contactTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className={styles.contactText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Whether you have a project in mind or just want to say hi, feel free
          to reach out. I’d love to hear from you!
        </motion.p>
        <div className={styles.contactLinks}>
          <a
            href="https://github.com/jbird0088"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jackbird88"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="mailto:jackbird0088@gmail.com"
            className={styles.contactButton}
          >
            <Mail size={20} /> Email
          </a>
        </div>
      </section>
    </div>
  );
}
