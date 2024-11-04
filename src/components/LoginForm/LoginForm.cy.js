import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/signInWithPassword**').as('loginRequest');
    cy.mount(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  });

  it('renders the LoginForm component with input fields and buttons', () => {
    cy.get('h1').should('contain', 'Login');
    cy.get('input[placeholder="Email"]').should('exist');
    cy.get('input[placeholder="Password"]').should('exist');
    cy.get('button').should('contain', 'Login');
    cy.contains('Create account').should('be.visible');
  });

  it('logs in successfully with correct credentials', () => {
    cy.get('input[placeholder="Email"]').type('test@example.com');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('button').click();
  });

  it('displays error message with incorrect credentials', () => {
    cy.get('input[placeholder="Email"]').type('wrong@example.com');
    cy.get('input[placeholder="Password"]').type('wrongpassword');
    cy.get('button').click();
  });
  it('toggles password visibility', () => {
    cy.get('input[placeholder="Password"]').should('have.attr', 'type', 'password');
    cy.get('input[placeholder="Password"]').should('have.attr', 'type', 'password'); 
  });

  });
