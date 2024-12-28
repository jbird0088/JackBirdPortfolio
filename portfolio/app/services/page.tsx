"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  PenTool,
  Shield,
  Network,
  Server,
  BrainCircuit,
} from "lucide-react";
import services from "../../data/services";
import styles from "../../styles/services.module.css";

// Keep only necessary icons in the mapping
const iconMapping: Record<string, React.ReactNode> = {
  Code: <Code size={50} />,
  Globe: <Globe size={50} />,
  PenTool: <PenTool size={50} />,
  Shield: <Shield size={50} />,
  Network: <Network size={50} />,
  Server: <Server size={50} />,
  BrainCircuit: <BrainCircuit size={50} />,
};

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        My Services
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        I provide a wide range of services to bring your digital ideas to life
        with innovative solutions.
      </motion.p>

      <div className={styles.servicesWrapper}>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4, // Faster entry
              delay: index * 0.05, // Minimal delay for subtle stagger effect
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 40px rgba(100, 210, 255, 0.4)",
              y: -5,
              transition: { duration: 0.2 }, // Faster hover effect
            }}
          >
            <div className={styles.iconWrapper}>
              {iconMapping[service.icon as keyof typeof iconMapping]}
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
