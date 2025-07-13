import express from "express";
const router = express.Router();
import 'dotenv/config';

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function GroqService(userPrompt) {
  const chatCompletion = await getProductListGroq(userPrompt);

  const itemListFromGroq = chatCompletion.choices[0]?.message?.content || ""
  console.log(itemListFromGroq);
  return itemListFromGroq
}

function getProductListGroq(userPrompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that generates a comma-separated list of legal food items from a user's request. Ignore illegal items. Apply filters like veg, non-veg, or vegan as specified by the user. Don't add items that are too basic.",
      },
      // using few shot prompting, add more later...
      {
        role: "user",
        content: "i want to make pepperoni pizza",
      },
      {
        role:"assistant",
        content:"dough, sauce, pepperoni, cheese, oregano, basil, olive oil"
      },
      // user prompt here...
      {
        role: "user",
        content: userPrompt,
      },
    ],
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
  });
}

export default router
