Cypress.Commands.add('login', () => {
  cy.visit('/login');
  cy.get('input[name="username"]').type('username');
  cy.get('input[name="password"]').type('password');
  cy.get('button').click();
});
const commands = require('../support/commands');

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      args.push('--disable-web-security');
      return args;
    }

    if (browser.name === 'electron') {
      args['fullscreen'] = false;
      return args;
    }
  });
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });
  Object.keys(commands).forEach((command) =>
    Cypress.Commands.add(command, commands[command])
  );
};

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
