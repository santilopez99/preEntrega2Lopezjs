// hice un objeto constructor para los productos
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// agregue un array de productos
let productos = [
  new Producto('Caja de moscas', 7000),
  new Producto('Caña de pesca', 30000),
  new Producto('Botas de Vadeo', 50000),
  new Producto('Lentes polarizados', 10000)
];

// hice una función para mostrar los productos al usuario
function mostrarProductos() {
  let mensaje = 'Seleccione uno de los productos que tenemos hasta el momento:\n';
  for (let i = 0; i < productos.length; i++) {
    mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
  }
  alert(mensaje);
}

// aca agrego una función para obtener la elección del usuario
function obtenerElección() {
  let elección = prompt('Ingrese el número del producto que desea comprar:');
  return parseInt(elección);
}

// vuelvo a crear una función para validar la elección del usuario
function validarElección(elección) {
  if (isNaN(elección) || elección < 1 || elección > productos.length) {
    alert('La elección ingresada no es válida.');
    return false;
  }
  return true;
}

// ahora creo una función para calcular el precio total de los productos seleccionados
function calcularPrecioTotal(productosSeleccionados) {
  let precioTotal = 0;
  for (let i = 0; i < productosSeleccionados.length; i++) {
    precioTotal += productosSeleccionados[i].precio;
  }
  return precioTotal;
}

//  Esta  función  la hice para mostrar el resumen de la compra al usuario
function mostrarResumenCompra(productosSeleccionados, precioTotal) {
  let mensaje = 'Resumen de la compra:\n\n';
  for (let i = 0; i < productosSeleccionados.length; i++) {
    mensaje += `${productosSeleccionados[i].nombre} - $${productosSeleccionados[i].precio}\n`;
  }
  mensaje += `\nPrecio total: $${precioTotal}`;
  alert(mensaje);
}

// Creo un mensaje de bienvenida al usuario
let nombreUsuario = prompt('Bienvenido/a a bolati fly fishing. ¿Cuál es su nombre?');
alert(`¡Hola ${nombreUsuario}!`);

// Mostramos los productos que tenemos por el momento al usuario 
mostrarProductos();

// En base a la elección del usuario la validamos ya que mas arriba si no la coloca bien, no es valida 
let elección = obtenerElección();
while (!validarElección(elección)) {
  elección = obtenerElección();
}

// Agregue los productos seleccionados a un array
let productosSeleccionados = [];
productosSeleccionados.push(productos[elección - 1]);

// le muestro el resumen de la compra al usuario
let precioTotal = calcularPrecioTotal(productosSeleccionados);
mostrarResumenCompra(productosSeleccionados, precioTotal);

// le doy un mensaje de despedida 
alert("Gracias por su compra, hasta pronto!!!");
