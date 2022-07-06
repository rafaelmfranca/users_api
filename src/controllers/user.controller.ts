import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

async function getAll(_req: Request, res: Response, _next: NextFunction) {
  const users = await UserService.getAll();
  return res.status(200).json(users);
}

export default { getAll };
