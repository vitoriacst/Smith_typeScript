import { Router } from 'express';
import { listProductsController } from '../controllers/products.controller';

const router = Router();

router.get('/products', listProductsController);

export default router;
