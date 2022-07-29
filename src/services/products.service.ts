import { Products } from '../interfaces/products.interface';
import { createProducts, listProducts } from '../models/products.models';

const createProductsService = async (products: Products) => createProducts(products);

const listProductsService = async () => listProducts();
export {
  listProductsService,
  createProductsService,
};
