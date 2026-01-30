document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formBanda");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // evita el GET

        const data = Object.fromEntries(new FormData(form));

        const res = await fetch(`${API_URL}/inscripcion`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const json = await res.json();
        document.getElementById("mensaje").textContent = json.message;
    });
});
