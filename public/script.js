async function generateLetter() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("output");
  output.textContent = "Generando...";

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: input })
    });

    const data = await response.json();
    output.textContent = data.result || "Error generando la carta.";
  } catch (error) {
    output.textContent = "Error de conexión con el servidor.";
  }
}
