import express from "express";
import cors from "cors";
const app = express();
import router, { GroqService } from './routes.js'
import 'dotenv/config';

const GROQ_PORT = 3001;

app.use(cors());

//app.use('/api', router)
app.get('/groq-service/api/', GroqService)
//GroqService

// Start server
app.listen(GROQ_PORT, () => {
  console.log(`Server listening on port ${GROQ_PORT}`);
});
