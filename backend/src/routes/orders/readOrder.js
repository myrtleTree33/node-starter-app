async function routes(fastify, opts) {
  fastify.get('/', async (request, reply) => ({ hello: 'world' }));
}

export default routes;
