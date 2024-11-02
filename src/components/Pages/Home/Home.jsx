import React from "react";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.app}>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerImage}></div>
          <div className={styles.textContent}>
            <h1>
              Installation of
              <br />
              solar panels on
              <br />
              reservoirs
            </h1>
            <p className={styles.motto}>
              &quot;Clean energy, clean water, clean future.&quot;
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div
                  className={`${styles.featureIcon} ${styles.fastInstallation}`}
                ></div>
                <p>Fast installation</p>
              </div>
              <div className={styles.feature}>
                <div
                  className={`${styles.featureIcon} ${styles.solarPanels}`}
                ></div>
                <p>500+ Solar Panels</p>
              </div>
              <div className={styles.feature}>
                <div
                  className={`${styles.featureIcon} ${styles.inUkraine}`}
                ></div>
                <p>Still in Ukraine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.fullWidthBackground}></div>

      <section className={styles.goal}>
        <h2>Our goal</h2>
        <p>
          Installation of solar panels on reservoirs, thereby displacing
          ecologically <br />
          dangerous plants that pollute our ecosystem.
        </p>
      </section>

      <section className={styles.imageSection}>
        <div className={styles.imageItem}>
          <div className={`${styles.customWaterDrop}`}></div>
          <p>Reduced Water Evaporation</p>
        </div>
        <div className={styles.imageItem}>
          <div className={`${styles.customTemperature}`}></div>
          <p>Improved Panel Efficiency Due to Cooling</p>
        </div>
        <div className={styles.imageItem}>
          <div className={`${styles.customEnvironment}`}></div>
          <p>Lower Environmental Impact</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
