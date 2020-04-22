// MOSTRAR Y OCULTAR SECCIONES

var home = document.getElementById("home")
var about = document.getElementById("about")
var productosGrl = document.getElementById("productosGeneral")
var productosDetalles = document.getElementById("productosDetalles")
var galeriaA = document.getElementById("galeria")
var contacto = document.getElementById("contacto")


function showHide(section){
 
    home.style.display = "none"
    about.style.display = "none"
    productosGrl.style.display = "none"
    productosDetalles.style.display = "none"
    galeriaA.style.display = "none"
    contacto.style.display = "none"

    var muestra = section
    document.getElementById(muestra).style.display = "block";
 
}


/* SUB MENU */

$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {



    
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});

/* LLENA CATEGORIAS DEL NAVBAR */
function llenaCat(params, id) {

    var categoria = document.getElementById(id);
    params.forEach(elemt => {
        nameCateg = Object.keys(params)
        node0 = document.createElement("LI");
        node1 = document.createElement("A");
        node1.classList.add("dropdown-item")
        node1.setAttribute("id", elemt.id)
        node1.setAttribute("onclick", `llenaProductDetails(` + id + `,` + elemt.id + `)`)
        var tituloCateg = document.createTextNode(elemt.nombre)
        node0.appendChild(node1)
        node1.appendChild(tituloCateg)
        categoria.appendChild(node0);
    })
    
}

llenaCat(faciales, "faciales");
llenaCat(corporales, "corporales");
llenaCat(capilares, "capilares");
llenaCat(aromaterapia, "aromaterapia");


/* =============== HOME ===============  */

/* TARJETAS INDEX */
var nodeTjtIndex = document.getElementById("seccProductos");

var tarjetas = data222.productos


tarjetas.forEach(tarj =>{

    let nodeT = document.createElement("DIV");
    nodeT.classList.add("col-md-3");
    nodeT.classList.add("margin-bottom");
    nodeT.classList.add("animated");
    nodeT.classList.add("fadeInUp");

let nodeT0 = document.createElement("DIV");
nodeT0.classList.add("card");
nodeT0.classList.add("fhHeader-bg-Card");

let nodeT1 = document.createElement("DIV");
nodeT1.classList.add("div-img")
nodeT1.classList.add("hidden")

let nodeT2 = document.createElement("DIV");
nodeT2.classList.add("card-body")

let nodeT3 = document.createElement("H3");
nodeT3.classList.add("tituloCard")
nodeT3.classList.add("card-title")
nodeT3a = document.createTextNode(tarj.titulo)

let nodeT4 = document.createElement("IMG");
nodeT4.classList.add("img")
nodeT4.setAttribute("src", tarj.imgProductos)
nodeT4.setAttribute("alt", "fotoIcono")


let nodeT5 = document.createElement("DIV");
nodeT5.classList.add("overlay")
nodeT5.classList.add("mb-5")

let nodeT6 = document.createElement("DIV");
nodeT6.classList.add("text")

let nodeT7 = document.createElement("P");
nodeT7.classList.add("card-text")
nodeT7.classList.add("mt-2")
nodeT7a = document.createTextNode(tarj.resumen)

let nodeT8 = document.createElement("A");
nodeT8.classList.add("btn")
nodeT8.classList.add("btn-primary")
nodeT8.classList.add("btn-card")
nodeT8a = document.createTextNode("Más")


nodeTjtIndex.appendChild(nodeT);
nodeT.appendChild(nodeT0);
nodeT0.appendChild(nodeT1);
nodeT1.appendChild(nodeT2);
nodeT2.appendChild(nodeT3);
nodeT3.appendChild(nodeT3a);
nodeT2.appendChild(nodeT4);
nodeT2.appendChild(nodeT5);
nodeT2.appendChild(nodeT6);
nodeT6.appendChild(nodeT7);
nodeT7.appendChild(nodeT7a);
nodeT6.appendChild(nodeT8);
nodeT8.appendChild(nodeT8a);

})



/* =============== LLENA SECCION DE LISTA PRODUCTOS ===============  */

function listaProductos(array) {
    var nodeProduc = document.getElementById("cuadroProductos");
  
  array.forEach(prod => {

        let nodeP = document.createElement("DIV");
        nodeP.classList.add("col-md-4");
        nodeP.classList.add("text-center");
        nodeP.classList.add("animate-box");

        let nodeP1 = document.createElement("A");
        nodeP1.classList.add("work");
        nodeP1.setAttribute("onclick", `llenaProductDetails(` + prod.categoria + `,` + prod.id + `)`)
    

        let nodeP2 = document.createElement("DIV");
        nodeP2.classList.add("work-grid");
        nodeP2.style.backgroundImage = "url(' " + prod.imgPerfil + " ' )"

        let nodeP3 = document.createElement("DIV");
        nodeP3.classList.add("inner");

        let nodeP4 = document.createElement("DIV");
        nodeP4.classList.add("desc");
        nodeP4.classList.add("titProd");

        let nodeP5 = document.createElement("H3");
        nodeP5 = document.createTextNode(prod.nombre)


        nodeProduc.appendChild(nodeP);
        nodeP.appendChild(nodeP1)
        nodeP1.appendChild(nodeP2)
        nodeP2.appendChild(nodeP3)
        nodeP3.appendChild(nodeP4)
        nodeP4.appendChild(nodeP5)

    }); //Cierra el forEach la lista de productos
} //Cierra funcion listaProductos
listaProductos(data[0].productos); //mostrar todos los productos al iniciar la página

