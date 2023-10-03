const carrito = [];
let total = 0

//obtener los elementos del DOM
const botonesAgregar = document.querySelectorAll('.agregar');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');

//Funcion para agregar un producto al carrito
function agregarAlCarrito(nombre, precio){
    //Crear un objetoproducto
    const producto = {
            nombre: nombre,
            precio: precio
    };

    //Agregar producto al carrito
    carrito.push(producto);

    //Actualizar la lista del carrito en el DOM
    actualizarCarrito();

    //Calcular el total y actualizar en el DOM
    calcularTotal();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombre) {
    const indice = carrito.findIndex(producto => producto.nombre === nombre);
    if (indice !== -1) {
        carrito.splice(indice, 1); // Elimina el producto del arreglo del carrito
        actualizarCarrito(); // Actualiza la lista del carrito en el DOM
        calcularTotal(); // Recalcula el total
    }
}
carrito.forEach((producto) => {
    const itemCarrito = document.createElement('li');
    itemCarrito.innerHTML = `
        ${producto.nombre} - $${producto.precio}
        <button onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</button>
    `;
    listaCarrito.appendChild(itemCarrito);
});


// Función para actualizar la lista del carrito DOM
function actualizarCarrito() {
    // Limpiar la lista del carrito
    listaCarrito.innerHTML = '';

    // Recorrer el carrito y agregar cada producto a la lista
    carrito.forEach((producto) => {
        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</button>
        `;
        listaCarrito.appendChild(itemCarrito);
    });
}


//Funcion para calcular el Total del carrito
function calcularTotal(){
    total = 0

    //Sumar los precios en el carrito
    carrito.forEach((producto)=>{
        total += parseFloat(producto.precio);
    });

    //Actualizar el total en el DOM
    totalElemento.textContent = `$${total.toFixed(2)}`;
}

//Escuchar evento en los botones de agregar al carrito
botonesAgregar.forEach((boton)=>{
    boton.addEventListener('click', ()=>{
        const producto = boton.parentElement;
        const nombre = producto.querySelector('h2').textContent;
        const precioTexto = producto.querySelector('p').textContent;
        const precio = parseFloat(precioTexto.replace(`Precio: $`, ''));
        agregarAlCarrito(nombre, precio);
    })
})