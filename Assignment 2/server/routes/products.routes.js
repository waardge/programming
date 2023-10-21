import express from 'express';
import productsController from '../controllers/products.controller.js';

const router = express.Router();

router.route('/api/products')
  .get(productsController.list)
  .post(productsController.create)
  .delete(productsController.deleteAll)

router.param("productID", productsController.productByID);

router.route('/api/products/:productID')
  .get(productsController.read)
  .put(productsController.update)
  .delete(productsController.deleteProductById)

export default router;
