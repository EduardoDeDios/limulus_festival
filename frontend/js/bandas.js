async function cargarBandas() {
  try {
    const res = await fetch(`${API_URL}/api/bandas`);
    const bandas = await res.json();

    const contenedor = document.getElementById("listaBandas");
    contenedor.innerHTML = "";

    if (!bandas.length) {
      contenedor.textContent = "No hay bandas inscritas todavía.";
      return;
    }

    bandas.forEach((banda) => {
      const card = document.createElement("div");
      card.className = "banda-card";

      card.innerHTML = `
        <h3>${banda.nombre}</h3>
        <p><strong>Género:</strong> ${banda.genero}</p>
        ${banda.bio ? `<p>${banda.bio}</p>` : ""}
        ${banda.enlaces ? `<p><a href="${banda.enlaces}" target="_blank">Enlaces</a></p>` : ""}
        ${banda.ciudad ? `<p><strong>Ciudad:</strong> ${banda.ciudad}</p>` : ""}
      `;

      contenedor.appendChild(card);
    });
  } catch (err) {
    document.getElementById("listaBandas").textContent =
      "Error al cargar las bandas.";
  }
}
document.addEventListener("DOMContentLoaded", cargarBandas);
