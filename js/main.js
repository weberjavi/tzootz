window.onload = function() {
	/*variables donde se guardan los distintos elementos a animar*/
	var $manifesto = $(".manifesto"),
    	$m_titulo = $(".titulo_manifesto"),
    	$m_texto = $(".texto_manifesto");
    /*secuencia de animación de entrada de la página del MANIFESTO*/
	var entrada_manifesto = [
    { elements: $manifesto, properties: { bottom: "0" } ,options: { 
      complete: function () { 
      	$m_titulo.velocity( 'transition.slideDownIn' );
        $m_texto.velocity( 'transition.slideUpIn' );
    }
  		}
    }];
    /*Evento que acciona la animación del MANIFESTO*/
    $(".btn_manifesto").click(function() {
  	  $.Velocity.RunSequence(entrada_manifesto);
    });
    $(".cerrar_manifesto").click(function() {
      $m_titulo.velocity( 'transition.slideDownOut' );
      $m_texto.velocity( 'transition.slideUpOut' );
  	  $manifesto.velocity({ 
	    properties: { bottom: "-100%" },
	    options: { duration: 500 }
	  });
    });
};
