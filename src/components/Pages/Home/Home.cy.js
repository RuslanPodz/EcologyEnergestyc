import React from "react";
import { MemoryRouter } from "react-router-dom";

import Home from "./Home";

describe("Home Component", () => {
    beforeEach(() => {
      cy.mount(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });
    it("renders the features section with correct items", () => {
      cy.log('Checking features section...');
      cy.get("p").should("contain", "Fast installation");
      cy.get("p").should("contain", "500+ Solar Panels");
      cy.get("p").should("contain", "Still in Ukraine");
    });
  
    it("renders the goal section with correct content", () => {
      cy.log('Checking goal section...');
      cy.get("h2").should("contain", "Our goal");
      cy.get("p").should("contain", "Installation of solar panels on reservoirs, thereby displacing ecologically dangerous plants that pollute our ecosystem.");
    });
  
    it("renders the image section with correct items", () => {
      cy.log('Checking image section...');
      cy.get("p").should("contain", "Reduced Water Evaporation");
      cy.get("p").should("contain", "Improved Panel Efficiency Due to Cooling");
      cy.get("p").should("contain", "Lower Environmental Impact");
    });
  });
  