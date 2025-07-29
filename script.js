function generate() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    if (!input.trim()) {
        output.innerHTML = "<p>Por favor escribe algo primero.</p>";
        return;
    }
    output.innerHTML = "<h2>Tu Carta</h2><p>" + input.replace(/\n/g, "<br>") + "</p>";
}