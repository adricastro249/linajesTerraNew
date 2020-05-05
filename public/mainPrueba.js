function llenaProductDetails(cat, id) {

	console.log("esta entradno");
	showHide("productosDetalles")

	console.log(cat);

	var seccion = data222.productos.filter(general => general.categoria == cat)
	var seccOk = seccion[0].produc
	console.log(seccOk);

	var producto = seccOk.filter(prod => prod.id == id)
	console.log(producto);

	let imgPerfil = document.getElementById("imgPerfil")
	imgPerfil.setAttribute("src", producto[0].imgPerfil)

	let nombreProd = document.getElementById("nombreProducto")
	nombreProd.innerHTML = producto[0].nombre

	let descripcion = document.getElementById("desProd")
	descripcion.innerHTML = producto[0].descripcion

	let listaIngredi = document.getElementById("ingreProd");
	listaIngredi.innerHTML = ""
	producto[0].ingredientes.forEach(ingr => {
		let itemLi = document.createElement("LI")
		let txtItem = document.createTextNode(ingr)
		listaIngredi.appendChild(itemLi)
		itemLi.appendChild(txtItem);
	}) //Fin forEach ingredientes

	if (producto[0].versiones != null) {
		let listaVersion = document.getElementById("versionProd")
		listaVersion.innerHTML = ""
	
		let itemH = document.createElement("H3")
		let txtItemH = document.createTextNode("Versiones")
	
		let itemUl = document.createElement("UL")
		itemUl.classList.add("d-flex");
		itemUl.classList.add("justify-content-around")
	
		producto[0].versiones.forEach(vers => {
	
			let itemLi = document.createElement("LI")
			let txtItem = document.createTextNode(vers)
	
			listaVersion.appendChild(itemH);
			itemH.appendChild(txtItemH);
	
			listaVersion.appendChild(itemUl);
			itemUl.appendChild(itemLi);
			itemLi.appendChild(txtItem);
	
		})   //fin forEach versiones
 	}  //fin If versiones


	 let contenido = document.getElementById("contNetoProd")
	 contenido.innerHTML = ""
producto[0].contenidoNeto.forEach(cont => {
		 let itemC = document.createElement("LI")
		 let txtItemC = document.createTextNode(cont)
		 itemC.appendChild(txtItemC);
		 contenido.appendChild(itemC);
	 }) //fin forEach contenido Neto
}
