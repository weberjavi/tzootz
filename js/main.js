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

  
};