
  AOS.init();




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




productosNav= data222.productos;

var nodeProductos = document.getElementById("productosNavBar");

productosNav.forEach(prodNav => {

let nodeP = document.createElement("LI");
nodeP.classList.add("dropdown-submenu");

nodeP1 = document.createElement("A");
nodeP1.classList.add("dropdown-item");
nodeP1.classList.add("dropdown-toggle");
nodeP1a= document.createTextNode(prodNav.nombreSecc)

nodeP2 = document.createElement("UL");
nodeP2.classList.add("dropdown-menu");

prodNav.produc.forEach(det =>{

nodeD1 = document.createElement("LI");
nodeD2 = document.createElement("A");
nodeD2.classList.add("dropdown-item");
nodeD2.setAttribute("id", det.id);

nodeD2a= document.createTextNode(det.nombre)

nodeP2.appendChild(nodeD1)
nodeD1.appendChild(nodeD2)
nodeD2.appendChild(nodeD2a)
})

nodeProductos.appendChild(nodeP)
nodeP.appendChild(nodeP1)
nodeP1.appendChild(nodeP1a)
nodeP.appendChild(nodeP2)

});


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



function llenaProductDetails(array, id) {
    console.log("funcion llenar detalles de prod");
    showHide("productosDetalles")

	let product = array.filter(prod => prod.id );

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