import express from 'express';
import categoriesController from '../controllers/categories.controller.js';

const router = express.Router();

router.route('/api/categories')
  .get(categoriesController.list)
  .post(categoriesController.create)

export default router;
