import Order from "../models/Order.js";

export const addOrder = async () => {
    const order = new Order({
      title: '123',
      description: 'abc',
    });

    return Promise.resolve(order.save());
};

export const removeOrder = async (db) => {};

export const findOrder = async (db) => {};

export const findOrders = async (db) => {};

export const modifyOrder = async (db) => {};
