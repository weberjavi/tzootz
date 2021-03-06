window.onload = function() {

	/*secuencia de animación de entrada de las distintas páginas*/

  //MANIFESTO
	var $m_titulo = $(".titulo_manifesto"),
    	$m_texto = $(".texto_manifesto");
  
    $m_titulo.velocity( 'transition.slideDownIn' );
    $m_texto.velocity( 'transition.slideUpIn' );
    $("#musica").velocity( 'transition.slideUpIn' );

  //RECORD LABEL
  var $label_titulo = $(".tzootz_artistas"),
      $label_texto = $(".texto_artistas");

  $(".grupo").velocity("transition.slideLeftIn", { stagger: 90 });
  $label_texto.velocity( 'transition.slideUpIn' );
  $label_titulo.velocity( 'transition.slideDownIn' , { display: "inline-block" });
  $(".logo_artistas").velocity( 'transition.slideRightIn' );

  //CONTACTO
  $(".titulo_contacto").velocity( 'transition.slideDownIn' , { display: "inline-block" });
  $(".texto_contacto").velocity( 'transition.slideUpIn' );

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

  
$(".nombre_artista_cubo").mouseenter(function() {
    $(this).css("padding-left", "20px");
}).mouseleave(function() {
     $(this).css("padding-left", "40px");
});


 /*secuencia de animación de entrada de la página de FILMOGRAFÍA
  var visitaArtista = $(".visita_artista");
  var artista = $(".artista");

  artista.mouseenter(function() {
    $(".visita_artista",this).velocity( 'transition.slideUpIn' );
    $(".titulo_artista",this).velocity( 'transition.slideDownIn' );
  });
  artista.mouseleave(function() {
    $(".visita_artista",this).velocity( 'transition.slideDownOut' );
    $(".titulo_artista",this).velocity( 'transition.slideUpOut' );
  });*/

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

$(".boton_roty").click(function() {
  $("#cubo").addClass( "abajo_visible" );
  $(".lado_roty").addClass( "opaco" ); 
  $(".lado_crackin").removeClass( "opaco" );
  $(".lado_quartet").removeClass( "opaco" );
  $(".lado_aphotek").removeClass( "opaco" );
});

$(".boton_crackin").click(function() {
  $("#cubo").addClass( "abajo_visible" );
  $(".lado_crackin").addClass( "opaco" ); 
  $(".lado_roty").removeClass( "opaco" );
  $(".lado_quartet").removeClass( "opaco" );
  $(".lado_aphotek").removeClass( "opaco" );
});

$(".boton_quartet").click(function() {
  $("#cubo").addClass( "abajo_visible" );
  $(".lado_quartet").addClass( "opaco" ); 
  $(".lado_crackin").removeClass( "opaco" );
  $(".lado_roty").removeClass( "opaco" );
  $(".lado_aphotek").removeClass( "opaco" );
});

$(".boton_aphotek").click(function() {
  $("#cubo").addClass( "abajo_visible" );
  $(".lado_aphotek").addClass( "opaco" ); 
  $(".lado_crackin").removeClass( "opaco" );
  $(".lado_quartet").removeClass( "opaco" );
  $(".lado_roty").removeClass( "opaco" );
});

$(".boton_frente").click(function() {
  $("#cubo").removeClass( "abajo_visible" );
  $("#cubo").addClass( "frente_visible" );
});






$(".boton_ytplayer").click(function() {
  $("#ytplayer").addClass( "ytplayer_visible" );
});

$(".boton_mapa").click(function() {
  $("#contenedor_mapa").toggleClass( "mapa_visible" );
});



var map = L.map('map', {
        center: [40.428547, -3.692240],
        zoom: 11,
        minZoom: 11,
        maxZoom: 20,
        attributionControl:false
      });
L.tileLayer.provider('Stamen.Toner').addTo(map);










  
};