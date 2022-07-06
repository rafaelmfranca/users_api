import connection from '../db/connection';
import { User } from '../interfaces/user.interface';

async function getAll(): Promise<User[]> {
  const [rows] = await connection.execute('SELECT * FROM Users');
  return rows as User[];
}

export default { getAll };
