import express from 'express';
import 'express-async-errors';
import userRouter from './routes';

const app = express();

app.use(express.json()).use(userRouter);

export default app;
