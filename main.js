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
        imagen: "imagenes/Wisky/black-castel-negro.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 15.50
    },
    {
        id: "BLACK KING 750ML",
        titulo: "BLACK KING 750ML",
        imagen: "imagenes/Wisky/black-king-750ml.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 11
    },
    {
        id: "BLACK OWL FIRE 750ML",
        titulo: "BLACK OWL FIRE 750ML",
        imagen: "imagenes/Wisky/black-owl-fire.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 17.50
    },
    {
        id: "BLACK WILLIAMS 750ML",
        titulo: "BLACK WILLIAMS 750ML",
        imagen: "imagenes/Wisky/black-williams.jpg",
        categoria: {
            nombre: "Wisky",
            id: "wisky"
        },
        precio: 15.50
    },
    {
        id: "BUCHANAS 1LT",
        titulo: "BUCHANAS 1LT",
        imagen: "Imagenes/Wisky/buchanas-1lt.jpg",
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
        imagen: "imagenes/Wisky/wisky-grants.jpg",
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
        imagen: "imagenes/Wisky/old-times-rojo-375ml.jpg",
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
        precio: 90
    },
    {
        id: "Norteño 375 ml",
        titulo: "Norteño 375 ml",
        imagen: "./imagenes/Aguardiente/Norteñomedia.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 4.50
    },
    {
        id: "GUARO DE MI PUEBLO  750ML",
        titulo: "GUARO DE MI PUEBLO  750ML",
        imagen: "./imagenes/Aguardiente/guaro-mi-pueblo-750ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 9
    },
    {
        id: "PAISA AZUL 750ML",
        titulo: "PAISA AZUL 750ML",
        imagen: "./imagenes/Aguardiente/Paisa-azul-750-ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 11
    },
    {
        id: "ANTIOQUEÑO 1LT",
        titulo: "ANTIOQUEÑO 1LT",
        imagen: "./imagenes/Aguardiente/Antioqueño-1L.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 25
    },
    {
        id: "ANTIOQUEÑO 375ML",
        titulo: "ANTIOQUEÑO 375ML",
        imagen: "./imagenes/Aguardiente/antioqueño-375-ml.webp",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 12
    },
    {
        id: "CAÑA MANABITA 375ML",
        titulo: "CAÑA MANABITA 375ML",
        imagen: "./imagenes/Aguardiente/caña-manabita-375-ml.webp",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 6
    },
    {
        id: "CAÑA MANABITA 750ML",
        titulo: "CAÑA MANABITA 750ML",
        imagen: "./imagenes/Aguardiente/cana-manabita-750-ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 11.50
    },
    {
        id: "CRISTAL 375ML",
        titulo: "CRISTAL 375ML",
        imagen: "./Imagenes/Aguardiente/aguardiente-cristal-375.webp",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 5.50
    },
    {
        id: "CRISTAL 750 ML",
        titulo: "CRISTAL 750 ML",
        imagen: "./imagenes/Aguardiente/Aguardiente-cristal-750-ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 10.50
    },
    {
        id: "NECTAR AZUL 750ML",
        titulo: "NECTAR AZUL 750ML",
        imagen: "./imagenes/Aguardiente/aguardiente-nectar-azul-750-ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 18
    },
    {
        id: "ORIGEN ANIZADO 375ML",
        titulo: "ORIGEN ANIZADO 375ML",
        imagen: "./imagenes/Aguardiente/origen-750-ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 4.50
    },    {
        id: "ORIGEN ANIZADO 750ML",
        titulo: "ORIGEN ANIZADO 750ML",
        imagen: "./imagenes/Aguardiente/",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 7
    },    {
        id: "PAISA CEREZA 375ML",
        titulo: "PAISA CEREZA 375ML",
        imagen: "./imagenes/Aguardiente/paisa-cereza-375ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 18
    },
    {
        id: "PAISA CEREZA 750ML",
        titulo: "PAISA CEREZA 750ML",
        imagen: "./imagenes/Aguardiente/Paisa-Cereza-750ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 18
    },
    {
        id: "TROPICO 375ML",
        titulo: "TROPICO 375ML",
        imagen: "./imagenes/Aguardiente/tropico-375-ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 18
    },
    {
        id: "TROPICO 750ML",
        titulo: "TROPICO 750ML",
        imagen: "./imagenes/Aguardiente/tropico-750-ml.jpg",
        categoria: {
            nombre: "Aguardiente",
            id: "aguardiente"
        },
        precio: 18
    },

    //Vinos
    {
        id: "ALTA GAMA CABERNET 750ML",
        titulo: "ALTA GAMA CABERNET 750ML",
        imagen: "./imagenes/Vinos/alta-gama-vino.jpg",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 9
    },
    {
        id: "Maipo Cabernet",
        titulo: "Maipo Cabernet",
        imagen: "./imagenes/Vinos/MaipoCa.png",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 10
    },
    {
        id: "Maipo Merlot",
        titulo: "Maipo Merlot",
        imagen: "./Imagenes/Vinos/MaipoMe.jpg",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 10
    },
    {
        id: "CRUZARES 750ML",
        titulo: "CRUZARES 750ML",
        imagen: "./imagenes/Vinos/vino-cruzares.webp",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 9
    },
    {
        id: "ANTHONY FRESA 750ML",
        titulo: "ANTHONY FRESA 750ML",
        imagen: "./imagenes/Vinos/vino-anthony-fresa.jpg",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 9
    },
    {
        id: "BALDORE  DURAZNO",
        titulo: "BALDORE  DURAZNO",
        imagen: "Imagenes/Vinos/baldore-durazno.jpg",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 2.80
    },
    {
        id: "CASILLERO DEL DIABLO 750ML",
        titulo: "CASILLERO DEL DIABLO 750ML",
        imagen: "./imagenes/Vinos/casillero-del-diablo.webp",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 26
    },
    {
        id: "CLOSS DE PIRQUE CABERNET 1LT",
        titulo: "CLOSS DE PIRQUE CABERNET 1LT",
        imagen: "./imagenes/Vinos/closs-de-pirque-cabernet-1lt.webp",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 10
    },
    {
        id: "GATO NEGRO 750ML",
        titulo: "GATO NEGRO 750ML",
        imagen: "./imagenes/Vinos/gato-negro.jpg",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 15
    },
    {
        id: "MAIPO BLANCO 750ML",
        titulo: "MAIPO BLANCO 750ML",
        imagen: "./imagenes/Vinos/vina-maipo-sauvignonblanc.webp",
        categoria: {
            nombre: "Vinos",
            id: "vinos"
        },
        precio: 15
    },
    {
        id: "PLANICIE 750ML",
        titulo: "PLANICIE 750ML",
        imagen: "./imagenes/Vinos/vino-planicie.jpg",
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
        precio: 11
    },
    {
        id: "Abuelo",
        titulo: "Abuelo",
        imagen: "./imagenes/Ron/Abuelo.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 15.50
    },
    {
        id: "Ron Ronero 750ml",
        titulo: "Ron Ronero 750ml",
        imagen: "./imagenes/Ron/RonRonero.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 15
    },
    {
        id: "100 FUEGOS 375ML",
        titulo: "100 FUEGOS 375ML",
        imagen: "./Imagenes/Ron/100-fuegos-375ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 9
    },
    {
        id: "100 FUEGOS 750ML",
        titulo: "100 FUEGOS 750ML",
        imagen: "./imagenes/Ron/100-fuegos-750-ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 16
    },
    {
        id: "100 FUEGOS LATA 350ML",
        titulo: "100 FUEGOS LATA 350ML",
        imagen: "./Imagenes/Ron/100-fuegos-con-cola-lata.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 2.50
    },
    {
        id: "ABUELO 375ML",
        titulo: "ABUELO 375ML",
        imagen: "./imagenes/Ron/ron-abuelo-anejo-375ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 8
    },
    {
        id: "CASTILLO AÑEJO 375ML",
        titulo: "CASTILLO AÑEJO 375ML",
        imagen: "./Imagenes/Ron/castillo-añejo-375ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 7.50
    },
    {
        id: "CASTILLO AÑEJO 750ML",
        titulo: "CASTILLO AÑEJO 750ML",
        imagen: "./imagenes/Ron/Ron-castillo-anejo-750-ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 14
    },
    {
        id: "CORTEZ 750ML",
        titulo: "CORTEZ 750ML",
        imagen: "./imagenes/Ron/ron-cortez-750-ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 12
    },
    {
        id: "RON DEL RIO 750ML",
        titulo: "RON DEL RIO 750ML",
        imagen: "./Imagenes/Ron/ron-del-río-750-ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 9
    },
    {
        id: "DON CASTELO 1LT",
        titulo: "DON CASTELO 1LT",
        imagen: "./Imagenes/Ron/ron-castelo-1lt.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 9
    },
    {
        id: "ESTELAR ORO 375ML",
        titulo: "ESTELAR ORO 375ML",
        imagen: "./imagenes/Ron/estelar-375ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 5.50
    },
    {
        id: "GENIO TAPA NEGRA 750ML",
        titulo: "GENIO TAPA NEGRA 750ML",
        imagen: "./imagenes/Ron/genio-tapa-negra-750ml.png",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 8
    },
    {
        id: "GENIO TAPA ROJA 750ML",
        titulo: "GENIO TAPA ROJA 750ML",
        imagen: "./Imagenes/Ron/ron-genio-tapa-roja-750ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 5.50
    },
    {
        id: "PON PON 750ML",
        titulo: "PON PON 750ML",
        imagen: "./imagenes/Ron/ron-pon-pon-750ml.webp",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 6
    },
    {
        id: "SAN MIGUEL ORO 750ML",
        titulo: "SAN MIGUEL ORO 750ML",
        imagen: "./imagenes/Ron/ron-san-miguel-oro-750ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 13
    },
    {
        id: "VIEJO DE CALDAS 750ML",
        titulo: "VIEJO DE CALDAS 750ML",
        imagen: "./imagenes/Ron/ron-viejo-de-caldas-750ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 17
    },
    {
        id: "SAN MIGUEL SILVER PLATA 750ML",
        titulo: "SAN MIGUEL SILVER PLATA 750ML",
        imagen: "./imagenes/Ron/san-miguel-plata-750ml.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 13
    },
    {
        id: "BACARDI BLANCO 980ML",
        titulo: "BACARDI BLANCO 980ML",
        imagen: "./imagenes/Ron/ron-bacardi-750ml.webp",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 22
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
    },
    {
        id: "GREEN MATE 345ML",
        titulo: "GREEN MATE 345ML",
        imagen: "./Imagenes/Licor de Hiervas/green-mate-345ml.jpg",
        categoria: {
            nombre: "Licor de hiervas",
            id: "licor-de-hiervas"
        },
        precio: 7.50
    },
    //Tequila
    {
        id: "TEKILAZO 750ML",
        titulo: "TEKILAZO 750ML",
        imagen: "./imagenes/Tequila/",
        categoria: {
            nombre: "tequila",
            id: "tequila"
        },
        precio: 11
    },
    {
        id: "TEQUILA AZTECA BLANCO 750ML",
        titulo: "TEQUILA AZTECA BLANCO 750ML",
        imagen: "./imagenes/Tequila/Tequila-Azteca-Blanco.jpg",
        categoria: {
            nombre: "tequila",
            id: "tequila"
        },
        precio: 20
    },
    {
        id: "TEQUILA EL CHARRO 750ML",
        titulo: "TEQUILA EL CHARRO 750ML",
        imagen: "./imagenes/Tequila/tequila-charro.jpg",
        categoria: {
            nombre: "tequila",
            id: "tequila"
        },
        precio: 21
    },
    {
        id: "TEQUILA RANCHO PUEBLO VIEJO 750ML",
        titulo: "TEQUILA RANCHO PUEBLO VIEJO 750ML",
        imagen: "./imagenes/Tequila/rancho-pueblo-viejo.jpg",
        categoria: {
            nombre: "tequila",
            id: "tequila"
        },
        precio: 19
    },
    //Vodka
    {
        id: "BALDORE VODKA 750ML",
        titulo: "BALDORE VODKA 750ML",
        imagen: "./imagenes/Vodka/vodka-baldore.jpg",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 2.80
    },
    {
        id: "LIOVA 750ML",
        titulo: "LIOVA 750ML",
        imagen: "./imagenes/Vodka/vodka-liova.jpg",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 12
    },
    {
        id: "RUSSKAYA 750ML",
        titulo: "RUSSKAYA 750ML",
        imagen: "./imagenes/Vodka/russkaya-750ml.jpg",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 14
    },
    {
        id: "SIBERIAN 750ML",
        titulo: "SIBERIAN 750ML",
        imagen: "./imagenes/Vodka/siberian-premium.jpg",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 12
    },
    {
        id: "SKY 750ML",
        titulo: "SKY 750ML",
        imagen: "./imagenes/Vodka/skyy-750-ml.jpg",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 20
    },
    {
        id: "SMIRNOFF ROJA 750ML",
        titulo: "SMIRNOFF ROJA 750ML",
        imagen: "./imagenes/Vodka/smirnoff-750ml.webp",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 17
    },
    {
        id: "SWITCH",
        titulo: "SWITCH",
        imagen: "./imagenes/Vodka/vodka-switch.jpg",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 3.50
    },
    {
        id: "VODKA 40 750ML",
        titulo: "VODKA 40 750ML",
        imagen: "./imagenes/Vodka/vodk-40.jpg",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 6
    },
    {
        id: "VODKA ROMANOSKI",
        titulo: "VODKA ROMANOSKI",
        imagen: "./imagenes/Vodka/romanosky.jpg",
        categoria: {
            nombre: "vodka",
            id: "vodka"
        },
        precio: 12.50
    },

    //Zhumir

    {
        id: "ZHUMIR DURAZNO 375ML",
        titulo: "ZHUMIR DURAZNO 375ML",
        imagen: "./imagenes/Zhumir/zhumir-durazno-375ml.jpg",
        categoria: {
            nombre: "zhumir",
            id: "zhumir"
        },
        precio: 4.50
    },
    {
        id: "ZHUMIR DURAZNO 700ML",
        titulo: "HUMIR DURAZNO 700ML",
        imagen: "./imagenes/Zhumir/zhumir-durazno-700ml.jpg",
        categoria: {
            nombre: "zhumir",
            id: "zhumir"
        },
        precio: 7.50
    },
    {
        id: "ZHUMIR PLUG",
        titulo: "ZHUMIR PLUG",
        imagen: "./imagenes/Zhumir/zhumir-plug.jpg",
        categoria: {
            nombre: "zhumir",
            id: "zhumir"
        },
        precio: 7.50
    },
    {
        id: "ZHUMIR SANDIA PINK 750ML",
        titulo: "ZHUMIR SANDIA PINK 750ML",
        imagen: "./imagenes/Zhumir/zhumir-pink.jpg",
        categoria: {
            nombre: "zhumir",
            id: "zhumir"
        },
        precio: 11
    },
    {
        id: "RON ZHUMIR",
        titulo: "RON ZHUMIR",
        imagen: "./imagenes/Zhumir/Ron-Zhumir.jpg",
        categoria: {
            nombre: "zhumir",
            id: "zhumir"
        },
        precio: 14
    },
    {
        id: "ZHUMIR NARANJILLA 750",
        titulo: "ZHUMIR NARANJILLA 750",
        imagen: "./imagenes/Zhumir/zhumir-naranjilla.jpg",
        categoria: {
            nombre: "zhumir",
            id: "zhumir"
        },
        precio: 8
    },
    {
        id: "ZHUMIR NARANJILLA 375ML",
        titulo: "ZHUMIR NARANJILLA 375ML",
        imagen: "./imagenes/Zhumir/aguardiente-zhumir-naranjilla-350.webp",
        categoria: {
            nombre: "zhumir",
            id: "zhumir"
        },
        precio: 4.50
    },
    {
        id: "PIÑA COLADA ZHUMIR 750ML",
        titulo: "PIÑA COLADA ZHUMIR 750ML",
        imagen: "./imagenes/Zhumir/Zhumir-piña-colada.jpg",
        categoria: {
            nombre: "zhumir",
            id: "zhumir"
        },
        precio: 13.50
    },
    
    //Gin

    {
        id: "GIN BOND 750ML",
        titulo: "GIN BOND 750ML",
        imagen: "./imagenes/Gin/gin-bond.jpg",
        categoria: {
            nombre: "gin",
            id: "gin"
        },
        precio: 14
    },
    {
        id: "GIN UNDER LONDON DRY",
        titulo: "GIN UNDER LONDON DRY",
        imagen: "./imagenes/Gin/underdry.jpg",
        categoria: {
            nombre: "gin",
            id: "gin"
        },
        precio: 16.50
    },
    {
        id: "GIN W LONDON AZUL",
        titulo: "GIN W LONDON AZUL",
        imagen: "./imagenes/Gin/London-dry-gin-W.jpg",
        categoria: {
            nombre: "gin",
            id: "gin"
        },
        precio: 18
    },

    //Champagne

    {
        id: "GRAND DUVAL",
        titulo: "GRAND DUVAL",
        imagen: "./imagenes/Otros/grand-duval-750.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 8
    },
    {
        id: "GRAND VANDUSH",
        titulo: "GRAND VANDUSH",
        imagen: "./imagenes/Otros/Grand-vandush.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 8
    },
    //Cerveza

    {
        id: "CERVEZA CORONA 355CC",
        titulo: "CERVEZA CORONA 355CC",
        imagen: "./imagenes/Cerveza/cerveza-corona.webp",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 2.50
    },
    {
        id: "CERVEZA PILSENER LATOTA 473CC",
        titulo: "CERVEZA PILSENER LATOTA 473CC",
        imagen: "./imagenes/Cerveza/cerveza-pilsener-lata.webp",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 8
    },

    // Cigarrillos

    {
        id: "LARK 10U",
        titulo: "LARK 10U",
        imagen: "./imagenes/Cigarrillos/cigarrillos-lark.webp",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 3.70
    },
    {
        id: "LIDER 10U",
        titulo: "LIDER 10U",
        imagen: "./imagenes/Cigarrillos/cigarrillo-lider-10.webp",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 3.70
    },
    {
        id: "MALBORO BLANCO 10U",
        titulo: "MALBORO BLANCO 10U",
        imagen: "./imagenes/Cigarrillos/Marlboro-Blanco.webp",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 3.70
    },
    {
        id: "MALBORO BLANCO 10U",
        titulo: "MALBORO BLANCO 10U",
        imagen: "./imagenes/Cigarrillos/Marlboro-Blanco.webp",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 3.70
    },
    {
        id: "MALBORO ROJO 10U",
        titulo: "MALBORO ROJO 10U",
        imagen: "./imagenes/Cigarrillos/",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 3.70
    },
    {
        id: "MALBORO MENTOLADO 10U",
        titulo: "MALBORO METOLADO 10U",
        imagen: "./imagenes/Cigarrillos/malboro-mentolado.jpeg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 8
    },

    //Confitería

    {
        id: "HALLS BARRA SURTIDO",
        titulo: "HALLS BARRA SURTIDO",
        imagen: "./imagenes/Confitería/",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 0.80
    },
    {
        id: "PANCHITOS",
        titulo: "PANCHITOS",
        imagen: "./imagenes/Confitería/Panchitos.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 0.80
    },
    {
        id: "PAPAS SIN MARCA",
        titulo: "PPAPAS SIN MARCA",
        imagen: "./imagenes/Confitería/papitas-sin-marca.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1
    },
        {
        id: "TRIDENT X3 SURTIDO",
        titulo: "TRIDENT X3 SURTIDO",
        imagen: "./imagenes/Confitería/Trident-Menta-X3.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 0.40
    },
    {
        id: "TRIDENT X6 SURTIDO",
        titulo: "TRIDENT X6 SURTIDO",
        imagen: "./imagenes/Confitería/trident-x6.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 0.80
    },
    {
        id: "Condones",
        titulo: "Condones",
        imagen: "./imagenes/Confitería/condones.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1
    },
    {
        id: "AGUA SIN GAS LT",
        titulo: "AGUA SIN GAS LT",
        imagen: "./imagenes//",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 0.90
    },
    {
        id: "AGUA TONICA",
        titulo: "AGUA TONICA",
        imagen: "./imagenes/Otros/AGUA-TONICA-1.5.png",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 3
    },
    {
        id: "COCA COLA 1LT",
        titulo: "COCA COLA 1LT",
        imagen: "./imagenes/Otros/coca-cola-1lt.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1.70
    },
    {
        id: "COCA COLA 500ML",
        titulo: "COCA COLA 500ML",
        imagen: "./imagenes/Otros/coca-cola-500ml.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 0.90
    },
    {
        id: "FUZE TEA 1LT",
        titulo: "FUZE TEA 1LT",
        imagen: "./imagenes/Otros/fuze-tea-1L.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1.50
    },
    {
        id: "GUITIG 1.5LT",
        titulo: "GUITIG 1.5LT",
        imagen: "./imagenes/Otros/guitig-1.5Lt.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1.50
    },
    {
        id: "JUGO DEL VALLE 1,75LT",
        titulo: "JUGO DEL VALLE 1,75LT",
        imagen: "./imagenes/Otros/jugodel-valle.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1.50
    },
    {
        id: "SPRITE  1.35LT",
        titulo: "SPRITE  1.35LT",
        imagen: "./imagenes/Otros/Sprite.jpg",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1.50
    },
    {
        id: "V220",
        titulo: "V220",
        imagen: "./imagenes/Otros/v220.webp",
        categoria: {
            nombre: "otros",
            id: "otros"
        },
        precio: 1.50
    }

];

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoría');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');
const campoBusqueda = document.getElementById("searchInput");
const botonBusqueda = document.querySelector(".search-button");
const resultadosBusqueda = document.getElementById("results");


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
function buscar() {
    const consulta = campoBusqueda.value.toLowerCase();
    const minCaracteres = 3; // Cambiar el valor mínimo de caracteres a 3

    if (consulta.length >= minCaracteres) {
        const resultados = productos.filter(producto => {
            // Verifica si el título, el id o el id de la categoría incluyen la consulta
            const tituloIncluye = producto.titulo.toLowerCase().includes(consulta);
            const idIncluye = producto.id.toLowerCase().includes(consulta);
            const categoriaIdIncluye = producto.categoria.id.toLowerCase().includes(consulta);

            return tituloIncluye || idIncluye || categoriaIdIncluye;
        });
        mostrarResultados(resultados);
    } else {
        resultadosBusqueda.innerHTML = ""; // Borra los resultados si no se cumple el mínimo de caracteres
    }
}


// Agrega un evento de tecla presionada para buscar mientras se escribe
campoBusqueda.addEventListener("input", buscar);

// Función para mostrar los resultados de la búsqueda
function mostrarResultados(resultados) {
    resultadosBusqueda.innerHTML = "";

    if (resultados.length === 0) {
        resultadosBusqueda.innerHTML = "<p>No se encontraron productos.</p>";
    } else {
        resultados.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalle">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            `;

            resultadosBusqueda.append(div);
        });

        // Actualiza los botones de agregar
        actualizarBotonesAgregar();
    }
}

// Agrega un evento de clic al botón de búsqueda
botonBusqueda.addEventListener("click", buscar);

// Agrega un evento de tecla presionada para buscar mientras se escribe
campoBusqueda.addEventListener("input", buscar);