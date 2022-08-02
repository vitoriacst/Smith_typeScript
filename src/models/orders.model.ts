import connection from './connection';

const listOrdersModel = async () => {
  const query = `SELECT orders.id,
 orders.userId, JSON_ARRAYAGG(products.id) as productsIds
 FROM
 Trybesmith.Orders as orders
 INNER JOIN Trybesmith.Products as products
 ON orders.id = products.orderId
 GROUP BY orders.id
 ORDER BY orders.userId`;
  const [result] = await connection.query(query);
  return result;
};

export default listOrdersModel;

// JSON_ARRAYAGGretorna uma matriz JSON contendo um elemento para cada valor em um determinado conjunto de valores JSON ou SQL. Ele atua em uma coluna ou expressão que avalia um único valor.Retorna NULL em caso de erro ou se o resultado não contiver linhas.

// inner join para combinar as colunas e seus valores respectivos
