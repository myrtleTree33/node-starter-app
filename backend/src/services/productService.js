import Product from '../models/Product.js';

export const addProduct = async () => {
  const order = new Product({
    title: '123',
    description: 'abc',
  });

  return Promise.resolve(order.save());
};

export const removeOrder = async (db) => {};

export const findOrder = async (db) => {};

export const findOrders = async (db) => {};

export const modifyOrder = async (db) => {};
