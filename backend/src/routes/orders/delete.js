async function routes(fastify, opts) {
  fastify.delete('/', async (request, reply) => ({ hello: 'world' }));
}

export default routes;
