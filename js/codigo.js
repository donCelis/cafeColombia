$(document).ready(function (){
	
	let anchoVentana = $(window).width();
	let menu = $('.menu a');
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
		let atributo = $(this).attr('href');
		//let anchoVentana = $(window).width();

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
		let btnMenu = $('.btnMenu');
		btnMenu.on('click', event=>{
			$('.menu').slideToggle();
			event.preventDefault();
		});
	} else {
		let btnMenu = $('.btnMenu');
		btnMenu.on('click', event=>{
			$('.menu').slideToggle();
			event.preventDefault();
		});
	}

	//Trasladar los objetos del header
	if (anchoVentana > 832) {
		$('.acerca-de article').css({opacity:0});
	}

	$(window).scroll(()=>{
		let anchoVentana = $(window).width();
		
		if (anchoVentana > 832) {
			let alto = $(window).scrollTop();
			$('header .textos').css({
				'transform': 'translate(0px,' + alto / 4 + '%)'
			});
			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + alto / 4 + '%)'
			}).animate({opacity: 1});
		}
	});

	//Desabilitar los movimientos para mobiles
	$(window).resize(()=>{
		let anchoVentana = $(window).width();
		
		if (anchoVentana < 832) {
			$('header .textos').css({
				transform: 'translate(0px, 0px)',
				opacity: 1
			});

			$('.acerca-de article').css({
				transform: 'translate(0px, 0px)',
				opacity: 1
			});

			menu.eq(0).on('click', ()=>{
				$('body, html').stop().animate({
					scrollTop: $('#acerca-de-mobile').offset().top
				}, 1500, 'easeInOutQuart');
			});

		}else if (anchoVentana > 832){
			menu.eq(0).on('click', ()=>{
				$('body, html').stop().animate({
					scrollTop: $('#acerca-de').offset().top -150
				}, 1500, 'easeInOutQuart');
			});
		}
	});

	//Evento de lightbox
	//let img = $('.galeria .foto');
	let img = $('.galeria .foto img');
	let cerrar = $('.popPup .cerrar');

	img.on('click', function (){
		//let atributo = $(this).attr('imgG');
		let atributo = $(this).attr('src');
		
		//$('.popPup img').attr('src', atributo);
		$('.popPup img').attr('src', 'full-'+atributo);
		$('.popPup').fadeIn('fast');
		//$('body').css({overflow: 'hidden'});
	});

	//Evento que cierra el lightbox
	cerrar.on('click', ()=>{
		$('.popPup').fadeOut('fast');
		//$('body').css({overflow: 'auto'});
	});
	
	//Mapa
	$('.mapa').on({
		click: ()=>{
			$('.mapa iframe').css({pointerEvents: 'auto'});
		},
		mouseleave: ()=>{
			$('.mapa iframe').css({pointerEvents: 'none'});
		}
	});

	//hace que el boton aparezca (backToTop)
	$(window).on('scroll', ()=>{
		let alturaVentana = $(window).scrollTop();
		let alturaCaja = $('.laCarta').offset().top;
		
		if (alturaVentana > alturaCaja){
			$('.arriba').fadeIn();
		} else {
			$('.arriba').fadeOut();
		}
	});

	//hace que el boton lleve arriba
	$('.arriba').on('click', ()=>{
		$('body, html').animate({scrollTop: '0px'}, 1500, 'easeInOutQuart');
	});

	
});