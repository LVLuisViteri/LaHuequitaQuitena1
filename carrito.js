// carrito.js

const productos = [
    { id: 1, nombre: 'Whisky Glenfiddich 12 años', precio: 45 },
    { id: 2, nombre: 'Ron Diplomático Reserva Exclusiva', precio: 35 },
    { id: 3, nombre: 'Gin Bombay Sapphire', precio: 25 },
    { id: 4, nombre: 'Vodka Absolut', precio: 20 },
    { id: 5, nombre: 'Tequila Patrón Reposado', precio: 30 },
    // Agregar más productos aquí
];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar el carrito de compras
function mostrarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const carritoTotal = document.getElementById('carrito-total');
    let carritoHTML = '';
    let total = 0;

    carrito.forEach(item => {
        carritoHTML += `<li>${item.nombre} - $${item.precio}</li>`;
        total += item.precio;
    });

    carritoLista.innerHTML = carritoHTML;
    carritoTotal.textContent = `$${total}`;
}

// Inicialización
const carrito = [];

// Agregar evento de clic a los botones de "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar-carrito');
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
        const productoId = parseInt(boton.parentNode.dataset.id);
        const producto = productos.find(item => item.id === productoId);
        if (producto) {
            agregarAlCarrito(producto);
        }
    });
});

// Mostrar el carrito inicialmente
mostrarCarrito();
