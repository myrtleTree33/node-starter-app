import Fastify from 'fastify';
import { addProduct } from '../../services/productService.js';
import { clearDb, closeDb, connectDb } from '../../utilities.js';
import routes from './create.js';

const sum = (a, b) => a + b;

let app;

beforeAll(async () => {
  await connectDb();
  app = Fastify();
  app.register(routes);

  return Promise.resolve();
});

afterEach(async () => clearDb());

afterAll(async () => {
  await app.close();
  await closeDb();
});

describe('when given a valid product id', () => {
  it('should return the correct response', async () => {
    const product = await addProduct({
      title: 'monopoly',
      description: 'some game',
      category: 'games',
      numRemaining: 5,
    });

    const { _id } = product;

    const response = await app.inject({
      method: 'POST',
      url: '/',
      body: {
        productId: _id,
        buyerId: 'user_123',
        quantity: 5,
      },
    });

    const body = response.json();

    expect(body.quantity).toBe(5);
    expect(body.buyerId).toBeDefined();
    expect(body.productId).toBeDefined();
    expect(body.datePurchased).toBeDefined();
  });
});
