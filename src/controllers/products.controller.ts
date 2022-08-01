import { Request, Response } from 'express';
import { Products } from '../interfaces/products.interface';
import { createProductsService, listProductsService } from '../services/products.service';

const createProductsController = async (req: Request, res: Response) => {
  const products = req.body as Products;

  // console.log(products, 'controller products');

  const resultado = await createProductsService(products);

  console.log(resultado, 'controller');

  return res.status(201).json(resultado);
};

const listProductsController = async (_req: Request, res: Response) => {
  const listProducts = await listProductsService();
  console.log(listProducts, 'test get');

  return res.status(200).json(listProducts);
};

export {
  createProductsController,
  listProductsController,
};
