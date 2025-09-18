const tareas = [
  { id: 1, titulo: "Aprender JS", estado: "pendiente" },
  { id: 2, titulo: "Hacer ejercicio", estado: "completada" },
  { id: 3, titulo: "Leer un capítulo", estado: "pendiente" }
];

const root = document.getElementById("root");

function render() {
  root.innerHTML = "";

  const ul = document.createElement("ul");

  for (let tarea of tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;
    if (tarea.estado === "completada") {
      li.classList.add("completada");
    }

    const btn = document.createElement("button");
    btn.textContent = tarea.estado === "pendiente" ? "Marcar completa" : "Marcar pendiente";
    btn.style.marginLeft = "10px";
    btn.addEventListener("click", () => {
      tarea.estado = tarea.estado === "pendiente" ? "completada" : "pendiente";
      render(); // volver a dibujar
    });

    li.appendChild(btn);
    ul.appendChild(li);
  }

  root.appendChild(ul);
}

render();
