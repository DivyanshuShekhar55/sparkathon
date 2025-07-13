import express from "express";
import cors from "cors";
const app = express();
const router = express.Router();

const GROQ_PORT = 3001;

app.use(cors());

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${GROQ_PORT}`);
});
