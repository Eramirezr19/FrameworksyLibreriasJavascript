$(document).ready(function(){

// el juego se carga con los dulces y corre la función inicial
  dulcesTablero();

function dulcesTablero(){
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-1").append("<img id='dulce' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-2").append("<img id='dulce' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-3").append("<img id='dulce' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-4").append("<img id='dulce' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-5").append("<img id='dulce' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-6").append("<img id='dulce' src=image/"+ numero +".png>");
  };
  for (var i = 0; i < 7; i++) {
  var numero = Math.floor(Math.random()*4+1);
  $(".col-7").append("<img id='dulce' src=image/"+ numero +".png>");
  };

};

$(".btn-reinicio").on("click", function(){
  $("img#dulce").remove();
});
$(".btn-reinicio").click(dulcesTablero);









});
