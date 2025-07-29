import { OpenAI } from "openai";

// Inicializa OpenAI con variable de entorno segura
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  // Validación básica
  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Prompt inválido o faltante" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "Eres un terapeuta emocional que escribe cartas de cierre amoroso conmovedoras y profundas.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
    });

    const result = response.choices?.[0]?.message?.content;

    if (!result) {
      throw new Error("No se generó respuesta válida");
    }

    res.status(200).json({ result });
  } catch (err) {
    console.error("Error al generar carta:", err);
    res.status(500).json({ error: "Error al generar la carta emocional" });
  }
}
