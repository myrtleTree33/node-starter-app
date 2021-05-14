import { addProduct } from '../../services/productService.js';

async function routes(fastify, opts) {
  fastify.get('/', async (request, reply) => {
    const order = await addProduct();
    return Promise.resolve(order);
  });
}

export default routes;
