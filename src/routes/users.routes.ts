import { Router } from 'express';
import listOrdersController from '../controllers/orders.controller';
import {
  createProductsController,
  listProductsController,
} from '../controllers/products.controller';
import createUserController from '../controllers/user.controller';

const router = Router();
router.post('/products', createProductsController);
router.get('/products', listProductsController);
router.post('/users', createUserController);
router.get('/orders', listOrdersController);
export default router;
