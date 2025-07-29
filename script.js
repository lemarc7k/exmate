async function generateLetter() {
  const inputText = document.getElementById("inputText").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "Generando...";

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: inputText })
    });

    const data = await response.json();
    outputDiv.innerHTML = data.result || "No se pudo generar la carta.";
  } catch (error) {
    console.error(error);
    outputDiv.innerHTML = "Error al generar la carta.";
  }
}
