import mongoose from 'mongoose';

export const initDb = async (uri) => {
  const instance = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const a = 3;

  console.log(`Connected to DB at uri=${uri}`);
  return Promise.resolve(instance);
};
