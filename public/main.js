  var firebaseConfig = {
      apiKey: "AIzaSyBI6tMFtyPfAyb1pgcdWIZKFa30SyCxaxw",
      authDomain: "linajesterraweb.firebaseapp.com",
      databaseURL: "https://linajesterraweb.firebaseio.com",
      projectId: "linajesterraweb",
      storageBucket: "linajesterraweb.appspot.com",
      messagingSenderId: "291695191486",
      appId: "1:291695191486:web:415c5195c0885ba0c605ef"
  };


  // MOSTRAR Y OCULTAR SECCIONES

  var home = document.getElementById("home")
  var about = document.getElementById("about")
  var productosGrl = document.getElementById("productosGeneral")
  var productosDetalles = document.getElementById("productosDetalles")
  var galeriaA = document.getElementById("galeria")
  var contacto = document.getElementById("contacto")

  function showHide(section) {

      $("#sFaci").prop('checked', false);
      $("#sCor").prop('checked', false);
      $("#sCapi").prop('checked', false);
      $("#sAro").prop('checked', false);

      home.style.display = "none"
      about.style.display = "none"
      productosGrl.style.display = "none"
      productosDetalles.style.display = "none"
      galeriaA.style.display = "none"




      contacto.style.display = "none"
      listaProductos(data222.productos);
      var muestra = section
      document.getElementById(muestra).style.display = "block";

  }
  $('.pictures').tjGallery({
      /*       selector: '.item',
            margin: 10 */
  });

  productosNav = data222.productos;
  var nodeProductos = document.getElementById("productosNavBar");

  productosNav.forEach(prodNav => {

      let nodeP = document.createElement("LI");
      nodeP.classList.add("dropdown-submenu");

      nodeP1 = document.createElement("A");
      nodeP1.classList.add("dropdown-item");
      nodeP1.classList.add("dropdown-toggle");
      nodeP1a = document.createTextNode(prodNav.nombreSecc)

      nodeP2 = document.createElement("UL");
      nodeP2.classList.add("dropdown-menu");
      nodeP2.classList.add("border-none");

      prodNav.produc.forEach(det => {

          nodeD1 = document.createElement("LI");
          nodeD2 = document.createElement("A");
          nodeD2.classList.add("dropdown-item");
          nodeD2.setAttribute("id", det.id);
          nodeD2.setAttribute("title", det.categoria);
          nodeD2.setAttribute("onclick", `llenaProductDetails("` + det.categoria + `",` + det.id + `)`)

          nodeD2a = document.createTextNode(det.nombre)

          nodeP2.appendChild(nodeD1)
          nodeD1.appendChild(nodeD2)
          nodeD2.appendChild(nodeD2a)
      })

      nodeProductos.appendChild(nodeP)
      nodeP.appendChild(nodeP1)
      nodeP1.appendChild(nodeP1a)
      nodeP.appendChild(nodeP2)

  });

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




  /* =============== HOME ===============  */

  /* TARJETAS INDEX */
  var nodeTjtIndex = document.getElementById("seccProductos");

  var tarjetas = data222.productos

  tarjetas.forEach(tarj => {

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
      nodeT8.setAttribute("title", tarj.categoria)
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

  var botonesTarjetas = document.getElementsByClassName("btn-card")


  for (let i = 0; i < botonesTarjetas.length; i++) {
      botonesTarjetas[i].addEventListener("click", function (e) {
          //Aquí la función que se ejecutará cuando se dispare el evento
          /*      console.log(e.target.title);  */ //En este caso alertaremos el texto del cliqueado

          $("#sFaci").prop('checked', false);
          $("#sCor").prop('checked', false);
          $("#sCapi").prop('checked', false);
          $("#sAro").prop('checked', false);
          showHide("productosGeneral")
          switch (e.target.title) {
              case "faciales":
                  document.getElementById("sFaci").click();
                  break;
              case "corporales":
                  document.getElementById("sCor").click();
                  break;
              case "capilares":
                  document.getElementById("sCapi").click();
                  break;
              case "aromaterapia":
                  document.getElementById("sAro").click();
                  break;
          }



      });
  }


  /* =============== LLENA SECCION DE LISTA PRODUCTOS ===============  */

  function listaProductos(array) {
      var nodeProduc = document.getElementById("cuadroProductos");
      nodeProduc.innerHTML = "";

      array.forEach(prod => {

          prod.produc.forEach(prod2 => {

              let nodeP = document.createElement("DIV");
              nodeP.classList.add("col-md-4");
              nodeP.classList.add("text-center");
              nodeP.classList.add("animate-box");

              let nodeP1 = document.createElement("A");
              nodeP1.classList.add("work");


              nodeP1.setAttribute("onclick", `llenaProductDetails("` + prod2.categoria + `",` + prod2.id + `)`)


              let nodeP2 = document.createElement("DIV");
              nodeP2.classList.add("work-grid");
              nodeP2.style.backgroundImage = "url(' " + prod2.imgPerfil + " ' )"

              let nodeP3 = document.createElement("DIV");
              nodeP3.classList.add("inner");

              let nodeP4 = document.createElement("DIV");
              nodeP4.classList.add("desc");
              nodeP4.classList.add("titProd");

              let nodeP5 = document.createElement("H3");
              nodeP5 = document.createTextNode(prod2.nombre)


              nodeProduc.appendChild(nodeP);
              nodeP.appendChild(nodeP1)
              nodeP1.appendChild(nodeP2)
              nodeP2.appendChild(nodeP3)
              nodeP3.appendChild(nodeP4)
              nodeP4.appendChild(nodeP5)

          }); //Cierra el forEach2 la lista de productos


      }) //Cierra el forEach1 la lista de productos

  } //Cierra funcion listaProductos

  listaProductos(data222.productos); //mostrar todos los productos al iniciar la página



  /* =============== FILTRO PRODUCTOS =============== */
  var productos = data222.productos

  /* HACER QUE ME DETECTE LOS CAMBIOS EN LOS FILTROS */
  document.getElementById('productosGeneral').addEventListener('change', function () {

      let aux = [];

      /* FILTRA LOS ELEMENTOS SELECCIONADOS */
      var checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value)

      productos.forEach(element => {

          /*         console.log(element.categoria); */

          if (checkeds.includes(element.categoria)) {

              aux.push(element);
          }
          /*       console.log(aux); */

      });

      document.getElementById("cuadroProductos").innerHTML = "";
      listaProductos(aux)
      aux = []


  }) //cierra el addEventListener de los checkbox


  /* =============== LLENA PAGINA DE DETALLE DE PRODUCTOS =============== */

  function llenaProductDetails(cat, id) {

      console.log("esta entradno");
      showHide("productosDetalles")

      console.log(cat);

      var seccion = data222.productos.filter(general => general.categoria == cat)
      var seccOk = seccion[0].produc

      var producto = seccOk.filter(prod => prod.id == id)
      console.log(producto);


      var nodeProduc = document.getElementById("img-carousel");
      nodeProduc.innerHTML = ""

      let nodeImgProducto = document.createElement("DIV");
      nodeImgProducto.classList.add("carousel-item");
      nodeImgProducto.classList.add("img-responsiveA")
      nodeImgProducto.classList.add("active");

      let nodeImagenPrincipal = document.createElement("IMG");
      nodeImagenPrincipal.classList.add("d-block");
      nodeImagenPrincipal.classList.add("w-100");
      nodeImagenPrincipal.classList.add("img-responsiveA")
      nodeImagenPrincipal.setAttribute("src", producto[0].imgPerfil)


      producto[0].imgVarias.forEach(img => {
          let nodeImgSec = document.createElement("DIV");
          nodeImgSec.classList.add("carousel-item");
          let nodeImagenCarr = document.createElement("IMG");
          nodeImagenCarr.classList.add("d-block");
          nodeImagenCarr.classList.add("img-responsiveA")

          nodeImagenCarr.setAttribute("src", img)

          nodeProduc.appendChild(nodeImgSec);
          nodeImgSec.appendChild(nodeImagenCarr)
      })
      console.log(producto[0].imgVarias);



      // creando los a del carrusel
      var aPrev = document.createElement("A");
      aPrev.classList.add("carousel-control-prev")
      aPrev.setAttribute("href", "#carouselImgPrdocutos")
      aPrev.setAttribute("role", "button")
      aPrev.setAttribute("data-slide", "prev")
      var span1Prev = document.createElement("SPAN")
      span1Prev.classList.add("carousel-control-prev-icon")
      span1Prev.setAttribute("aria-hidden", "true")
      var span2Prev = document.createElement("SPAN")
      span2Prev.classList.add("sr-only")
      var textSpan2prev = document.createTextNode("Previous")
      span2Prev.appendChild(textSpan2prev)
      span2Prev.setAttribute("aria-hidden", "true")

      aPrev.appendChild(span1Prev)
      aPrev.appendChild(span2Prev)

      var aNext = document.createElement("A");
      aNext.classList.add("carousel-control-next")
      aNext.setAttribute("href", "#carouselImgPrdocutos")
      aNext.setAttribute("role", "button")
      aNext.setAttribute("data-slide", "next")
      var span1Next = document.createElement("SPAN")
      span1Next.classList.add("carousel-control-next-icon")
      span1Next.setAttribute("aria-hidden", "true")
      var span2Next = document.createElement("SPAN")
      span2Next.classList.add("sr-only")
      var textSpan2Next = document.createTextNode("Next")
      span2Next.appendChild(textSpan2Next)
      span2Next.setAttribute("aria-hidden", "true")

      aNext.appendChild(span1Next)
      aNext.appendChild(span2Next)



      nodeProduc.appendChild(nodeImgProducto)
      nodeProduc.appendChild(aPrev)
      nodeProduc.appendChild(aNext)


      nodeImgProducto.appendChild(nodeImagenPrincipal)


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
          itemUl.classList.add("versiones")
          producto[0].versiones.forEach(vers => {

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
      producto[0].contenidoNeto.forEach(cont => {
          let itemC = document.createElement("LI")
          let txtItemC = document.createTextNode(cont)
          itemC.appendChild(txtItemC);
          contenido.appendChild(itemC);
      }) //fin forEach contenido Neto
  }

  /* =============== GALERIA =============== */


  function galeria(array) {
      var nodeGaleria = document.getElementById("imgGaleria");

      array.forEach(gal => {

          let nodeG = document.createElement("DIV");
          nodeG.classList.add("col-sm-6");
          nodeG.classList.add("col-md-4");
          nodeG.classList.add("item");

          let nodeA = document.createElement("A");
          nodeA.classList.add("lightbox");
          nodeA.setAttribute("data-fancybox", "gallery")
          nodeA.setAttribute("href", gal.fotos)

          let nodeI = document.createElement("IMG");
          nodeI.classList.add("img-fluid");
          nodeI.setAttribute("src", gal.fotos)

          nodeGaleria.appendChild(nodeG);
          nodeG.appendChild(nodeA);
          nodeA.appendChild(nodeI);
      })
  }
  galeria(data222.imagenes);

  fotos = data222.imagenes

  document.getElementById('filtrosGaleria').addEventListener('change', function () {
      document.getElementById("imgGaleria").innerHTML = "";
      let aux = [];

      /* FILTRA LOS ELEMENTOS SELECCIONADOS */
      var checkeds = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(element => element.value)

      if (checkeds.includes("todas")) {
          galeria(data222.imagenes);
      } else {
          fotos.forEach(element => {

              console.log(element.categoria);

              if (checkeds.includes(element.categoria)) {

                  aux.push(element);
              }
              console.log(aux);

          });


          galeria(aux)
      }


  }) //cierra el addEventListener de los checkbox


  /* =============== CONTACTO =============== */

  $("#mensajeEnviado").hide();

  const form = document.getElementById('contactForm'); // Obtenemos la referencia al formulario

  if (form) { // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
      form.addEventListener('submit', contactForm); // Al momento de enviar el formulario, ejecuta la función "contactform"
  }

  function contactForm(event) {
      event.preventDefault(); // Prevenimos el comportamiento por defecto de un formulario (Enviar por URL los parametros)
      const nombre = document.getElementById('nombre'); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
      const email = document.getElementById('email');
      const tlf = document.getElementById('telfs');
      const mensaje = document.getElementById("mensaje");
      const data = {
          'name': nombre.value,
          'email': email.value,
          'tlf': tlf.value,
          'message': mensaje.value
      }; // Creamos un objecto con todos los elementos de nuestro formulario.
      saveContactForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
      form.reset(); // borramos todos los campos. 
  }

  function saveContactForm(data) {
      firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
          .then(function () {
              $("#mensajeEnviado").show();
              alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
          })
          .catch(function () {
              alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
          });
  };

  //   TRAE TESTIMONIALES


  var testiNotas = data222.testimoniales
  var testi = document.getElementById("testimo")

  testiNotas.forEach(nota => {
      console.log(nota.autor)

      var divPpal = document.createElement("DIV")
      divPpal.classList.add("carousel-item")
      divPpal.classList.add("mb-5")
      divPpal.classList.add("notasTesti")
      testi.appendChild(divPpal)
      if (nota.id == 1) {
          divPpal.classList.add("active")
      }

      var blockquote = document.createElement("blockquote")
      var pBlock = document.createElement("P")
      var textPBlock = document.createTextNode('"' + nota.testimonio + '"')
      pBlock.appendChild(textPBlock)
      blockquote.appendChild(pBlock)
      divPpal.appendChild(blockquote)

      var divAutor = document.createElement("DIV")
      divAutor.classList.add("d-flex")
      divAutor.classList.add("notasTestiAutor")
      divAutor.classList.add("align-items-center")
      divAutor.classList.add("justify-content-center")
      var pAutor = document.createElement("P")
      var pAutorText = document.createTextNode(nota.autor)
      pAutor.appendChild(pAutorText)
      divAutor.appendChild(pAutor)
      divPpal.appendChild(divAutor)


  })