import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { text } = req.body;

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: `Ayúdame a escribir una carta emocional de cierre sobre esto: ${text}` }],
      model: "gpt-4",
    });

    const message = chatCompletion.choices[0].message.content;
    res.status(200).json({ result: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
