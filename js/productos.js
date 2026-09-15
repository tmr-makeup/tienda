/* =====================================================
   T.M.R MAKEUP
   Catálogo de productos
===================================================== */


/*
    Por ahora utilizamos 5 productos de prueba.

    Cuando tengamos los nombres, precios, referencias,
    colores y tallas reales, solamente tendremos que
    modificar estos datos.

    Más adelante estos productos podrán venir de
    Supabase en lugar de estar escritos aquí.
*/


const productos = [

    {
        id: 1,
        nombre: "Producto 1",
        categoria: "Maquillaje",
        precio: 25000,
        imagen: "images/image1.jpg"
    },

    {
        id: 2,
        nombre: "Producto 2",
        categoria: "Maquillaje",
        precio: 35000,
        imagen: "images/image2.jpg"
    },

    {
        id: 3,
        nombre: "Producto 3",
        categoria: "Accesorios",
        precio: 18000,
        imagen: "images/image3.jpg"
    },

    {
        id: 4,
        nombre: "Producto 4",
        categoria: "Accesorios",
        precio: 22000,
        imagen: "images/image4.png"
    },

    {
        id: 5,
        nombre: "Producto 5",
        categoria: "Maquillaje",
        precio: 30000,
        imagen: "images/image5.jpg"
    }

];



/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */


const productGrid = document.getElementById("product-grid");


function mostrarProductos() {

    productGrid.innerHTML = "";


    productos.forEach(producto => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("product-card");


        tarjeta.innerHTML = `

            <div class="product-image">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <p class="product-category">
                    ${producto.categoria}
                </p>

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="product-description">
                    Producto T.M.R MAKEUP.
                </p>


                <div class="product-bottom">

                    <strong class="price">
                        $${producto.precio.toLocaleString("es-CO")}
                    </strong>


                    <button
                        class="add-cart"
                        data-id="${producto.id}"
                    >
                        Añadir
                    </button>

                </div>

            </div>

        `;


        productGrid.appendChild(tarjeta);

    });

}



/* =====================================================
   CARRITO - PRIMERA VERSIÓN
===================================================== */


let carrito = [];


function actualizarContadorCarrito() {

    const cartCount =
        document.querySelector(".cart-count");


    cartCount.textContent = carrito.length;

}


function agregarAlCarrito(id) {

    const producto =
        productos.find(producto => producto.id === id);


    if (!producto) {
        return;
    }


    carrito.push(producto);


    actualizarContadorCarrito();


    alert(
        `${producto.nombre} fue añadido al carrito.`
    );

}



/* =====================================================
   BOTONES "AÑADIR"
===================================================== */


document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains("add-cart")
        ) {

            const id =
                Number(event.target.dataset.id);


            agregarAlCarrito(id);

        }

    }
);



/* =====================================================
   INICIALIZAR TIENDA
===================================================== */


mostrarProductos();

actualizarContadorCarrito();
