# cypress_demo

A small, self-contained Cypress end-to-end testing project. It ships with its own
tiny demo app (a login page and a todo list), so the tests don't depend on any
external website.

## Setup

```bash
npm install
```

## Run the tests

Headless (starts the app, runs all specs, stops the app):

```bash
npm test
```

Interactive (Cypress UI) — start the app in one terminal, then open Cypress in another:

```bash
npm start
npm run cy:open
```

## Project layout

```
app/                    Demo app under test (static HTML)
server.js               Zero-dependency static server on http://localhost:3000
cypress.config.js       Cypress config (baseUrl, spec pattern, etc.)
cypress/e2e/            Test specs
  login.cy.js           Valid/invalid login, required fields, auth redirect
  todos.cy.js           Add, complete, delete todos; logout
cypress/fixtures/       Test data (users.json)
cypress/support/        Custom commands (cy.login, cy.addTodo)
```

## Demo credentials

- Username: `student`
- Password: `Password123`

## Conventions

- Elements are selected with `data-cy` attributes, which don't break when
  styling or text changes.
- Repeated steps live in custom commands in `cypress/support/commands.js`.
- Test data lives in fixtures, not hard-coded in specs.
