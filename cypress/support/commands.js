// Custom commands: reusable steps shared across specs.

// Log in through the UI.
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('[data-cy=username]').type(username);
  cy.get('[data-cy=password]').type(password, { log: false });
  cy.get('[data-cy=submit]').click();
});

// Add a todo item on the todos page.
Cypress.Commands.add('addTodo', (text) => {
  cy.get('[data-cy=new-todo]').type(`${text}{enter}`);
});
