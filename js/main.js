//Funcion inicial
$(document).ready(function(){
	var puntitos = $('.slider li').length; // Cantidad de diapos
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= puntitos; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultamos las diapos
	$('.slider li:first').show(); // Mostrando primera diapo
	$('.pagination li:first').css({'color': '#2E2EFE'}); // Damos estilos al primer circ. de la paginacion

	// Aquí las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES 

	function pagination(){
		var paginationPos = $(this).index() + 1; // Declarando posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultando todas las diapos
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Sólo muestra diapo seleccionada

		// Estilos de la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#2E2EFE'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= puntitos){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#2E2EFE'});

		$('.slider li').hide(); // Ocultando todas las diapos
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostrando diapo seleccionada

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = pun;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#2E2EFE'});

		$('.slider li').hide(); // Ocultando todas las diapos
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostrando diapo seleccionada
	}

});