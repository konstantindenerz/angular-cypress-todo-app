export const ROUTE = 'login';
describe(ROUTE, () => {

  beforeEach(() => {
    cy.viewport(450, 600);
    cy.visit('/');
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  it('should contain login in the route path', () => {
    cy.url().should('contain', ROUTE);
  });

  it('should have form controls', () => {
    cy.get('[data-test=username]');
    cy.get('[data-test=password]');
  });

  it('should have disabled submit', () => {
    cy.get('[data-test=submit]').should('be.disabled');
    cy.matchImageSnapshot();
  });

  it('should enable submit if the form is valid', () => {
    cy.get('[data-test=username]').type('foobar');
    cy.get('[data-test=password]').type('bubu');

    cy.get('[data-test=submit]').should('not.be.disabled');
    cy.matchImageSnapshot();
  });

  it('should route to another route after login', () => {
    cy.get('[data-test=username]').type('foobar');
    cy.get('[data-test=password]').type('bubu');

    cy.get('[data-test=submit]').click();

    cy.url().should('not.contain', ROUTE);
  });
});
