import { Router } from 'express';
import {
  createProductsController,
  listProductsController,
} from '../controllers/products.controller';
import createUserController from '../controllers/user.controller';

const router = Router();
router.post('/products', createProductsController);
router.get('/products', listProductsController);
router.post('/users', createUserController);
export default router;
