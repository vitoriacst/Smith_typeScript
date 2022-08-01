import { Request, Response } from 'express';
import { Users } from '../interfaces/users.interface';
import createUser from '../models/user.model';

const createUserController = async (req:Request, res: Response) => {
  const user = req.body as Users;
  const result = await createUser(user);
  console.log(result);
  // const token = jwtValidate.createToken(result);
  return res.status(201).json({ result });
};

export default createUserController;
