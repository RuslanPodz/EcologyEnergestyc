import React from "react";
import { MemoryRouter } from "react-router-dom";

import Setting from "./Setting";

describe("Settings Component", () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Setting />
      </MemoryRouter>
    );
  });

  it("renders the header section with title and description", () => {
    cy.get("h2").should("contain", "Редагування профілю");
    cy.get("p").should("contain", "Подбайте про конфіденційність");
  });

  it("renders the form with input fields and a save button", () => {
    cy.get('label[for="firstName"]').should("contain", "Імя:");
    cy.get('input#firstName').should("be.visible").and("have.attr", "placeholder", "Введіть ваше ім'я");

    cy.get('label[for="lastName"]').should("contain", "Прізвище:");
    cy.get('input#lastName').should("be.visible").and("have.attr", "placeholder", "Введіть ваше прізвище");

    cy.get('label[for="username"]').should("contain", "Імя користувача:");
    cy.get('input#username').should("be.visible").and("have.attr", "placeholder", "Введіть свій nickname");

    cy.get('label[for="aboutMe"]').should("contain", "Про вас:");
    cy.get('textarea#aboutMe').should("be.visible").and("have.attr", "placeholder", "Розкажіть свою історію");

    cy.get('button[type="submit"]').should("contain", "Зберегти");
  });
});
