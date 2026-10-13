/* =====================================================
   T.M.R MAKEUP
   Catálogo extraído del PDF "catalogo trendy.pdf"

   IMPORTANTE:
   - Los precios corresponden al catálogo y deben verificarse
     antes de publicarlos como precios actuales.
   - null significa que el catálogo no mostró claramente ese dato.
   - Las categorías fueron organizadas para la tienda según el
     tipo de producto; no son categorías escritas necesariamente
     en cada página del catálogo.
   - Se agregaron fotos originales del ZIP de WhatsApp. Las fotos que no se pudieron
     relacionar con seguridad con una referencia del catálogo están disponibles
     como foto-### y quedan pendientes de identificación. image4.png es el logo.
===================================================== */

const productos = [
  { id: 1, pagina: 2, nombre: "Brillo de los Recuerdos", referencia: "DY2099", precio: 5000, categoria: "Labios", imagen: null },
  { id: 2, pagina: 3, nombre: "Polvos Banana Boom", referencia: "PBB1462", precio: 6000, categoria: "Rostro", imagen: "images/PBB1462.jpeg" },
  { id: 3, pagina: 4, nombre: "Sombra Sunset", referencia: "SST1879", precio: 12000, categoria: "Ojos", imagen: null },
  { id: 4, pagina: 5, nombre: "Toalla Mágica Desmaquillante", referencia: "MF14", precio: 4000, categoria: "Desmaquillantes", imagen: null },
  { id: 5, pagina: 6, nombre: "Toallas Desmaquillantes Pool Party", referencia: "TDP1940", precio: 15000, categoria: "Desmaquillantes", imagen: null },
  { id: 6, pagina: 7, nombre: "Serum Crecimiento de Pestañas Trendy 4,5 g", referencia: null, precio: 15000, categoria: "Ojos", imagen: null },
  { id: 7, pagina: 8, nombre: "Sombra Cookies 1", referencia: "SCT1327", precio: 20000, categoria: "Ojos", imagen: null },
  { id: 8, pagina: 9, nombre: "Lápiz de Ojos Trendy", referencia: "EY15", precio: 5000, categoria: "Ojos", color: "Negro", imagen: null },
  { id: 9, pagina: 10, nombre: "Iluminador Wonderland Glow", referencia: "WGT1652", precio: 10000, categoria: "Rostro", imagen: "images/WGT1652.jpeg" },
  { id: 10, pagina: 11, nombre: "Desmaquillante Bifásico Bob Esponja", referencia: "DBB2485", precio: 25000, categoria: "Desmaquillantes", imagen: null },
  { id: 11, pagina: 12, nombre: "Kit X3 Gloss Mood Pills", referencia: "BMP1920", precio: 15000, categoria: "Labios", imagen: "images/BMP1920.jpeg" },
  { id: 12, pagina: 13, nombre: "Brillo Furia", referencia: "DYT2571", precio: 15000, categoria: "Labios", imagen: "images/DYT2571.jpeg" },
  { id: 13, pagina: 14, nombre: "Brillo Cotton Candy", referencia: "CC11", precio: 15000, categoria: "Labios", color: "STN-CC11", imagen: null },
  { id: 14, pagina: 15, nombre: "Kit Labios Stitch", referencia: "DY2080", precio: 15000, categoria: "Labios", imagen: "images/DY2080.jpeg" },
  { id: 15, pagina: 16, nombre: "Lip Balm Glitter Ham", referencia: "DYT2683", precio: 15000, categoria: "Labios", color: "Tono 01", imagen: null },
  { id: 16, pagina: 17, nombre: "Shampoo Brochas Trendy 120 ml", referencia: null, precio: 10000, categoria: "Brochas", imagen: null },
  { id: 17, pagina: 18, nombre: "Labial Doble Vaquero Toy Story", referencia: "DYT2648", precio: 15000, categoria: "Labios", imagen: "images/DYT2648.jpeg" },
  { id: 18, pagina: 19, nombre: "Kit Corporal Polly Pocket Aguamarina", referencia: "MT2398", precio: 20000, categoria: "Cuidado corporal", imagen: null },
  { id: 19, pagina: 20, nombre: "Kit Corporal Polly Pocket Rosado", referencia: "MT2396", precio: 20000, categoria: "Cuidado corporal", imagen: null },
  { id: 20, pagina: 21, nombre: "Kit Corporal Polly Pocket Morado", referencia: "MT2397", precio: 20000, categoria: "Cuidado corporal", imagen: null },
  { id: 21, pagina: 22, nombre: "Crema de Manos Rose", referencia: "CHR1925", precio: 5000, categoria: "Cuidado corporal", imagen: null },
  { id: 22, pagina: 23, nombre: "Brocha Individual Doble Angular y Gota", referencia: "P108", precio: 15000, categoria: "Brochas", imagen: null },
  { id: 23, pagina: 24, nombre: "Crema Mantequilla Rosas", referencia: "CMW2400", precio: 12000, categoria: "Cuidado corporal", imagen: null },
  { id: 24, pagina: 25, nombre: "Fijador Cosmic Night", referencia: "CNO9", precio: 25000, categoria: "Rostro", imagen: null },
  { id: 25, pagina: 26, nombre: "Kit Gloss + Mascarilla Labios Barbie Malibu", referencia: "MT2393", precio: 10000, categoria: "Labios", imagen: "images/MT2393.jpeg" },
  { id: 26, pagina: 27, nombre: "Fijador Toy Story", referencia: "DYT2551", precio: 25000, categoria: "Rostro", imagen: "images/DYT2551.jpeg" },
  { id: 27, pagina: 28, nombre: "Rubor en Crema Lotso", referencia: "DYT2656", precio: 15000, categoria: "Rostro", imagen: "images/DYT2656.jpeg" },
  { id: 28, pagina: 29, nombre: "Brillo Holográfico Stitch", referencia: "DY2075", precio: 8000, categoria: "Labios", color: "DY2075", imagen: null },
  { id: 29, pagina: 30, nombre: "Brillo Cherry Color", referencia: "BCC1366", precio: 5000, categoria: "Labios", color: "STN-BCC1366", imagen: null },
  { id: 30, pagina: 31, nombre: "Exfoliante Corporal Stitch", referencia: "DY2073", precio: 12000, categoria: "Cuidado corporal", imagen: null },
  { id: 31, pagina: 32, nombre: "Primer Rosas Trendy Grande", referencia: "PM04", precio: 8000, categoria: "Rostro", imagen: "images/image5.jpg" },
  { id: 32, pagina: 33, nombre: "Primer Pop", referencia: "PPT2174", precio: 8000, categoria: "Rostro", imagen: "images/image3.jpg" },
  { id: 33, pagina: 34, nombre: "Sombra Bear", referencia: "SBT1841", precio: 6000, categoria: "Ojos", imagen: null },
  { id: 34, pagina: 35, nombre: "Pestañina Fortalecedora Fresh Trendy", referencia: "FE5", precio: 6000, categoria: "Ojos", imagen: null },
  { id: 35, pagina: 36, nombre: "Fijador Retro Face", referencia: "FRT1755", precio: 8000, categoria: "Rostro", imagen: "images/image2.jpg" },
  { id: 36, pagina: 37, nombre: "Malteada Bronceadora Body Shine Toy Story", referencia: "DYT2675", precio: 10000, categoria: "Rostro", color: "Tono 01", imagen: null },
  { id: 37, pagina: 38, nombre: "Grip Primer Buzz Pequeño", referencia: "DYT2547", precio: 12000, categoria: "Rostro", imagen: null },
  { id: 38, pagina: 39, nombre: "Grip Primer Buzz Grande", referencia: "DYT2546", precio: 15000, categoria: "Rostro", imagen: null },
  { id: 39, pagina: 40, nombre: "Polvo de Hadas Trendy 15 g", referencia: "PH03", precio: 6000, categoria: "Rostro", imagen: "images/PH03.jpeg" },
  { id: 40, pagina: 41, nombre: "Kit Moños Barbie Dreams", referencia: "MTT2515", precio: 4000, categoria: "Accesorios", imagen: "images/MTT2515.jpeg" },
  { id: 41, pagina: 42, nombre: "Kit Accesorios Pelo Lotso", referencia: "DYT2513", precio: 8000, categoria: "Accesorios", imagen: null },
  { id: 42, pagina: 43, nombre: "Cartuchera Metálica Toy Story", referencia: "DYT2517", precio: 10000, categoria: "Accesorios", imagen: null },
  { id: 43, pagina: 44, nombre: "Kit Labios Love Travel", referencia: "KLT2088", precio: 4000, categoria: "Labios", imagen: "images/image1.jpg" },
  { id: 44, pagina: 45, nombre: "Hairclips Mini X8", referencia: "HCM2330", precio: 3000, categoria: "Accesorios", imagen: null },
  { id: 45, pagina: 46, nombre: "Rubor Dúo Barbie Core", referencia: "MTT2220", precio: 6000, categoria: "Rostro", imagen: null },
  { id: 46, pagina: 47, nombre: "Gloss Barbie Vaquera", referencia: "MT2382", precio: 4000, categoria: "Labios", imagen: null },
  { id: 47, pagina: 48, nombre: "Tinta Rubor Barbie Malibu", referencia: "MT2260", precio: 5000, categoria: "Rostro", soloWeb: true, imagen: null },
  { id: 48, pagina: 48, nombre: "Rubor en Barra Barbie Vaquera", referencia: "MT2381", precio: 5000, categoria: "Rostro", soloWeb: true, imagen: null },
  { id: 49, pagina: 49, nombre: "Kit Lip Balm X3 Polly Pocket", referencia: "MT2403", precio: 5000, categoria: "Labios", imagen: "images/MT2403.jpeg" },
  { id: 50, pagina: 50, nombre: "Mascarilla de Labios Barbie Core", referencia: "MTT2415", precio: 5000, categoria: "Labios", imagen: null },
  { id: 51, pagina: 51, nombre: "Kit de Labios Frutti Gloss", referencia: "KFL2243", precio: 4000, categoria: "Labios", imagen: "images/KFL2243.jpeg" },
  { id: 52, pagina: 52, nombre: "Rubor en Barra Mila", referencia: "R1598", precio: 4000, categoria: "Rostro", imagen: null },
  { id: 53, pagina: 53, nombre: "Tinta de Labios Princesas Bella Trendy", referencia: "DY2214", precio: 15000, categoria: "Labios", imagen: "images/DY2214.jpeg" },
  { id: 54, pagina: 54, nombre: "Rubor Iluminador Princesas Trendy", referencia: "DY2209", precio: 15000, categoria: "Rostro", imagen: null },
  { id: 55, pagina: 55, nombre: "Kit Labios en Barra Princesas Trendy", referencia: "DY2215", precio: 25000, categoria: "Labios", imagen: null },
  { id: 56, pagina: 56, nombre: "Brillo Gloss Ariel Trendy", referencia: "DY2206", precio: 15000, categoria: "Labios", colores: ["Caramelo", "Rojizo"], imagen: null },
  { id: 57, pagina: 57, nombre: "Brocha Individual Productos en Crema Trendy", referencia: "P217", precio: 10000, categoria: "Brochas", imagen: null },
  { id: 58, pagina: 58, nombre: "Pestañina Barbie Vaquera Trendy", referencia: "MT2379", precio: 15000, categoria: "Ojos", imagen: null },
  { id: 59, pagina: 59, nombre: "Monedero Inspirado en Lotso Trendy", referencia: "DYT2512", precio: 25000, categoria: "Accesorios", imagen: null },
  { id: 60, pagina: 60, nombre: "Kit Básico Lila", referencia: "KBL2274", precio: 10000, categoria: "Brochas", imagen: null },
  { id: 61, pagina: 61, nombre: "Tote Bag Aliens Inspirado en Toy Story", referencia: "DYT2514", precio: 15000, categoria: "Accesorios", imagen: null },
  { id: 62, pagina: 62, nombre: "Brillo Retro Kisses Trendy", referencia: null, precio: 5000, categoria: "Labios", estadoCatalogo: "ACOTADO", imagen: null }
];


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

