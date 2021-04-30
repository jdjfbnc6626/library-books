const request = require('supertest');
const app = require('./index.js');

test('im a test', () => {
  // arrange
  const num = 1;
  const num2 = 2;
  // act
  const answer = num + num2;
  // assert
  expect(answer).toBe(3);
});

describe('index', () => {
  test('that the books route returns books', async () => {
    const response = await request(app)
      .get('/api/books')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(response.body[0].title).toBe('The Silmarillion');
    expect(typeof response.body[0].id).toBe('number');
  });
});
