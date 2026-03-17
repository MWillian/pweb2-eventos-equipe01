import {Router} from 'express';
import eventosRouter from '../routes/eventos.router.js';

export const router = Router();

router.use('/eventos',eventosRouter);