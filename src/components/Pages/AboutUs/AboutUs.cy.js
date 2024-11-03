import React from "react";
import { MemoryRouter } from "react-router-dom";

import AboutUs from "./AboutUs";

describe("AboutUs Component", () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
  });

  it("renders the header section with title and advantages", () => {
    cy.get("h1").should("contain", "Advantages of installing solar panels on lakes");
    cy.get("h2").contains("Preservation of Water Resources:").should("exist");
    cy.get("h2").contains("Increased Efficiency and Durability:").should("exist");
    cy.get("h2").contains("Land and Environmental Benefits:").should("exist");
  });

  it("renders the floating solar panel system section", () => {
    cy.get("h2").contains("Floating Solar Panel System").should("exist");
    cy.get("p").should("contain", "A floating solar panel system is equipped with PV modules mounted on platforms that float on reservoirs, lakes");
  });

  it("renders the features and advantages of floating solar energy", () => {
    cy.get("h2").contains("How Do Floating Solar Panels Work?").should("exist");
    cy.get("h2").contains("Features of Floating Solar Energy").should("exist");
    cy.get("h2").contains("Advantages of floating solar energy").should("exist");
  });

  it("checks if the text content is correct", () => {
    cy.get("h2").contains("Preservation of Water Resources:").next("p").should("contain", "Installing solar panels on bodies of water reduces evaporation, preserving water resources");
    cy.get("h2").contains("Increased Efficiency and Durability:").next("p").should("contain", "The water cools the panels, enhancing their efficiency and reducing wear and tear over time.");
    cy.get("h2").contains("Land and Environmental Benefits:").next("p").should("contain", "Using water surfaces saves land resources, enabling areas to be utilized for agriculture or biodiversity conservation");
  });
});
