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


	let product = array.filter(prod => prod.id == id);
	console.log(product[0]);
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
	

console.log(imgVar);



imgVarias.appendChild(item);
item.appendChild(itemP);
itemP.appendChild(itemI);


	})

}


/* =============== GALERIA =============== */


function galeria(array){
    var nodeGaleria = document.getElementById("imgGaleria");
    
    array.forEach(gal => {

console.log("prueba");


        let nodeG = document.createElement("DIV");
        nodeG.classList.add("item");
        nodeG.classList.add("kits");
        nodeG.classList.add("col-sm-6");
        nodeG.classList.add("col-md-4");
        nodeG.classList.add("col-lg-4");
        nodeG.classList.add("col-xl-3");
        nodeG.classList.add("mb-4");

        let nodeA = document.createElement("A");
        nodeA.classList.add("item-wrap");
          nodeA.classList.add("fancybox");
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
console.log(fotos);

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