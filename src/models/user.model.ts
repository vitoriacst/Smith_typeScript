import { ResultSetHeader } from 'mysql2';
import { Users } from '../interfaces/users.interface';
import connection from './connection';

// creating the user and inserting into the table
const createUser = async (usuários: Users) => {
  const { username, classe, level, password } = usuários;
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO
    Trybesmith.Users(username, classe, level , password)
  VALUES
    (?, ?, ?);`,
    [username, classe, level, password],
  );
  return result;
};

export default createUser;
