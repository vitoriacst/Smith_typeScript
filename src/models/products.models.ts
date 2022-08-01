import { ResultSetHeader } from 'mysql2/promise';
import { Products } from '../interfaces/products.interface';
import connection from './connection';

// creating the products and inserting into the table
const createProducts = async (produtos: Products) => {
  const { name, amount } = produtos;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: result.insertId, name, amount };
};

// listing all Products

const listProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return products;
};

export {
  createProducts,
  listProducts,
};
