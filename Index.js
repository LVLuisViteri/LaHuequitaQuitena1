// Ejemplo de cómo cargar productos dinámicamente (reemplaza con tus propios datos)
const productos = [
    { nombre: 'Whisky Escocés', precio: '$50', imagen: 'whisky.jpg' },
    { nombre: 'Vino Tinto', precio: '$20', imagen: 'vino.jpg' },
    { nombre: 'Ron Añejo', precio: '$30', imagen: 'ron.jpg' }
];

const productosContainer = document.querySelector('.productos');

productos.forEach(producto => {
    const productoElement = document.createElement('div');
    productoElement.classList.add('producto');
    productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        <button>Agregar al carrito</button>
    `;
    productosContainer.appendChild(productoElement);
});
//Buscador

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
        alert('Realizar búsqueda con el término: ' + searchTerm);
    } else {
        alert('Por favor, ingrese un término de búsqueda.');
    }
});
