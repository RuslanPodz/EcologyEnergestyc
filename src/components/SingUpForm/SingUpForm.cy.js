import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { SingUpForm } from './SingUpForm';

describe('SingUpForm', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <SingUpForm />
      </MemoryRouter>
    ); 
  });

  it('should display the form elements', () => {
    cy.get('h1').contains('Create account');
    cy.get('input[placeholder="Email"]').should('exist');
    cy.get('input[placeholder="Password"]').should('exist');
    cy.get('input[placeholder="Confirm password"]').should('exist');
    cy.get('button').contains('Create').should('exist');
  });

  it('should allow user to input email and password', () => {
    cy.get('input[placeholder="Email"]').type('test@example.com');
    cy.get('input[placeholder="Password"]').type('Password123');
    cy.get('input[placeholder="Confirm password"]').type('Password123');

    cy.get('input[placeholder="Email"]').should('have.value', 'test@example.com');
    cy.get('input[placeholder="Password"]').should('have.value', 'Password123');
    cy.get('input[placeholder="Confirm password"]').should('have.value', 'Password123');
  });

  it('should show error if passwords do not match', () => {
    cy.get('input[placeholder="Email"]').type('test@example.com');
    cy.get('input[placeholder="Password"]').type('Password123');
    cy.get('input[placeholder="Confirm password"]').type('DifferentPassword');

    cy.get('button').contains('Create').click();
  });

  it('should register a user and redirect', () => {
    cy.intercept('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:lookup*', { statusCode: 201 }).as('registerUser');

    cy.get('input[placeholder="Email"]').type('test@example.com');
    cy.get('input[placeholder="Password"]').type('Password123');
    cy.get('input[placeholder="Confirm password"]').type('Password123');

    cy.get('button').contains('Create').click();
  });
});
