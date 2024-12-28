"use client";

import { motion } from "framer-motion";
import educationData from "../../data/educationData";
import experienceData from "../../data/experienceData";
import Image from "next/image";
import {
  Wrench,
  Code,
  Database,
  Gamepad,
  Cpu,
  Cloud,
  GraduationCap,
  BrainCircuit,
  Network,
  Code2,
} from "lucide-react";
import styles from "../../styles/about.module.css";

// Icon mapping based on role
const getExperienceIcon = (title: string) => {
  switch (title) {
    case "Capstone Project Lead":
      return <BrainCircuit size={36} />;
    case "Information Technology Intern":
      return <Network size={36} />;
    case "Freelance Software Developer":
      return <Code2 size={36} />;
    default:
      return <Wrench size={36} />; // Fallback icon
  }
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* About Section */}
      <motion.section
        className={styles.about}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.aboutContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            As a full-stack developer, I&apos;m passionate about tackling
            diverse technical challenges and creating innovative solutions
            across various platforms. Whether it&apos;s building responsive user
            interfaces, architecting robust backend systems, or integrating
            complex technologies, I&apos;m driven to deliver scalable and
            efficient solutions that make an impact.
          </p>
          <p className={styles.description}>
            When I&apos;m not coding, I&apos;m exploring emerging technologies,
            mentoring others in the tech community, and seeking inspiration in
            the world around me. I believe in continuous learning and thrive in
            collaborative environments where ideas and solutions can evolve.
          </p>
        </motion.div>

        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/image/aboutPageImage.webp"
            alt="Profile Image"
            width={350}
            height={350}
            className={styles.heroImage}
          />
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className={styles.education}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.sectionWrapper}>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={styles.sectionCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>
                <GraduationCap size={36} /> {edu.title}
              </h3>
              <p>
                {edu.institution} - {edu.date}
              </p>
              <p>{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className={styles.experience}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.sectionWrapper}>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.sectionCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>
                {getExperienceIcon(exp.title)} {exp.title}
              </h3>
              <p>
                {exp.company} | {exp.date}
              </p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Fun Facts Section */}
      <motion.section
        className={styles.funFacts}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Fun Facts</h2>
        <div className={styles.factGrid}>
          {[
            {
              fact: "Built My First Game at Age 15",
              icon: <Gamepad size={40} />,
            },
            {
              fact: "Worked on 20+ Different Frameworks",
              icon: <Wrench size={40} />,
            },
            {
              fact: "Passionate About AI & Machine Learning",
              icon: <Cpu size={40} />,
            },
            {
              fact: "Spent Over 200 Hours Learning Cloud Computing",
              icon: <Cloud size={40} />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.factCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
              <p>{item.fact}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className={styles.skills}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Frontend Development */}
        <div className={styles.skillCategory}>
          <h3>
            <Code className={styles.skillIcon} /> Frontend Development
          </h3>
          <motion.div
            className={styles.skillGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, duration: 0.5 }}
          >
            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Angular",
              "TailwindCSS",
              "Bootstrap",
              "Framer Motion",
            ].map((skill) => (
              <motion.div
                key={skill}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend Development */}
        <div className={styles.skillCategory}>
          <h3>
            <Database className={styles.skillIcon} /> Backend Development
          </h3>
          <motion.div
            className={styles.skillGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, duration: 0.5 }}
          >
            {[
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              ".NET",
              "Spring Boot",
              "MySQL",
            ].map((skill) => (
              <motion.div
                key={skill}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ rotate: -5, scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools & Platforms */}
        <div className={styles.skillCategory}>
          <h3>
            <Wrench className={styles.skillIcon} /> Tools & Platforms
          </h3>
          <motion.div
            className={styles.skillGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, duration: 0.5 }}
          >
            {[
              "Docker",
              "Kubernetes",
              "AWS",
              "Azure",
              "Google cloud",
              "Unity",
              "Git",
              "GitHub",
              "Figma",
              "Vercel",
            ].map((skill) => (
              <motion.div
                key={skill}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
