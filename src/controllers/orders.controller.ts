import { Request, Response } from 'express';
import listOrdersService from '../services/orders.service';

const listOrdersController = async (req: Request, res: Response) => {
  const resultado = await listOrdersService();
  return res.status(200).json(resultado);
};

export default listOrdersController;
