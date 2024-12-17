import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Floating Particles */}
      <div className={styles.particles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      {/* Main Content */}
      <div className={styles.screen}>
        <h1 className={styles.title}>WELCOME TO MY ARCADE</h1>
        <p className={styles.subtitle}>Press Start to Explore</p>
        <button className={styles.startButton}>PRESS START</button>
      </div>
    </div>
  );
}
