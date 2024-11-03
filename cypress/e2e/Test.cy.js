/* eslint-disable cypress/unsafe-to-chain-command */
describe('EcologyEnergestyc test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the login form', () => {
        cy.contains('Login').should('be.visible');
    });

    it('should allow user to type email and password', () => {
        cy.get('input[placeholder="Email"]').type('test@example.com').should('have.value', 'test@example.com'); 
        cy.get('input[placeholder="Password"]').type('password123').should('have.value', 'password123');
    });

    it('should toggle password visibility', () => {
        cy.get('input[placeholder="Password"]').type('password123');
        cy.get('span').click();
        cy.get('input[placeholder="Password"]').should('have.attr', 'type', 'text');
        cy.get('span').click();
        cy.get('input[placeholder="Password"]').should('have.attr', 'type', 'password');
    });

    it('should handle "Remember me" functionality', () => {
        cy.get('input[type="checkbox"]').check().should('be.checked');
        cy.get('input[placeholder="Email"]').type('remember@example.com');
        cy.get('button[type="submit"]').click();
    });

    it('should display error on invalid login', () => {
        cy.get('input[placeholder="Email"]').type('invalid@example.com');
        cy.get('input[placeholder="Password"]').type('wrongpassword');
        cy.get('button[type="submit"]').click();
        cy.contains('Неправильно введені данні').should('be.visible');
    });

    it('should navigate to the registration page on clicking "Create account"', () => {
        cy.contains('Create account').click();
        cy.url().should('include', '/register');
    });

    it('should display the registration form', () => {
        cy.contains('Create account').click();
        cy.contains('Create account').should('be.visible');
    });

    it('should allow user to type email and passwords', () => {
        cy.contains('Create account').click();
        cy.get('input[placeholder="Email"]').type('newuser@example.com').should('have.value', 'newuser@example.com');
        cy.get('input[placeholder="Password"]').type('password123').should('have.value', 'password123');
        cy.get('input[placeholder="Confirm password"]').type('password123').should('have.value', 'password123');
    });

    it('should show error if passwords do not match', () => {
        cy.contains('Create account').click();
        cy.get('input[placeholder="Email"]').type('newuser@example.com').should('have.value', 'newuser@example.com');
        cy.get('input[placeholder="Password"]').type('password123');
        cy.get('input[placeholder="Confirm password"]').type('differentpassword');
        cy.get('button[type="submit"]').click();
    });

    it('should register a new user on valid inputs', () => {
        cy.contains('Create account').click();
        cy.get('input[placeholder="Email"]').type('newuser@example.com');
        cy.get('input[placeholder="Password"]').type('password123');
        cy.get('input[placeholder="Confirm password"]').type('password123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/');
        cy.contains('Already have an account?').click();
    });

    it('should display the home page header', () => {
        cy.get('input[placeholder="Email"]').type('correct@gmail.com');
        cy.get('input[placeholder="Password"]').type('qwer2006');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/home');

        cy.get('[data-testid="home"]').should('contain', 'Installation of solar panels on reservoirs');
        cy.get('[data-testid="home"]').should('contain', 'Clean energy, clean water, clean future.');

        cy.contains('Fast installation').should('be.visible');
        cy.contains('500+ Solar Panels').should('be.visible');
        cy.contains('Still in Ukraine').should('be.visible');

        cy.get('h2').should('contain', 'Our goal');
        cy.get('p').should('contain', 'Installation of solar panels on reservoirs, thereby displacing ecologically dangerous plants that pollute our ecosystem.');

        cy.contains('Reduced Water Evaporation').should('be.visible');
        cy.contains('Improved Panel Efficiency Due to Cooling').should('be.visible');
        cy.contains('Lower Environmental Impact').should('be.visible');

        cy.get('[data-testid="footer"]').should('be.visible');
        cy.contains('Contact Us').should('be.visible');
        cy.contains('+380(99) 952 147 0').should('be.visible');
        cy.contains('ecology.energestyc@gmail.com').should('be.visible');
        cy.contains('Copyright © 2024 All rights Reserved . Null').should('be.visible');        
    });

    it('should toggle the menu and navigate between pages', () => {
        cy.get('input[placeholder="Email"]').type('correct@gmail.com');
        cy.get('input[placeholder="Password"]').type('qwer2006');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/home');
        
        cy.get('[data-testid="header"]').should('be.visible');
        cy.get('[data-testid="menu-icon"]').click();
        cy.get('[data-testid="menu"]').should('be.visible');

        cy.get('[data-testid="menu"] a').contains('About us').click();
        cy.url().should('include', '/aboutUs');

        cy.get('[data-testid="about-us"]').should('be.visible');
        cy.get('[data-testid="about-us-header"]').should('be.visible');
        cy.get('[data-testid="floating-solar-panel-system"]').should('be.visible');
        cy.get('[data-testid="how-do-floating-solar-panels-work"]').should('be.visible');
        cy.contains('Advantages of installing solar panels on lakes').should('be.visible');

        cy.get('[data-testid="menu-icon"]').click();
        cy.get('[data-testid="menu"]').should('be.visible');
        cy.get('[data-testid="menu"] a').contains('Home').click();
        cy.url().should('include', '/home');

        cy.get('[data-testid="menu-icon"]').click();
        cy.get('[data-testid="menu"]').contains('Setting').click();
        cy.url().should('include', '/setting');
        cy.get('h2').should('contain', 'Редагування профілю');
        cy.get('p').should('contain', 'Подбайте про конфіденційність');

        cy.get('[data-testid="menu-icon"]').click();
        cy.get('[data-testid="menu"]').should('be.visible');
        cy.get('[data-testid="social-media-link"]').click();
        cy.url().should('include', '#social-media');

        cy.get('[data-testid="support-link"]').click();
        cy.url().should('include', '#support');

        cy.get('[data-testid="logout-button"]').click();
        cy.url().should('include', '/');
    });
});
