
	var nodeProduc = document.getElementById("img-carousel");

var pepito = data222.productos

pepito.forEach(prueba => {
var prueb2 = prueba.produc


prueb2.forEach(dos => {

	console.log(dos);
	


	let nodeImgProducto = document.createElement("DIV");
	nodeImgProducto.classList.add("carousel-item");
	nodeImgProducto.classList.add("active");

	let nodeImagenPrincipal = document.createElement("IMG");
	nodeImagenPrincipal.classList.add("d-block");
	nodeImagenPrincipal.classList.add("w-100");
	nodeImagenPrincipal.setAttribute("src", dos.imgPerfil);

	let nodeImgSec = document.createElement("DIV");
	nodeImgSec.classList.add("carousel-item");

	let nodeImagenCarr = document.createElement("IMG");
	nodeImagenCarr.classList.add("d-block");
	nodeImagenCarr.classList.add("w-100");
	nodeImagenCarr.setAttribute("src", dos.imgGrande);

	nodeProduc.appendChild(nodeImgProducto)
	nodeImgProducto.appendChild(nodeImagenPrincipal)
	nodeProduc.appendChild(nodeImgSec)
	nodeImgSec.appendChild(nodeImagenPrincipal)




})


	







})