const productGrid = document.getElementById("product-grid");

function mostrarProductos() {
    if (!productGrid) return;

    productGrid.innerHTML = productos.map(producto => {

        const imagenHTML = producto.imagen
            ? `<img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">`
            : `<div class="product-image-placeholder">
                   <span>Foto próximamente</span>
               </div>`;

        const coloresHTML = producto.colores
            ? `<p class="product-reference">Colores: ${producto.colores.join(", ")}</p>`
            : producto.color
                ? `<p class="product-reference">Color: ${producto.color}</p>`
                : "";

        const referenciaHTML = producto.referencia
            ? `<p class="product-reference">Ref. ${producto.referencia}</p>`
            : "";

        const etiquetasHTML = `
            ${producto.soloWeb ? `<span class="product-status">Solo web</span>` : ""}
            ${producto.estadoCatalogo ? `<span class="product-status">${producto.estadoCatalogo}</span>` : ""}
        `;

        return `
            <article class="product-card">

                <div class="product-image">
                    ${imagenHTML}
                </div>

                <div class="product-info">

                    <p class="product-category">
                        ${producto.categoria}
                    </p>

                    <h3>
                        ${producto.nombre}
                    </h3>

                    ${referenciaHTML}
                    ${coloresHTML}
                    ${etiquetasHTML}

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

            </article>
        `;

    }).join("");
}


/* =====================================================
   CARRITO — PRIMERA VERSIÓN
===================================================== */

let carrito = [];

function actualizarContadorCarrito() {
    const cartCount = document.querySelector(".cart-count");
    if (cartCount) {
        cartCount.textContent = carrito.length;
    }
}

function agregarAlCarrito(id) {

    const producto = productos.find(
        producto => producto.id === id
    );

    if (!producto) return;

    carrito.push(producto);

    actualizarContadorCarrito();

    alert(
        `${producto.nombre} fue añadido al carrito.`
    );
}


document.addEventListener("click", event => {

    const boton = event.target.closest(".add-cart");

    if (!boton) return;

    agregarAlCarrito(
        Number(boton.dataset.id)
    );

});


/* =====================================================
   INICIALIZAR
===================================================== */

mostrarProductos();
actualizarContadorCarrito();
