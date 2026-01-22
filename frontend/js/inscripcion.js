document.getElementById("formBanda").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  try {
    const res = await fetch(`${API_URL}/inscripcion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    document.getElementById("mensaje").textContent =
      json.message || "Inscripción enviada correctamente";
    e.target.reset();
  } catch (err) {
    document.getElementById("mensaje").textContent =
      "Error al enviar la inscripción";
  }
});