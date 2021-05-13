import autoload from 'fastify-autoload';
import path from 'path';

function App(fastify, dirname) {
  // Bind routes based on directory
  fastify.register(autoload, {
    dir: path.join(dirname, 'routes'),
  });
}

export default App;
