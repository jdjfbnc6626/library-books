import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import books from '../test-data/books.json';

const server = setupServer(
  rest.get('http://localhost:3001/api/books', (req, res, ctx) => res(ctx.json(books))),
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('index', () => {
  beforeEach(() => {
    render(<App />);
  });

  xtest('Displays heading', () => {
    const header = screen.getByRole('heading', /SDI Library/);
    expect(header).toBeInTheDocument();
  });

  it('should display a list of books', async () => {
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const bookList = await screen.findAllByRole('listitem');
    expect(bookList).toHaveLength(10);
  });
});
