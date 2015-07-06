window.onload = function() {

	/*secuencia de animación de entrada de la página del MANIFESTO*/
	var $m_titulo = $(".titulo_manifesto"),
    	$m_texto = $(".texto_manifesto");
  
    $m_titulo.velocity( 'transition.slideDownIn' );
    $m_texto.velocity( 'transition.slideUpIn' );
  /*Código que activa o desactiva el sonido de la página de inicio al accionar el elemento*/
  var audio = $("#fidel")[0];
  var btn_audio = $("#musica");
  btn_audio.click( function() {
    if (btn_audio.hasClass("sonando")) {
        audio.pause()
    } else{
      audio.play()
    }
    btn_audio.toggleClass("sonando");   
  });

  






  var visitaArtista = $(".visita_artista");
  var artista = $(".artista");

  artista.velocity( 'transition.slideUpIn' );
  artista.mouseenter(function() {
    $(".visita_artista",this).velocity( 'transition.slideUpIn' );
    $(".titulo_artista",this).velocity( 'transition.slideDownIn' );
  });
  artista.mouseleave(function() {
    $(".visita_artista",this).velocity( 'transition.slideDownOut' );
    $(".titulo_artista",this).velocity( 'transition.slideUpOut' );
  });

/*Código que activa o desactiva el sonido en el grid de artistas*/
  var tema_roty = $("#roty")[0],
      roty = $(".roty");

  roty.mouseenter(function() {
    tema_roty.play()
  });
  roty.mouseleave(function() {
    tema_roty.pause()
  });

  var tema_quartet = $("#quartet")[0],
      quartet = $(".quartet");

  quartet.mouseenter(function() {
    tema_quartet.play()
  });
  quartet.mouseleave(function() {
    tema_quartet.pause()
  });

  var tema_crackin = $("#crackin")[0],
      crackin = $(".crackin");

  crackin.mouseenter(function() {
    tema_crackin.play()
  });
  crackin.mouseleave(function() {
    tema_crackin.pause()
  });





















  
};