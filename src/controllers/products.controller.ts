import { Request, Response } from 'express';
import { Products } from '../interfaces/products.interface';
import { createProductsService, listProductsService } from '../services/products.service';

const createProductsController = async (req: Request, res: Response) => {
  const products = req.body as Products;
  const resultado = await createProductsService(products);
  return res.status(201).json(resultado);
};

const listProductsController = async (_req: Request, res: Response) => {
  const listProducts = await listProductsService();
  return res.status(200).json(listProducts);
};

export {
  createProductsController,
  listProductsController,
};
