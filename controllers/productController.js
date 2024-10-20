import Product from "../models/Product.js";
import mongoose from "mongoose";

// Create a new product
export const createProduct = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newProduct = new Product({ title, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Update a product by ID
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No product with id: ${id}` });

  const updatedProduct = { title, description, _id: id };

  try {
    const product = await Product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Delete a product by ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No product with id: ${id}` });

  try {
    await Product.findByIdAndRemove(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
