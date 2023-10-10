// PRODUCTOS
const productos = [
    // Wisky
    {
        id: "Jonnie Rojo",
        titulo: "Jonnie Rojo",
        imagen: "./Imagenes/Wisky/Jonnie01.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 25
    },
    {
        id: "Jhon Morris Negro 1L",
        titulo: "Jhon Morris Negro 1L",
        imagen: "./Imagenes/Wisky/JM1L.png",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 25
    },
    {
        id: "Jhon Morris Negro 750 ml",
        titulo: "Jhon Morris Negro 750 ml",
        imagen: "./Imagenes/Wisky/JM1L.png",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 25
    },
    {
        id: "Something",
        titulo: "Something",
        imagen: "./imagenes/Wisky/Something.png",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 25
    },
    {
        id: "Ballantines",
        titulo: "Ballantines",
        imagen: "./imagenes/Wisky/Ballantines.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 25
    },
    {
        id: "Wisky Old Times Rojo",
        titulo: "Wisky Old Times Rojo",
        imagen: "./imagenes/Wisky/OTR.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 15
    },
    {
        id: "Wisky Old Times Negro",
        titulo: "Wisky Old Times Negro",
        imagen: "./imagenes/Wisky/OTN.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 16
    },
    {
        id: "Black Owl",
        titulo: "Black Owl",
        imagen: "./imagenes/Wisky/BlackOwl.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 16
    },
    {
        id: "Black Castel de Canela",
        titulo: "Black Castel de Canela",
        imagen: "./imagenes/Wisky/BCDC.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 25
    },
    // Aguardientes
    {
        id: "Antioqueño",
        titulo: "Antioqueño",
        imagen: "./Imagenes/Aguardiente/antioqueño.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 20
    },
    {
        id: "Norteño 750 ml",
        titulo: "Norteño 750 ml",
        imagen: "./imagenes/Aguardiente/Norteño.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 10
    },
    {
        id: "Norteño 375 ml",
        titulo: "Norteño 375 ml",
        imagen: "./imagenes/Aguardiente/Norteñomedia.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 5
    },
    //Vinos
    {
        id: "Alta Gama",
        titulo: "Alta Gama",
        imagen: "./imagenes/Vinos/Altagama.png",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 10
    },
    {
        id: "Maipo Cabernet",
        titulo: "Maipo Cabernet",
        imagen: "./imagenes/Vinos/MaipoCa.png",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 12
    },
    {
        id: "Maipo Merlot",
        titulo: "Maipo Merlot",
        imagen: "./Imagenes/Vinos/MaipoMe.jpg",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 12
    },
    {
        id: "Cabernet Reservado",
        titulo: "Cabernet Reservado",
        imagen: "./imagenes/Vinos/ReservadoCa.jpg",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 15
    },
    // Ron
    {
        id: "Estelar",
        titulo: "Estelar",
        imagen: "./imagenes/Ron/Estelar.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 12
    },
    {
        id: "Abuelo",
        titulo: "Abuelo",
        imagen: "./imagenes/Ron/Abuelo.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 15
    },
    {
        id: "Ron Ronero",
        titulo: "Ron Ronero",
        imagen: "./imagenes/Ron/RonRonero.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 15
    },
    //Licor de Hiervas
    {
        id: "Jagermeister",
        titulo: "Jagermeister",
        imagen: "./imagenes/Licor de Hiervas/Jaggermeister.webp",
        categoria: {
            nombre: "Licor de hiervas",
            id: "licor-de-hiervas"
        },
        precio: 35
    },
    {
        id: "Green mate",
        titulo: "Green mate",
        imagen: "./imagenes/Licor de Hiervas/GreenMate.jpg",
        categoria: {
            nombre: "Licor de hiervas",
            id: "licor-de-hiervas"
        },
        precio: 15
    }
];

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoría');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito')
function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto =>{

        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div)

    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else{
            tituloPrincipal.innerText = "Todos los Productos"
            cargarProductos(productos);
        }
    })
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")

if(productosEnCarritoLS){
        productosEnCarrito = JSON.parse(productosEnCarritoLS)
        actualizarNumerito()
} else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}