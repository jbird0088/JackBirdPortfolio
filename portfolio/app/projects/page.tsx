"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import projects from "../../data/projectData";
import styles from "../../styles/projects.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Explore the projects that reflect my passion for technology, innovation,
        and problem-solving.
      </motion.p>

      <div className={styles.projectsWrapper}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`${styles.projectCard} ${
              index % 2 === 0 ? styles.altBackground : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.projectContent}>
              <motion.div
                className={styles.projectImageWrapper}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={650}
                  height={400}
                  className={styles.projectImage}
                />
              </motion.div>

              <div className={styles.projectText}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <h3>Key Features:</h3>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={styles.projectLink}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
