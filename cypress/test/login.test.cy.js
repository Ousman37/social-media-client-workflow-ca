import 'cypress-testing-library/add-commands';
import 'dotenv/config';
import process from 'process-env';

process.env.NODE_ENV = 'test';
process.env.API_URL = 'https://example.com';
process.env.API_KEY = 'ASDFGHJKL';

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get("input[name='email']").type(email);
  cy.get("input[name='password']").type(password);
  cy.get('form').submit();
});

describe('Login', () => {
  it('The user can log in with the login form with valid credentials', () => {
    // navigate to the login page
    cy.visit('/login');
    // fill in the login form with valid credentials
    cy.get('input[name="email"]').type('valid@email.com');
    cy.get('input[name="password"]').type('validpassword');
    // submit the login form

    cy.get('form').submit();
    // assert that the user is redirected to the dashboard
    cy.url().should('include', '/dashboard');
    // assert that the API_URL and API_KEY environment variables are set correctly
    expect(process.env.API_URL).to.equal('https://example.com');
    expect(process.env.API_KEY).to.equal('ASDFGHJKL');
  });

  it('The user cannot submit the login form with invalid credentials and is shown a message', () => {
    // navigate to the login page
    cy.visit('/login');
    // fill in the login form with invalid credentials
    cy.get('input[name="email"]').type('invalid@email.com');
    cy.get('input[name="password"]').type('invalidpassword');
    // submit the login form
    cy.get('form').submit();
    // assert that an error message is displayed
    cy.get('.error-message').should('be.visible');
  });
});
