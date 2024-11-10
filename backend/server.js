import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './src/config/connection.js';
import userRoutes from './src/routes/userRoutes.js'; // Adjust the path as necessary

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});