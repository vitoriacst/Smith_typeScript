import express from 'express';
import router from './routes/users.routes';

const app = express();

app.use(express.json());
// criando as rotas
app.use(router);

export default app;
