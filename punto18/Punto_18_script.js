let tareas = [
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

    const btnToggle = document.createElement("button");
    btnToggle.textContent = tarea.estado === "pendiente" ? "Marcar completa" : "Marcar pendiente";
    btnToggle.addEventListener("click", () => {
      tarea.estado = tarea.estado === "pendiente" ? "completada" : "pendiente";
      render();
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      tareas = tareas.filter(t => t.id !== tarea.id);
      render();
    });

    li.appendChild(btnToggle);
    li.appendChild(btnEliminar);
    ul.appendChild(li);
  }

  root.appendChild(ul);
}

render();
