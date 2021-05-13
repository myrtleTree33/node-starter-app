async function routes(fastify, opts) {
  fastify.post('/', async (request, reply) => ({ hello: 'world' }));
}

export default routes;
