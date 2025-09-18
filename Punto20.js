const productos = [
  { id: 1, nombre: "Camiseta", precio: 25 },
  { id: 2, nombre: "Pantalón", precio: 40 },
  { id: 3, nombre: "Zapatos", precio: 60 },
  { id: 4, nombre: "Gorra", precio: 15 }
];

let carrito = [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    console.log("Producto no encontrado");
    return;
  }

  const existe = carrito.find(p => p.id === id);
  if (existe) {
    console.log("El producto ya está en el carrito");
  } else {
    carrito.push(producto);
    console.log(`Se agregó: ${producto.nombre}`);
  }
}

function mostrarCarrito() {
  console.log("\n------ CARRITO ------");
  if (carrito.length === 0) {
    console.log("Carrito vacío");
  } else {
    let total = 0;
    for (let p of carrito) {
      console.log(`${p.nombre} - $${p.precio}`);
      total += p.precio;
    }
    console.log("---------------------");
    console.log("TOTAL: $" + total);
  }
  console.log("---------------------\n");
}


agregarAlCarrito(5);
agregarAlCarrito(2);
agregarAlCarrito(1); // prueba de duplicado
mostrarCarrito();

agregarAlCarrito(3);
mostrarCarrito();
