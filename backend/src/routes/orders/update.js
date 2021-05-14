async function routes(fastify, opts) {
  fastify.put('/', async (request, reply) => ({ hello: 'world' }));
}

export default routes;
