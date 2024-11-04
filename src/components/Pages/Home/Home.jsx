import React from "react";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.app} data-testid="home">
      <section className={styles.header} data-testid="header">
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
            <p className={styles.motto} data-testid="motto">
              &quot;Clean energy, clean water, clean future.&quot;
            </p>
            <div className={styles.features} data-testid="features">
              <div className={styles.feature} data-testid="feature-fast-installation">
                <div
                  className={`${styles.featureIcon} ${styles.fastInstallation}`}
                ></div>
                <p>Fast installation</p>
              </div>
              <div className={styles.feature} data-testid="feature-solar-panels">
                <div
                  className={`${styles.featureIcon} ${styles.solarPanels}`}
                ></div>
                <p>500+ Solar Panels</p>
              </div>
              <div className={styles.feature} data-testid="feature-in-ukraine">
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

      <section className={styles.goal} data-testid="goal">
        <h2>Our goal</h2>
        <p>
          Installation of solar panels on reservoirs, thereby displacing
          ecologically <br />
          dangerous plants that pollute our ecosystem.
        </p>
      </section>

      <section className={styles.imageSection} data-testid="imageSection">
        <div className={styles.imageItem} data-testid="image-item-reduced-water">
          <div className={`${styles.customWaterDrop}`}></div>
          <p>Reduced Water Evaporation</p>
        </div>
        <div className={styles.imageItem} data-testid="image-item-improved-efficiency">
          <div className={`${styles.customTemperature}`}></div>
          <p>Improved Panel Efficiency Due to Cooling</p>
        </div>
        <div className={styles.imageItem} data-testid="image-item-lower-impact">
          <div className={`${styles.customEnvironment}`}></div>
          <p>Lower Environmental Impact</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
