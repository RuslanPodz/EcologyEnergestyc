import React from "react";

import styles from "./AboutUs.modules.css";

const AboutUs = () => {
  return (
    <div className={styles.app} data-testid="about-us">
      <section className={styles.header} data-testid="about-us-header">
        <div className={styles.headerContent}>
          <div className={styles.headerImage}></div>
          <div className={styles.textContent}>
            <h1>
              Advantages of <br />
              installing solar panels <br />
              on lakes
            </h1>
            <div className={styles.motto}>
              <h2>Preservation of Water Resources:</h2>
              <p>
                Installing solar panels on bodies of water reduces <br />
                evaporation, preserving water resources, which is <br />
                particularly beneficial in arid regions.
              </p>
              <h2>Increased Efficiency and Durability:</h2>
              <p>
                The water cools the panels, enhancing their efficiency <br />
                and reducing wear and tear over time.
              </p>
              <h2>Land and Environmental Benefits:</h2>
              <p>
                Using water surfaces saves land resources, enabling areas <br />
                to be utilized for agriculture or biodiversity conservation,{" "}
                <br />
                while also reducing greenhouse gas emissions and <br />
                pollution compared to traditional energy sources.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.fullWidthBackground}></div>

      <section className={styles.goal} data-testid="floating-solar-panel-system">
        <h2>Floating Solar Panel System</h2>
        <div className={styles.photo}></div>
        <div className={styles.floating}></div>
        <p>
          A floating solar panel system is equipped with PV modules mounted on
          platforms that float on reservoirs, lakes and where the <br />
          conditions are right seas and oceans. However, these floating solar
          panels are more complex and expensive to build. Lets dive <br />
          in and take a closer look at this technology.
        </p>
      </section>
      <section data-testid="how-do-floating-solar-panels-work">
        <div className={styles.information}>
          <h2>How Do Floating Solar Panels Work?</h2>
          <p>
            Floating solar energy is also known as photovoltaic or floating
            photovoltaic. This refers to any solar cell that floats on top of an
            aqueous body. <br />
            Solar panels are glued to floating structures, keeping them afloat
            on the surface of the water body. These floating solar panels are{" "}
            <br />
            found on lakes and dams, as they tend to be calmer than the oceans.{" "}
            <br />
            Floating solar energy is an environmentally friendly method of
            generating electricity. It combines marine and renewable energy
            technologies. <br />
            Electricity is sent from this floating body through underwater
            cables to the transmitting tower.
          </p>
          <h2>Features of Floating Solar Energy</h2>
          <p>
            The floating solar panel installation consists of a solar module,
            anti-rust material, vertical and horizontal frames, floating
            housing, inspection <br />
            base and module mounting assembly. The solar module should be highly
            moisture-resistant, dustproof, lead-free and well protected from{" "}
            <br />
            water. Buoyancy is made of polyethylene, which can hold 2.5 times
            more weight. The floating structure is made of a magnesium alloy
            coating, which has a high resistance to corrosion.
          </p>
          <h2>Advantages of floating solar energy</h2>
          <section className={styles.information2}>
            <h2>1. You do not lose valuable land space</h2>
            <h3>
              Many ground-based solar panels lead to the loss of valuable land
              space. <br />
              However, with a floating photoelectric, you will not need land
              space. These installations can take place in unused space on water
              bodies such as treatment plants, drinking water tanks or
              hydroelectric power <br />
              plants. As a result, you can use the land that you would otherwise
              use to install solar panels. In addition, the installation of
              solar panels on <br />
              water bodies eliminates the need for deforestation.
            </h3>
            <h2>2. Advantages of the environment</h2>
            <h3>
              Floating solar panels are good for the environment. Water offers a
              stitching effect for PV modules. However, they also reduce
              evaporation <br />
              from these bodies of water, which is crucial in drought-prone
              areas. In addition, the presence of solar panels floating on water
              reduces the flowering of algae in freshwater bodies. Algae blooms
              can cause <br />
              health complications when they appear in drinking water sources.
              They can also lead to the death of animals and plants in water
              bodies. <br />
              Floating solar panels generate clean energy. The use of renewable
              energy sources helps to reduce dependence on electricity produced
              by fossil fuels. As a result, greenhouse gas emissions are
              reduced.
            </h3>
            <h2>3. Improved solar characteristics</h2>
            <h3>
              Although solar panels can work well at high temperatures, their{" "}
              <br />
              efficiency can decrease over time. As the temperature increases,
              their effectiveness also decreases. When installing photovoltaic
              modules on a pond, water provides a cooling effect that increases
              their efficiency.
            </h3>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
