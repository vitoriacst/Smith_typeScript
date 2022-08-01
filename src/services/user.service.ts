import { Users } from '../interfaces/users.interface';
import createUser from '../models/user.model';

const createUserService = async (users: Users) => {
  const User = await createUser(users);
  return User;
};

export default createUserService;
