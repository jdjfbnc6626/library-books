import books from '../../test-data/books.json';

describe('index', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/books', { body: books });

    cy.visit('/');
  });

  it('Should find heading', () => {
    cy.findByRole('heading', /SDI Library/).should('exist');
  });

  it('Should render a list of books', () => {
    cy.findByRole('list').should('exist');
    cy.findAllByRole('listitem').should('exist');
    cy.findAllByRole('listitem').should('have.length', 10);
  });
});
