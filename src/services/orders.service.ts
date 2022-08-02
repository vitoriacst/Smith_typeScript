import listOrdersModel from '../models/orders.model';

const listOrdersService = async () => {
  const result = await listOrdersModel();
  return result;
};

export default listOrdersService;
