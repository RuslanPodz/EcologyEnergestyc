import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header Component', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('renders the Header component with logo and menu items', () => {
    cy.get('[data-testid="header"]').should('exist');

    cy.get('[data-testid="logo"]').should('contain', 'EcologyEnergestyc');

    cy.get('[data-testid="menu-icon"]').click();

    cy.contains('About us').should('be.visible');
    cy.contains('Social Media').should('be.visible');
    cy.contains('Support').should('be.visible');
    cy.contains('Setting').should('be.visible');
  });

  it('toggles the menu when clicking the menu icon', () => {
    cy.get('[data-testid="menu-icon"]').click();
    cy.get('[data-testid="menu"]').should('be.visible');

    cy.get('[data-testid="menu-icon"]').click();
    cy.get('[data-testid="menu"]').should('not.be.visible');
  });

  it('logs out when clicking the LogOut button', () => {
    cy.get('[data-testid="menu-icon"]').click();

    cy.get('[data-testid="logout-button"]').click();

    cy.url().should('include', '/');
  });
});
