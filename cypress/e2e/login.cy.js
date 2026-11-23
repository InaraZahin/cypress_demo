describe('Login page', () => {
  beforeEach(function () {
    cy.fixture('users').as('users');
  });

  it('logs in with valid credentials', function () {
    cy.login(this.users.valid.username, this.users.valid.password);
    cy.url().should('include', '/todos.html');
    cy.get('[data-cy=welcome-user]').should('have.text', 'student');
  });

  it('shows an error for invalid credentials', function () {
    cy.login(this.users.invalid.username, this.users.invalid.password);
    cy.get('[data-cy=error]')
      .should('be.visible')
      .and('contain', 'Invalid username or password');
    cy.url().should('not.include', '/todos.html');
  });

  it('requires both fields', () => {
    cy.visit('/');
    cy.get('[data-cy=submit]').click();
    cy.get('[data-cy=error]').should('contain', 'required');
  });

  it('redirects to login when not authenticated', () => {
    cy.visit('/todos.html');
    cy.location('pathname').should('eq', '/');
  });
});
