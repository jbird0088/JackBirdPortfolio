"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import projects from "../../data/projectData";
import styles from "../../styles/projects.module.css";

// Helper function to handle dynamic link behavior
const handleProjectLink = (project: any) => {
  if (project.nda) {
    return (
      <motion.button
        disabled
        className={`${styles.projectLink} ${styles.disabledButton}`}
      >
        NDA Restricted
      </motion.button>
    );
  }

  // Open PDFs in a new tab directly
  if (project.type === "pdf") {
    return (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLink}
      >
        View PDF
      </motion.a>
    );
  }

  // External websites or GitHub links
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.projectLink}
    >
      View Project
    </motion.a>
  );
};

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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <div className={styles.projectContent}>
              <motion.div
                className={styles.projectImageWrapper}
                initial={{ scale: 0.9, y: 30 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
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

              <motion.div
                className={styles.projectText}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <h3>Key Features:</h3>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                {/* Dynamic Link Handling */}
                {handleProjectLink(project)}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
