import { Request, Response } from 'express';
// import { Orders } from '../interfaces/orders.interface';
import listOrdersService from '../services/orders.service';

const listOrdersController = async (req: Request, res: Response) => {
  // const orders = req.body as Orders;
  const resultado = await listOrdersService();
  return res.status(200).json(resultado);
};

export default listOrdersController;
