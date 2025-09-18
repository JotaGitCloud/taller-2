let tareas = [];

// Crear
function crearTarea(titulo) {
  let tarea = { id: Date.now(), titulo: titulo, estado: "pendiente" };
  tareas.push(tarea);
}

// Leer
function mostrarTareas() {
  console.log("------ LISTA DE TAREAS ------");
  for (let t of tareas) {
    console.log(`ID: ${t.id} | ${t.titulo} | ${t.estado}`);
  }
  if (tareas.length === 0) {
    console.log("No hay tareas");
  }
  console.log("-----------------------------\n");
}

// Actualizar
function actualizarTarea(id, nuevoTitulo, nuevoEstado) {
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id === id) {
      if (nuevoTitulo) tareas[i].titulo = nuevoTitulo;
      if (nuevoEstado) tareas[i].estado = nuevoEstado;
    }
  }
}

// Eliminar
function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
}


// Ejemplo de uso

crearTarea("Aprender JS");
crearTarea("Practicar ejercicios");

mostrarTareas();

actualizarTarea(tareas[0].id, "Aprender JavaScript básico", "completada");
mostrarTareas();

eliminarTarea(tareas[1].id);
mostrarTareas();
