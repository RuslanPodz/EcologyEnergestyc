import React  from "react";

import Footer from "./Footer";

describe('Footer Component', () => {
    beforeEach(() => {
      cy.mount(<Footer />);
    });
  
    it('renders the footer container', () => {
      cy.get('[data-testid="footer"]').should('exist');
    });
  
    it('displays the logo with correct text', () => {
      cy.get('[data-testid="logo"]').should('have.text', 'EcologyEnergestyc');
    });
  
    it('renders social media section', () => {
      cy.get('[data-testid="social-media"]').should('exist');
      cy.contains('Social Media').should('exist');
      cy.contains('Instagram').should('exist');
      cy.contains('Facebook').should('exist');
      cy.contains('YouTube').should('exist');
    });
  
    it('renders support section with correct email link', () => {
      cy.get('#support').within(() => {
        cy.contains('Help').should('exist');
        cy.get('a').should('have.attr', 'href', 'mailto:ecology.energestyc@gmail.com').and('contain', 'Support');
      });
    });
  
    it('renders contact information with correct phone and email links', () => {
      cy.contains('Contact Us').should('exist');
      cy.get('a').contains('+380(99) 952 147 0').should('have.attr', 'href', 'tel:+380999521470');
      cy.get('a').contains('ecology.energestyc@gmail.com').should('have.attr', 'href', 'mailto:ecology.energestyc@gmail.com');
    });
  
    it('displays copyright information', () => {
      cy.contains('© 2024 All rights Reserved . Null').should('exist');
    });
  });
  