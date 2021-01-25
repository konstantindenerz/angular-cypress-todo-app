// ***********************************************

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): typeof login;

    logout(): typeof logout;
    matchImageSnapshot(): void;
    toMatchImageSnapshot(options: any): void;
  }
}

function login(): void {
  Cypress.log({
    name: 'login (mock impl) via session storage',
  });
  sessionStorage.setItem('access_token', 'bubu');
}

function logout(): void {
  sessionStorage.clear();
}


Cypress.Commands.add('login', login);
Cypress.Commands.add('logout', logout);



//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
