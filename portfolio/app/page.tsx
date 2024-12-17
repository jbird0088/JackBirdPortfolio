import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      {/* Hero */}
      <main className={styles.hero}>
        <h2>Hi, I'm Your Name</h2>
        <p>
          I’m a Software Engineer specializing in building exceptional web
          experiences.
        </p>
      </main>

      {/* Section */}
      <section className={styles.section} id="about">
        <h3>About Me</h3>
        <p>
          I have a passion for developing efficient, scalable applications. I
          enjoy solving complex problems with clean, maintainable code.
        </p>
      </section>

      {/* Projects */}
      <section className={styles.section} id="projects">
        <h3>Projects</h3>
        <div className={styles.projectGrid}>
          <div className={styles.card}>
            <h4>Project Name</h4>
            <p>Short description of the project and what it achieved.</p>
          </div>
          <div className={styles.card}>
            <h4>Project Name 2</h4>
            <p>Short description of the second project.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.section} id="contact">
        <h3>Contact</h3>
        <a className={styles.contactButton} href="mailto:youremail@example.com">
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
