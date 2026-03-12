import express from 'express';
import router from '../src/routes/eventos.router.js';
import { middlewareDeErros } from './middlewares/erros.middleware.js';

const app = express();
app.use(express.json());
app.use('/eventos',router);
app.use(middlewareDeErros);

const PORTA = process.env.PORTA || 3000;
app.listen(PORTA);  