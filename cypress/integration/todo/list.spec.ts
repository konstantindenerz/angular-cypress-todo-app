export const ROUTE = 'list';
describe(ROUTE, () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
  });

  afterEach(() => {
    cy.logout();
  });

  it('should route to list route', () => {
    cy.url().should('contain', ROUTE);
  });

  it('should contain the username', () => {
    cy.contains('bubu');
  });

  it('should have items', () => {
    cy.get('[data-test=item]').should('have.length.gt', 1);
  });

  it('should have checked items', () => {
    cy.get('[data-test=item]').find('input').should('be.checked');
  });

  it('should leave the list route after click on add button', () => {
    cy.get('[data-test=add]').click();

    cy.url().should('not.contain', ROUTE);
  });
});