/* =============== FILTRO PRODUCTOS =============== */
var productos = data[0].productos

/* HACER QUE ME DETECTE LOS CAMBIOS EN LOS FILTROS */
document.getElementById('productosGeneral').addEventListener('change', function () {

    let aux = [];

    /* FILTRA LOS ELEMENTOS SELECCIONADOS */
    var checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value)

    productos.forEach(element => {

        console.log(element.categoria);

        if (checkeds.includes(element.categoria)) {
      
            aux.push(element);
        }
        console.log(aux);
        /*    if (checkeds.includes(element.categoria[0].value)) {
               aux.push(element.id);
           } */
    });

    document.getElementById("cuadroProductos").innerHTML = "";
    listaProductos(aux)



}) //cierra el addEventListener de los checkbox


/* =============== LLENA PAGINA DE DETALLE DE PRODUCTOS =============== */

function llenaProductDetails(array, id) {
    console.log("funcion llenar detalles de prod");
    showHide("productosDetalles")

	let product = array.filter(prod => prod.id == id);

	let imgPerfil = document.getElementById("imgPerfil")
	imgPerfil.setAttribute("src", product[0].imgPerfil)
	let nombreProd = document.getElementById("nombreProducto")
	nombreProd.innerHTML = product[0].nombre;
	let detalles = document.getElementById("desProd")
	detalles.innerHTML = product[0].descripcion;

    let listaIngredi = document.getElementById("ingreProd");
    listaIngredi.innerHTML = ""
	product[0].ingredientes.forEach(ingr => {
		let item = document.createElement("LI")
		let txtItem = document.createTextNode(ingr)
		item.appendChild(txtItem);
		listaIngredi.appendChild(item)
	})

	if (product[0].versiones != null){
	let listaVersion = document.getElementById("versionProd")
    listaVersion.innerHTML = ""

	let itemH = document.createElement("H3")
		let txtItemH = document.createTextNode("Versiones")


		let itemUl = document.createElement("UL")
		itemUl.classList.add("d-flex");
		itemUl.classList.add("justify-content-around")

	product[0].versiones.forEach(vers => {

		let item = document.createElement("LI")
		let txtItem = document.createTextNode(vers)
		
		listaVersion.appendChild(itemH);
		itemH.appendChild(txtItemH);
		
		listaVersion.appendChild(itemUl);
		itemUl.appendChild(item);
		item.appendChild(txtItem);
		
	})
}

	let imgGrande = document.getElementById("imgGrande")
	imgGrande.setAttribute("src", product[0].imgGrande)


    let contenido = document.getElementById("contNetoProd")
contenido.innerHTML = ""
	product[0].contenidoNeto.forEach(cont => {
		let itemC = document.createElement("LI")
		let txtItemC = document.createTextNode(cont)
		itemC.appendChild(txtItemC);
		contenido.appendChild(itemC);
	})

	let imgVarias = document.getElementById("imgVarias")

	product[0].imgVarias.forEach(imgVar => {

		let item = document.createElement("DIV")
item.classList.add("col-6");

let itemP = document.createElement("P")
itemP.classList.add("animate-box");
itemP.classList.add("fadeInUp");
itemP.classList.add("animated-fast");

let itemI = document.createElement("IMG")
itemI.classList.add("img-responsiveA");
itemI.setAttribute("src", imgVar)
	


imgVarias.appendChild(item);
item.appendChild(itemP);
itemP.appendChild(itemI);


	})

}

/* =============== GALERIA =============== */


function galeria(array){
    var nodeGaleria = document.getElementById("imgGaleria");
    
    array.forEach(gal => {
        let nodeG = document.createElement("DIV");
nodeG.classList.add("col-sm-6");
        nodeG.classList.add("col-md-4"); 
        nodeG.classList.add("col-lg-4");
        nodeG.classList.add("col-xl-3");
        nodeG.classList.add("mb-4");

        let nodeA = document.createElement("A");
        nodeA.classList.add("item-wrap");
          nodeA.setAttribute("href",   gal.fotos  )


          let nodeI = document.createElement("IMG");
          nodeI.classList.add("img-fluid");
          nodeI.setAttribute("src",  gal.fotos  )



  nodeGaleria.appendChild(nodeG);
  nodeG.appendChild(nodeA);
  nodeA.appendChild(nodeI);


    }
    )}
galeria(data[1].imagenes); 

fotos = data[1].imagenes

document.getElementById('filtrosGaleria').addEventListener('change', function () {
    document.getElementById("imgGaleria").innerHTML = "";
    let aux = [];

    /* FILTRA LOS ELEMENTOS SELECCIONADOS */
    var checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value)

if (checkeds.includes("todas")){
    galeria(data[1].imagenes); 
}
else{
    fotos.forEach(element => {

        console.log(element.categoria);

        if (checkeds.includes(element.categoria)) {
      
            aux.push(element);
        }
        console.log(aux);
        /*    if (checkeds.includes(element.categoria[0].value)) {
               aux.push(element.id);
           } */
    });

  
    galeria(aux)
}


}) //cierra el addEventListener de los checkbox