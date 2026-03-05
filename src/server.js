import express from 'express';
import usuariosRouter from './routes/eventos.routes.js';

const app = express();
app.use(express.json());
app.use('/eventos',usuariosRouter);

const PORTA =   process.env.PORTA || 3000;
app.listen(PORTA);