import express from 'express';
import { middlewareDeErros } from './middlewares/erros.middleware.js';
import {router} from '../src/routes/index.js'

const app = express();
app.use(express.json());
app.use('/api',router);
app.use(middlewareDeErros);
export default app;