import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BlogRoutes } from './app/modules/blog/blog.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/blogs', BlogRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
