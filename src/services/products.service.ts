import { Products } from '../interfaces/products.interface';
import { createProducts, listProducts } from '../models/products.models';

const createProductsService = async (produtos: Products) => {
  const products = await createProducts(produtos);
  return products;
};

const listProductsService = async () => listProducts();
export {
  listProductsService,
  createProductsService,
};
