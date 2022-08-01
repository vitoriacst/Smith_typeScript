import { Products } from '../interfaces/products.interface';
import { createProducts, listProducts } from '../models/products.models';

const createProductsService = async (produtos: Products) => {
  // console.log(produtos, 'service');
  const products = await createProducts(produtos);
  console.log(products, 'service');
  return products;
};

const listProductsService = async () => listProducts();
export {
  listProductsService,
  createProductsService,
};
