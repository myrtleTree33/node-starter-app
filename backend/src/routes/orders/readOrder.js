import { addOrder } from '../../services/orderService.js';

async function routes(fastify, opts) {
  fastify.get('/', async (request, reply) => {
    const order = await addOrder();
    return Promise.resolve(order);
  });
}

export default routes;
