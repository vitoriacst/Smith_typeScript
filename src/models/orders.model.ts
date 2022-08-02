import { Orders } from '../interfaces/orders.interface';
import connection from './connection';

const listOrdersModel = async (orders:Orders) => {
  const { productsIds, userId } = orders;
  const query = `SELECT orders.id,
 orders.userId, JSON_ARRAYAGG(products.id) as productsIds
 FROM
 Trybesmith.Orders as orders
 INNER JOIN Trybesmith.Products as products
 ON orders.id = products.orderId
 GROUP BY orders.id
 ORDER BY orders.userId`;
  const [result] = await connection.query(query);
  return { id: result, productsIds, userId };
};

export default listOrdersModel;
