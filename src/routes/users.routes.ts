import { Router } from 'express';
import { listProductsController } from '../controllers/products.controller';

const router = Router();

router.post('/products', listProductsController);

export default router;
