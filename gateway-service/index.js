import express, { json } from 'express';
import cors from 'cors';

import run from './db.js';     
import routes from './routes.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(cors());

// Call the DB run function
run()
  .then(() => {
    console.log('Database connected successfully.');

    app.use('/api', routes);

    // Root route
    app.get('/', (req, res) => {
      res.send('API is running!');
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  });
