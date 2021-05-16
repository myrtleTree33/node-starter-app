import Fastify from 'fastify';
import { closeDb, connectDb } from '../../utilities.js';
import routes from './create.js';

const sum = (a, b) => a + b;

let app;

beforeAll(async () => {
  await connectDb();

  app = Fastify();
  app.register(routes);

  return Promise.resolve();
});

afterAll(async () => {
  await app.close();
  await closeDb();
});

test('adds 1 + 2 to equal 3', async () => {
  const response = await app.inject({
    method: 'POST',
    url: '/',
    body: {
      productId: '123',
      buyerId: 'user_123',
      quantity: 23,
    },
  });

  expect(sum(1, 2)).toBe(3);
});
