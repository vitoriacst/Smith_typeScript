import { Request, Response } from 'express';
import { Users } from '../interfaces/users.interface';
import jwtValidate from '../middlewares/TokenValidate';
import createUserService from '../services/user.service';

const createUserController = async (req:Request, res: Response) => {
  const user = req.body as Users;
  const result = await createUserService(user);
  const token = jwtValidate.createToken(result);
  return res.status(201).json({ token });
};

export default createUserController;
