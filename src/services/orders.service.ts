import listOrdersModel from '../models/orders.model';

const listOrdersService = async () => {
  const result = await listOrdersModel();
  console.log(result, 'service');
  return result;
};

export default listOrdersService;
