import express from 'express';
import cors from 'cors';
import sequelize from './src/config/connection.js';
import 'dotenv/config';
import userRoutes from './src/routes/userRoutes.js';
//import movieRoutes from './src/routes/movieRoutes.js';

// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
//app.use('/api', movieRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
  });
});