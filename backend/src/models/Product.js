import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  dateDeleted: {
    type: Date,
  },
});

export default model('Product', ProductSchema);
