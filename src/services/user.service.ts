import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

async function getAll(): Promise<User[]> {
  return await UserModel.getAll();
}

export default { getAll };
