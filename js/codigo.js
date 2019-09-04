$(document).ready(function (){
	
	
	var anchoVentana = $(window).width();
	var menu = $('.menu a');
	//Efecto Cabecera
	if(anchoVentana > 832){
		$('header .textos').css({opacity:0}).animate({
			opacity: 1,
			top: '35%'
		}, 1500, 'easeInOutQuart');
	}

	//Efecto de menú animado
	if (anchoVentana > 832){
		menu.each(function (indice, elemento){
			//console.log('El índice '+indice+' contiene '+$(elemento).text());
			$(this).css({top:'-200px'}).animate({
				top: '0'
			}, 1000 + (indice * 500));
		});
	}

	//Scroll del menú
	menu.on('click', function (event){
		var atributo = $(this).attr('href');
		//var anchoVentana = $(window).width();

		if (atributo == '#acerca-de') {
			if (anchoVentana > 832) {
				$('body, html').stop().animate({
					scrollTop: $(atributo).offset().top -150
				}, 1500, 'easeInOutQuart');
				event.preventDefault();
			} else {
				$('body, html').stop().animate({
					scrollTop: $('#acerca-de-mobile').offset().top
				}, 1500, 'easeInOutQuart');
			}
		}else{
			$('body, html').stop().animate({
				scrollTop: $(atributo).offset().top
			}, 1500, 'easeInOutQuart');
			event.preventDefault();
		}
	});

	//Menú mobile
	if (anchoVentana < 832) {
		var btnMenu = $('.btnMenu');
		btnMenu.on('click', function (event){
			$('.menu').slideToggle();
			event.preventDefault();
		});
	} else {
		var btnMenu = $('.btnMenu');
		btnMenu.on('click', function (event){
			$('.menu').slideToggle();
			event.preventDefault();
		});
	}

	//Trasladar los objetos del header
	if (anchoVentana > 832) {
		$('.acerca-de article').css({opacity:0});
	}

	$(window).scroll(function (){
		var anchoVentana = $(window).width();
		
		if (anchoVentana > 832) {
			var alto = $(window).scrollTop();
			$('header .textos').css({
				'transform': 'translate(0px,' + alto / 4 + '%)'
			});
			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + alto / 4 + '%)'
			}).animate({opacity: 1});
		}
	});

	//Desabilitar los movimientos para mobiles
	$(window).resize(function (){
		var anchoVentana = $(window).width();
		
		if (anchoVentana < 832) {
			$('header .textos').css({
				transform: 'translate(0px, 0px)',
				opacity: 1
			});

			$('.acerca-de article').css({
				transform: 'translate(0px, 0px)',
				opacity: 1
			});

			menu.eq(0).on('click', function (){
				$('body, html').stop().animate({
					scrollTop: $('#acerca-de-mobile').offset().top
				}, 1500, 'easeInOutQuart');
			});

		}else if (anchoVentana > 832){
			menu.eq(0).on('click', function (){
				$('body, html').stop().animate({
					scrollTop: $('#acerca-de').offset().top -150
				}, 1500, 'easeInOutQuart');
			});
		}
	});

	//Evento de lightbox
	//var img = $('.galeria .foto');
	var img = $('.galeria .foto img');
	var cerrar = $('.popPup .cerrar');

	img.on('click', function (){
		//var atributo = $(this).attr('imgG');
		var atributo = $(this).attr('src');
		
		//$('.popPup img').attr('src', atributo);
		$('.popPup img').attr('src', 'full-'+atributo);
		$('.popPup').fadeIn('fast');
		//$('body').css({overflow: 'hidden'});
	});

	//Evento que cierra el lightbox
	cerrar.on('click', function (){
		$('.popPup').fadeOut('fast');
		//$('body').css({overflow: 'auto'});
	});
	
	//Mapa
	$('.mapa').on({
		click: function (){
			$('.mapa iframe').css({pointerEvents: 'auto'});
		},
		mouseleave: function (){
			$('.mapa iframe').css({pointerEvents: 'none'});
		}
	});

	//hace que el boton aparezca (backToTop)
	$(window).on('scroll', function (){
		var alturaVentana = $(window).scrollTop();
		var alturaCaja = $('.laCarta').offset().top;
		
		if (alturaVentana > alturaCaja){
			$('.arriba').fadeIn();
		} else {
			$('.arriba').fadeOut();
		}
	});

	//hace que el boton lleve arriba
	$('.arriba').on('click', function (){
		$('body, html').animate({scrollTop: '0px'}, 1500, 'easeInOutQuart');
	});

	
});