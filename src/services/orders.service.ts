import { Orders } from '../interfaces/orders.interface';
import listOrdersModel from '../models/orders.model';

const listOrdersService = async (orders:Orders) => {
  const order = await listOrdersModel(orders);
  return order;
};

export default listOrdersService;
