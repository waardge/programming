import Product from '../models/products.model.js';
import errorHandler from './error.controller.js';

// create proudct
const create = async (req, res) => {
  const product  = new Product(req.body);

  try {
    await product.save();
    return res.status(201).json({
      messag: "Proudct successfully created!"
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// List all products (array)
const list = async (req, res) => {
  try {
    let products = await Product.find().select('name description price publisher category');
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Get product ID
const productByID = async (req, res, next, id) => { 
  try {
    let product = await Product.findById(id) 
  if (!user)
    return res.status('400').json({ 
    error: "Product not found."
  })
  req.profile = product 
  next()
  } catch (err) {
    return res.status('400').json({ 
      error: "Could not retrieve product."
  }) 
  }
};

// Read a specific category by ID
const read = async (req, res) => {
  try {
    const productId = req.params.productId; 
    let product = await Proudct.findById(productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Proudct not found' });
    }

    res.json(category);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Update product info
const update = async (req, res) => {
  let product = req.profile
  product = extend(product, req.body)

  try {
    await proudct.save();

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the product properties
    product.name = name;
    product.description = description;
    product.price = price;
    product.publisher = publisher;
    product.category = category;

    res.json(prooduct);
  } catch (err) {
    return res.status(500).json({
      error: 'An error occurred while updating the product',
    });
  }
};

// Delete one proudct
const deleteProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    return res.status(500).json({
      error: 'An error occurred while deleting the product',
    });
  }
};

// Delete all products 
const deleteAll = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: 'All products deleted successfully' });
  } catch (err) {
    res.status(500).json({
      error: 'An error occurred while deleting products',
    });
  }
};

export default {
  create,
  list,
  productByID,
  deleteAll,
  read,
  update,
  deleteProductById
};
