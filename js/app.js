$(document).ready(function(){

var arreglo=[];
var puntos=0;
var selecciona =0;
var indicadorInicio=0;
var espera = 0;
var busquedaVertical=0;
var busquedaHorizontal=0;
var mov=0;






intervaloTiempo =setInterval(function(){
cargarDulces()
movimientosJuego()

},500);



intervaloTiempo2 = setInterval(function(){
  buscaHorizontal()
  buscaVertical()
  eliminaryPuntuacion()

},3000);


//reinicio de juego

$(".btn-reinicio").on ("click",function(){
  var twoMinutes = 60 * 2,
display = document.querySelector('#times');
  startTimer(twoMinutes, display);
  puntos =0;
  puntostemp=0;
  indicadorInicio=1;
  mov=0;
  $("img#dulce-1").remove();
  $("img#dulce-2").remove();
  $("img#dulce-3").remove();
  $("img#dulce-4").remove();
  $("img#dulce-5").remove();
  $("img#dulce-6").remove();
  $("img#dulce-7").remove();
  $("#score-text").html(puntos);
  $("#movimientos-text").html(mov);
  $(".panel-score").animate({width:'25%'},500);
  $(".final").css({"display":"none"});
  $(".time").show();
  $(".panel-tablero").show("slow","linear");
  clearInterval(startTimer);


  $(".btn-reinicio").text("Reiniciar");
});


//formula para actualizar los dulces en el juego---------

function cargarDulces(){

for (var r = 0; r < 7; r++) {
var r = r+1;
var numero=0;
$(".barra").draggable({disabled:true});
if (r<8) {
  for (var s = 1; s < 8; s++) {
    if ($(".col-"+s).children("img:nth-child("+r+")").html()==null) {
      var numero = Math.floor(Math.random()*4+1);
        $(".col-"+s).prepend("<img id='dulce-"+ s +"' class='barra' src=image/"+ numero +".png>").css("justify-content","flex-start");
    }

    }
  }
  if(r==8){
    clearInterval(intervaloTiempo);
selecciona= setInterval(function(){
buscaVertical()

},1000);
  }
}
};

//formula para el timer---------------------------

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            $(".panel-tablero").hide("drop","slow", finDeJuego);
            $(".time").hide();
            indicadorInicio=0;
            $(".btn-reinicio").text("Iniciar");
        }else{


        }
    }, 1000);
};

//funcion para titulo principal-------

function titulo(){
  $(".main-titulo").animate({
    color: "yellow"
  }, 250,titulo2).animate({
    color: "white"
  }, 250,titulo2);
};


function titulo2(){
  $(".main-titulo").animate({
    color: "red"
  }, 250,titulo).animate({
    color: "white"
  }, 250,titulo);
}

titulo();


//función de búsqueda vertical------

  function buscaVertical(){
    var busqVerti=0;
    var arreglo =[];
    i=0;
    j=0;
    var tiempo = 2000;
    arreglo = $("div[class^='col']");
  for (var i = 0; i < 7; i++) {

  if (i<7) {
    for (var j = 0; j < 5; j++) {

if (arreglo[i]!==undefined) {

  if (arreglo[i].children[j].getAttribute("src")==arreglo[i].children[j+1].getAttribute("src") && arreglo[i].children[(j+1)].getAttribute("src")==arreglo[i].children[j+2].getAttribute("src") && arreglo[i].children[j].getAttribute("src")!= null && arreglo[i].children[j+1].getAttribute("src")!= null && arreglo[i].children[j+2].getAttribute("src")!= null ) {
    arreglo[i].children[j].setAttribute("class","barra seleccion");
    arreglo[i].children[j+1].setAttribute("class","barra seleccion");
    arreglo[i].children[j+2].setAttribute("class","barra seleccion");
    busqVerti=1;
  }
}
}
  } if (i==7) {

  clearInterval(intervaloTiempo);
    }
  }
  };

  //función búsqueda horizontal-----

function buscaHorizontal(){
    var busqHoriz=0;
    var arreglo =[];
    k=0;
    l=0;
    var tiempo = 2000;
    arreglo = $("div[class^='col']");
  for (var l = 0; l < 7; l++) {

  if (l<7) {
    for (var k = 0; k < 5; k++) {
      if(arreglo[k]){

    if (arreglo[k].children[l].getAttribute("src") == arreglo[k + 1].children[l].getAttribute("src") && arreglo[k + 1].children[l].getAttribute("src") == arreglo[k + 2].children[l].getAttribute("src") && arreglo[k].children[l].getAttribute("src") != null && arreglo[k + 1].children[l].getAttribute("src") != null && arreglo[k + 2].children[l].getAttribute("src") != null) {
    arreglo[k].children[l].setAttribute("class","barra seleccion");
    arreglo[k + 1].children[l].setAttribute("class","barra seleccion");
    arreglo[k + 2].children[l].setAttribute("class","barra seleccion");
    busqHoriz=1;
    }
    }
    }
  } if (l==7) {

  clearInterval(intervaloTiempo);
    }
  }
  };

// Eliminar+puntuacion
function eliminaryPuntuacion(){
if (indicadorInicio==1) {
  $(".seleccion").hide("pulsate",800,function(){
    var puntostemp=$(".seleccion").length;
    $(".seleccion").remove("img");
    puntos = puntos+puntostemp*10;
    $("#score-text").html(puntos);
  })
}


};

function movimientosJuego(){
  if(document.querySelectorAll("img").length===49){

    $(".barra").draggable({
      disabled:false,
      containment:".panel-tablero",
      revert:true,
      revertDuration:0,
      snap:".barra",
      snapMode:"inner",
      snapTolerance:40,
      start:function(event,ui){
        mov=mov+1;
        $("#movimientos-text").html(mov);}
    });
  }
  $(".barra").droppable({
    drop:function (event,ui){
      var dropped=ui.draggable;
      var droppedOn=this;
      espera=0;
      do{
        espera=dropped.swap($(droppedOn));}
      while(espera==0);
      busquedaHorizontal=buscaHorizontal();
      busquedaVertical=buscaVertical();
      if(busquedaHorizontal==0 && busquedaVertical==0){
        dropped.swap($(droppedOn));}
      if(busquedaHorizontal==1 || busquedaVertical==1){
      clearInterval(selecciona);
      selecciona= setInterval(function(){
      eliminaryPuntuacion()

      },1000);
    }},
  })

};



//cambio de dulces------
jQuery.fn.swap=function(b){
	b=jQuery(b)[0];
	var a=this[0];
	var t=a.parentNode.insertBefore(document.createTextNode(''),a);
	b.parentNode.insertBefore(a,b);
	t.parentNode.insertBefore(b,t);
	t.parentNode.removeChild(t);
	return this;
};

//fin del juego--------
function finDeJuego(){
  $(".panel-score").animate({width:"100%"},2500);
  $(".final").css({"display":"block","text-align":"center"});
}









});
