let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito)
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");



function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length > 0  ){
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = ""
        
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <div class="carrito-producto">
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>${producto.cantidad}</small>
                <p>1</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id=${producto.id}><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    } else{
    
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}
cargarProductosCarrito()


function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){

    productosEnCarrito.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    cargarProductosCarrito()
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    contenedorTotal.innerText = `$${totalCalculado}`;
}

function generarMensajeWhatsApp() {
    // Obtener los productos del carrito desde localStorage
    const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
  
    // Construir el mensaje
    let mensaje = "¡Hola! Quiero realizar la siguiente compra:\n";
  
    productosEnCarrito.forEach((producto, index) => {
      mensaje += `${index + 1}. ${producto.titulo} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio * producto.cantidad}\n`;
    });
  
    mensaje += `\nTotal: $${calcularTotal()}\n`;
  
    // Puedes personalizar el mensaje según tus necesidades
    return encodeURIComponent(mensaje);
}

document.getElementById("finalizar-compra").addEventListener("click", function () {
    const numeroWhatsApp = "593992660222"; // Número de WhatsApp

    // Crea el enlace de WhatsApp
    const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}`;

    // Abre una nueva ventana de WhatsApp
    const ventanaWhatsApp = window.open(enlaceWhatsApp);

    // Después de abrir la ventana, genera el mensaje y colócalo en ella
    ventanaWhatsApp.onload = function () {
        const mensaje = generarMensajeWhatsApp();
        ventanaWhatsApp.location = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;
    };
});


  function calcularTotal() {
    let totalCalculado = 0;
    
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        totalCalculado = productosEnCarrito.reduce((acc, producto) => {
            return acc + (producto.precio * producto.cantidad);
        }, 0);
    }

    return totalCalculado;
}
