// PRODUCTOS
const productos = [
    // Wisky
    {
        id: "Jonnie Rojo 750ml",
        titulo: "Jonnie Rojo 750ml",
        imagen: "./Imagenes/Wisky/Jonnie01.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 26.50
    },
    {
        id: "Jhon Morris Negro 1L",
        titulo: "Jhon Morris Negro 1L",
        imagen: "./Imagenes/Wisky/JM1L.png",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 19
    },
    {
        id: "Jhon Morris Negro 750 ml",
        titulo: "Jhon Morris Negro 750 ml",
        imagen: "./Imagenes/Wisky/JM1L.png",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 16
    },
    {
        id: "Something Special 750ml",
        titulo: "Something Special 750ml",
        imagen: "./imagenes/Wisky/Something.png",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 24
    },
    {
        id: "Ballantines 700ml",
        titulo: "Ballantines 700ml",
        imagen: "./imagenes/Wisky/Ballantines.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 22
    },
    {
        id: "Old Times Negro 750ml",
        titulo: "Old Times Negro 750ml",
        imagen: "./imagenes/Wisky/OTN.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 16.50
    },
    {
        id: "Black Owl 750ml",
        titulo: "Black Owl 750ml",
        imagen: "./imagenes/Wisky/BlackOwl.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
       precio: 16
    },
    {
        id: "Black Castel de Rojo 750ml ",
        titulo: "Black Castel de Rojo 750ml ",
        imagen: "./imagenes/Wisky/BCDC.jpg",
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
    {
        id: "BELLOWS 750M",
        titulo: "BELLOWS 750M",
        imagen: "./Imagenes/Wisky/Whisky-Bellows-750-ml.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 25
    },
    {
        id: "BLACK AND WHITE 750ML",
        titulo: "BLACK AND WHITE 750ML",
        imagen: "",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 24
    },
    {
        id: "CUNINGHAM 375ML",
        titulo: "CUNINGHAM 375ML",
        imagen: "./Imagenes/Wisky/wisky-cuningham-750ml.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 7
    },
    {
        id: "BLACK CASTLE NEGRO 750ML",
        titulo: "BLACK CASTLE NEGRO 750ML",
        imagen: "",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 15.50
    },
    {
        id: "BLACK KING 750ML",
        titulo: "BLACK KING 750ML",
        imagen: "",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 11
    },
    {
        id: "BLACK OWL FIRE 750ML",
        titulo: "BLACK OWL FIRE 750ML",
        imagen: "",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 17.50
    },
    {
        id: "BLACK WILLIAMS 750ML",
        titulo: "BLACK WILLIAMS 750ML",
        imagen: "",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 15.50
    },
    {
        id: "BUCHANAS 1LT",
        titulo: "BUCHANAS 1LT",
        imagen: "",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 90
    },
    {
        id: "BUCHANANS 750ML",
        titulo: "BUCHANANS 750ML",
        imagen: "./Imagenes/Wisky/buchanas-750ml.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 72
    },
    {
        id: "CAMINERA VAT 69L",
        titulo: "CAMINERA VAT 69",
        imagen: "./Imagenes/Wisky/vat-69-180ml.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 5
    },
    {
        id: "CHIVAS REGAL 12 AÑOS 750ML",
        titulo: "CHIVAS REGAL 12 AÑOS 750ML",
        imagen: "./Imagenes/Wisky/chivas-12-anos-750-ml.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 58
    },
    {
        id: "CUNINGHAM 750ML",
        titulo: "CUNINGHAM 750ML",
        imagen: "./Imagenes/Wisky/wisky-cuningham-750ml.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 13
    },
    {
        id: "GRAND OLD PARR 750ML",
        titulo: "GRAND OLD PARR 750ML",
        imagen: "./Imagenes/Wisky/Whisky-Blended-Grand-Old-Parr-12-anos-Garrafa-750ml.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 61
    },
    {
        id: "GRANTS 750ML",
        titulo: "GRANTS 750ML",
        imagen: "",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 21
    },
    {
        id: "JHON MORRIS ROJO 1LT",
        titulo: "JHON MORRIS ROJO 1LT",
        imagen: "./Imagenes/Wisky/Jhon-Morris-1lt.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 18
    },
    {
        id: "JHON MORRIS ROJO 750ML",
        titulo: "JHON MORRIS ROJO 750ML",
        imagen: "./Imagenes/Wisky/Jhon-Morris-750ml.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 15
    },
    {
        id: "JHONNY NEGRO 750ML",
        titulo: "JHONNY NEGRO 750ML",
        imagen: "./Imagenes/Wisky/Jhonny-negro-750-ml.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 72
    },
    {
        id: "OLD TIMES NEGRO 375M",
        titulo: "OLD TIMES NEGRO 375M",
        imagen: "./Imagenes/Wisky/old-times-negro-375ml.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 9
    },
    {
        id: "OLD TIMES ROJO 375ML",
        titulo: "OLD TIMES ROJO 375ML",
        imagen: "",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 8.50
    },
    {
        id: "SPECIAL QUEEN 750ML",
        titulo: "SPECIAL QUEEN 750ML",
        imagen: "./Imagenes/Wisky/special-queen-750ml.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 8.50
    },
    {
        id: "VAT 69 750MLL",
        titulo: "VAT 69 750ML",
        imagen: "./Imagenes/Wisky/vat69-750ml.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 17.50
    },
    {
        id: "JACK DANIELS 750ML",
        titulo: "JACK DANIELS 750ML",
        imagen: "./Imagenes/Wisky/jack-daniels-750ml.webp",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 75
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
const numerito = document.querySelector('#numerito');


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