
!(function($) {
	"use strict";
  
	// Smooth scroll for the navigation menu and links with .scrollto classes
	$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		e.preventDefault();
		var target = $(this.hash);
		if (target.length) {
  
		  var scrollto = target.offset().top + 2;
  
		  if ($('#header').length) {
			scrollto -= $('#header').outerHeight()
  
		  }
  
		  if ($(this).attr("href") == '#header') {
			scrollto = 0;
		  }
  
		  $('html, body').animate({
			scrollTop: scrollto
		  }, 1500, 'easeInOutExpo');
  
		  if ($(this).parents('.nav-menu, .mobile-nav').length) {
			$('.nav-menu .active, .mobile-nav .active').removeClass('active');
			$(this).closest('li').addClass('active');
		  }
  
		  if ($('body').hasClass('mobile-nav-active')) {
			$('body').removeClass('mobile-nav-active');
			$('.mobile-nav-toggle i').toggleClass('navbar-toggler-icon icofont-close');
			$('.mobile-nav-overly').fadeOut();
		  }
		  return false;
		}
	  }
	});
  
	// Mobile Navigation
	if ($('.nav-menu').length) {
	  var $mobile_nav = $('.nav-menu').clone().prop({
		class: 'mobile-nav d-lg-none'
	  });
	  $('body').append($mobile_nav);
	  $('.mobile-nav .nav-logo').remove();
/* 	  $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'); */
$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="navbar-toggler-icon"></i></button>');
/* 
$('body').prepend('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>'); */
{/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button> */}

	  $('body').append('<div class="mobile-nav-overly"></div>');
  
	  $(document).on('click', '.mobile-nav-toggle', function(e) {
		$('body').toggleClass('mobile-nav-active');
		$('.mobile-nav-toggle i').toggleClass('navbar-toggler-icon icofont-close');
		$('.mobile-nav-overly').toggle();
	  });
  
	  $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
		e.preventDefault();
		$(this).next().slideToggle(300);
		$(this).parent().toggleClass('active');
	  });
  
	  $(document).click(function(e) {
		var container = $(".mobile-nav, .mobile-nav-toggle");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
		  if ($('body').hasClass('mobile-nav-active')) {
			$('body').removeClass('mobile-nav-active');
			$('.mobile-nav-toggle i').toggleClass('navbar-toggler-icon icofont-close');
			$('.mobile-nav-overly').fadeOut();
		  }
		}
	  });
	} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
	  $(".mobile-nav, .mobile-nav-toggle").hide();
	}
  
	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, #mobile-nav');
  
	$(window).on('scroll', function() {
	  var cur_pos = $(this).scrollTop() + 110;
  
	  nav_sections.each(function() {
		var top = $(this).offset().top,
		  bottom = top + $(this).outerHeight();
  
		if (cur_pos >= top && cur_pos <= bottom) {
		  if (cur_pos <= bottom) {
			main_nav.find('li').removeClass('active');
		  }
		  main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
		}
	  });
	});
  
	// Stick the header at top on scroll
	$("#header").sticky({
	  topSpacing: 0,
	  zIndex: '50'
	});
  
  })(jQuery);



  productosNav= data222.productos;

var nodeProductos = document.getElementById("productosNavBar");

console.log(nodeProductos);

let nodeP0 = document.createElement("UL");

productosNav.forEach(prodNav => {

let nodeP = document.createElement("LI");
nodeP.classList.add("drop-down");
nodeP1 = document.createElement("A");
nodeP1a= document.createTextNode(prodNav.nombreSecc)

nodeP2 = document.createElement("UL");

prodNav.produc.forEach(det =>{

nodeD1 = document.createElement("LI");
nodeD2 = document.createElement("A");

nodeD2.setAttribute("id", det.id);
nodeD2.setAttribute("title", det.categoria);
nodeD2.setAttribute("onclick",  `llenaProductDetails("`+  det.categoria + `",` + det.id + `)`)

nodeD2a= document.createTextNode(det.nombre)

nodeP2.appendChild(nodeD1)
nodeD1.appendChild(nodeD2)
nodeD2.appendChild(nodeD2a)
})

nodeProductos.appendChild(nodeP0)
nodeP0.appendChild(nodeP)
nodeP.appendChild(nodeP1)
nodeP1.appendChild(nodeP1a)
nodeP.appendChild(nodeP2)


});