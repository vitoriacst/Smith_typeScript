import jwt from 'jsonwebtoken';
import { Users } from '../interfaces/users.interface';

const JWT_SECRET = 'secret';

const jwtValidate = {
  createToken: (validate: Users) => {
    const ValidateToken = jwt.sign(
      { validate },
      JWT_SECRET,
      { expiresIn: '10h' },
    );
    return ValidateToken;
  },
};

export default jwtValidate;

// criacao de um token
