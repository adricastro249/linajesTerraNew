var productos = data222.productos

productos.forEach(prod =>{

let detalle = prod.produc
detalle.filter(det =>{


let nombreProd = document.getElementById("nombreProducto")
nombreProd.innerHTML = det.nombre

let descripcion = document.getElementById("desProd")
descripcion.innerHTML =det.descripcion

let listaIngredi = document.getElementById("ingreProd");
listaIngredi.innerHTML = ""
det.ingredientes.forEach(ingr => {
	let itemLi = document.createElement("LI")
	let txtItem = document.createTextNode(ingr)
	itemLi.appendChild(txtItem);
	listaIngredi.appendChild(itemLi)

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



let imgPerfil = document.getElementById("img-carousel")
imgPerfil = document.createElement("IMG")
imgPerfil.setAttribute("src", det.imgPerfil)

det.imgVarias.forEach (imgCarousel =>{

		let nodeP = document.createElement("DIV");
		nodeP.classList.add("col-md-4");
		nodeP.classList.add("text-center");
		nodeP.classList.add("animate-box");

		imgPerfil.appendChild(nodeP);

	
})//Fin Array Carousel



var nodeS = document.getElementById("img-carousel");

/* <div class="carousel-item active">
<img src="/public/images/productos/natural.png" class=" d-block w-100" alt="...">
</div>
 */

det.imgVarias.forEach(slid => {

console.log(slid);

  let nodeS2 = document.createElement("DIV");
  nodeS2.classList.add("carousel-item");
  let nodeS3 = document.createElement("IMG");
  nodeS3.classList.add("d-block");
  nodeS3.classList.add("w-100");
  nodeS3.setAttribute("src", slid)


  nodeS.appendChild(nodeS2)
  nodeS2.appendChild(nodeS3);
  nodeS.appendChild(nodeS2);

}); //Cierra el forEach que arma el slider


/* ARMA LOS BOTONES DE DESPLAZAMIENTO DEL SLIDER */

/* nodeSP para abreviatura de nodeSliderPreview
nodeSN para abreviatura de nodeSliderNext
*/


/* nodeSP = document.createElement("A")
nodeSP.classList.add("prev");
nodeSP.onclick = function () {
  showSlides(slideIndex += -1);
}
nodeSP1 = document.createTextNode("<");
nodeSN = document.createElement("A")
nodeSN.classList.add("next");
nodeSN.onclick = function () {
  showSlides(slideIndex += +1);
}
nodeSN1 = document.createTextNode(">");

nodeSP.appendChild(nodeSP1)
nodeSN.appendChild(nodeSN1)
nodeS.appendChild(nodeSP)
nodeS.appendChild(nodeSN)
 */


/* DESPLAZAMIENTO SLIDER */
/* var slideIndex = 1;
showSlides(slideIndex); */

/*     function currentSlide(n) {
	  showSlides(slideIndex = n);
	} */
/* 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
	slideIndex = 1
  }
  if (n < 1) {
	slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
} */


}) //Fin filter detalle
}) //fin forEach productos