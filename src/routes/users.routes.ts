import { Router } from 'express';
import {
  createProductsController,
  listProductsController,
} from '../controllers/products.controller';

const router = Router();
router.post('/products', createProductsController);
router.get('/products', listProductsController);

export default router;
