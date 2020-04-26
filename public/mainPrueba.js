var productos = data222.productos

productos.forEach(prod =>{

prod.produc.forEach(det =>{

//Imagen Perfil

/* let imgPerfil = document.getElementById("img-carousel")

let uno = document.getElementById("img-carousel-active")
uno.innerHTML = det.imgPerfil */

/* let imgDos = document.getElementById("img-carousel-varias")
imgDos = document.createElement("DIV")
imgDos.classList.add("carousel-item");

imgTres = document.createElement("IMG")
imgTres.classList.add("d-block");
imgTres.classList.add("w-100");
imgTres.setAttribute("src", det.imgVarias) */

/* imgPerfil.appendChild(uno)
imgPerfil.appendChild(imgDos)
imgDos.appendChild(imgTres)
 */


let nombreProd = document.getElementById("nombreProducto")
nombreProd.innerHTML = det.nombre

let descripcion = document.getElementById("desProd")
descripcion.innerHTML =det.descripcion

let listaIngredi = document.getElementById("ingreProd");
listaIngredi.innerHTML = ""
det.ingredientes.forEach(ingr => {
	let itemLi = document.createElement("LI")
	let txtItem = document.createTextNode(ingr)
	listaIngredi.appendChild(itemLi)
	itemLi.appendChild(txtItem);
}) //Fin forEach ingredientes

if (det.versiones != null) {
	let listaVersion = document.getElementById("versionProd")
	listaVersion.innerHTML = ""

	let itemH = document.createElement("H3")
	let txtItemH = document.createTextNode("Versiones")

	let itemUl = document.createElement("UL")
	itemUl.classList.add("d-flex");
	itemUl.classList.add("justify-content-around")

det.versiones.forEach(vers => {

		let itemLi = document.createElement("LI")
		let txtItem = document.createTextNode(vers)

		listaVersion.appendChild(itemH);
		itemH.appendChild(txtItemH);

		listaVersion.appendChild(itemUl);
		itemUl.appendChild(itemLi);
		itemLi.appendChild(txtItem);

	}) //fin forEach versiones
} //fin If versiones

let contenido = document.getElementById("contNetoProd")
contenido.innerHTML = ""
det.contenidoNeto.forEach(cont => {
	let itemC = document.createElement("LI")
	let txtItemC = document.createTextNode(cont)
	itemC.appendChild(txtItemC);
	contenido.appendChild(itemC);
})//fin forEach contenido Neto


}) //Fin filter detalle
}) //fin forEach productos