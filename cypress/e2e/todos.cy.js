describe('Todo list', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ valid }) => cy.login(valid.username, valid.password));
  });

  it('starts empty', () => {
    cy.get('[data-cy=todo-item]').should('not.exist');
    cy.get('[data-cy=todo-count]').should('have.text', '0 items left');
  });

  it('adds todos', () => {
    cy.addTodo('Learn Cypress');
    cy.addTodo('Write tests');
    cy.get('[data-cy=todo-item]').should('have.length', 2);
    cy.get('[data-cy=todo-item]').first().should('contain', 'Learn Cypress');
    cy.get('[data-cy=todo-count]').should('have.text', '2 items left');
  });

  it('ignores empty input', () => {
    cy.addTodo('   ');
    cy.get('[data-cy=todo-item]').should('not.exist');
  });

  it('completes a todo', () => {
    cy.addTodo('Learn Cypress');
    cy.get('[data-cy=toggle]').click();
    cy.get('[data-cy=todo-item]').should('have.class', 'done');
    cy.get('[data-cy=todo-count]').should('have.text', '0 items left');
  });

  it('deletes a todo', () => {
    cy.addTodo('Temporary item');
    cy.get('[data-cy=delete]').click();
    cy.get('[data-cy=todo-item]').should('not.exist');
  });

  it('logs out', () => {
    cy.get('[data-cy=logout]').click();
    cy.location('pathname').should('eq', '/');
  });
});
