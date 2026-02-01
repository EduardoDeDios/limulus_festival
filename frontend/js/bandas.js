async function cargarBandas() {
    try {
        const res = await fetch(`${API_URL}/api/bandas`);
        const bandas = await res.json();

        const contenedor = document.getElementById("listaBandas");
        contenedor.innerHTML = "";

        if (!bandas.length) {
            contenedor.innerHTML = `
                <tr><td colspan="5">No hay bandas inscritas todavía.</td></tr>
            `;
            return;
        }

        bandas.forEach((banda) => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td data-label="Imagen">
                    <img src="${banda.imagen}" class="banda-img">
                </td>
                <td data-label="Nombre">${banda.nombre}</td>
                <td data-label="Género">${banda.genero}</td>
                <td data-label="Ciudad">${banda.ciudad}</td>
                <td data-label="Contacto">${banda.email}</td>
            `;

            contenedor.appendChild(fila);
        });

    } catch (err) {
        document.getElementById("listaBandas").innerHTML =
            `<tr><td colspan="5">Error al cargar las bandas.</td></tr>`;
    }
}

document.addEventListener("DOMContentLoaded", cargarBandas);
