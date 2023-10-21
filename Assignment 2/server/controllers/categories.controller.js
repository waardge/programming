import Category from '../models/categories.model.js'; // Import the Category model
import errorHandler from './error.controller.js';

// Create a new category
const create = async (req, res) => {
  let { name } = req.body;

  let category = new Category({
    name,
  });

  try {
    let savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// List all categories
const list = async (req, res) => {
  try {
    let categories = await Category.find().select('name');
    res.json(categories);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
  list
};

/* File name: categories.controller.js
      Author: Daniel Zhuo
   Student #: 301330354
        Date: Oct 20, 2023
*/

import Category from '../models/categories.model.js'; // Import the Category model
import errorHandler from './error.controller.js';

// Create a new category
const create = async (req, res) => {
  const { name } = req.body;

  const category = new Category({
    name,
  });

  try {
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// List all categories
const list = async (req, res) => {
  try {
    const categories = await Category.find().select('name');
    res.json(categories);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Retrieve a single category by ID
const read = async (req, res) => {
  res.json(req.category);
};

// Update a category by ID
const update = async (req, res) => {
  const category = req.category;
  category.name = req.body.name;

  try {
    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Delete a category by ID
const remove = async (req, res) => {
  const category = req.category;

  try {
    const deletedCategory = await category.remove();
    res.json(deletedCategory);
  } catch (err) {
    res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
  list
};

