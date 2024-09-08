import express from 'express';
import sequelize from './config/database';
import legislationRoutes from './routes/legislationRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas
app.use('/legislations', legislationRoutes);

// Iniciar servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => console.error('Erro ao conectar com o banco', err));
